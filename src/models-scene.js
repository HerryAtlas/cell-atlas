// Focused, diagrammatic 3D specimens for the section-level study layer.
// Each model is built procedurally from shared primitives and lit as a
// cinematic "specimen" rather than a textbook illustration.

import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { MODEL_SPECS, modelById } from './model-catalog.js';

const TAU = Math.PI * 2;

function material(color, opts = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: opts.roughness ?? 0.36,
    metalness: opts.metalness ?? 0.18,
    transparent: opts.transparent ?? false,
    opacity: opts.opacity ?? 1,
    emissive: opts.emissive ?? 0x000000,
    emissiveIntensity: opts.emissiveIntensity ?? 1,
    side: opts.side ?? THREE.FrontSide,
  });
}
function glow(color, intensity = 1.6) {
  return new THREE.MeshStandardMaterial({
    color,
    emissive: color,
    emissiveIntensity: intensity,
    roughness: 0.28,
    metalness: 0.1,
    transparent: true,
    opacity: 0.92,
  });
}
function glass(color, opacity = 0.18, extra = {}) {
  return new THREE.MeshPhysicalMaterial({
    color,
    transparent: true,
    opacity,
    roughness: 0.16,
    metalness: 0.05,
    clearcoat: 1,
    clearcoatRoughness: 0.2,
    ior: 1.33,
    side: THREE.DoubleSide,
    depthWrite: false,
    ...extra,
  });
}
function add(geometry, mat, position, rotation, group, scale) {
  const mesh = new THREE.Mesh(geometry, mat);
  if (position) mesh.position.set(position[0], position[1], position[2]);
  if (rotation) mesh.rotation.set(rotation[0], rotation[1], rotation[2]);
  if (scale) mesh.scale.set(scale[0], scale[1], scale[2]);
  group.add(mesh);
  return mesh;
}
function ball(group, r, color, position, opts = {}) {
  const mat = opts.glass ? glass(color, opts.opacity ?? 0.3) : opts.glow ? glow(color, opts.glow) : material(color, opts);
  return add(new THREE.SphereGeometry(r, opts.segments ?? 24, opts.rings ?? 16), mat, position, null, group, opts.scale);
}
function capsule(group, r, length, color, position, rotation, opts = {}) {
  return add(new THREE.CapsuleGeometry(r, length, 6, 14), opts.glass ? glass(color, opts.opacity ?? 0.2) : material(color, opts), position, rotation, group, opts.scale);
}
function box(group, sx, sy, sz, color, position, rotation, opts = {}) {
  const mat = opts.glass ? glass(color, opts.opacity ?? 0.2) : opts.glow ? glow(color, opts.glow) : material(color, opts);
  return add(new THREE.BoxGeometry(sx, sy, sz), mat, position, rotation, group);
}
function torus(group, r, tube, color, position, rotation, opts = {}) {
  return add(new THREE.TorusGeometry(r, tube, 12, 40, opts.arc ?? TAU), opts.glow ? glow(color, opts.glow) : material(color, opts), position, rotation, group);
}
function tube(group, points, radius, color, opts = {}) {
  const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)), false, 'catmullrom', 0.4);
  const geom = new THREE.TubeGeometry(curve, opts.segments ?? 64, radius, 8, false);
  return add(geom, opts.glow ? glow(color, opts.glow) : material(color, opts), null, null, group);
}
function label(group, text, position, sub = '') {
  if (!group.userData.labels) group.userData.labels = [];
  group.userData.labels.push({ text, sub, position: new THREE.Vector3(...position) });
}
function rand(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function setDistance(group, distance) {
  group.userData.distance = distance;
  return group;
}
function knob(group, radius, height, color, position, rotation = [0, 0, 0], ridges = 7) {
  const g = new THREE.Group();
  g.position.set(...position);
  g.rotation.set(...rotation);
  add(new THREE.CylinderGeometry(radius, radius, height, 28), material(color, { metalness: 0.55, roughness: 0.35 }), [0, 0, 0], null, g);
  for (let i = 0; i < ridges; i += 1) {
    const y = -height / 2 + (i + 0.5) * (height / ridges);
    torus(g, radius * 0.98, 0.009, 0xd8fff7, [0, y, 0], [Math.PI / 2, 0, 0], { transparent: true, opacity: 0.25 });
  }
  group.add(g);
  return g;
}
function lensElement(group, radius, height, color, position, rotation = [0, 0, 0]) {
  const g = new THREE.Group();
  g.position.set(...position);
  g.rotation.set(...rotation);
  add(new THREE.CylinderGeometry(radius, radius, height, 28), glass(color, 0.28, { depthWrite: false }), [0, 0, 0], null, g);
  torus(g, radius + 0.015, 0.018, 0xbffcf0, [0, height / 2, 0], [Math.PI / 2, 0, 0], { transparent: true, opacity: 0.5 });
  torus(g, radius + 0.015, 0.018, 0xbffcf0, [0, -height / 2, 0], [Math.PI / 2, 0, 0], { transparent: true, opacity: 0.5 });
  group.add(g);
  return g;
}
function screenPanel(group, w, h, color, position, rotation = [0, 0, 0]) {
  const g = new THREE.Group();
  g.position.set(...position);
  g.rotation.set(...rotation);
  box(g, w + 0.12, h + 0.12, 0.055, 0x0a1b20, [0, 0, 0], null, { metalness: 0.45 });
  box(g, w, h, 0.045, color, [0, 0, 0.01], null, { glow: 0.45 });
  group.add(g);
  return g;
}
function beamCylinder(group, radius, length, color, position, rotation = [0, 0, 0], opacity = 0.2) {
  return add(
    new THREE.CylinderGeometry(radius * 0.55, radius, length, 16, 1, true),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }),
    position,
    rotation,
    group
  );
}

/* ------------------------------------------------------------------ */
/* 01 · prokaryote / eukaryote                                         */
/* ------------------------------------------------------------------ */
function buildProkaryoteEukaryote() {
  const group = new THREE.Group();
  group.userData.distance = 14.2;

  const pro = new THREE.Group();
  pro.position.set(-3.35, 0.35, 0);
  add(new THREE.SphereGeometry(1.45, 44, 30), glass(0x4adac8, 0.15), null, null, pro, [1.25, 1, 1]);
  add(new THREE.SphereGeometry(1.52, 24, 16), new THREE.MeshBasicMaterial({ color: 0x5ee8d7, wireframe: true, transparent: true, opacity: 0.075 }), null, null, pro, [1.25, 1, 1]);
  const r = rand(12);
  for (let i = 0; i < 42; i += 1) {
    const theta = r() * TAU;
    const phi = Math.acos(2 * r() - 1);
    const rr = 1.05 + r() * 0.18;
    ball(pro, 0.035, 0x8ff7df, [Math.cos(theta) * Math.sin(phi) * rr * 1.2, Math.cos(phi) * rr, Math.sin(theta) * Math.sin(phi) * rr], { glow: 1.4, segments: 8, rings: 6 });
  }
  const nucleoid = [
    [-0.7, 0.2, 0.1], [-0.3, 0.65, -0.2], [0.25, 0.15, 0.25], [0.6, -0.3, -0.05], [0.1, -0.55, 0.1], [-0.35, -0.1, -0.25], [-0.75, 0.35, 0.05],
  ];
  tube(pro, nucleoid, 0.08, 0x62f2e0, { glow: 1.6, segments: 80 });
  for (let i = 0; i < 2; i += 1) {
    const loop = [];
    for (let k = 0; k < 18; k += 1) {
      const a = (k / 17) * TAU + i * 2.2;
      loop.push([-0.05 + Math.cos(a) * (0.42 + i * 0.18), 0.15 + Math.sin(a) * 0.34, 0.2 + Math.sin(a * 2) * 0.22]);
    }
    tube(pro, loop, 0.026, 0x8effd5, { glow: 0.8, segments: 44 });
  }
  for (let i = 0; i < 9; i += 1) {
    const a = (i / 9) * TAU;
    ball(pro, 0.05, 0xffd18a, [Math.cos(a) * 0.72, -0.2 + Math.sin(a * 2) * 0.32, Math.sin(a) * 0.56], { glow: 0.6, segments: 8, rings: 6 });
  }
  const tail = [];
  for (let i = 0; i < 7; i += 1) tail.push([-1.35 - i * 0.22, 0.05 + Math.sin(i * 0.9) * 0.3, 0.25 * Math.sin(i * 1.4)]);
  tube(pro, tail, 0.035, 0x70c8ff, { glow: 1.2, segments: 60 });
  for (let i = 0; i < 9; i += 1) {
    const a = (i / 9) * TAU;
    tube(pro, [[1.15 * Math.cos(a), 0.5 * Math.sin(a), 0.55], [1.6 * Math.cos(a), 0.72 * Math.sin(a), 0.8], [1.82 * Math.cos(a), 0.82 * Math.sin(a), 0.92]], 0.018, 0x9be8d9, { opacity: 0.6, transparent: true, segments: 12 });
  }
  group.add(pro);

  const euk = new THREE.Group();
  euk.position.set(2.85, 0.1, 0);
  add(new THREE.SphereGeometry(2.15, 52, 34), glass(0x9b86ef, 0.12), null, null, euk);
  add(new THREE.SphereGeometry(2.22, 28, 18), new THREE.MeshBasicMaterial({ color: 0xbea9ff, wireframe: true, transparent: true, opacity: 0.06 }), null, null, euk);
  ball(euk, 0.96, 0xcd9aff, [0.2, 0.25, 0.05], { glass: true, opacity: 0.35 });
  ball(euk, 0.32, 0xffa6d9, [0.45, 0.35, 0.25], { glow: 1.6 });
  const er = [[-0.1, -0.2, 1.65], [0.7, 0.1, 1.2], [1.05, -0.5, 0.65], [0.45, -0.9, 0.25], [-0.25, -0.55, 0.65], [-0.8, -0.9, 1.05], [-0.7, -0.35, 1.55]];
  tube(euk, er, 0.055, 0xffc48a, { glow: 0.9, segments: 80 });
  for (let i = 0; i < 3; i += 1) {
    capsule(euk, 0.24, 0.75, 0xff9b62, [1.25 + i * 0.06, 0.65 - i * 0.48, -0.45 + i * 0.18], [Math.PI / 2, 0.6, 0.4], { glow: 0.8 });
  }
  for (let i = 0; i < 3; i += 1) {
    const a = (i / 3) * TAU;
    ball(euk, 0.15, 0xffd28c, [Math.cos(a) * 1.4, -0.75, Math.sin(a) * 1.15], { glow: 1.4, segments: 14, rings: 10 });
  }
  for (let i = 0; i < 4; i += 1) {
    add(new THREE.TorusGeometry(0.55, 0.045, 8, 34, Math.PI * 1.15), material(0x8df2e4, { transparent: true, opacity: 0.7 }), [0.55, -0.8 + i * 0.13, 1.0], [Math.PI / 2, 0, 0.25], euk);
  }
  for (let i = 0; i < 14; i += 1) {
    const a = (i / 14) * TAU;
    const phi = Math.acos(1 - 2 * ((i + 0.5) / 14));
    const p = [Math.cos(a) * Math.sin(phi) * 2.01, Math.cos(phi) * 2.01, Math.sin(a) * Math.sin(phi) * 2.01];
    add(new THREE.TorusGeometry(0.13, 0.025, 6, 16), material(0xffd1ee, { transparent: true, opacity: 0.8 }), p, [0, 0, 0], euk).lookAt(0, 0, 0);
  }
  for (let i = 0; i < 7; i += 1) {
    const pts = [];
    for (let k = 0; k < 16; k += 1) {
      const u = k / 15;
      const a = u * TAU + i * 0.7;
      pts.push([
        Math.cos(a) * (1.1 + u * 0.8) * (i % 2 ? 1 : -1),
        -1.1 + u * 1.9,
        Math.sin(a * 1.3) * (0.8 + u * 0.6),
      ]);
    }
    tube(euk, pts, 0.018, 0x8ff4e7, { glow: 0.35, transparent: true, opacity: 0.55, segments: 40 });
  }
  for (let i = 0; i < 4; i += 1) {
    ball(euk, 0.09, 0xffd08a, [-1.3 + i * 0.8, -1.05 + (i % 2) * 0.3, 0.6], { glow: 0.5, segments: 10, rings: 7 });
  }
  group.add(euk);

  label(group, '原核细胞', [-3.35, 2.1, 0], 'PROKARYOTE');
  label(group, '拟核 DNA', [-4.1, 0.0, 0.5], 'NUCLEOID');
  label(group, '70S 核糖体', [-2.2, -1.2, 0.5], 'RIBOSOME');
  label(group, '真核细胞', [2.85, 2.75, 0], 'EUKARYOTE');
  label(group, '细胞核', [3.2, 0.3, 1.2], 'NUCLEUS');
  label(group, '线粒体', [4.35, -0.6, 0.2], 'MITOCHONDRION');
  label(group, '内膜系统', [1.1, -1.8, 1.0], 'ENDOMEMBRANE');
  return setDistance(group, 14.2);
}

