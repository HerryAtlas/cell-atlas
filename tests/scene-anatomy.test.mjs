import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { sphericalBilayer, decorateMembraneProtein, cytoskeletonCurve,
  cytoskeletonDetails, mitochondrialInterior, nuclearBasket, chromatinBeads,
  roughERSheets, divisionAnatomy } from '../src/scene-anatomy.js';

test('curved membrane has two aqueous head layers and inward twin tails', () => {
  const group = sphericalBilayer([new THREE.Vector3(0, 1, 0)], 8.2);
  const matrix = new THREE.Matrix4(), point = new THREE.Vector3();
  const heads = group.getObjectByName('polar-heads');
  for (let i = 0; i < 2; i++) {
    heads.getMatrixAt(i, matrix);
    const headRadius = point.setFromMatrixPosition(matrix).length();
    assert.ok(Math.abs(headRadius - [8, 8.4][i]) < 1e-5);
    for (const name of ['straight-acyl-chains', 'kinked-acyl-chains']) {
      group.getObjectByName(name).getMatrixAt(i, matrix);
      const tailRadius = point.set(0, 0.185, 0).applyMatrix4(matrix).length();
      assert.ok(Math.abs(tailRadius - 8.2) < Math.abs(headRadius - 8.2));
    }
  }
});

test('microtubule tracks stay outside the nuclear envelope and inside cell', () => {
  for (let i = 0; i < 48; i++) for (const point of cytoskeletonCurve(i).getPoints(200)) {
    assert.ok(point.length() > 2.85, `nuclear intersection on track ${i}: ${point.length()}`);
    assert.ok(point.length() < 8.0, `outside cell on track ${i}`);
  }
});

test('opening anatomy has finite geometry, fadeable materials and bounded cost', () => {
  const protein = new THREE.Group();
  decorateMembraneProtein(protein, 0);
  const groups = [protein, cytoskeletonDetails(Array.from({length:48}, (_,i)=>cytoskeletonCurve(i))),
    mitochondrialInterior(), nuclearBasket(), chromatinBeads([0,1,1,0,1.1,1]), roughERSheets(), divisionAnatomy()];
  let triangles = 0;
  for (const group of groups) group.traverse(o => {
    if (!o.geometry) return;
    for (const attribute of Object.values(o.geometry.attributes)) {
      for (const n of attribute.array) assert.ok(Number.isFinite(n), o.name);
    }
    if (o.instanceMatrix) for (const n of o.instanceMatrix.array) assert.ok(Number.isFinite(n));
    assert.equal(o.material.transparent, true, `cannot fade ${o.name}`);
    triangles += (o.geometry.index?.count ?? o.geometry.attributes.position.count) / 3 * (o.count ?? 1);
  });
  assert.ok(triangles < 1_500_000, `${triangles} triangles`);
});

test('cleavage furrow contracts with the ring and resets without stale geometry', () => {
  const division = divisionAnatomy(), ring = division.getObjectByName('actomyosin-ring');
  const shell = division.getObjectByName('cleavage-furrow');
  const initial = shell.geometry.attributes.position.array.slice();
  division.userData.update(1);
  assert.ok(ring.scale.x < 0.13);
  const p = shell.geometry.attributes.position;
  for (let i=0;i<p.count;i++) if (Math.abs(p.getX(i)) < 0.01) assert.ok(Math.hypot(p.getY(i),p.getZ(i)) < 0.4);
  division.userData.update(0);
  assert.equal(ring.visible, false);
  assert.deepEqual(p.array, initial);
});
