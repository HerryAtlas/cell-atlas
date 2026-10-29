// Procedural teaching geometry. Shape cues are anatomical approximations,
// not atomic coordinates or calibrated dimensions from a specimen.
import * as THREE from 'three';

export function organicGeometry(radius = 1, strength = 0.12, phase = 0) {
  const geometry = new THREE.SphereGeometry(radius, 40, 28);
  const p = geometry.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i) / radius, y = p.getY(i) / radius, z = p.getZ(i) / radius;
    // Cartesian noise is continuous across the UV seam and at both poles.
    const lobes = Math.sin(x * 4.1 + phase) * Math.cos(y * 3.3 - z * 2.7)
      + 0.4 * Math.sin(z * 9 + y * 5 + phase) * Math.cos(x * 7 - y * 2);
    const s = 1 + strength * lobes;
    p.setXYZ(i, x * radius * s, y * radius * s, z * radius * s);
  }
  geometry.computeVertexNormals();
  return geometry;
}

// A closed, bowed membrane sac, with a lumen rather than a solid flat disc.
export function cisternaGeometry(width, depth, thickness, bend = 0.15, phase = 0) {
  const geometry = new THREE.SphereGeometry(1, 40, 20);
  const p = geometry.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const edge = 1 + 0.065 * Math.sin(x * 5 + phase) * Math.cos(z * 6);
    p.setXYZ(i, x * width * edge, y * thickness + bend * (x * x + 0.4 * z * z)
      + thickness * 0.3 * Math.sin(x * 5 + z * 3 + phase), z * depth * edge);
  }
  geometry.computeVertexNormals();
  return geometry;
}

// Closed annular machined part, axis Y; the electron/optical path stays open.
export function annulusGeometry(outer, inner, height, segments = 48) {
  return new THREE.LatheGeometry([
    new THREE.Vector2(inner, -height / 2), new THREE.Vector2(outer, -height / 2),
    new THREE.Vector2(outer, height / 2), new THREE.Vector2(inner, height / 2),
    new THREE.Vector2(inner, -height / 2),
  ], segments);
}

export function beadInstances(parent, points, radius, color, scale = [1, 1, 1], name = '') {
  const mesh = new THREE.InstancedMesh(new THREE.SphereGeometry(radius, 12, 8),
    new THREE.MeshStandardMaterial({ color, roughness: 0.62, metalness: 0.02 }), points.length);
  const dummy = new THREE.Object3D();
  dummy.scale.set(...scale);
  points.forEach((point, i) => {
    dummy.position.set(...point);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  });
  mesh.name = name;
  parent.add(mesh);
  return mesh;
}

// Two leaflets with polar heads outside and two inward acyl chains per lipid.
// One chain is kinked; all repeated molecules use just three draw calls.
export function lipidBilayer(parent, { width, depth, y = 0, half = 0.23,
  spacing = 0.22, holes = [], ellipse = false } = {}) {
  const group = new THREE.Group();
  group.name = 'phospholipid-bilayer';
  group.position.y = y;
  const sites = [];
  const nx = Math.floor(width / spacing), nz = Math.floor(depth / spacing);
  for (let ix = 0; ix <= nx; ix++) for (let iz = 0; iz <= nz; iz++) {
    const x = -width / 2 + ix * width / nx + Math.sin(ix * 7 + iz * 11) * spacing * 0.08;
    const z = -depth / 2 + iz * depth / nz + Math.cos(ix * 9 - iz * 4) * spacing * 0.08;
    if (ellipse && (x / (width / 2)) ** 2 + (z / (depth / 2)) ** 2 > 1) continue;
    if (holes.some(([hx, hz, r]) => Math.hypot(x - hx, z - hz) < r)) continue;
    sites.push([x, z]);
  }
  const headPoints = [], straight = [], bent = [];
  const headR = Math.min(spacing * 0.3, half * 0.34);
  const end = half - headR * 0.75;
  const tailR = headR * 0.23;
  const straightCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, end, 0), new THREE.Vector3(0.005, end * 0.55, 0), new THREE.Vector3(0, 0.015, 0),
  ]);
  const bentCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, end, 0), new THREE.Vector3(0, end * 0.55, 0),
    new THREE.Vector3(headR * 0.65, end * 0.3, 0.01), new THREE.Vector3(headR * 0.8, 0.015, 0),
  ]);
  for (const [x, z] of sites) for (const sign of [-1, 1]) {
    headPoints.push([x, sign * half, z]);
    straight.push([x - headR * 0.45, z, sign]);
    bent.push([x + headR * 0.45, z, sign]);
  }
  beadInstances(group, headPoints, headR, 0x60c8ba, [1, 0.85, 1], 'polar-heads');
  for (const [points, curve, name] of [[straight, straightCurve, 'saturated-tails'], [bent, bentCurve, 'kinked-tails']]) {
    const mesh = new THREE.InstancedMesh(new THREE.TubeGeometry(curve, 6, tailR, 4, false),
      new THREE.MeshStandardMaterial({ color: 0x347d79, roughness: 0.7, metalness: 0 }), points.length);
    const dummy = new THREE.Object3D();
    points.forEach(([x, z, sign], i) => {
      dummy.position.set(x, 0, z);
      dummy.rotation.z = sign < 0 ? Math.PI : 0;
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.name = name;
    group.add(mesh);
  }
  group.userData.leafletHalfThickness = half;
  group.userData.lipidCount = headPoints.length;
  parent.add(group);
  return group;
}