/* ------------------------------------------------------------------ */
/* 02 · membrane mosaic                                                */
/* ------------------------------------------------------------------ */
function buildMembrane() {
  const group = new THREE.Group();
  group.userData.distance = 11.2;
  const nx = 18;
  const nz = 5;
  const headGeom = new THREE.SphereGeometry(0.105, 14, 10);
  const tailGeom = new THREE.CapsuleGeometry(0.035, 0.32, 4, 8);
  const heads = new THREE.InstancedMesh(headGeom, material(0x3ac8ba, { transparent: true, opacity: 0.82, emissive: 0x0d4a46, emissiveIntensity: 0.2 }), nx * nz * 2);
  const tails = new THREE.InstancedMesh(tailGeom, material(0x237a76, { transparent: true, opacity: 0.48 }), nx * nz * 4);
  const dummy = new THREE.Object3D();
  let hi = 0;
  let ti = 0;
  for (let ix = 0; ix < nx; ix += 1) {
    for (let iz = 0; iz < nz; iz += 1) {
      const x = (ix - (nx - 1) / 2) * 0.34;
      const z = (iz - (nz - 1) / 2) * 0.34;
      for (const sign of [-1, 1]) {
        dummy.position.set(x, sign * 0.28, z);
        dummy.rotation.set(0, 0, 0);
        dummy.scale.set(1, 1, 1);
        dummy.updateMatrix();
        heads.setMatrixAt(hi, dummy.matrix);
        hi += 1;
        for (const off of [-0.065, 0.065]) {
          dummy.position.set(x + off, sign * 0.5, z);
          dummy.rotation.set(0, 0, 0);
          dummy.scale.set(1, 1, 1);
          dummy.updateMatrix();
          tails.setMatrixAt(ti, dummy.matrix);
          ti += 1;
        }
      }
      if ((ix + iz) % 7 === 0) {
        add(new THREE.CylinderGeometry(0.045, 0.045, 0.5, 6), material(0xffce7a, { emissive: 0x6d4a14, emissiveIntensity: 0.3 }), [x + 0.05, 0.1, z], [0, 0, 0.3], group);
      }
    }
  }
  group.add(heads, tails);

  const proteinColors = [0x7adfff, 0xffb0d6, 0xffd08a, 0xa9a4ff];
  for (let i = 0; i < 5; i += 1) {
    const x = -2.2 + i * 1.05;
    capsule(group, 0.16, 0.8, proteinColors[i % proteinColors.length], [x, 0, 0.02], [0, 0, 0], { transparent: true, opacity: 0.9, glow: 0.55 });
    ball(group, 0.17, proteinColors[(i + 1) % proteinColors.length], [x, 0.58, 0.02], { glow: 1.2, segments: 12, rings: 8 });
  }
  for (let i = 0; i < 5; i += 1) {
    const x = -2.3 + i * 1.12;
    capsule(group, 0.1, 0.3, i % 2 ? 0x9b8cff : 0xff9fc9, [x, 0.68, 0.28], [Math.PI / 2, 0.2, 0.4], { transparent: true, opacity: 0.65 });
    capsule(group, 0.08, 0.26, 0x7ce8d9, [x + 0.5, -0.7, -0.25], [Math.PI / 2, -0.2, -0.3], { transparent: true, opacity: 0.55 });
  }
  for (let i = 0; i < 24; i += 1) {
    const a = (i / 24) * TAU;
    ball(group, 0.026, 0x9becff, [Math.cos(a) * (1.3 + (i % 4) * 0.4), 1.0 + (i % 3) * 0.16, Math.sin(a) * 0.8], { glow: 0.4, segments: 6, rings: 4 });
  }
  for (let i = 0; i < 4; i += 1) {
    tube(group, [[-2.4 + i * 1.5, -0.78, -0.3], [-2.35 + i * 1.5, -1.2, -0.35], [-2.2 + i * 1.5, -1.55, -0.2]], 0.02, 0x76e2d4, { glow: 0.25, transparent: true, opacity: 0.45, segments: 14 });
  }
  const channel = add(new THREE.CylinderGeometry(0.36, 0.36, 1.05, 24, 1, true), glass(0x86e8ff, 0.3), [0.9, 0, 0.05], null, group);
  channel.material.side = THREE.DoubleSide;
  torus(group, 0.36, 0.06, 0x9cecff, [0.9, 0.52, 0.05], [Math.PI / 2, 0, 0], { glow: 1.2 });
  torus(group, 0.36, 0.06, 0x9cecff, [0.9, -0.52, 0.05], [Math.PI / 2, 0, 0], { glow: 1.2 });

  for (let i = 0; i < 18; i += 1) {
    const a = (i / 18) * TAU;
    tube(group, [[-2.6 + (i % 3) * 0.08, 0.62, -0.8 + (i % 5) * 0.35], [-2.45 + Math.cos(a) * 0.18, 0.95 + (i % 4) * 0.12, -0.8 + (i % 5) * 0.35 + Math.sin(a) * 0.12]], 0.018, 0xff9fc9, { glow: 0.8, transparent: true, opacity: 0.7, segments: 8 });
  }
  for (let i = 0; i < 22; i += 1) {
    const a = (i / 22) * TAU;
    ball(group, 0.045, 0xffb8de, [1.95 + Math.cos(a) * 0.25, 0.78 + (i % 3) * 0.12, -0.4 + Math.sin(a) * 0.25], { glow: 1.1, segments: 8, rings: 6 });
  }
  label(group, '磷脂双分子层', [-2.7, -0.9, 0.4], 'PHOSPHOLIPID BILAYER');
  label(group, '整合膜蛋白', [2.65, 0.2, 0.2], 'INTEGRAL PROTEIN');
  label(group, '通道蛋白', [0.9, 1.05, 0.2], 'CHANNEL');
  label(group, '糖萼', [-1.55, 1.25, 0.3], 'GLYCOCALYX');
  label(group, '胆固醇', [-1.3, 0.15, -0.6], 'CHOLESTEROL');
  return group;
}

/* ------------------------------------------------------------------ */
/* 03 · transport                                                      */
/* ------------------------------------------------------------------ */
function buildTransport() {
  const group = new THREE.Group();
  group.userData.distance = 11.4;
  add(new THREE.BoxGeometry(6.4, 0.28, 2.5), material(0x1b615f, { transparent: true, opacity: 0.42, emissive: 0x0b3533, emissiveIntensity: 0.6 }), [0, 0, 0], null, group);
  for (let i = 0; i < 30; i += 1) {
    const x = -3 + (i / 29) * 6;
    for (const z of [-1.1, 1.1]) ball(group, 0.04, 0x71e4d6, [x, 0.23, z], { glow: 0.5, segments: 7, rings: 5 });
  }
  for (let i = 0; i < 18; i += 1) {
    const x = -3 + (i / 17) * 6;
    for (const z of [-0.65, 0, 0.65]) {
      ball(group, 0.028, 0x49bdb5, [x, 0.16, z], { glow: 0.25, segments: 6, rings: 4 });
      ball(group, 0.028, 0x49bdb5, [x, -0.16, z], { glow: 0.25, segments: 6, rings: 4 });
    }
  }
  const channel = add(new THREE.CylinderGeometry(0.46, 0.46, 1.15, 26, 1, true), glass(0x8bdcff, 0.26), [-1.65, 0, 0], null, group);
  channel.material.side = THREE.DoubleSide;
  torus(group, 0.46, 0.065, 0xa4eaff, [-1.65, 0.58, 0], [Math.PI / 2, 0, 0], { glow: 1.3 });
  torus(group, 0.46, 0.065, 0xa4eaff, [-1.65, -0.58, 0], [Math.PI / 2, 0, 0], { glow: 1.3 });

  const pump = new THREE.Group();
  pump.position.set(1.65, 0, 0);
  capsule(pump, 0.42, 0.85, 0xffb56f, [0, 0.05, 0], null, { glow: 0.4 });
  capsule(pump, 0.18, 0.5, 0xffdc9d, [-0.28, 0.55, 0], [0, 0, -0.35], { glow: 0.8 });
  capsule(pump, 0.18, 0.5, 0xffdc9d, [0.28, 0.55, 0], [0, 0, 0.35], { glow: 0.8 });
  ball(pump, 0.16, 0xffe6a6, [0, -0.65, 0], { glow: 1.8 });
  group.add(pump);

  const ions = [];
  const ionColors = [0x78d8ff, 0xffd28c, 0xb2a2ff];
  const r = rand(77);
  for (let i = 0; i < 18; i += 1) {
    const mesh = ball(group, 0.07, ionColors[i % 3], [-2.8 + r() * 5.6, -1.8 + r() * 3.6, -0.7 + r() * 1.4], { glow: 1.5, segments: 10, rings: 8 });
    ions.push({ mesh, x: mesh.position.x, z: mesh.position.z, phase: r() * TAU, speed: 0.3 + r() * 0.6 });
  }
  group.userData.update = (time) => {
    ions.forEach((ion, i) => {
      const y = -1.8 + ((time * ion.speed + ion.phase) % (Math.PI * 2)) / (Math.PI * 2) * 3.6;
      ion.mesh.position.set(ion.x + Math.sin(time * 0.5 + i) * 0.12, y, ion.z);
      ion.mesh.material.emissiveIntensity = 1.2 + Math.sin(time * 2 + i) * 0.5;
    });
    pump.children[1].rotation.z = -0.35 + Math.sin(time * 0.9) * 0.08;
    pump.children[2].rotation.z = 0.35 - Math.sin(time * 0.9) * 0.08;
  };
  label(group, '通道蛋白', [-1.65, 1.15, 0.2], 'CHANNEL');
  label(group, 'Na⁺/K⁺ 泵', [1.7, 1.35, 0.2], 'P-TYPE PUMP');
  label(group, 'ATP', [1.65, -1.05, 0.35], 'ENERGY');
  label(group, '膜电位', [3.1, -0.4, 0.4], 'MEMBRANE POTENTIAL');
  label(group, '细胞外', [-2.9, 1.55, 0.1], 'EXTRACELLULAR');
  label(group, '细胞质', [-2.9, -1.6, 0.1], 'CYTOPLASM');
  return group;
}

