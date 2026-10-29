// Mesoscopic teaching anatomy for the seven opening movements. Dimensions,
// colours and molecular counts are deliberately exaggerated for legibility.
import * as THREE from 'three';
import { beadInstances, cisternaGeometry } from './model-geometry.js';

const TAU = Math.PI * 2;
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const mat = (color, opacity = 0.85) => new THREE.MeshStandardMaterial({
  color, roughness: 0.62, metalness: 0.02, transparent: true, opacity,
  emissive: color, emissiveIntensity: 0.12, depthWrite: false,
});
function beads(parent, points, radius, color, name, scale) {
  const mesh = beadInstances(parent, points, radius, color, scale, name);
  mesh.geometry.dispose();
  mesh.geometry = new THREE.SphereGeometry(radius, 8, 6);
  mesh.material.transparent = true;
  mesh.material.opacity = 0.86;
  mesh.material.depthWrite = false;
  mesh.material.emissive.set(color);
  mesh.material.emissiveIntensity = 0.1;
  return mesh;
}
function tube(parent, points, radius, material, name = '') {
  const curve = new THREE.CatmullRomCurve3(points);
  const mesh = new THREE.Mesh(new THREE.TubeGeometry(curve, Math.max(12, points.length * 5), radius, 6, false), material);
  mesh.name = name;
  parent.add(mesh);
  return mesh;
}

export function sphericalBilayer(directions, radius, proteinDirs = []) {
  const group = new THREE.Group();
  group.name = 'spherical-bilayer';
  const sites = directions.filter(d => !proteinDirs.some(p => d.dot(p) > 0.998));
  const heads = [], transforms = [];
  const dummy = new THREE.Object3D();
  for (const d of sites) for (const sign of [-1, 1]) {
    const r = radius + sign * 0.2;
    heads.push(d.clone().multiplyScalar(r).toArray());
    dummy.position.copy(d).multiplyScalar(r);
    // Local +Y points from either water-facing head towards the hydrophobic core.
    dummy.quaternion.setFromUnitVectors(V(0, 1, 0), d.clone().multiplyScalar(-sign));
    dummy.updateMatrix();
    transforms.push(dummy.matrix.clone());
  }
  beads(group, heads, 0.064, 0x79cfc0, 'polar-heads');
  for (const sign of [-1, 1]) {
    const curve = new THREE.CatmullRomCurve3([
      V(sign * 0.026, 0.025, 0), V(sign * 0.026, 0.09, 0),
      V(sign * 0.026 + (sign > 0 ? 0.027 : 0), 0.15, 0.012), V(sign * 0.026, 0.185, 0),
    ]);
    const mesh = new THREE.InstancedMesh(new THREE.TubeGeometry(curve, 6, 0.012, 4), mat(0x3e8f88, 0.74), transforms.length);
    transforms.forEach((matrix, i) => mesh.setMatrixAt(i, matrix));
    mesh.name = sign > 0 ? 'kinked-acyl-chains' : 'straight-acyl-chains';
    group.add(mesh);
  }
  group.userData.leafletRadii = [radius - 0.2, radius + 0.2];
  return group;
}

export function decorateMembraneProtein(protein, index) {
  const material = mat(index % 2 ? 0xddb57a : 0x70ccbd);
  // A six-subunit channel with a clear lumen; receptors use a connected stalk.
  const points = [];
  if (index % 3 === 0) {
    for (let i = 0; i < 6; i++) {
      const a = i * TAU / 6;
      const helix = new THREE.Mesh(new THREE.CapsuleGeometry(0.065, 0.52, 4, 8), material);
      helix.position.set(Math.cos(a) * 0.17, 0, Math.sin(a) * 0.17);
      helix.rotation.z = Math.cos(a) * 0.13;
      protein.add(helix);
    }
  } else {
    const stem = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.68, 4, 10), material);
    stem.position.y = 0.14;
    protein.add(stem);
    for (let i = 0; i < 3; i++) points.push([Math.cos(i * 2.1) * 0.11, 0.5 + i * 0.07, Math.sin(i * 2.1) * 0.11]);
    beads(protein, points, 0.14, 0xb6d6b2, 'receptor-domains', [1, 0.8, 1]);
  }
  const sugars = [], glycanMat = mat(0xd4b785, 0.75);
  for (const side of [-1, 1]) {
    const chain = [V(0.1 * side, 0.3, 0), V(0.15 * side, 0.58, 0.04), V(0.26 * side, 0.83, 0.07), V(0.33 * side, 0.99, -0.03)];
    tube(protein, chain, 0.012, glycanMat, 'attached-glycan');
    sugars.push(...chain.slice(1).map(p => p.toArray()));
  }
  beads(protein, sugars, 0.035, 0xf1cf92, 'sugars');
}

