import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { MODEL_SPECS } from '../src/model-catalog.js';
import { buildModelSpecimen } from '../src/models-scene.js';

for (const { id } of MODEL_SPECS) {
  test(id + ': finite geometry, animation and bounded rendering cost', () => {
    const model = buildModelSpecimen(id);
    let triangles = 0, meshes = 0;
    model.traverse(child => {
      if (!child.isMesh) return;
      meshes++;
      const geometry = child.geometry;
      for (const attr of ['position', 'normal']) {
        assert.ok(geometry.attributes[attr], child.name + ': missing ' + attr);
        assert.ok(geometry.attributes[attr].array.every(Number.isFinite), child.name + ': invalid ' + attr);
      }
      if (child.isInstancedMesh) assert.ok(child.instanceMatrix.array.every(Number.isFinite));
      triangles += (geometry.index?.count ?? geometry.attributes.position.count) / 3 * (child.count ?? 1);
    });
    assert.ok(meshes < 650, id + ': draw call budget exceeded (' + meshes + ')');
    assert.ok(triangles < 900000, id + ': triangle budget exceeded (' + triangles + ')');
    for (const time of [0, 0.5, 7, 120]) {
      model.userData.update?.(time);
      model.updateMatrixWorld(true);
      model.traverse(child => assert.ok(child.matrixWorld.elements.every(Number.isFinite), child.name));
      const bounds = new THREE.Box3().setFromObject(model);
      assert.ok(bounds.min.toArray().concat(bounds.max.toArray()).every(Number.isFinite));
      assert.ok(bounds.getSize(new THREE.Vector3()).length() < 20, id + ': unexpected bounds');
    }
  });
}

test('membrane acyl chains remain between leaflets in every membrane model', () => {
  for (const id of ['membrane-mosaic', 'transport', 'frap', 'fret']) {
    const model = buildModelSpecimen(id);
    const bilayer = model.getObjectByName('phospholipid-bilayer');
    const half = bilayer.userData.leafletHalfThickness;
    const matrix = new THREE.Matrix4(), point = new THREE.Vector3();
    for (const name of ['saturated-tails', 'kinked-tails']) {
      const mesh = bilayer.getObjectByName(name), positions = mesh.geometry.attributes.position;
      for (let i = 0; i < mesh.count; i++) {
        mesh.getMatrixAt(i, matrix);
        for (let v = 0; v < positions.count; v++) {
          point.fromBufferAttribute(positions, v).applyMatrix4(matrix);
          assert.ok(Math.abs(point.y) < half, id + ': tail protrudes outside head plane');
        }
      }
    }
  }
});

test('nuclear scaffold is stationary while cargo moves; ATP synthase head does not rotate', () => {
  for (const [id, name] of [['nucleus', 'nuclear-pore-scaffold'], ['mito-chloro', 'atp-synthase-fixed-head']]) {
    const model = buildModelSpecimen(id), scaffold = model.getObjectByName(name);
    const rotation = scaffold.quaternion.toArray();
    model.userData.update(10);
    assert.deepEqual(scaffold.quaternion.toArray(), rotation);
  }
});

test('centrifuge tube bottom stays farther from rotor axis than tube mouth', () => {
  const model = buildModelSpecimen('centrifugation');
  for (const time of [0, 1, 10]) {
    model.userData.update(time);
    model.updateMatrixWorld(true);
    model.traverse(child => {
      if (child.name !== 'centrifuge-bucket') return;
      const bottom = child.localToWorld(new THREE.Vector3(0, -0.48, 0));
      const mouth = child.localToWorld(new THREE.Vector3(0, 1.13, 0));
      assert.ok(Math.hypot(bottom.x, bottom.z) > Math.hypot(mouth.x, mouth.z));
    });
  }
});

test('whole-cell comparison and flagellum fit the default desktop and mobile views', () => {
  const model = buildModelSpecimen('prokaryote-eukaryote');
  model.rotation.y = 0.15;
  model.updateMatrixWorld(true);
  for (const aspect of [786 / 936, 390 / 370]) {
    const camera = new THREE.PerspectiveCamera(38, aspect, 0.1, 80);
    const factor = aspect < 1 ? Math.min(1.8, 1 / Math.max(aspect, 0.55)) : 1;
    camera.position.set(0, 2.4, model.userData.distance * factor);
    camera.lookAt(0, 0, 0);
    camera.updateMatrixWorld(true);
    // Test actual surface points: a combined box invents a foreground corner
    // at the flagellum's X and the other cell's Z, where no geometry exists.
    model.traverse(child => {
      if (!child.isMesh) return;
      const positions = child.geometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const screen = new THREE.Vector3().fromBufferAttribute(positions, i).applyMatrix4(child.matrixWorld).project(camera);
        assert.ok(Math.abs(screen.x) < 0.98 && Math.abs(screen.y) < 0.98,
          'default framing crops specimen at ' + screen.toArray());
      }
    });
  }
});