/* ------------------------------------------------------------------ */
/* 04 · endomembrane                                                  */
/* ------------------------------------------------------------------ */
function buildEndomembrane() {
  const group = new THREE.Group();
  group.userData.distance = 12.6;
  const er = [[-3.0, 0.2, 0.1], [-2.4, 0.9, -0.3], [-1.7, 0.2, 0.4], [-2.2, -0.6, -0.2], [-3.0, -0.7, 0.3], [-3.35, 0.0, -0.1], [-2.8, 0.45, 0.5], [-2.2, 1.0, 0.0]];
  tube(group, er, 0.075, 0x74e6d8, { glow: 0.9, segments: 110 });
  for (let i = 0; i < 12; i += 1) {
    ball(group, 0.045, 0x9affdf, [-2.9 + (i % 4) * 0.34, 0.55 + (i % 3) * 0.24, -0.25 + (i % 2) * 0.4], { glow: 1.2, segments: 8, rings: 6 });
  }

  for (let i = 0; i < 5; i += 1) {
    add(new THREE.CylinderGeometry(1.02 - i * 0.07, 0.9 - i * 0.06, 0.1, 36), material(0xffb46e, { transparent: true, opacity: 0.82 }), [0.35, 0.8 - i * 0.2, 0], [0.15, 0, 0.06], group);
    torus(group, 0.86 - i * 0.06, 0.035, 0xffd39d, [0.35, 0.86 - i * 0.2, 0], [Math.PI / 2, 0, 0.06], { transparent: true, opacity: 0.55 });
  }
  const path = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-1.3, 0.1, 0.25),
    new THREE.Vector3(-0.7, 0.45, 0.1),
    new THREE.Vector3(0.9, -0.1, 0.45),
    new THREE.Vector3(2.25, 0.15, 0.1),
  ]);
  const vesicles = [];
  for (let i = 0; i < 7; i += 1) {
    const mesh = ball(group, 0.14 + (i % 2) * 0.035, i % 2 ? 0xffcf84 : 0x8ff1e1, [0, 0, 0], { glow: 0.9, segments: 14, rings: 10 });
    vesicles.push({ mesh, offset: i / 7 });
    for (let k = 0; k < 5; k += 1) {
      const a = (k / 5) * TAU;
      ball(mesh, 0.025, 0xbcffe9, [Math.cos(a) * 0.17, Math.sin(a) * 0.14, Math.cos(a * 2) * 0.1], { glow: 0.35, segments: 6, rings: 4 });
    }
  }
  const lysosome = ball(group, 0.72, 0xc57aff, [2.65, 0.05, 0.1], { glass: true, opacity: 0.42 });
  lysosome.material = glass(0xc57aff, 0.38);
  for (let i = 0; i < 16; i += 1) {
    const a = (i / 16) * TAU;
    ball(group, 0.045, 0xffd48a, [2.65 + Math.cos(a) * 0.45, 0.05 + Math.sin(a * 2) * 0.32, 0.1 + Math.sin(a) * 0.38], { glow: 1.1, segments: 8, rings: 6 });
  }
  group.userData.update = (time) => {
    vesicles.forEach((v) => {
      const u = (v.offset + time * 0.035) % 1;
      const p = path.getPoint(u);
      v.mesh.position.copy(p);
      v.mesh.material.emissiveIntensity = 0.7 + Math.sin(time * 2.5 + v.offset * 8) * 0.3;
    });
  };
  label(group, '内质网', [-2.7, 1.45, 0.2], 'ENDOPLASMIC RETICULUM');
  label(group, '高尔基体', [0.35, 1.25, 0.1], 'GOLGI APPARATUS');
  label(group, '转运膜泡', [0.95, -0.95, 0.5], 'TRANSPORT VESICLE');
  label(group, '溶酶体', [2.65, -0.95, 0.2], 'LYSOSOME');
  return group;
}

/* ------------------------------------------------------------------ */
/* 05 · mitochondrion / chloroplast                                   */
/* ------------------------------------------------------------------ */
function buildMitoChloro() {
  const group = new THREE.Group();
  group.userData.distance = 12.8;
  const mito = new THREE.Group();
  mito.position.set(-2.25, 0.1, 0);
  capsule(mito, 1.05, 1.35, 0xffa765, [0, 0, 0], [0, 0, 0.05], { glass: true, opacity: 0.12 });
  capsule(mito, 0.88, 1.08, 0xffd08f, [0, 0, 0], [0, 0, 0.05], { glass: true, opacity: 0.12 });
  for (let i = 0; i < 7; i += 1) {
    const y = -0.85 + i * 0.28;
    const pts = [];
    for (let k = 0; k < 12; k += 1) {
      const u = k / 11;
      pts.push([-0.62 + u * 1.24, y + Math.sin(u * TAU * 1.4 + i) * 0.09, Math.sin(u * TAU + i * 0.5) * 0.38]);
    }
    tube(mito, pts, 0.035, 0xffb46e, { glow: 0.45, segments: 46 });
  }
  for (let i = 0; i < 18; i += 1) {
    const a = (i / 18) * TAU;
    ball(mito, 0.035, 0xffe0a2, [Math.cos(a) * 1.08, -1.1 + (i % 7) * 0.32, Math.sin(a) * 0.38], { glow: 0.8, segments: 7, rings: 5 });
  }
  for (let i = 0; i < 7; i += 1) {
    const a = (i / 7) * TAU;
    capsule(mito, 0.04, 0.16, 0xffdd9a, [Math.cos(a) * 0.9, -1.0 + (i % 4) * 0.55, Math.sin(a) * 0.32], [0, 0, 0], { glow: 0.45 });
  }
  const mtDNA = [];
  for (let i = 0; i < 20; i += 1) {
    const a = (i / 19) * TAU;
    mtDNA.push([Math.cos(a) * 0.38, 0.3 + Math.sin(a * 2) * 0.18, Math.sin(a) * 0.22]);
  }
  tube(mito, mtDNA, 0.025, 0xa9ffdb, { glow: 0.5, segments: 50 });
  group.add(mito);

  const chloro = new THREE.Group();
  chloro.position.set(2.15, 0.05, 0);
  add(new THREE.SphereGeometry(1.55, 44, 30), glass(0x63d9a1, 0.13), null, null, chloro, [1.15, 1.28, 0.86]);
  add(new THREE.SphereGeometry(1.58, 24, 16), new THREE.MeshBasicMaterial({ color: 0x8af2b9, wireframe: true, transparent: true, opacity: 0.055 }), null, null, chloro, [1.15, 1.28, 0.86]);
  for (let s = 0; s < 3; s += 1) {
    const sx = -0.55 + s * 0.56;
    for (let i = 0; i < 5; i += 1) {
      add(new THREE.CylinderGeometry(0.43, 0.43, 0.035, 28), material(0x5cd48c, { emissive: 0x174d30, emissiveIntensity: 0.22, transparent: true, opacity: 0.9 }), [sx, -0.55 + i * 0.17, 0.05], [0.12, 0.3, -0.18], chloro);
    }
    for (let i = 0; i < 5; i += 1) {
      torus(chloro, 0.4, 0.022, 0xc2ffd2, [sx, -0.55 + i * 0.17, 0.05], [Math.PI / 2 + 0.12, 0.3, -0.18], { transparent: true, opacity: 0.28 });
    }
  }
  for (let i = 0; i < 3; i += 1) {
    tube(chloro, [[-0.7 + i * 0.5, -0.4, -0.4], [-0.35 + i * 0.5, 0.1, 0.2], [0.0 + i * 0.3, 0.55, 0.35]], 0.022, 0xa9f5bb, { glow: 0.25, transparent: true, opacity: 0.45, segments: 30 });
  }
  ball(chloro, 0.28, 0xfff1c7, [0.75, -0.55, 0.2], { glass: true, opacity: 0.38 });
  for (let i = 0; i < 4; i += 1) {
    const cone = add(new THREE.ConeGeometry(0.55, 3.4, 12, 1, true), new THREE.MeshBasicMaterial({ color: 0xffe9a8, transparent: true, opacity: 0.018, side: THREE.DoubleSide, depthWrite: false }), [2.1 + i * 0.1, 1.9, 0.2], [0.2, 0, -0.45], group);
    cone.renderOrder = -1;
  }
  group.add(chloro);

  group.userData.update = (time) => {
    mito.rotation.z = Math.sin(time * 0.25) * 0.03;
    chloro.rotation.y = Math.sin(time * 0.22) * 0.08;
  };
  label(group, '线粒体', [-2.25, 1.85, 0.2], 'MITOCHONDRION');
  label(group, '嵴', [-1.45, 0.85, 0.45], 'CRISTAE');
  label(group, '叶绿体', [2.15, 2.25, 0.2], 'CHLOROPLAST');
  label(group, '类囊体 / 基粒', [2.8, -0.9, 0.6], 'THYLAKOID / GRANA');
  return group;
}

/* ------------------------------------------------------------------ */
/* 06 · cytoskeleton                                                  */
/* ------------------------------------------------------------------ */
function buildCytoskeleton() {
  const group = new THREE.Group();
  group.userData.distance = 12.2;
  const makeStrand = (centerY, color, radius, twist, length, turns) => {
    for (const phase of [0, Math.PI]) {
      const pts = [];
      for (let i = 0; i <= 40; i += 1) {
        const u = i / 40;
        const x = -3 + u * 6;
        const a = u * TAU * turns + phase;
        pts.push([x, centerY + Math.cos(a) * twist, Math.sin(a) * twist]);
      }
      tube(group, pts, radius, color, { glow: 0.65, segments: 120 });
    }
  };
  makeStrand(1.25, 0x68eadb, 0.07, 0.23, 6, 7);
  for (let i = 0; i < 9; i += 1) {
    const x = -2.7 + i * 0.65;
    ball(group, 0.055, 0xa8fff0, [x, 1.25 + Math.sin(i * 1.7) * 0.23, Math.cos(i * 1.7) * 0.23], { glow: 0.35, segments: 8, rings: 6 });
  }
  for (let i = 0; i < 5; i += 1) ball(group, 0.12, 0xffc46d, [-2.2 + i * 1.1, 1.5 + (i % 2) * 0.12, 0.25], { glow: 1.1, segments: 12, rings: 8 });

  add(new THREE.CylinderGeometry(0.28, 0.28, 6, 28, 1, true), glass(0x7cc8ff, 0.24), [0, -0.55, 0], [0, 0, Math.PI / 2], group);
  for (let i = 0; i < 7; i += 1) {
    torus(group, 0.28, 0.025, 0xa7dfff, [-2.7 + i * 0.9, -0.55, 0], [0, Math.PI / 2, 0], { transparent: true, opacity: 0.55 });
  }
  for (let i = 0; i < 3; i += 1) {
    const pts = [];
    for (let k = 0; k < 30; k += 1) {
      const u = k / 29;
      const a = u * TAU * 1.2 + i;
      pts.push([-2.8 + u * 5.6, -0.55 + Math.cos(a) * 0.26, Math.sin(a) * 0.26]);
    }
    tube(group, pts, 0.018, 0xb8e8ff, { glow: 0.3, transparent: true, opacity: 0.5, segments: 60 });
  }
  for (let i = 0; i < 5; i += 1) {
    tube(group, [[-1.2 + i * 0.6, 0.75, 0.1], [-1.15 + i * 0.6, 0.1, 0.2], [-1.1 + i * 0.6, -0.45, 0.1]], 0.015, 0xffc98d, { glow: 0.3, transparent: true, opacity: 0.55, segments: 12 });
  }
  for (let i = 0; i < 4; i += 1) ball(group, 0.1, 0x9b8cff, [-1.9 + i * 1.2, -0.32, 0.3], { glow: 1.2, segments: 12, rings: 8 });

  for (let strand = 0; strand < 3; strand += 1) {
    const pts = [];
    for (let i = 0; i <= 38; i += 1) {
      const u = i / 38;
      const x = -3 + u * 6;
      const a = u * TAU * 4 + (strand / 3) * TAU;
      pts.push([x, -1.75 + Math.cos(a) * 0.18, Math.sin(a) * 0.18]);
    }
    tube(group, pts, 0.045, strand === 1 ? 0xff9fc9 : 0xb7cfd1, { glow: 0.5, segments: 110 });
  }
  label(group, '微丝', [-2.0, 2.05, 0.4], 'ACTIN FILAMENT · 7 nm');
  label(group, '微管', [0.1, -1.45, 0.5], 'MICROTUBULE · 24 nm');
  label(group, '中间丝', [2.2, -1.35, 0.4], 'INTERMEDIATE FILAMENT · 10 nm');
  label(group, '分子马达', [1.3, 1.55, 0.45], 'MOLECULAR MOTOR');
  return group;
}