// Centrioles: two perpendicular cylinders, each with nine peripheral triplets.
export function centrosome() {
  const group = new THREE.Group();
  group.name = 'centriole-pair';
  const material = mat(0xc6b485);
  const geometry = new THREE.CylinderGeometry(0.012, 0.012, 0.38, 5);
  for (let axis = 0; axis < 2; axis++) {
    const centriole = new THREE.Group();
    centriole.rotation.z = axis * Math.PI / 2;
    centriole.position.set(axis * 0.16, 0, axis * 0.15);
    for (let i = 0; i < 9; i++) for (let j = 0; j < 3; j++) {
      const a = i * TAU / 9 + j * 0.16;
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(Math.cos(a) * (0.09 + j * 0.009), 0, Math.sin(a) * (0.09 + j * 0.009));
      centriole.add(mesh);
    }
    group.add(centriole);
  }
  return group;
}

// Route microtubules outside the nucleus, from a perinuclear organising centre.
export function cytoskeletonCurve(index, count = 48) {
  const a = index * TAU / count;
  const start = V(-3.15, 0.1, 0);
  const end = V(Math.cos(a) * 6.8, Math.sin(a) * 5.7, Math.sin(a * 3.1) * 2.4);
  const points = [start];
  const routeSide = Math.sin(a) >= 0 ? 1 : -1;
  points.push(V(-3.35, routeSide * 2.4, end.z * 0.3));
  if (end.x > -1) points.push(V(0, routeSide * 3.65, end.z * 0.8));
  points.push(end);
  return new THREE.CatmullRomCurve3(points, false, 'centripetal');
}

export function cytoskeletonDetails(curves) {
  const group = new THREE.Group();
  group.name = 'cytoskeleton-anatomy';
  const center = centrosome();
  center.position.set(-3.15, 0.1, 0);
  group.add(center);
  const subunits = [];
  for (const index of [3, 15, 27, 39]) {
    const curve = curves[index % curves.length];
    const frames = curve.computeFrenetFrames(60, false);
    for (let k = 0; k <= 60; k++) for (let j = 0; j < 13; j++) {
      const a = j * TAU / 13;
      const p = curve.getPointAt(k / 60).addScaledVector(frames.normals[k], Math.cos(a) * 0.075)
        .addScaledVector(frames.binormals[k], Math.sin(a) * 0.075);
      subunits.push(p.toArray());
    }
  }
  beads(group, subunits, 0.026, 0x79c7b1, 'thirteen-protofilament-tubulin');
  // Two beaded strands following short arcs beneath the plasma membrane.
  const actin = [];
  for (let f = 0; f < 18; f++) {
    const a = f * TAU / 18;
    for (let k = 0; k < 64; k++) for (const strand of [-1, 1]) {
      const t = k / 63, theta = a + t * 0.44;
      const r = 7.55 + Math.cos(t * TAU * 5) * 0.035 * strand;
      actin.push([Math.cos(theta) * r, (f % 3 - 1) * 1.5 + Math.sin(t * TAU * 5) * 0.035 * strand, Math.sin(theta) * r]);
    }
  }
  beads(group, actin, 0.035, 0x79bb9c, 'paired-cortical-actin');
  return group;
}

export function mitochondrialInterior() {
  const group = new THREE.Group();
  group.name = 'mitochondrial-inner-membrane';
  const inner = new THREE.Mesh(new THREE.CapsuleGeometry(0.365, 1.46, 8, 24), mat(0xa67a49, 0.12));
  group.add(inner);
  const material = mat(0xcb9a5d, 0.82);
  for (let i = 0; i < 8; i++) {
    // Alternating folds meet the inner boundary at one edge, leaving a matrix gap.
    const fold = new THREE.Mesh(cisternaGeometry(0.32, 0.30, 0.022, 0.055, i), material);
    fold.name = 'crista';
    fold.position.set((i % 2 ? 1 : -1) * 0.035, -0.68 + i * 0.19, 0);
    fold.rotation.z = (i % 2 ? 1 : -1) * 0.14;
    group.add(fold);
  }
  return group;
}