/* ------------------------------------------------------------------ */
/* 07 · nucleus                                                       */
/* ------------------------------------------------------------------ */
function buildNucleus() {
  const group = new THREE.Group();
  group.userData.distance = 12.4;
  add(new THREE.SphereGeometry(2.2, 52, 36), glass(0xb996ff, 0.13), null, null, group);
  add(new THREE.SphereGeometry(2.23, 26, 18), new THREE.MeshBasicMaterial({ color: 0xd4bfff, wireframe: true, transparent: true, opacity: 0.07 }), null, null, group);
  add(new THREE.SphereGeometry(2.08, 24, 16), new THREE.MeshBasicMaterial({ color: 0xffc6ea, wireframe: true, transparent: true, opacity: 0.035 }), null, null, group);
  const r = rand(404);
  for (let i = 0; i < 14; i += 1) {
    const theta = r() * TAU;
    const phi = Math.acos(2 * r() - 1);
    const p = [Math.cos(theta) * Math.sin(phi) * 2.21, Math.cos(phi) * 2.21, Math.sin(theta) * Math.sin(phi) * 2.21];
    const pore = torus(group, 0.12, 0.03, 0xffd2f1, p, [0, 0, 0], { glow: 0.3, transparent: true, opacity: 0.5 });
    pore.lookAt(0, 0, 0);
    ball(group, 0.028, 0xffe2f7, p, { glow: 0.35, segments: 7, rings: 5 });
  }
  for (let i = 0; i < 5; i += 1) {
    const pts = [];
    for (let k = 0; k < 22; k += 1) {
      const u = k / 21;
      const a = u * TAU * 1.3 + i;
      pts.push([
        Math.cos(a) * (0.4 + u * 1.2) + (i - 2) * 0.18,
        (u - 0.5) * 1.7 + Math.sin(u * TAU + i) * 0.22,
        Math.sin(a) * (0.4 + u * 1.2) + (i % 2 ? 0.3 : -0.25),
      ]);
    }
    tube(group, pts, 0.04, i % 2 ? 0xffa6d9 : 0xcab3ff, { glow: 0.3, segments: 90 });
  }
  for (let i = 0; i < 22; i += 1) {
    const a = (i / 22) * TAU;
    const rr = 0.35 + (i % 5) * 0.2;
    ball(group, 0.06, 0xffc0e5, [Math.cos(a) * rr, Math.sin(a * 1.8) * 0.75, Math.sin(a) * rr], { glow: 0.45, segments: 9, rings: 6 });
  }
  ball(group, 0.58, 0xff8fc3, [0.45, -0.2, 0.3], { glass: true, opacity: 0.5 });
  for (let i = 0; i < 8; i += 1) {
    const a = (i / 8) * TAU;
    ball(group, 0.055, 0xffe0a8, [0.45 + Math.cos(a) * 0.35, -0.2 + Math.sin(a * 2) * 0.25, 0.3 + Math.sin(a) * 0.35], { glow: 0.5, segments: 8, rings: 6 });
  }
  for (let i = 0; i < 7; i += 1) {
    const a = (i / 7) * TAU;
    ball(group, 0.09 + (i % 3) * 0.02, 0xb17bd8, [Math.cos(a) * 1.5, -1.0 + (i % 3) * 0.8, Math.sin(a) * 1.2], { glass: true, opacity: 0.38, segments: 10, rings: 7 });
  }
  ball(group, 0.18, 0x9ce7ff, [-1.3, 0.75, 0.65], { glass: true, opacity: 0.35 });
  label(group, '核被膜', [-2.25, 1.25, 0.4], 'NUCLEAR ENVELOPE');
  label(group, '核孔', [1.65, 1.55, 0.8], 'NUCLEAR PORE');
  label(group, '染色质', [-0.9, -0.85, 1.3], 'CHROMATIN');
  label(group, '核仁', [0.45, -0.2, 1.0], 'NUCLEOLUS');
  return group;
}

/* ------------------------------------------------------------------ */
/* 08 · ribosome                                                      */
/* ------------------------------------------------------------------ */
function buildRibosome() {
  const group = new THREE.Group();
  group.userData.distance = 10.8;
  const mrna = [];
  for (let i = 0; i <= 60; i += 1) {
    const u = i / 60;
    mrna.push([-3.3 + u * 6.6, -0.55 + Math.sin(u * TAU * 1.2) * 0.1, Math.cos(u * TAU) * 0.16]);
  }
  tube(group, mrna, 0.07, 0xffb36b, { glow: 0.35, segments: 150 });
  const codons = [0x78e6d6, 0xffc56c, 0xc2a6ff, 0xff94c2];
  for (let i = 0; i < 26; i += 1) {
    const u = i / 25;
    const p = mrna[Math.round(u * 60)];
    ball(group, 0.055, codons[i % 4], [p[0] + 0.04, p[1] + 0.11, p[2]], { glow: 0.45, segments: 8, rings: 6 });
  }
  const large = new THREE.Group();
  large.position.set(0.25, 0.55, 0);
  add(new THREE.SphereGeometry(1.08, 40, 28), material(0x6257b4, { roughness: 0.42, transparent: true, opacity: 0.88 }), null, null, large, [1.15, 0.78, 1]);
  add(new THREE.SphereGeometry(1.09, 24, 14), new THREE.MeshBasicMaterial({ color: 0xb5a8ff, wireframe: true, transparent: true, opacity: 0.08 }), null, null, large, [1.15, 0.78, 1]);
  group.add(large);
  const small = new THREE.Group();
  small.position.set(0.25, -0.28, 0);
  add(new THREE.SphereGeometry(0.95, 36, 24), material(0x3f9d98, { roughness: 0.45, transparent: true, opacity: 0.9 }), null, null, small, [1.1, 0.56, 0.9]);
  group.add(small);
  for (let i = 0; i < 10; i += 1) {
    const a = (i / 10) * TAU;
    ball(large, 0.055, 0x9f92ff, [Math.cos(a) * 1.06, Math.sin(a * 2) * 0.45, Math.sin(a) * 0.94], { transparent: true, opacity: 0.7, segments: 7, rings: 5 });
  }
  for (let i = 0; i < 8; i += 1) {
    const a = (i / 8) * TAU;
    ball(small, 0.045, 0x74e4d7, [Math.cos(a) * 0.96, Math.sin(a * 2) * 0.3, Math.sin(a) * 0.82], { transparent: true, opacity: 0.65, segments: 7, rings: 5 });
  }
  for (let i = 0; i < 3; i += 1) {
    torus(group, 0.14, 0.03, 0xffe2a3, [-0.22 + i * 0.25, 0.05, 0.82], [0, 0, 0], { glow: 1.2, transparent: true, opacity: 0.7 });
  }
  const tRNAs = [];
  for (let i = 0; i < 2; i += 1) {
    const baseX = -0.5 + i * 0.9;
    const pts = [[baseX, -0.35, 0.1], [baseX - 0.12, 0.2, 0.55], [baseX + 0.05, 0.8, 0.75], [baseX + 0.35, 1.05, 0.5]];
    tube(group, pts, 0.055, i ? 0xffa8cf : 0x8fe7ff, { glow: 0.4, segments: 40 });
    ball(group, 0.12, i ? 0xff9ecb : 0x74dfff, [baseX + 0.35, 1.05, 0.5], { glow: 0.5, segments: 12, rings: 8 });
  }
  const peptide = [];
  for (let i = 0; i < 20; i += 1) {
    const u = i / 19;
    peptide.push([1.15 + Math.sin(u * TAU * 1.2) * 0.28, 1.0 + u * 1.5, 0.2 + Math.cos(u * TAU) * 0.2]);
  }
  tube(group, peptide, 0.055, 0xffd28c, { glow: 0.4, segments: 50 });
  for (let i = 0; i < 8; i += 1) {
    const u = i / 8;
    ball(group, 0.06, 0xffc077, [1.15 + Math.sin(u * TAU * 1.2) * 0.28, 1.0 + u * 1.5, 0.2 + Math.cos(u * TAU) * 0.2], { glow: 0.5, segments: 8, rings: 6 });
  }
  group.userData.update = (time) => {
    large.rotation.z = Math.sin(time * 0.35) * 0.015;
    small.rotation.z = -Math.sin(time * 0.35) * 0.01;
  };
  label(group, '大亚基', [0.9, 1.45, 0.4], 'LARGE SUBUNIT');
  label(group, '小亚基', [-0.45, -0.9, 0.4], 'SMALL SUBUNIT');
  label(group, 'mRNA', [-2.5, -0.4, 0.4], 'MESSENGER RNA');
  label(group, 'tRNA', [-0.7, 1.2, 0.6], 'TRANSFER RNA');
  label(group, '新生肽链', [1.8, 1.8, 0.3], 'POLYPEPTIDE');
  label(group, 'A / P / E 位点', [0.55, 0.1, 0.95], 'SITES');
  return group;
}

/* ------------------------------------------------------------------ */
/* 09 · light & fluorescence microscopy                               */
/* ------------------------------------------------------------------ */
function buildLightMicroscopy() {
  const group = new THREE.Group();
  group.userData.distance = 12.4;

  // Feet and heavy base
  for (const x of [-1.9, 1.9]) {
    for (const z of [-0.85, 0.85]) {
      add(new THREE.CylinderGeometry(0.2, 0.24, 0.18, 18), material(0x0d2328, { metalness: 0.5 }), [x, -2.05, z], null, group);
    }
  }
  box(group, 4.7, 0.28, 2.5, 0x173a40, [0, -1.86, 0], null, { metalness: 0.65, roughness: 0.32 });
  box(group, 4.25, 0.12, 2.2, 0x24565c, [0, -1.68, 0], null, { metalness: 0.55 });
  // base light source and field lens
  add(new THREE.CylinderGeometry(0.5, 0.55, 0.28, 32), material(0x10282e, { metalness: 0.6 }), [0, -1.5, 0], null, group);
  add(new THREE.CylinderGeometry(0.34, 0.34, 0.16, 32), material(0x8ef2ff, { emissive: 0x1e7b91, emissiveIntensity: 0.9 }), [0, -1.33, 0], null, group);
  lensElement(group, 0.42, 0.08, 0x9aeaff, [0, -1.18, 0]);

  // Arm and head
  box(group, 0.5, 3.15, 0.62, 0x1d4a50, [-1.7, -0.25, 0], null, { metalness: 0.55, roughness: 0.35 });
  box(group, 0.72, 0.55, 0.62, 0x1d4a50, [-1.35, 1.2, 0], null, { metalness: 0.55 });
  box(group, 1.0, 0.34, 0.68, 0x214f55, [0, 1.02, 0], null, { metalness: 0.5 });
  knob(group, 0.3, 0.14, 0x2a5d63, [-2.02, -0.15, 0.18], [0, 0, Math.PI / 2], 8);
  knob(group, 0.24, 0.12, 0x2a5d63, [-2.02, -0.55, 0.18], [0, 0, Math.PI / 2], 7);

  // Stage, slide clips and sample
  box(group, 3.15, 0.14, 1.95, 0x1e5056, [0, -0.43, 0], null, { metalness: 0.55 });
  box(group, 1.9, 0.045, 1.0, 0xa9f2ef, [0, -0.33, 0.05], null, { glass: true, opacity: 0.2 });
  box(group, 1.4, 0.025, 0.62, 0xc9fcff, [0.05, -0.3, 0.05], null, { glass: true, opacity: 0.24 });
  box(group, 0.34, 0.045, 0.62, 0x6b9a9e, [-0.75, -0.3, 0.05], null, { metalness: 0.5 });
  box(group, 0.34, 0.045, 0.62, 0x6b9a9e, [0.78, -0.3, 0.05], null, { metalness: 0.5 });
  knob(group, 0.16, 0.1, 0x477d82, [1.72, -0.43, 0.55], [0, 0, Math.PI / 2], 6);
  knob(group, 0.13, 0.09, 0x477d82, [1.72, -0.43, 0.18], [0, 0, Math.PI / 2], 6);
  const randCell = rand(91);
  for (let i = 0; i < 24; i += 1) {
    const x = -0.55 + randCell() * 1.1;
    const z = -0.22 + randCell() * 0.48;
    const cell = ball(group, 0.04 + randCell() * 0.022, i % 4 ? 0x65f2ad : 0xff83bd, [x, -0.275, z], { glow: 0.6, segments: 10, rings: 7 });
    cell.scale.y = 0.55;
  }

  // Condenser and illumination cone
  add(new THREE.CylinderGeometry(0.38, 0.46, 0.3, 28), material(0x2b6268, { metalness: 0.55 }), [0, -0.72, 0], null, group);
  torus(group, 0.4, 0.025, 0x9af6ef, [0, -0.58, 0], [Math.PI / 2, 0, 0], { transparent: true, opacity: 0.55 });
  for (let i = 0; i < 5; i += 1) {
    torus(group, 0.34 - i * 0.02, 0.01, 0x82e8e4, [0, -0.83 + i * 0.035, 0], [Math.PI / 2, 0, 0], { transparent: true, opacity: 0.28 });
  }
  const beam = add(new THREE.ConeGeometry(0.62, 1.2, 32, 1, true), new THREE.MeshBasicMaterial({ color: 0x8ae9ff, transparent: true, opacity: 0.075, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }), [0, -0.95, 0], [0, Math.PI, 0], group);
  beam.renderOrder = -1;

  // Revolving nosepiece and objectives
  const turret = new THREE.Group();
  turret.position.set(0, 0.22, 0);
  add(new THREE.CylinderGeometry(0.62, 0.52, 0.18, 32), material(0x2b5f65, { metalness: 0.6 }), [0, 0, 0], null, turret);
  torus(turret, 0.55, 0.025, 0x8debe4, [0, -0.09, 0], [Math.PI / 2, 0, 0], { transparent: true, opacity: 0.45 });
  const objectives = [
    { x: -0.32, z: 0.2, len: 0.62, ring: 0x66e7dc },
    { x: 0.3, z: 0.24, len: 0.48, ring: 0xffb36d },
    { x: 0.12, z: -0.28, len: 0.78, ring: 0x9fa9ff },
  ];
  objectives.forEach((obj) => {
    add(new THREE.CylinderGeometry(0.14, 0.11, obj.len, 20), material(0x9ab8b8, { metalness: 0.55 }), [obj.x, -0.35, obj.z], [0, 0, 0], turret);
    torus(turret, 0.15, 0.018, obj.ring, [obj.x, -0.35 - obj.len / 2, obj.z], [Math.PI / 2, 0, 0], { glow: 0.5, transparent: true, opacity: 0.75 });
  });
  group.add(turret);

  // Body tube, binocular head and camera port
  add(new THREE.CylinderGeometry(0.26, 0.3, 1.25, 28), material(0x2b5f65, { metalness: 0.55 }), [0, 1.65, 0], null, group);
  box(group, 0.95, 0.32, 0.7, 0x1c464c, [0, 2.28, 0], null, { metalness: 0.5 });
  for (const x of [-0.28, 0.28]) {
    add(new THREE.CylinderGeometry(0.16, 0.18, 0.62, 22), material(0x2c5c62, { metalness: 0.5 }), [x, 2.56, -0.02], [0.12, 0, x > 0 ? -0.14 : 0.14], group);
    lensElement(group, 0.13, 0.045, 0x86dfff, [x, 2.88, -0.04]);
  }
  add(new THREE.CylinderGeometry(0.2, 0.24, 0.42, 22), material(0x1d454a, { metalness: 0.55 }), [0, 2.2, -0.48], [Math.PI / 2, 0, 0], group);
  add(new THREE.CylinderGeometry(0.14, 0.14, 0.08, 20), material(0x67dce5, { emissive: 0x1d6170, emissiveIntensity: 0.4 }), [0, 2.2, -0.72], [Math.PI / 2, 0, 0], group);

  // Fluorescence filter cube
  box(group, 1.1, 0.78, 0.9, 0x1c464c, [1.25, 0.45, 0.72], null, { transparent: true, opacity: 0.62 });
  box(group, 0.78, 0.035, 0.55, 0x9d8cff, [1.25, 0.45, 0.72], [0, 0, 0.72], { glow: 0.5, transparent: true, opacity: 0.68 });
  for (let i = 0; i < 3; i += 1) {
    add(new THREE.CylinderGeometry(0.045, 0.045, 0.94, 8), material(i === 0 ? 0x5ce5ff : 0xff8ec7, { emissive: i === 0 ? 0x145264 : 0x60183b, emissiveIntensity: 0.45 }), [1.1 + i * 0.14, 1.02, 0.72], [0.28, 0, 0.25], group);
  }
  beamCylinder(group, 0.05, 1.15, 0x62e9ff, [1.25, 0.12, 0.42], [0.5, 0, 0.25], 0.22);
  beamCylinder(group, 0.07, 1.28, 0xff9fc9, [1.25, 1.12, 0.42], [-0.35, 0, -0.25], 0.18);

  // Small fasteners / detailing
  for (let i = 0; i < 8; i += 1) {
    const a = (i / 8) * TAU;
    add(new THREE.CylinderGeometry(0.035, 0.035, 0.035, 8), material(0x88a9a8, { metalness: 0.7 }), [Math.cos(a) * 1.95, -1.69, Math.sin(a) * 0.9], [Math.PI / 2, 0, 0], group);
  }

  label(group, '光源 / 视场光阑', [-1.25, -1.42, 0.55], 'LIGHT SOURCE');
  label(group, '聚光镜 / 载物台', [1.05, -0.38, 0.65], 'CONDENSER / STAGE');
  label(group, '物镜转盘', [-0.82, 0.22, 0.48], 'NOSEPIECE');
  label(group, '荧光滤块', [1.65, 0.75, 0.65], 'FILTER CUBE');
  label(group, '目镜 / 相机', [0.0, 2.95, 0.1], 'EYEPIECE / CAMERA');
  label(group, '样品 / 荧光标记', [0.0, 0.12, 0.72], 'SAMPLE');
  group.userData.update = (time) => {
    beam.material.opacity = 0.055 + Math.sin(time * 2) * 0.018;
  };
  return group;
}

/* ------------------------------------------------------------------ */
/* 10 · electron microscopy                                           */
/* ------------------------------------------------------------------ */
function buildElectronMicroscopy() {
  const group = new THREE.Group();
  group.userData.distance = 12.8;
  // Console, feet and control panel
  for (const x of [-1.7, 1.7]) {
    for (const z of [-1.0, 1.0]) {
      add(new THREE.CylinderGeometry(0.18, 0.22, 0.18, 16), material(0x0b1428, { metalness: 0.5 }), [x, -2.05, z], null, group);
    }
  }
  box(group, 4.2, 0.32, 2.7, 0x141d3a, [0, -1.86, 0], null, { metalness: 0.6 });
  box(group, 3.6, 0.2, 2.2, 0x202d50, [0, -1.66, 0], null, { metalness: 0.5 });
  screenPanel(group, 1.3, 0.6, 0x6ff2d6, [0.75, -1.15, 1.18], [0.05, 0, 0]);
  for (let i = 0; i < 3; i += 1) {
    knob(group, 0.12, 0.08, 0x7290b8, [-0.65 + i * 0.36, -1.24, 1.2], [Math.PI / 2, 0, 0], 5);
  }
  box(group, 1.3, 0.08, 0.35, 0x0a1428, [-0.62, -1.43, 1.16], null, { metalness: 0.4 });

  // Vacuum column: stacked shells, flanges and internal apertures
  add(new THREE.CylinderGeometry(1.05, 1.12, 4.9, 40, 1, true), glass(0x8798ff, 0.07), [0, 0.45, 0], null, group);
  const outer = add(new THREE.CylinderGeometry(1.0, 1.0, 4.6, 40, 1, true), new THREE.MeshBasicMaterial({ color: 0x8c9ee8, wireframe: true, transparent: true, opacity: 0.055 }), [0, 0.45, 0], null, group);
  outer.renderOrder = 3;
  for (let i = 0; i < 5; i += 1) {
    const y = -1.5 + i * 1.05;
    add(new THREE.CylinderGeometry(1.08, 1.08, 0.12, 40), material(0x2c3a60, { metalness: 0.65 }), [0, y, 0], null, group);
    torus(group, 1.06, 0.035, 0x9fb4ff, [0, y, 0], [Math.PI / 2, 0, 0], { transparent: true, opacity: 0.4 });
  }
  // Electron gun, anode and apertures
  add(new THREE.CylinderGeometry(0.34, 0.48, 0.68, 28), material(0x6178b0, { metalness: 0.55 }), [0, 3.48, 0], null, group);
  add(new THREE.CylinderGeometry(0.16, 0.26, 0.36, 20), material(0x203260, { metalness: 0.6 }), [0, 3.9, 0], null, group);
  ball(group, 0.11, 0xd7e2ff, [0, 3.62, 0], { glow: 1.2, segments: 12, rings: 8 });
  torus(group, 0.5, 0.04, 0xb2c3ff, [0, 3.12, 0], [Math.PI / 2, 0, 0], { glow: 0.6 });
  torus(group, 0.66, 0.035, 0x7085c7, [0, 2.55, 0], [Math.PI / 2, 0, 0], { transparent: true, opacity: 0.5 });
  for (let i = 0; i < 3; i += 1) {
    const disc = add(new THREE.CylinderGeometry(0.48, 0.48, 0.025, 28), material(0x394b7c, { metalness: 0.4 }), [0, 2.18 - i * 0.62, 0], null, group);
    ball(group, 0.055, 0x8fdfff, [0, 2.18 - i * 0.62 + 0.018, 0], { glow: 0.6, segments: 8, rings: 5 });
    disc.renderOrder = 1;
  }
  for (let i = 0; i < 5; i += 1) {
    torus(group, 0.74, 0.025, 0x93aaff, [0, 1.62 - i * 0.11, 0], [Math.PI / 2, 0, 0], { transparent: true, opacity: 0.5 });
  }
  // Specimen airlock and holder rod
  add(new THREE.CylinderGeometry(0.22, 0.22, 0.9, 20), glass(0xb4c4ff, 0.2), [1.55, 0.38, 0], [0, 0, Math.PI / 2], group);
  add(new THREE.CylinderGeometry(0.28, 0.28, 0.32, 20), material(0x2e406c, { metalness: 0.6 }), [1.15, 0.38, 0], [0, 0, Math.PI / 2], group);
  box(group, 1.8, 0.06, 1.15, 0x27335a, [0, 0.06, 0], null, { metalness: 0.55 });
  for (let i = 0; i < 5; i += 1) {
    ball(group, 0.045, 0xa8eaff, [-0.48 + i * 0.22, 0.13, -0.1 + (i % 2) * 0.22], { glow: 0.7, segments: 8, rings: 5 });
  }
  // Projector lens and viewing screen
  add(new THREE.CylinderGeometry(0.62, 0.74, 0.32, 28), material(0x202f58, { metalness: 0.55 }), [0, -0.82, 0], null, group);
  torus(group, 0.62, 0.04, 0x83a0ff, [0, -0.98, 0], [Math.PI / 2, 0, 0], { transparent: true, opacity: 0.55 });
  box(group, 1.65, 0.1, 1.25, 0x111a36, [0, -1.35, 0.08], null, { metalness: 0.5 });
  screenPanel(group, 1.25, 0.85, 0x4ff0b3, [0, -1.26, 0.42], [Math.PI / 2, 0, 0]);
  // Side vacuum pump and cable
  add(new THREE.CylinderGeometry(0.35, 0.42, 1.0, 24), material(0x2a4160, { metalness: 0.5 }), [-1.65, -0.75, 0.15], null, group);
  torus(group, 0.4, 0.05, 0x6687a8, [-1.65, -0.3, 0.15], [Math.PI / 2, 0, 0], { transparent: true, opacity: 0.5 });
  tube(group, [[-1.65, -1.05, 0.1], [-1.3, -1.3, 0.1], [-0.4, -1.5, 0.1]], 0.055, 0x35556f, { metalness: 0.5, segments: 20 });
  // Beam
  const beam = add(new THREE.CylinderGeometry(0.028, 0.1, 4.5, 16), new THREE.MeshBasicMaterial({ color: 0xaab8ff, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending, depthWrite: false }), [0, 1.0, 0], null, group);
  label(group, '电子枪 / 灯丝', [0.0, 4.15, 0.2], 'ELECTRON GUN');
  label(group, '阳极 / 光阑', [-0.95, 2.75, 0.35], 'ANODE / APERTURE');
  label(group, '电磁透镜', [-1.2, 1.25, 0.35], 'MAGNETIC LENS');
  label(group, '样品杆', [1.6, 1.0, 0.3], 'SPECIMEN HOLDER');
  label(group, '观察屏 / 相机', [0.0, -1.75, 0.55], 'VIEWING SCREEN');
  label(group, '控制台', [0.7, -1.0, 1.35], 'CONTROL CONSOLE');
  group.userData.update = (time) => {
    beam.material.opacity = 0.22 + Math.sin(time * 4.2) * 0.06;
  };
  return group;
}