export function nuclearBasket() {
  const group = new THREE.Group();
  group.name = 'fixed-nuclear-basket';
  const material = mat(0x88c6cd, 0.8);
  for (let i = 0; i < 8; i++) {
    const a = i * TAU / 8, x = Math.cos(a), y = Math.sin(a);
    tube(group, [V(x * 0.39, y * 0.39, -0.07), V(x * 0.34, y * 0.34, -0.32), V(x * 0.18, y * 0.18, -0.56)], 0.014, material);
    tube(group, [V(x * 0.38, y * 0.38, 0.06), V(x * 0.47, y * 0.47, 0.26), V(x * 0.45, y * 0.45, 0.42)], 0.013, material);
  }
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.018, 6, 32), material);
  ring.position.z = -0.56;
  group.add(ring);
  return group;
}

export function chromatinBeads(flatPoints) {
  const group = new THREE.Group();
  group.name = 'chromatin-nucleosomes';
  const points = [];
  for (let i = 0; i < flatPoints.length; i += 6) {
    const p = V(...flatPoints.slice(i, i + 3));
    if (p.distanceTo(V(0.62, 0.38, 0.22)) > 0.95) points.push(p.toArray());
  }
  beads(group, points, 0.065, 0xbd83b0, 'nucleosome-beads', [1, 0.7, 1]);
  return group;
}

export function roughERSheets() {
  const group = new THREE.Group();
  group.name = 'rough-er-cisternae';
  const material = mat(0x5ca9a0, 0.7), points = [];
  for (let i = 0; i < 5; i++) {
    const sheet = new THREE.Mesh(cisternaGeometry(1.18, 0.66, 0.055, 0.19, i), material);
    sheet.position.set(-2.85 - i * 0.14, -0.3 + i * 0.32, -2.1);
    sheet.rotation.z = 0.28;
    sheet.updateMatrix();
    group.add(sheet);
    // Pick actual surface vertices so ribosomes remain attached to each sac.
    const p = sheet.geometry.attributes.position;
    for (let k = 44; k < p.count / 2; k += 11) {
      const v = V(p.getX(k), p.getY(k) + 0.045, p.getZ(k)).applyMatrix4(sheet.matrix);
      points.push(v.toArray());
    }
  }
  beads(group, points, 0.048, 0xd2b28e, 'membrane-bound-ribosomes', [1, 0.7, 1]);
  return group;
}

export function divisionAnatomy() {
  const group = new THREE.Group();
  group.name = 'division-anatomy';
  const material = mat(0x6cbbb3, 0.38);
  for (const sign of [-1, 1]) {
    const center = centrosome();
    center.position.x = sign * 4.8;
    group.add(center);
    for (let i = 0; i < 14; i++) {
      const a = i * TAU / 14;
      tube(group, [V(sign * 4.8, 0, 0), V(sign * 5.15, Math.cos(a) * 0.7, Math.sin(a) * 0.7),
        V(sign * 5.55, Math.cos(a) * 1.35, Math.sin(a) * 1.35)], 0.012, material, 'astral-microtubule');
    }
  }
  const ring = new THREE.Mesh(new THREE.TorusGeometry(3.2, 0.045, 8, 96), mat(0xd1a188));
  ring.name = 'actomyosin-ring';
  ring.rotation.y = Math.PI / 2;
  group.add(ring);
  const shell = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 40), mat(0x559e98, 0.08));
  shell.name = 'cleavage-furrow';
  const source = shell.geometry.attributes.position.array.slice();
  group.add(shell);
  group.userData.update = (ingress) => {
    const t = THREE.MathUtils.clamp(ingress, 0, 1);
    ring.visible = t > 0.01;
    ring.scale.setScalar(1 - t * 0.88);
    const p = shell.geometry.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const x = source[i * 3] * 6.25;
      const waist = 1 - t * 0.88 * Math.exp(-((x / 1.6) ** 2));
      p.setXYZ(i, x, source[i * 3 + 1] * 3.2 * waist, source[i * 3 + 2] * 3.2 * waist);
    }
    p.needsUpdate = true;
    shell.geometry.computeVertexNormals();
  };
  group.userData.update(0);
  return group;
}