/* ------------------------------------------------------------------ */
/* 11 · differential centrifugation                                   */
/* ------------------------------------------------------------------ */
function buildCentrifugation() {
  const group = new THREE.Group();
  group.userData.distance = 11.8;
  // Instrument base and feet
  for (const x of [-2.0, 2.0]) {
    for (const z of [-1.1, 1.1]) {
      add(new THREE.CylinderGeometry(0.18, 0.23, 0.2, 16), material(0x0c2024, { metalness: 0.5 }), [x, -2.1, z], null, group);
    }
  }
  box(group, 5.3, 0.34, 3.7, 0x142b31, [0, -1.9, 0], null, { metalness: 0.6 });
  box(group, 4.8, 0.16, 3.2, 0x23464d, [0, -1.7, 0], null, { metalness: 0.5 });
  // Control console
  box(group, 2.65, 0.9, 0.38, 0x102b31, [0, -1.12, 1.55], null, { metalness: 0.55 });
  screenPanel(group, 1.15, 0.42, 0x6ff5d5, [-0.45, -1.02, 1.76], [0.04, 0, 0]);
  knob(group, 0.16, 0.1, 0x4c8289, [0.85, -1.0, 1.78], [Math.PI / 2, 0, 0], 6);
  knob(group, 0.11, 0.08, 0x4c8289, [1.15, -1.0, 1.78], [Math.PI / 2, 0, 0], 5);
  box(group, 0.75, 0.14, 0.05, 0x2d7f78, [0.55, -1.18, 1.75], null, { glow: 0.5 });
  // Rotor chamber with transparent lid
  add(new THREE.CylinderGeometry(2.85, 3.0, 0.85, 64, 1, true), glass(0x7be4dc, 0.08), [0, -0.65, 0], null, group);
  torus(group, 2.85, 0.06, 0x5b999e, [0, -0.24, 0], [Math.PI / 2, 0, 0], { metalness: 0.6, transparent: true, opacity: 0.6 });
  torus(group, 2.95, 0.05, 0x5b999e, [0, -1.02, 0], [Math.PI / 2, 0, 0], { metalness: 0.6, transparent: true, opacity: 0.55 });
  add(new THREE.CylinderGeometry(2.6, 2.6, 0.08, 64, 1, true), glass(0x9df4e8, 0.1), [0, 0.0, 0], null, group);
  add(new THREE.TorusGeometry(2.55, 0.035, 8, 72), material(0x7fe6d7, { transparent: true, opacity: 0.5, emissive: 0x1f7069, emissiveIntensity: 0.4 }), [0, 0.01, 0], [Math.PI / 2, 0, 0], group);
  add(new THREE.CylinderGeometry(0.18, 0.18, 0.25, 16), material(0x4e7f85, { metalness: 0.5 }), [0, 0.2, 0], null, group);
  // Rotor
  const rotor = new THREE.Group();
  rotor.position.y = 0.05;
  add(new THREE.CylinderGeometry(0.52, 0.62, 0.55, 32), material(0x3f6c73, { metalness: 0.65, roughness: 0.3 }), [0, 0, 0], null, rotor);
  torus(rotor, 0.53, 0.05, 0x8ce6d9, [0, 0.25, 0], [Math.PI / 2, 0, 0], { transparent: true, opacity: 0.55 });
  const tubes = [];
  for (let i = 0; i < 6; i += 1) {
    const holder = new THREE.Group();
    holder.rotation.y = (i / 6) * TAU;
    box(holder, 1.75, 0.11, 0.42, 0x355d64, [0.95, 0.06, 0], null, { metalness: 0.6 });
    // trunnion pins
    for (const z of [-0.24, 0.24]) {
      add(new THREE.CylinderGeometry(0.055, 0.055, 0.18, 10), material(0xb6f1e4, { metalness: 0.55 }), [1.55, 0.04, z], [Math.PI / 2, 0, 0], holder);
    }
    const bucket = new THREE.Group();
    bucket.position.set(1.65, 0.1, 0);
    bucket.rotation.z = -0.82;
    add(new THREE.CylinderGeometry(0.24, 0.2, 1.55, 24, 1, true), glass(0xc6f4ec, 0.24), [0, 0.36, 0], null, bucket);
    add(new THREE.CylinderGeometry(0.26, 0.24, 0.16, 24), material(0x5c8c91, { metalness: 0.55 }), [0, 1.17, 0], null, bucket);
    torus(bucket, 0.24, 0.025, 0xb8fff2, [0, 1.27, 0], [Math.PI / 2, 0, 0], { transparent: true, opacity: 0.55 });
    const layerColors = [0x7fd7ff, 0xffb46e, 0x9ff2b0];
    for (let k = 0; k < 3; k += 1) {
      add(new THREE.CylinderGeometry(0.18, 0.18, 0.28, 18), material(layerColors[k], { transparent: true, opacity: 0.78, emissive: layerColors[k], emissiveIntensity: 0.1 }), [0, 0.48 - k * 0.3, 0], null, bucket);
    }
    add(new THREE.CylinderGeometry(0.13, 0.15, 0.1, 14), material(0xd6fff3, { glow: 0.25 }), [0, -0.37, 0], null, bucket); // pellet
    holder.add(bucket);
    rotor.add(holder);
    tubes.push(bucket);
  }
  group.add(rotor);
  label(group, '转子 / 吊桶', [-1.9, 1.25, 0.3], 'ROTOR / BUCKET');
  label(group, '密度梯度', [2.25, 1.0, 0.45], 'DENSITY GRADIENT');
  label(group, '细胞核沉淀', [2.05, 0.35, 0.45], 'NUCLEAR PELLET');
  label(group, '线粒体 / 微粒体', [2.35, -0.4, 0.3], 'ORGANELLES');
  label(group, '转速控制', [-1.65, -1.1, 1.8], 'SPEED CONTROL');
  group.userData.update = (time) => {
    rotor.rotation.y = time * 1.15;
    tubes.forEach((tube, i) => { tube.rotation.z = -0.82 - Math.sin(time * 2.2 + i) * 0.018; });
  };
  return group;
}

/* ------------------------------------------------------------------ */
/* 12 · cell culture                                                  */
/* ------------------------------------------------------------------ */
function buildCellCulture() {
  const group = new THREE.Group();
  group.userData.distance = 11.2;
  // Lab bench
  box(group, 5.6, 0.18, 3.2, 0x0c2024, [0, -1.28, 0], null, { metalness: 0.45 });
  box(group, 4.6, 0.12, 2.5, 0x18363a, [0, -1.16, 0], null, { metalness: 0.35 });
  // T-flask: bottom, walls, shoulders and frame
  box(group, 4.2, 0.14, 2.35, 0x71c9c0, [0, -1.05, 0], null, { glass: true, opacity: 0.22 });
  box(group, 4.05, 1.85, 2.2, 0x9ce7dc, [0, 0.0, 0], null, { glass: true, opacity: 0.075 });
  box(group, 4.05, 0.09, 2.2, 0x8ae2d7, [0, 0.92, 0], null, { glass: true, opacity: 0.16 });
  for (const x of [-2.02, 2.02]) {
    for (const z of [-1.1, 1.1]) {
      box(group, 0.07, 1.95, 0.07, 0x87d6cd, [x, -0.05, z], null, { transparent: true, opacity: 0.4 });
    }
  }
  for (const z of [-1.1, 1.1]) {
    box(group, 4.05, 0.07, 0.07, 0x87d6cd, [0, 0.92, z], null, { transparent: true, opacity: 0.4 });
  }
  // Angled neck and filter cap
  add(new THREE.CylinderGeometry(0.3, 0.4, 1.1, 28), glass(0xb9fff3, 0.15), [2.25, 0.88, 0], [0, 0, -0.56], group);
  add(new THREE.CylinderGeometry(0.38, 0.35, 0.28, 28), material(0x2b6d69, { metalness: 0.35 }), [2.75, 1.2, 0], [0, 0, -0.56], group);
  const cap = new THREE.Group();
  cap.position.set(2.88, 1.27, 0);
  cap.rotation.z = -0.56;
  add(new THREE.CylinderGeometry(0.39, 0.39, 0.32, 28), material(0x6fbab0, { metalness: 0.35 }), [0, 0, 0], null, cap);
  for (let i = 0; i < 8; i += 1) {
    torus(cap, 0.39, 0.012, 0xd2fff4, [0, -0.12 + i * 0.033, 0], [Math.PI / 2, 0, 0], { transparent: true, opacity: 0.35 });
  }
  add(new THREE.CylinderGeometry(0.16, 0.16, 0.06, 20), material(0x295955, { metalness: 0.45 }), [0, 0.18, 0], null, cap);
  group.add(cap);
  for (let i = 0; i < 7; i += 1) {
    box(group, 0.12, 0.025, 0.02, 0xc7fff5, [-1.7 + i * 0.18, -0.3, 1.12], null, { transparent: true, opacity: 0.45 });
    box(group, 0.12, 0.025, 0.02, 0xc7fff5, [-1.7 + i * 0.18, -0.52, 1.12], null, { transparent: true, opacity: 0.45 });
  }
  // Medium, meniscus and bubbles
  box(group, 3.9, 0.48, 2.05, 0x1c6d68, [0, -0.68, 0], null, { transparent: true, opacity: 0.23 });
  box(group, 3.9, 0.025, 2.05, 0x8ff5e2, [0, -0.43, 0], null, { transparent: true, opacity: 0.18 });
  const r = rand(222);
  for (let i = 0; i < 18; i += 1) {
    ball(group, 0.022 + r() * 0.02, 0xc9fff3, [-1.7 + r() * 3.4, -0.36 + r() * 0.22, -0.85 + r() * 1.7], { glow: 0.2, segments: 7, rings: 5 });
  }
  // Adherent cell monolayer with nuclei and dividing pairs
  for (let i = 0; i < 62; i += 1) {
    const x = -1.65 + r() * 3.3;
    const z = -0.82 + r() * 1.64;
    const y = -0.91 + (r() - 0.5) * 0.022;
    const cell = ball(group, 0.07 + r() * 0.035, i % 5 === 0 ? 0xffaad5 : 0x78eab1, [x, y, z], { glow: 0.25, segments: 12, rings: 8 });
    cell.scale.y = 0.5;
    ball(group, 0.026, 0x6bb9a8, [x, y + 0.035, z], { glow: 0.15, segments: 7, rings: 5 });
    if (i % 9 === 0) {
      const x2 = x + 0.12;
      const c2 = ball(group, 0.065, 0x8ff2bd, [x2, y + 0.01, z + 0.05], { glow: 0.22, segments: 10, rings: 7 });
      c2.scale.y = 0.5;
    }
  }
  // Floating dead/detached cells and a few bubbles
  for (let i = 0; i < 7; i += 1) {
    ball(group, 0.05, 0x9ad8c4, [-1.2 + r() * 2.4, -0.28 + r() * 0.8, -0.4 + r() * 0.8], { glow: 0.18, segments: 8, rings: 6 });
  }
  // Pipette with bulb and drop
  const pipette = new THREE.Group();
  pipette.position.set(-1.15, 1.9, 0.25);
  pipette.rotation.z = 0.3;
  add(new THREE.CylinderGeometry(0.055, 0.09, 2.0, 16), material(0xc4efe8, { transparent: true, opacity: 0.6 }), [0, 0, 0], null, pipette);
  ball(pipette, 0.28, 0x9de3d7, [0, 0.95, 0], { glass: true, opacity: 0.35, segments: 20, rings: 14 });
  add(new THREE.CylinderGeometry(0.09, 0.055, 0.22, 14), material(0xd6fff4, { transparent: true, opacity: 0.65 }), [0, -1.1, 0], null, pipette);
  ball(pipette, 0.065, 0x9df5e5, [0, -1.28, 0], { glow: 0.55, segments: 10, rings: 7 });
  group.add(pipette);
  label(group, 'T 培养瓶', [-1.7, 1.15, 0.5], 'T-FLASK');
  label(group, '滤膜盖', [2.85, 1.65, 0.2], 'FILTER CAP');
  label(group, '培养基 / 液面', [0.35, -0.3, 0.8], 'MEDIUM / MENISCUS');
  label(group, '贴壁细胞单层', [-0.8, -1.05, 0.5], 'CELL MONOLAYER');
  label(group, '移液管 / 无菌操作', [-1.6, 2.35, 0.3], 'PIPETTE / STERILE');
  group.userData.update = (time) => {
    pipette.position.y = 1.9 + Math.sin(time * 0.5) * 0.02;
  };
  return group;
}

/* ------------------------------------------------------------------ */
/* 13 · FRAP                                                          */
/* ------------------------------------------------------------------ */
function buildFrap() {
  const group = new THREE.Group();
  group.userData.distance = 11.0;
  // Coverslip and microscope stage
  box(group, 6.1, 0.2, 3.1, 0x0b2025, [0, -1.35, 0], null, { metalness: 0.45 });
  box(group, 4.8, 0.06, 2.4, 0x8ddbd3, [0, -1.17, 0], null, { glass: true, opacity: 0.16 });
  box(group, 4.8, 0.03, 2.4, 0xc4fff7, [0, -1.13, 0], null, { glass: true, opacity: 0.1 });
  // Cell, membrane and nucleus
  add(new THREE.SphereGeometry(2.0, 56, 34), glass(0x61d8be, 0.14), [0, -0.72, 0], null, group, [1.35, 0.3, 1.0]);
  torus(group, 2.0, 0.025, 0x86efd7, [0, -0.72, 0], [Math.PI / 2, 0, 0], { transparent: true, opacity: 0.35 });
  add(new THREE.SphereGeometry(0.48, 32, 20), material(0xb58cff, { transparent: true, opacity: 0.68 }), [-0.58, -0.62, 0.02], null, group);
  ball(group, 0.19, 0xffabd8, [-0.58, -0.62, 0.02], { glow: 0.35, segments: 16, rings: 10 });
  const r = rand(781);
  const dots = [];
  for (let i = 0; i < 120; i += 1) {
    const a = r() * TAU;
    const rr = 0.55 + Math.sqrt(r()) * 1.25;
    const dot = ball(group, 0.022 + r() * 0.018, 0x7dffd2, [Math.cos(a) * rr, -0.48 + r() * 0.055, Math.sin(a) * rr * 0.72], { glow: 0.5, segments: 7, rings: 5 });
    dots.push(dot);
  }
  // ROI and bleach spot
  const region = new THREE.Group();
  region.position.set(0.72, -0.4, 0.08);
  const spot = add(new THREE.CircleGeometry(0.5, 40), new THREE.MeshBasicMaterial({ color: 0x9dffe0, transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthWrite: false }), [0, 0, 0], [-Math.PI / 2, 0, 0], region);
  torus(region, 0.56, 0.018, 0xffffff, [0, 0.01, 0], [Math.PI / 2, 0, 0], { glow: 0.5, transparent: true, opacity: 0.65 });
  torus(region, 0.76, 0.01, 0x9fffe8, [0, 0.02, 0], [Math.PI / 2, 0, 0], { transparent: true, opacity: 0.22 });
  group.add(region);
  // Objective above ROI and laser path
  add(new THREE.CylinderGeometry(0.42, 0.34, 0.6, 28), material(0x7bd7d0, { metalness: 0.4 }), [0.72, 1.25, 0.08], null, group);
  add(new THREE.CylinderGeometry(0.27, 0.27, 0.42, 24), material(0x2a5a5e, { metalness: 0.55 }), [0.72, 1.7, 0.08], null, group);
  torus(group, 0.43, 0.03, 0x9cebe2, [0.72, 1.55, 0.08], [Math.PI / 2, 0, 0], { transparent: true, opacity: 0.5 });
  const laser = add(new THREE.CylinderGeometry(0.02, 0.09, 1.65, 14), new THREE.MeshBasicMaterial({ color: 0xff7fc8, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false }), [0.72, 0.48, 0.08], null, group);
  for (let i = 0; i < 3; i += 1) {
    torus(group, 0.62 + i * 0.13, 0.01, 0xff9fc9, [0.72, -0.36 + i * 0.1, 0.08], [Math.PI / 2, 0, 0], { transparent: true, opacity: 0.14 });
  }
  // A small recovery plot on the right
  const chart = new THREE.Group();
  chart.position.set(2.25, -0.05, 0.15);
  chart.rotation.y = -0.32;
  screenPanel(chart, 1.16, 0.82, 0x0b2d2a, [0, 0, 0]);
  box(chart, 0.012, 0.52, 0.012, 0x76b8aa, [-0.42, -0.02, 0.045], null, { transparent: true, opacity: 0.6 });
  box(chart, 0.84, 0.01, 0.012, 0x76b8aa, [0.0, -0.27, 0.045], null, { transparent: true, opacity: 0.6 });
  const chartPoints = [];
  for (let i = 0; i <= 24; i += 1) {
    const u = i / 24;
    const y = -0.26 + (u < 0.2 ? 0.02 : u < 0.32 ? 0.02 - (u - 0.2) * 0.8 : 0.02 + Math.min(0.42, (u - 0.32) * 0.7));
    chartPoints.push(new THREE.Vector3(-0.4 + u * 0.78, y, 0.05));
  }
  const chartCurve = new THREE.CatmullRomCurve3(chartPoints);
  add(new THREE.TubeGeometry(chartCurve, 60, 0.01, 6, false), glow(0x7dffce, 0.5), null, null, chart);
  const chartMarker = ball(chart, 0.035, 0xffd47e, [chartPoints[0].x, chartPoints[0].y, 0.07], { glow: 1.0, segments: 10, rings: 7 });
  group.add(chart);
  group.userData.update = (time) => {
    const cycle = time % 6.2;
    let recovery;
    if (cycle < 2.2) recovery = 1;
    else if (cycle < 2.6) recovery = 1 - (cycle - 2.2) / 0.4;
    else recovery = Math.min(1, (cycle - 2.6) / 3.6);
    spot.material.opacity = 0.08 + recovery * 0.8;
    spot.material.color.setHSL(0.44, 0.8, 0.52 + recovery * 0.28);
    laser.material.opacity = cycle > 2.12 && cycle < 2.58 ? 0.5 : 0.05;
    dots.forEach((dot, i) => {
      dot.material.emissiveIntensity = 0.22 + (0.38 + Math.sin(time * 1.5 + i) * 0.15) * (0.25 + recovery * 0.55);
    });
    const u = Math.min(1, Math.max(0, (cycle < 2.2 ? 0.1 : cycle < 2.6 ? 0.1 + (cycle - 2.2) / 0.4 * 0.22 : 0.32 + (cycle - 2.6) / 3.6 * 0.68)));
    const pos = chartCurve.getPoint(u);
    chartMarker.position.set(pos.x, pos.y, 0.07);
  };
  label(group, '荧光标记细胞', [-1.85, 0.35, 0.4], 'FLUORESCENT CELL');
  label(group, '物镜', [1.45, 1.45, 0.2], 'OBJECTIVE');
  label(group, '漂白区 ROI', [1.55, -0.15, 0.2], 'BLEACH ROI');
  label(group, '激光脉冲', [1.55, 1.0, 0.1], 'LASER PULSE');
  label(group, '恢复曲线', [2.25, -0.85, 0.35], 'RECOVERY');
  return group;
}

/* ------------------------------------------------------------------ */
/* 14 · FRET                                                          */
/* ------------------------------------------------------------------ */
function buildFret() {
  const group = new THREE.Group();
  group.userData.distance = 11.4;
  // Lab bench and membrane
  box(group, 6.0, 0.2, 3.1, 0x0b2025, [0, -1.45, 0], null, { metalness: 0.45 });
  box(group, 5.35, 0.22, 2.2, 0x1a4b4e, [0, -0.88, 0], null, { transparent: true, opacity: 0.65 });
  for (let i = 0; i < 16; i += 1) {
    const x = -2.4 + i * 0.32;
    for (const z of [-0.82, 0.82]) {
      ball(group, 0.04, 0x6fe5d5, [x, -0.72, z], { glow: 0.22, segments: 7, rings: 5 });
      ball(group, 0.035, 0x4ba7a4, [x, -1.02, z], { glow: 0.15, segments: 6, rings: 4 });
    }
  }
  // Receptor dimer: extracellular domains, transmembrane helices, intracellular tails
  for (const x of [-0.42, 0.42]) {
    add(new THREE.CylinderGeometry(0.16, 0.2, 1.05, 20), material(0x7184d2, { transparent: true, opacity: 0.85 }), [x, -0.25, 0], null, group);
    ball(group, 0.3, 0x7c94df, [x, 0.45, 0.02], { transparent: true, opacity: 0.76, segments: 22, rings: 14 });
    ball(group, 0.17, 0x9eb0ff, [x, 0.68, 0.02], { transparent: true, opacity: 0.65, segments: 14, rings: 9 });
    add(new THREE.CylinderGeometry(0.075, 0.1, 0.55, 14), material(0x5368a5, { metalness: 0.2 }), [x, -1.05, 0], null, group);
    for (let i = 0; i < 3; i += 1) {
      torus(group, 0.18, 0.015, 0x9baaff, [x, -0.65 + i * 0.22, 0], [Math.PI / 2, 0, 0], { transparent: true, opacity: 0.28 });
    }
  }
  capsule(group, 0.11, 0.5, 0x91a5ec, [0, 0.16, 0], [0, 0, Math.PI / 2], { transparent: true, opacity: 0.7 });
  // Donor and acceptor fluorophores with lobes and rims
  const donorGroup = new THREE.Group();
  donorGroup.position.set(-0.42, 0.95, 0.12);
  ball(donorGroup, 0.23, 0x4ce2ff, [0, 0, 0], { glow: 1.0, segments: 28, rings: 18 });
  torus(donorGroup, 0.3, 0.022, 0x9ef7ff, [0, 0, 0], [Math.PI / 2, 0, 0], { transparent: true, opacity: 0.6 });
  for (let i = 0; i < 4; i += 1) {
    const a = (i / 4) * TAU;
    ball(donorGroup, 0.055, 0x6be6ff, [Math.cos(a) * 0.25, 0.06, Math.sin(a) * 0.25], { glow: 0.5, segments: 8, rings: 5 });
  }
  group.add(donorGroup);
  const acceptorGroup = new THREE.Group();
  acceptorGroup.position.set(0.42, 0.95, 0.12);
  ball(acceptorGroup, 0.23, 0xffb45e, [0, 0, 0], { glow: 0.5, segments: 28, rings: 18 });
  torus(acceptorGroup, 0.3, 0.022, 0xffd89b, [0, 0, 0], [Math.PI / 2, 0, 0], { transparent: true, opacity: 0.6 });
  for (let i = 0; i < 4; i += 1) {
    const a = (i / 4) * TAU + 0.3;
    ball(acceptorGroup, 0.05, 0xffcf85, [Math.cos(a) * 0.25, -0.06, Math.sin(a) * 0.25], { glow: 0.35, segments: 8, rings: 5 });
  }
  group.add(acceptorGroup);
  // Energy transfer field and distance bracket
  for (let i = 0; i < 4; i += 1) {
    torus(group, 0.28 + i * 0.1, 0.012, 0x76f5df, [0, 0.95, 0.12], [Math.PI / 2, 0, 0], { transparent: true, opacity: 0.28 - i * 0.05 });
  }
  box(group, 0.78, 0.012, 0.012, 0x9ff7e2, [0, 1.34, 0.12], null, { transparent: true, opacity: 0.45 });
  for (const x of [-0.42, 0.42]) {
    box(group, 0.012, 0.12, 0.012, 0x9ff7e2, [x, 1.3, 0.12], null, { transparent: true, opacity: 0.45 });
  }
  // Excitation and emission beams
  const excitation = add(new THREE.CylinderGeometry(0.035, 0.12, 2.15, 14), new THREE.MeshBasicMaterial({ color: 0x5de8ff, transparent: true, opacity: 0.24, blending: THREE.AdditiveBlending, depthWrite: false }), [-0.42, 1.95, 0.12], null, group);
  const emission = add(new THREE.CylinderGeometry(0.035, 0.14, 2.1, 14), new THREE.MeshBasicMaterial({ color: 0xffb45e, transparent: true, opacity: 0.18, blending: THREE.AdditiveBlending, depthWrite: false }), [0.42, 1.95, 0.12], null, group);
  // Spectral readout panel: donor emission falls, acceptor rises
  const chart = new THREE.Group();
  chart.position.set(2.45, 0.15, 0.25);
  chart.rotation.y = -0.35;
  screenPanel(chart, 1.22, 0.9, 0x0b2927, [0, 0, 0]);
  box(chart, 0.7, 0.01, 0.012, 0x80c8b7, [0, -0.27, 0.05], null, { transparent: true, opacity: 0.5 });
  const donorBar = add(new THREE.BoxGeometry(0.16, 0.5, 0.035), glow(0x55e9ff, 0.45), [-0.19, -0.27, 0.06], null, chart);
  const acceptorBar = add(new THREE.BoxGeometry(0.16, 0.5, 0.035), glow(0xffb45e, 0.45), [0.19, -0.27, 0.06], null, chart);
  donorBar.geometry.translate(0, 0.25, 0);
  acceptorBar.geometry.translate(0, 0.25, 0);
  group.add(chart);
  group.userData.update = (time) => {
    const wave = Math.sin(time * 1.8);
    donorGroup.rotation.y = time * 0.35;
    acceptorGroup.rotation.y = -time * 0.35;
    donorGroup.children[0].material.emissiveIntensity = 0.55 + Math.max(0, -wave) * 0.45;
    acceptorGroup.children[0].material.emissiveIntensity = 0.4 + Math.max(0, wave) * 0.65;
    excitation.material.opacity = 0.18 + Math.max(0, -wave) * 0.08;
    emission.material.opacity = 0.1 + Math.max(0, wave) * 0.12;
    donorBar.scale.y = 0.35 + Math.max(0, -wave) * 0.55;
    acceptorBar.scale.y = 0.35 + Math.max(0, wave) * 0.55;
  };
  label(group, '供体荧光团', [-1.3, 1.55, 0.3], 'DONOR');
  label(group, '受体荧光团', [1.35, 1.55, 0.3], 'ACCEPTOR');
  label(group, '能量转移', [0.0, 1.32, 0.4], 'ENERGY TRANSFER');
  label(group, '距离 1–10 nm', [0.0, -0.28, 0.5], 'DISTANCE');
  label(group, '供体发射 ↓ / 受体发射 ↑', [2.35, -0.4, 0.4], 'SPECTRAL SHIFT');
  return group;
}

const BUILDERS = {
  'prokaryote-eukaryote': buildProkaryoteEukaryote,
  'membrane-mosaic': buildMembrane,
  transport: buildTransport,
  endomembrane: buildEndomembrane,
  'mito-chloro': buildMitoChloro,
  cytoskeleton: buildCytoskeleton,
  nucleus: buildNucleus,
  ribosome: buildRibosome,
  'light-microscopy': buildLightMicroscopy,
  'electron-microscopy': buildElectronMicroscopy,
  centrifugation: buildCentrifugation,
  'cell-culture': buildCellCulture,
  frap: buildFrap,
  fret: buildFret,
};

function disposeObject(object) {
  object.traverse((child) => {
    if (child.geometry) child.geometry.dispose();
    if (child.material) {
      const materials = Array.isArray(child.material) ? child.material : [child.material];
      materials.forEach((mat) => mat.dispose());
    }
  });
}

export function createModelScene(container, options = {}) {
  const { onReady, onError, onModelChange } = options;
  const width = () => Math.max(320, container.clientWidth || window.innerWidth);
  const height = () => Math.max(320, container.clientHeight || window.innerHeight);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.setSize(width(), height());
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.42;
  renderer.domElement.className = 'cm-canvas';
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x02070a);
  scene.fog = new THREE.FogExp2(0x02070a, 0.026);
  const camera = new THREE.PerspectiveCamera(38, width() / height(), 0.1, 80);
  camera.position.set(0, 2.4, 13);
  camera.lookAt(0, 0, 0);

  const pmrem = new THREE.PMREMGenerator(renderer);
  pmrem.compileEquirectangularShader();
  const env = pmrem.fromScene(new RoomEnvironment(), 0.05).texture;
  scene.environment = env;

  scene.add(new THREE.HemisphereLight(0x7ce9dc, 0x151128, 0.52));
  const key = new THREE.DirectionalLight(0xe8fff9, 1.45);
  key.position.set(4, 8, 7);
  scene.add(key);
  const fill = new THREE.PointLight(0x58e8e2, 8, 22, 2);
  fill.position.set(-5, 1, 3);
  scene.add(fill);
  const rim = new THREE.PointLight(0xff7fc8, 6.5, 18, 2);
  rim.position.set(5, 2, -4);
  scene.add(rim);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(4.85, 0.01, 6, 120),
    new THREE.MeshBasicMaterial({ color: 0x7ff7e4, transparent: true, opacity: 0.2 })
  );
  ring.position.y = -3.18;
  ring.rotation.x = Math.PI / 2;
  scene.add(ring);
  const grid = new THREE.GridHelper(18, 36, 0x153c3c, 0x0c2424);
  grid.position.y = -3.2;
  grid.material.transparent = true;
  grid.material.opacity = 0.1;
  scene.add(grid);

  const dustGeometry = new THREE.BufferGeometry();
  const dustCount = 520;
  const dustPositions = new Float32Array(dustCount * 3);
  const randDust = rand(912);
  for (let i = 0; i < dustCount; i += 1) {
    dustPositions[i * 3] = (randDust() - 0.5) * 22;
    dustPositions[i * 3 + 1] = (randDust() - 0.5) * 11;
    dustPositions[i * 3 + 2] = (randDust() - 0.5) * 18;
  }
  dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
  const dust = new THREE.Points(dustGeometry, new THREE.PointsMaterial({ color: 0x9cf8e9, size: 0.022, transparent: true, opacity: 0.32, depthWrite: false }));
  scene.add(dust);

  const root = new THREE.Group();
  scene.add(root);

  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(width(), height()), 0.16, 0.42, 0.97);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  const labelLayer = document.createElement('div');
  labelLayer.className = 'cm-label-layer';
  container.appendChild(labelLayer);
  const labelNodes = [];
  let current = null;
  let labels = [];
  let distance = 13;
  let targetDistance = 13;
  let yaw = 0.15;
  let targetYaw = 0.15;
  let pitch = 0;
  let targetPitch = 0;
  let dragging = false;
  let pointerX = 0;
  let pointerY = 0;
  let autoRotate = true;
  let ready = false;
  let disposed = false;
  const clock = new THREE.Clock();

  function clearLabels() {
    labelLayer.textContent = '';
    labelNodes.length = 0;
  }
  function makeLabels(items) {
    clearLabels();
    labels = items || [];
    labels.forEach((item) => {
      const el = document.createElement('div');
      el.className = 'cm-label';
      el.innerHTML = `<i></i><span><b>${item.text}</b>${item.sub ? `<em>${item.sub}</em>` : ''}</span>`;
      labelLayer.appendChild(el);
      labelNodes.push({ el, position: item.position });
    });
  }
  function updateLabels() {
    const w = width();
    const h = height();
    const v = new THREE.Vector3();
    labelNodes.forEach((node, index) => {
      v.copy(node.position).applyMatrix4(root.matrixWorld).project(camera);
      const visible = v.z > -1 && v.z < 1 && Math.abs(v.x) < 1.3 && Math.abs(v.y) < 1.3;
      const x = (v.x * 0.5 + 0.5) * w;
      const y = (-v.y * 0.5 + 0.5) * h;
      node.el.style.opacity = visible ? '1' : '0';
      node.el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      node.el.style.zIndex = String(10 + index);
    });
  }
  function setModel(id) {
    const spec = modelById(id);
    const builder = BUILDERS[spec.id];
    if (!builder) return;
    if (current) {
      root.remove(current);
      disposeObject(current);
    }
    current = builder();
    current.userData.modelId = spec.id;
    root.add(current);
    labels = current.userData.labels || [];
    makeLabels(labels);
    distance = current.userData.distance || 13;
    targetDistance = distance;
    yaw = 0.15;
    targetYaw = 0.15;
    pitch = 0;
    targetPitch = 0;
    if (onModelChange) onModelChange(spec);
    if (!ready) {
      ready = true;
      if (onReady) onReady(spec);
    }
  }
  function resetView() {
    targetYaw = 0.15;
    targetPitch = 0;
    targetDistance = current?.userData.distance || 13;
  }
  function setAutoRotate(value) {
    autoRotate = Boolean(value);
  }
  function resize() {
    const w = width();
    const h = height();
    renderer.setSize(w, h);
    composer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);

  function onPointerDown(event) {
    dragging = true;
    pointerX = event.clientX;
    pointerY = event.clientY;
    renderer.domElement.setPointerCapture?.(event.pointerId);
  }
  function onPointerMove(event) {
    if (!dragging) return;
    const dx = event.clientX - pointerX;
    const dy = event.clientY - pointerY;
    pointerX = event.clientX;
    pointerY = event.clientY;
    targetYaw += dx * 0.006;
    targetPitch = Math.max(-0.65, Math.min(0.65, targetPitch + dy * 0.005));
  }
  function onPointerUp() { dragging = false; }
  function onWheel(event) {
    event.preventDefault();
    targetDistance = Math.max(7, Math.min(21, targetDistance + event.deltaY * 0.008));
  }
  renderer.domElement.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp);
  renderer.domElement.addEventListener('wheel', onWheel, { passive: false });

  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
  function frame() {
    if (disposed) return;
    const dt = Math.min(clock.getDelta(), 0.05);
    const elapsed = clock.elapsedTime;
    if (autoRotate && !dragging && !reduceMotion) targetYaw += dt * 0.1;
    yaw += (targetYaw - yaw) * 0.09;
    pitch += (targetPitch - pitch) * 0.09;
    distance += (targetDistance - distance) * 0.08;
    root.rotation.y = yaw;
    root.rotation.x = pitch;
    const aspectFactor = camera.aspect < 1 ? Math.min(1.8, 1 / Math.max(camera.aspect, 0.55)) : 1;
    camera.position.z = distance * aspectFactor;
    camera.position.y = 2.4 + pitch * 1.3;
    camera.lookAt(0, 0, 0);
    root.updateMatrixWorld(true);
    if (current?.userData.update) current.userData.update(elapsed, dt);
    dust.rotation.y = elapsed * 0.008;
    updateLabels();
    composer.render();
    renderer.setAnimationLoop(null);
    requestAnimationFrame(frame);
  }

  setModel(MODEL_SPECS[0].id);
  requestAnimationFrame(frame);

  return {
    setModel,
    resetView,
    setAutoRotate,
    setExposure(value) {
      const next = Math.max(0.2, Math.min(0.8, Number(value) || 0.42));
      renderer.toneMappingExposure = next;
    },
    getSpec: () => current && modelById(current.userData.modelId),
    dispose() {
      disposed = true;
      resizeObserver.disconnect();
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      renderer.domElement.removeEventListener('wheel', onWheel);
      if (current) disposeObject(current);
      renderer.setAnimationLoop(null);
      composer.dispose();
      renderer.dispose();
      pmrem.dispose();
      scene.environment?.dispose?.();
      if (renderer.domElement.parentNode === container) container.removeChild(renderer.domElement);
      if (labelLayer.parentNode === container) container.removeChild(labelLayer);
    },
  };
}
