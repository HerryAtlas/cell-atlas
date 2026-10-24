import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { CHAPTERS, WEIGHTS } from './chapters.js';
import * as SH from './shaders.js';

const TAU = Math.PI * 2;
const CELL_RADIUS = 8.2;
const UP = new THREE.Vector3(0, 1, 0);
const X_AXIS = new THREE.Vector3(1, 0, 0);
const Y_AXIS = new THREE.Vector3(0, 1, 0);

const PASS_VS = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

function mulberry32(seed) {
  let a = seed >>> 0;
  return function random() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function fibonacciSphere(count) {
  const points = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i += 1) {
    const y = 1 - (i / Math.max(1, count - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    points.push(new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r));
  }
  return points;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function smoothstep(edge0, edge1, x) {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

function randomUnit(rng) {
  const y = rng() * 2 - 1;
  const theta = rng() * TAU;
  const r = Math.sqrt(Math.max(0, 1 - y * y));
  return new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r);
}

function organicSphereGeometry(radius, width, height, amplitude, seed = 1) {
  const geometry = new THREE.SphereGeometry(radius, width, height);
  const pos = geometry.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i += 1) {
    v.fromBufferAttribute(pos, i).normalize();
    const wobble =
      Math.sin(v.x * 4.2 + seed) * Math.cos(v.y * 3.6 - seed * 0.4) * 0.55 +
      Math.sin(v.z * 6.7 + seed * 2.1) * 0.25;
    v.multiplyScalar(radius + wobble * amplitude);
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  pos.needsUpdate = true;
  geometry.computeVertexNormals();
  return geometry;
}

export function createCellAtlasScene(container, options = {}) {
  if (!container) throw new Error('Cell Atlas: no host element.');

  const rng = mulberry32(0x51ce11ab);
  const timeUniform = { value: 0 };
  const dprUniform = { value: 1 };
  const world = new THREE.Group();
  const cellRoot = new THREE.Group();
  world.add(cellRoot);

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: false,
      powerPreference: 'high-performance',
      stencil: false,
    });
  } catch (error) {
    throw new Error(`Cell Atlas: WebGL could not start (${error.message}).`);
  }
  if (!renderer.getContext()) {
    throw new Error('Cell Atlas: WebGL is unavailable in this browser.');
  }

  const maxDpr = Math.min(window.devicePixelRatio || 1, 1.5);
  renderer.setPixelRatio(maxDpr);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.84;
  renderer.setClearColor(0x02060b, 1);
  renderer.domElement.className = 'ca-webgl';
  renderer.domElement.setAttribute('aria-hidden', 'true');
  renderer.domElement.style.cssText =
    'position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;';
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x02060b);
  scene.fog = new THREE.FogExp2(0x02060b, 0.017);
  scene.add(world);

  const camera = new THREE.PerspectiveCamera(42, 1, 0.04, 140);
  camera.position.set(0, 3, 23.5);

  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.42, 0.55, 0.28);
  const finalPass = new ShaderPass({
    uniforms: {
      tDiffuse: { value: null },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uTime: { value: 0 },
      uFlash: { value: 1 },
      uIntensity: { value: 1 },
      uGrain: { value: 0.028 },
      uLetterbox: { value: 0 },
    },
    vertexShader: PASS_VS,
    fragmentShader: SH.FINAL_FS,
  });
  const outputPass = new OutputPass();
  composer.addPass(renderPass);
  composer.addPass(bloom);
  composer.addPass(finalPass);
  composer.addPass(outputPass);

  let envTexture = null;
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0, '#01050a');
    grad.addColorStop(0.45, '#04141c');
    grad.addColorStop(0.7, '#031019');
    grad.addColorStop(1, '#010306');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 512);
    const blobs = [
      [180, 230, 260, 'rgba(26, 210, 198, 0.38)'],
      [820, 150, 230, 'rgba(255, 66, 158, 0.26)'],
      [520, 390, 190, 'rgba(255, 168, 69, 0.16)'],
      [940, 410, 170, 'rgba(74, 100, 255, 0.22)'],
    ];
    for (const [x, y, r, color] of blobs) {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, color);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.mapping = THREE.EquirectangularReflectionMapping;
    tex.colorSpace = THREE.SRGBColorSpace;
    const pmrem = new THREE.PMREMGenerator(renderer);
    pmrem.compileEquirectangularShader();
    envTexture = pmrem.fromEquirectangular(tex).texture;
    scene.environment = envTexture;
    tex.dispose();
    pmrem.dispose();
  } catch (error) {
    // Environment is an enhancement; the procedural lights still carry the scene.
  }

  const hemi = new THREE.HemisphereLight(0x18445a, 0x0a0309, 0.8);
  scene.add(hemi);
  const keyLight = new THREE.DirectionalLight(0x9ffff1, 0.95);
  keyLight.position.set(9, 12, 10);
  scene.add(keyLight);
  const cyanLight = new THREE.PointLight(0x3ff5e0, 110, 42, 2);
  cyanLight.position.set(8, 7, 8);
  scene.add(cyanLight);
  const pinkLight = new THREE.PointLight(0xff3e9f, 85, 40, 2);
  pinkLight.position.set(-9, -3, 6);
  scene.add(pinkLight);
  const amberLight = new THREE.PointLight(0xffab58, 70, 34, 2);
  amberLight.position.set(-4, -1, 2);
  scene.add(amberLight);
  const topSpot = new THREE.SpotLight(0x8ff8ff, 170, 55, 0.62, 0.92, 1.6);
  topSpot.position.set(0, 18, 4);
  topSpot.target.position.set(0, 0, 0);
  scene.add(topSpot);
  scene.add(topSpot.target);

  // ---------------------------------------------------------------- actors --
  const actors = new Map();

  function addActor(name, object) {
    let actor = actors.get(name);
    if (!actor) {
      actor = { name, weight: 0, target: 0, objects: [], mats: [] };
      actors.set(name, actor);
    }
    actor.objects.push(object);
    object.traverse((node) => {
      if (!node.material) return;
      const list = Array.isArray(node.material) ? node.material : [node.material];
      for (const material of list) {
        if (!material || actor.mats.some((entry) => entry.mat === material)) continue;
        const shaderOpacity =
          material.uniforms && material.uniforms.uOpacity ? material.uniforms.uOpacity.value : null;
        actor.mats.push({
          mat: material,
          baseOpacity: material.opacity,
          baseEmissive: material.emissiveIntensity === undefined ? 1 : material.emissiveIntensity,
          baseColor: material.color ? material.color.clone() : null,
          shaderOpacity,
        });
      }
    });
  }

  function applyActorWeight(actor, weight) {
    const w = clamp(weight, 0, 1);
    const visible = w > 0.012;
    for (const object of actor.objects) object.visible = visible;
    if (!visible) return;
    for (const entry of actor.mats) {
      const material = entry.mat;
      if (entry.shaderOpacity !== null) {
        material.uniforms.uOpacity.value = entry.shaderOpacity * w;
      } else if (material.transparent) {
        material.opacity = entry.baseOpacity * w;
      }
      if (material.emissiveIntensity !== undefined) {
        material.emissiveIntensity = entry.baseEmissive * (0.25 + 0.75 * w);
      }
      if (entry.baseColor && material.color) {
        material.color.copy(entry.baseColor).multiplyScalar(0.4 + 0.6 * w);
      }
    }
  }

  // ------------------------------------------------------------- background --
  const backgroundGroup = new THREE.Group();
  scene.add(backgroundGroup);

  const bgMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: timeUniform,
      uOpacity: { value: 1 },
    },
    vertexShader: SH.BACKGROUND_VS,
    fragmentShader: SH.BACKGROUND_FS,
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
  });
  const backgroundSphere = new THREE.Mesh(new THREE.SphereGeometry(72, 64, 40), bgMaterial);
  backgroundSphere.frustumCulled = false;
  backgroundGroup.add(backgroundSphere);

  const starCount = 2600;
  const starPositions = new Float32Array(starCount * 3);
  const starSeeds = new Float32Array(starCount);
  const starScales = new Float32Array(starCount);
  for (let i = 0; i < starCount; i += 1) {
    const dir = randomUnit(rng);
    const radius = 19 + rng() * 44;
    starPositions[i * 3] = dir.x * radius;
    starPositions[i * 3 + 1] = dir.y * radius;
    starPositions[i * 3 + 2] = dir.z * radius;
    starSeeds[i] = rng();
    starScales[i] = 0.25 + rng() * 0.85;
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  starGeo.setAttribute('aSeed', new THREE.BufferAttribute(starSeeds, 1));
  starGeo.setAttribute('aScale', new THREE.BufferAttribute(starScales, 1));
  const starMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: timeUniform,
      uPixelRatio: dprUniform,
      uSize: { value: 1.0 },
      uOpacity: { value: 0.42 },
      uDrift: { value: 0.25 },
    },
    vertexShader: SH.PARTICLE_VS,
    fragmentShader: SH.PARTICLE_FS,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    fog: false,
  });
  const stars = new THREE.Points(starGeo, starMat);
  stars.frustumCulled = false;
  backgroundGroup.add(stars);

  const shaftGroup = new THREE.Group();
  backgroundGroup.add(shaftGroup);
  const shaftData = [
    { pos: [0, 16, 2], scale: [1.25, 1.1, 1.25], rot: [0, 0, -0.16], color: 0x1b8f9e, opacity: 0.1 },
    { pos: [-13, 7, -8], scale: [0.75, 0.85, 0.75], rot: [0.3, 0.2, 0.64], color: 0x4c4bd0, opacity: 0.07 },
    { pos: [12, 4, 8], scale: [0.6, 0.8, 0.6], rot: [-0.24, 0, -0.7], color: 0xc93b85, opacity: 0.06 },
  ];
  for (const data of shaftData) {
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: timeUniform,
        uOpacity: { value: data.opacity },
        uColor: { value: new THREE.Color(data.color) },
      },
      vertexShader: SH.SHAFT_VS,
      fragmentShader: SH.SHAFT_FS,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      fog: false,
    });
    const mesh = new THREE.Mesh(new THREE.ConeGeometry(8.5, 25, 40, 1, true), mat);
    mesh.position.fromArray(data.pos);
    mesh.scale.fromArray(data.scale);
    mesh.rotation.set(...data.rot);
    shaftGroup.add(mesh);
  }

  // -------------------------------------------------------------- membrane --
  const membraneGroup = new THREE.Group();
  cellRoot.add(membraneGroup);

  const membraneMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: timeUniform,
      uOpacity: { value: 0.8 },
      uAmp: { value: 0.14 },
      uColorA: { value: new THREE.Color(0x0a5262) },
      uColorB: { value: new THREE.Color(0x9b2c6c) },
      uRim: { value: new THREE.Color(0x8effea) },
    },
    vertexShader: SH.MEMBRANE_VS,
    fragmentShader: SH.MEMBRANE_FS,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
  });
  const membraneShell = new THREE.Mesh(
    new THREE.IcosahedronGeometry(CELL_RADIUS, 5),
    membraneMaterial
  );
  membraneShell.renderOrder = 3;
  membraneGroup.add(membraneShell);

  const physicalMembrane = new THREE.MeshPhysicalMaterial({
    color: 0x0b4b55,
    roughness: 0.18,
    metalness: 0.04,
    transmission: 0.84,
    thickness: 2.3,
    ior: 1.33,
    clearcoat: 1,
    clearcoatRoughness: 0.14,
    iridescence: 0.72,
    iridescenceIOR: 1.3,
    iridescenceThicknessRange: [120, 460],
    attenuationColor: new THREE.Color(0x0b7370),
    attenuationDistance: 3.5,
    envMapIntensity: 1.15,
    transparent: true,
    opacity: 0.28,
    depthWrite: false,
  });
  const physicalShell = new THREE.Mesh(
    new THREE.SphereGeometry(CELL_RADIUS - 0.09, 96, 64),
    physicalMembrane
  );
  physicalShell.renderOrder = 1;
  membraneGroup.add(physicalShell);

  const innerGlowMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: timeUniform,
      uOpacity: { value: 0.13 },
      uColor: { value: new THREE.Color(0x1fc4c2) },
      uColorB: { value: new THREE.Color(0x9b3a8d) },
      uPower: { value: 2.8 },
    },
    vertexShader: SH.GLOW_VS,
    fragmentShader: SH.GLOW_FS,
    transparent: true,
    depthWrite: false,
    side: THREE.BackSide,
    blending: THREE.AdditiveBlending,
  });
  const innerGlow = new THREE.Mesh(
    new THREE.SphereGeometry(CELL_RADIUS - 0.3, 64, 48),
    innerGlowMaterial
  );
  membraneGroup.add(innerGlow);

  const lipidGroup = new THREE.Group();
  cellRoot.add(lipidGroup);
  const lipidPoints = fibonacciSphere(1500);
  const dummy = new THREE.Object3D();
  const lipidGeometry = new THREE.CylinderGeometry(0.026, 0.038, 0.36, 4, 1, false);
  const lipidMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: timeUniform,
      uOpacity: { value: 0.48 },
      uColorA: { value: new THREE.Color(0x2dc9c0) },
      uColorB: { value: new THREE.Color(0xff74b7) },
    },
    vertexShader: SH.LIPID_VS,
    fragmentShader: SH.LIPID_FS,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const lipids = new THREE.InstancedMesh(lipidGeometry, lipidMaterial, lipidPoints.length);
  lipids.frustumCulled = false;
  for (let i = 0; i < lipidPoints.length; i += 1) {
    const dir = lipidPoints[i];
    dummy.position.copy(dir).multiplyScalar(CELL_RADIUS + 0.03);
    dummy.quaternion.setFromUnitVectors(UP, dir);
    dummy.rotateY(rng() * TAU);
    const s = 0.72 + rng() * 0.7;
    dummy.scale.set(s, s, s);
    dummy.updateMatrix();
    lipids.setMatrixAt(i, dummy.matrix);
  }
  lipids.instanceMatrix.needsUpdate = true;
  lipidGroup.add(lipids);

  const headPositions = new Float32Array(lipidPoints.length * 3);
  for (let i = 0; i < lipidPoints.length; i += 1) {
    const p = lipidPoints[i].clone().multiplyScalar(CELL_RADIUS + 0.22);
    headPositions[i * 3] = p.x;
    headPositions[i * 3 + 1] = p.y;
    headPositions[i * 3 + 2] = p.z;
  }
  const headGeo = new THREE.BufferGeometry();
  headGeo.setAttribute('position', new THREE.BufferAttribute(headPositions, 3));
  const headMat = new THREE.PointsMaterial({
    color: 0x9ffff1,
    size: 0.085,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.36,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const heads = new THREE.Points(headGeo, headMat);
  heads.frustumCulled = false;
  lipidGroup.add(heads);

  const proteinGroup = new THREE.Group();
  cellRoot.add(proteinGroup);
  const proteinDirs = fibonacciSphere(30);
  const capsuleGeo = new THREE.CapsuleGeometry(0.145, 0.42, 5, 12);
  const ringGeo = new THREE.TorusGeometry(0.27, 0.052, 6, 18);
  const knobGeo = new THREE.SphereGeometry(0.085, 10, 8);
  const proteinPalette = [
    new THREE.MeshPhysicalMaterial({
      color: 0x6ff5dd,
      emissive: 0x1a8d7c,
      emissiveIntensity: 0.62,
      roughness: 0.3,
      metalness: 0.15,
      transmission: 0.28,
      thickness: 0.4,
      clearcoat: 1,
      clearcoatRoughness: 0.2,
      transparent: true,
      opacity: 0.78,
      envMapIntensity: 1.05,
    }),
    new THREE.MeshPhysicalMaterial({
      color: 0xffb86b,
      emissive: 0x8d4211,
      emissiveIntensity: 0.58,
      roughness: 0.28,
      metalness: 0.2,
      transmission: 0.24,
      thickness: 0.4,
      clearcoat: 1,
      clearcoatRoughness: 0.16,
      transparent: true,
      opacity: 0.78,
      envMapIntensity: 1.05,
    }),
    new THREE.MeshPhysicalMaterial({
      color: 0xbe8dff,
      emissive: 0x54278c,
      emissiveIntensity: 0.55,
      roughness: 0.32,
      metalness: 0.1,
      transmission: 0.2,
      thickness: 0.35,
      clearcoat: 0.9,
      clearcoatRoughness: 0.22,
      transparent: true,
      opacity: 0.78,
      envMapIntensity: 1.0,
    }),
  ];
  for (let i = 0; i < proteinDirs.length; i += 1) {
    const dir = proteinDirs[i];
    const protein = new THREE.Group();
    protein.position.copy(dir).multiplyScalar(CELL_RADIUS - 0.03);
    protein.quaternion.setFromUnitVectors(UP, dir);
    protein.rotateY(rng() * TAU);
    const scale = 0.78 + rng() * 0.8;
    protein.scale.setScalar(scale);
    const mat = proteinPalette[i % proteinPalette.length];
    const body = new THREE.Mesh(capsuleGeo, mat);
    body.position.y = 0.28;
    protein.add(body);
    const ring = new THREE.Mesh(ringGeo, mat);
    ring.rotation.x = Math.PI * 0.5;
    ring.position.y = 0.02;
    protein.add(ring);
    const knobs = 2 + Math.floor(rng() * 3);
    for (let k = 0; k < knobs; k += 1) {
      const knob = new THREE.Mesh(knobGeo, mat);
      knob.position.set((rng() - 0.5) * 0.44, 0.7 + rng() * 0.4, (rng() - 0.5) * 0.44);
      protein.add(knob);
    }
    proteinGroup.add(protein);
  }

  const glycanCount = 180;
  const glycanPositions = new Float32Array(glycanCount * 3);
  for (let i = 0; i < glycanCount; i += 1) {
    const dir = randomUnit(rng);
    const p = dir.multiplyScalar(CELL_RADIUS + 0.38 + rng() * 0.38);
    glycanPositions.set([p.x, p.y, p.z], i * 3);
  }
  const glycanGeo = new THREE.BufferGeometry();
  glycanGeo.setAttribute('position', new THREE.BufferAttribute(glycanPositions, 3));
  const glycanMat = new THREE.PointsMaterial({
    color: 0xffd18f,
    size: 0.07,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.36,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const glycans = new THREE.Points(glycanGeo, glycanMat);
  glycans.frustumCulled = false;
  proteinGroup.add(glycans);

  // ---------------------------------------------------------- cytoplasmic --
  const particleGroup = new THREE.Group();
  cellRoot.add(particleGroup);
  const particleCount = 3400;
  const particlePositions = new Float32Array(particleCount * 3);
  const particleSeeds = new Float32Array(particleCount);
  const particleScales = new Float32Array(particleCount);
  for (let i = 0; i < particleCount; i += 1) {
    const dir = randomUnit(rng);
    const radius = Math.pow(rng(), 0.62) * (CELL_RADIUS - 0.45);
    const p = dir.multiplyScalar(radius);
    particlePositions[i * 3] = p.x;
    particlePositions[i * 3 + 1] = p.y;
    particlePositions[i * 3 + 2] = p.z;
    particleSeeds[i] = rng();
    particleScales[i] = 0.25 + Math.pow(rng(), 3) * 1.6;
  }
  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  particleGeo.setAttribute('aSeed', new THREE.BufferAttribute(particleSeeds, 1));
  particleGeo.setAttribute('aScale', new THREE.BufferAttribute(particleScales, 1));
  const particleMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: timeUniform,
      uPixelRatio: dprUniform,
      uSize: { value: 0.38 },
      uOpacity: { value: 0.48 },
      uDrift: { value: 0.42 },
    },
    vertexShader: SH.PARTICLE_VS,
    fragmentShader: SH.PARTICLE_FS,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const cytoplasm = new THREE.Points(particleGeo, particleMaterial);
  cytoplasm.frustumCulled = false;
  particleGroup.add(cytoplasm);

  // ------------------------------------------------------------ cytoskeleton --
  const cytoskeletonGroup = new THREE.Group();
  cellRoot.add(cytoskeletonGroup);
  const fiberCurves = [];
  const fiberSamples = [];
  const fiberPositions = [];
  const fiberT = [];
  const fiberSeeds = [];
  for (let f = 0; f < 76; f += 1) {
    const points = [];
    const startDir = randomUnit(rng);
    const start = startDir.multiplyScalar(2.9 + rng() * 4.6);
    points.push(start);
    const bend = randomUnit(rng).multiplyScalar(1.2 + rng() * 2.3);
    points.push(start.clone().multiplyScalar(0.58).add(bend));
    const other = randomUnit(rng).multiplyScalar(2.8 + rng() * 4.7);
    points.push(other);
    const end = randomUnit(rng).multiplyScalar(2.8 + rng() * 4.7);
    points.push(end);
    const curve = new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.5);
    fiberCurves.push(curve);
    const samples = [];
    for (let s = 0; s < 140; s += 1) samples.push(curve.getPoint(s / 139));
    fiberSamples.push(samples);
    const samplesCount = 34;
    const seed = rng();
    let previous = curve.getPoint(0);
    for (let s = 1; s < samplesCount; s += 1) {
      const t = s / (samplesCount - 1);
      const current = curve.getPoint(t);
      fiberPositions.push(previous.x, previous.y, previous.z, current.x, current.y, current.z);
      fiberT.push((s - 1) / (samplesCount - 1), t);
      fiberSeeds.push(seed, seed);
      previous = current;
    }
  }
  const fiberGeo = new THREE.BufferGeometry();
  fiberGeo.setAttribute('position', new THREE.Float32BufferAttribute(fiberPositions, 3));
  fiberGeo.setAttribute('aT', new THREE.Float32BufferAttribute(fiberT, 1));
  fiberGeo.setAttribute('aSeed', new THREE.Float32BufferAttribute(fiberSeeds, 1));
  const fiberMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: timeUniform,
      uOpacity: { value: 0.3 },
      uColorA: { value: new THREE.Color(0x1bc8bd) },
      uColorB: { value: new THREE.Color(0x9effb8) },
    },
    vertexShader: SH.LINE_VS,
    fragmentShader: SH.LINE_FS,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const fibers = new THREE.LineSegments(fiberGeo, fiberMat);
  fibers.frustumCulled = false;
  cytoskeletonGroup.add(fibers);

  const tubeMat = new THREE.MeshBasicMaterial({
    color: 0x79fff0,
    transparent: true,
    opacity: 0.07,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  for (let i = 0; i < 10; i += 1) {
    const curve = fiberCurves[Math.floor(rng() * fiberCurves.length)];
    const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 70, 0.016 + rng() * 0.018, 4, false), tubeMat);
    cytoskeletonGroup.add(tube);
  }

  // Intermediate filaments: apolar, rope-like cables. Their cooler violet
  // distinguishes them from the actin (teal) and microtubule (cyan) systems.
  const intermediateMat = new THREE.MeshBasicMaterial({
    color: 0xb7a3ff,
    transparent: true,
    opacity: 0.17,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  for (let i = 0; i < 20; i += 1) {
    const points = [];
    let angle = rng() * TAU;
    for (let k = 0; k < 4; k += 1) {
      const radius = 3.1 + rng() * 4.3;
      angle += 0.4 + rng() * 0.75;
      points.push(
        new THREE.Vector3(
          Math.cos(angle) * radius,
          -3.8 + rng() * 7.6,
          Math.sin(angle) * radius
        )
      );
    }
    const curve = new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.5);
    const fiber = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 72, 0.022 + rng() * 0.02, 4, false),
      intermediateMat
    );
    cytoskeletonGroup.add(fiber);
  }

  const motorCount = 240;
  const motorPositions = new Float32Array(motorCount * 3);
  const motorData = [];
  for (let i = 0; i < motorCount; i += 1) {
    const curveIndex = Math.floor(rng() * fiberCurves.length);
    motorData.push({
      samples: fiberSamples[curveIndex],
      offset: rng(),
      speed: 0.012 + rng() * 0.035,
      radial: new THREE.Vector3(rng() - 0.5, rng() - 0.5, rng() - 0.5).multiplyScalar(0.16),
    });
  }
  const motorGeo = new THREE.BufferGeometry();
  motorGeo.setAttribute('position', new THREE.BufferAttribute(motorPositions, 3));
  const motorMat = new THREE.PointsMaterial({
    color: 0xc8fff2,
    size: 0.105,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.5,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const motors = new THREE.Points(motorGeo, motorMat);
  motors.frustumCulled = false;
  cytoskeletonGroup.add(motors);

  // ---------------------------------------------------------------- nucleus --
  const nucleusGroup = new THREE.Group();
  cellRoot.add(nucleusGroup);
  const nucleusMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: timeUniform,
      uOpacity: { value: 0.92 },
      uColorA: { value: new THREE.Color(0x4b1b70) },
      uColorB: { value: new THREE.Color(0xc344a4) },
      uColorC: { value: new THREE.Color(0x8ff5ff) },
    },
    vertexShader: SH.NUCLEUS_VS,
    fragmentShader: SH.NUCLEUS_FS,
    transparent: true,
    depthWrite: true,
  });
  const nucleusCore = new THREE.Mesh(new THREE.SphereGeometry(2.5, 96, 64), nucleusMaterial);
  nucleusGroup.add(nucleusCore);

  const envelopeMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: timeUniform,
      uOpacity: { value: 0.28 },
      uColor: { value: new THREE.Color(0x8f63ff) },
      uColorB: { value: new THREE.Color(0x55f5e3) },
      uPower: { value: 2.2 },
    },
    vertexShader: SH.GLOW_VS,
    fragmentShader: SH.GLOW_FS,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
  });
  const envelope = new THREE.Mesh(new THREE.SphereGeometry(2.78, 64, 48), envelopeMaterial);
  nucleusGroup.add(envelope);

  const nucleolusGeometry = organicSphereGeometry(0.82, 32, 24, 0.07, 3.1);
  const nucleolusMaterial = new THREE.MeshStandardMaterial({
    color: 0x6d2058,
    emissive: 0x4d0c3f,
    emissiveIntensity: 1.0,
    roughness: 0.46,
    metalness: 0.1,
    transparent: true,
    opacity: 0.84,
  });
  const nucleolus = new THREE.Mesh(nucleolusGeometry, nucleolusMaterial);
  nucleolus.position.set(0.62, 0.38, 0.22);
  nucleusGroup.add(nucleolus);

  const poreCount = 88;
  const poreGeo = new THREE.TorusGeometry(0.105, 0.022, 6, 14);
  const poreMat = new THREE.MeshBasicMaterial({
    color: 0x9bdcff,
    transparent: true,
    opacity: 0.3,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const pores = new THREE.InstancedMesh(poreGeo, poreMat, poreCount);
  const poreDirs = fibonacciSphere(poreCount);
  for (let i = 0; i < poreCount; i += 1) {
    const dir = poreDirs[i];
    dummy.position.copy(dir).multiplyScalar(2.79);
    dummy.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir);
    dummy.rotateZ(rng() * TAU);
    dummy.scale.setScalar(0.8 + rng() * 0.65);
    dummy.updateMatrix();
    pores.setMatrixAt(i, dummy.matrix);
  }
  pores.instanceMatrix.needsUpdate = true;
  nucleusGroup.add(pores);

  const chromatinGroup = new THREE.Group();
  nucleusGroup.add(chromatinGroup);
  const chromatinPositions = [];
  const chromatinT = [];
  const chromatinSeeds = [];
  const chromatinPoints = [];
  for (let c = 0; c < 34; c += 1) {
    const points = [];
    const dir = randomUnit(rng);
    const start = dir.multiplyScalar(0.5 + rng() * 1.5);
    points.push(start);
    for (let k = 0; k < 3; k += 1) {
      const p = randomUnit(rng).multiplyScalar(0.55 + rng() * 1.6);
      points.push(p);
    }
    const curve = new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.55);
    const samples = 30;
    const seed = rng();
    let previous = curve.getPoint(0);
    for (let s = 1; s < samples; s += 1) {
      const t = s / (samples - 1);
      const current = curve.getPoint(t);
      chromatinPositions.push(previous.x, previous.y, previous.z, current.x, current.y, current.z);
      chromatinT.push((s - 1) / (samples - 1), t);
      chromatinSeeds.push(seed, seed);
      previous = current;
      chromatinPoints.push(current.x, current.y, current.z);
    }
  }
  const chromatinGeo = new THREE.BufferGeometry();
  chromatinGeo.setAttribute('position', new THREE.Float32BufferAttribute(chromatinPositions, 3));
  chromatinGeo.setAttribute('aT', new THREE.Float32BufferAttribute(chromatinT, 1));
  chromatinGeo.setAttribute('aSeed', new THREE.Float32BufferAttribute(chromatinSeeds, 1));
  const chromatinMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: timeUniform,
      uOpacity: { value: 0.3 },
      uColorA: { value: new THREE.Color(0xff5bc0) },
      uColorB: { value: new THREE.Color(0x8b7bff) },
    },
    vertexShader: SH.LINE_VS,
    fragmentShader: SH.LINE_FS,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const chromatin = new THREE.LineSegments(chromatinGeo, chromatinMat);
  chromatin.frustumCulled = false;
  chromatinGroup.add(chromatin);

  const chromatinPointGeo = new THREE.BufferGeometry();
  chromatinPointGeo.setAttribute('position', new THREE.Float32BufferAttribute(chromatinPoints, 3));
  const chromatinPointMat = new THREE.PointsMaterial({
    color: 0xff9bdd,
    size: 0.028,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.42,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const chromatinNodes = new THREE.Points(chromatinPointGeo, chromatinPointMat);
  chromatinNodes.frustumCulled = false;
  chromatinGroup.add(chromatinNodes);

  const lamina = new THREE.Mesh(
    new THREE.IcosahedronGeometry(2.66, 2),
    new THREE.MeshBasicMaterial({
      color: 0x8f63ff,
      wireframe: true,
      transparent: true,
      opacity: 0.025,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
  );
  chromatinGroup.add(lamina);

  const nucleusLight = new THREE.PointLight(0xb45cff, 12, 10, 2);
  nucleusLight.position.set(0, 0, 0);
  nucleusGroup.add(nucleusLight);

  // ----------------------------------------------------------- mitochondria --
  const mitochondriaGroup = new THREE.Group();
  cellRoot.add(mitochondriaGroup);
  const mitoPositions = [
    [4.6, 1.8, 2.4],
    [5.6, -0.8, 1.0],
    [4.2, -2.2, 3.8],
    [6.4, 1.0, -1.2],
    [3.8, 2.8, -2.6],
    [2.0, -4.2, 2.2],
    [-3.0, 4.0, 3.0],
    [-5.2, -2.8, -2.0],
    [0.5, 5.0, 1.0],
  ];
  const mitoMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: timeUniform,
      uOpacity: { value: 0.76 },
      uColorA: { value: new THREE.Color(0x7a2f11) },
      uColorB: { value: new THREE.Color(0xff9e4a) },
      uColorC: { value: new THREE.Color(0xffe4a4) },
    },
    vertexShader: SH.MITO_VS,
    fragmentShader: SH.MITO_FS,
    transparent: true,
    depthWrite: true,
  });
  const mitoGlowMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: timeUniform,
      uOpacity: { value: 0.15 },
      uColor: { value: new THREE.Color(0xffa64f) },
      uColorB: { value: new THREE.Color(0x52f7e5) },
      uPower: { value: 2.6 },
    },
    vertexShader: SH.GLOW_VS,
    fragmentShader: SH.GLOW_FS,
    transparent: true,
    depthWrite: false,
    side: THREE.BackSide,
    blending: THREE.AdditiveBlending,
  });
  const mitoGeometry = new THREE.CapsuleGeometry(0.42, 1.5, 6, 18);
  const mitoGlowGeometry = new THREE.CapsuleGeometry(0.5, 1.55, 6, 18);
  for (let i = 0; i < mitoPositions.length; i += 1) {
    const group = new THREE.Group();
    group.position.fromArray(mitoPositions[i]);
    group.rotation.set(rng() * TAU, rng() * TAU, rng() * TAU);
    group.scale.set(0.8 + rng() * 0.45, 0.82 + rng() * 0.55, 0.8 + rng() * 0.45);
    const mito = new THREE.Mesh(mitoGeometry, mitoMaterial);
    group.add(mito);
    const glow = new THREE.Mesh(mitoGlowGeometry, mitoGlowMaterial);
    group.add(glow);
    mitochondriaGroup.add(group);
  }

  const protonCount = 520;
  const protonPositions = new Float32Array(protonCount * 3);
  const protonData = [];
  for (let i = 0; i < protonCount; i += 1) {
    const center = new THREE.Vector3().fromArray(mitoPositions[Math.floor(rng() * mitoPositions.length)]);
    protonData.push({
      center,
      angle: rng() * TAU,
      radius: 0.72 + rng() * 0.8,
      speed: 0.15 + rng() * 0.55,
      y: (rng() - 0.5) * 1.8,
    });
  }
  const protonGeo = new THREE.BufferGeometry();
  protonGeo.setAttribute('position', new THREE.BufferAttribute(protonPositions, 3));
  const protonMat = new THREE.PointsMaterial({
    color: 0x85fff2,
    size: 0.06,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.46,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const protons = new THREE.Points(protonGeo, protonMat);
  protons.frustumCulled = false;
  mitochondriaGroup.add(protons);

  const atpCount = 96;
  const atpPositions = new Float32Array(atpCount * 3);
  const atpLife = new Float32Array(atpCount);
  const atpData = [];
  for (let i = 0; i < atpCount; i += 1) {
    atpData.push({
      center: new THREE.Vector3().fromArray(mitoPositions[Math.floor(rng() * mitoPositions.length)]),
      dir: randomUnit(rng),
      age: rng() * 3,
      life: 2 + rng() * 3,
      speed: 0.35 + rng() * 0.9,
    });
    atpLife[i] = atpData[i].age / atpData[i].life;
  }
  const atpGeo = new THREE.BufferGeometry();
  atpGeo.setAttribute('position', new THREE.BufferAttribute(atpPositions, 3));
  atpGeo.setAttribute('aLife', new THREE.BufferAttribute(atpLife, 1));
  const atpMat = new THREE.ShaderMaterial({
    uniforms: {
      uPixelRatio: dprUniform,
      uSize: { value: 1.4 },
      uOpacity: { value: 0.5 },
    },
    vertexShader: /* glsl */ `
      uniform float uPixelRatio;
      uniform float uSize;
      attribute float aLife;
      varying float vLife;
      void main() {
        vLife = aLife;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = uSize * uPixelRatio * (1.0 - aLife) * (180.0 / max(-mv.z, 0.1));
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uOpacity;
      varying float vLife;
      void main() {
        vec2 c = gl_PointCoord - 0.5;
        float d = length(c);
        float core = smoothstep(0.5, 0.02, d);
        gl_FragColor = vec4(vec3(1.0, 0.82, 0.4) * (1.4 + (1.0 - vLife)), core * uOpacity * (1.0 - vLife));
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const atp = new THREE.Points(atpGeo, atpMat);
  atp.frustumCulled = false;
  mitochondriaGroup.add(atp);
  const mitoLight = new THREE.PointLight(0xff9c47, 20, 16, 2);
  mitoLight.position.set(4.9, 0.2, 1.8);
  mitochondriaGroup.add(mitoLight);

  // --------------------------------------------------------- endomembrane --
  const endomembraneGroup = new THREE.Group();
  cellRoot.add(endomembraneGroup);
  const erMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: timeUniform,
      uOpacity: { value: 0.38 },
      uColorA: { value: new THREE.Color(0x1b756b) },
      uColorB: { value: new THREE.Color(0xffc073) },
    },
    vertexShader: SH.ER_VS,
    fragmentShader: SH.ER_FS,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const erCurves = [];
  for (let i = 0; i < 13; i += 1) {
    const points = [];
    let angle = rng() * TAU;
    let y = -1.8 + rng() * 3.4;
    const baseRadius = 3.2 + rng() * 1.7;
    for (let k = 0; k < 4; k += 1) {
      angle += 0.38 + rng() * 0.72;
      const radius = baseRadius + Math.sin(angle * 2.1 + i) * 0.5;
      points.push(
        new THREE.Vector3(
          Math.cos(angle) * radius - 0.5,
          y + Math.sin(angle * 1.3) * 0.5,
          Math.sin(angle) * radius
        )
      );
      y += (rng() - 0.5) * 1.2;
    }
    const curve = new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.5);
    erCurves.push(curve);
    const tube = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 110, 0.038 + rng() * 0.045, 6, false),
      erMat
    );
    endomembraneGroup.add(tube);
  }
  const riboCount = 440;
  const riboPositions = new Float32Array(riboCount * 3);
  for (let i = 0; i < riboCount; i += 1) {
    const curve = erCurves[Math.floor(rng() * erCurves.length)];
    const p = curve.getPoint(rng());
    const jitter = randomUnit(rng).multiplyScalar(0.03 + rng() * 0.07);
    p.add(jitter);
    riboPositions.set([p.x, p.y, p.z], i * 3);
  }
  const riboGeo = new THREE.BufferGeometry();
  riboGeo.setAttribute('position', new THREE.BufferAttribute(riboPositions, 3));
  const riboMat = new THREE.PointsMaterial({
    color: 0xffdaa0,
    size: 0.045,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.42,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const ribosomes = new THREE.Points(riboGeo, riboMat);
  ribosomes.frustumCulled = false;
  endomembraneGroup.add(ribosomes);

  const golgiGroup = new THREE.Group();
  golgiGroup.position.set(-3.35, -0.25, 0.75);
  golgiGroup.rotation.set(0.36, 0.85, 0.2);
  endomembraneGroup.add(golgiGroup);
  const golgiMat = new THREE.MeshStandardMaterial({
    color: 0xffa252,
    emissive: 0x9c3d0c,
    emissiveIntensity: 0.7,
    roughness: 0.34,
    metalness: 0.16,
    transparent: true,
    opacity: 0.55,
  });
  for (let i = 0; i < 6; i += 1) {
    const radius = 1.13 - i * 0.08;
    const arc = Math.PI * (1.18 + i * 0.025);
    const cisterna = new THREE.Mesh(
      new THREE.TorusGeometry(radius, 0.048, 8, 80, arc),
      golgiMat
    );
    cisterna.position.z = (i - 2.5) * 0.16;
    cisterna.rotation.z = -arc * 0.5 + Math.PI * 0.5;
    golgiGroup.add(cisterna);
  }

  const vesicleRoutes = [];
  for (let i = 0; i < 18; i += 1) {
    const start = new THREE.Vector3(-3.4 + (rng() - 0.5) * 1.2, 0.3 + (rng() - 0.5) * 1.2, 1.1 + (rng() - 0.5) * 1.2);
    const end = new THREE.Vector3(-3.5 + (rng() - 0.5) * 0.8, -0.3 + (rng() - 0.5) * 0.8, 1.1 + (rng() - 0.5) * 0.8);
    const mid = start.clone().lerp(end, 0.5).add(randomUnit(rng).multiplyScalar(0.8));
    vesicleRoutes.push(new THREE.CatmullRomCurve3([start, mid, end]));
  }
  for (let i = 0; i < 22; i += 1) {
    const start = new THREE.Vector3(-3.5, -0.25, 0.8);
    const dir = randomUnit(rng);
    dir.x = Math.abs(dir.x) * 0.8 + 0.1;
    dir.z = Math.abs(dir.z) * 0.8 + 0.1;
    const end = dir.normalize().multiplyScalar(CELL_RADIUS - 0.2);
    const mid = start.clone().lerp(end, 0.5).add(randomUnit(rng).multiplyScalar(1.6));
    vesicleRoutes.push(new THREE.CatmullRomCurve3([start, mid, end]));
  }
  const vesicleGeo = new THREE.SphereGeometry(0.115, 12, 9);
  const vesicleMats = [
    new THREE.MeshPhysicalMaterial({
      color: 0xffcf87,
      emissive: 0xcc6a1f,
      emissiveIntensity: 0.9,
      roughness: 0.22,
      metalness: 0.05,
      transmission: 0.45,
      thickness: 0.2,
      transparent: true,
      opacity: 0.62,
      envMapIntensity: 1.0,
    }),
    new THREE.MeshPhysicalMaterial({
      color: 0x8ffff0,
      emissive: 0x148c84,
      emissiveIntensity: 0.9,
      roughness: 0.2,
      metalness: 0.05,
      transmission: 0.4,
      thickness: 0.2,
      transparent: true,
      opacity: 0.6,
      envMapIntensity: 1.0,
    }),
  ];
  const vesicles = [];
  for (let i = 0; i < 40; i += 1) {
    const mesh = new THREE.Mesh(vesicleGeo, vesicleMats[i % 2]);
    const route = vesicleRoutes[i % vesicleRoutes.length];
    const data = {
      mesh,
      route,
      offset: rng(),
      speed: 0.018 + rng() * 0.03,
      phase: rng() * TAU,
    };
    vesicles.push(data);
    endomembraneGroup.add(mesh);
  }

  // Lysosomes: acidic, hydrolase-rich compartments clustered near the Golgi.
  const lysosomeGeo = new THREE.SphereGeometry(0.16, 16, 12);
  const lysosomeMat = new THREE.MeshStandardMaterial({
    color: 0xd66572,
    emissive: 0x6b1522,
    emissiveIntensity: 0.72,
    roughness: 0.32,
    metalness: 0.08,
    transparent: true,
    opacity: 0.78,
  });
  for (let i = 0; i < 9; i += 1) {
    const lysosome = new THREE.Mesh(lysosomeGeo, lysosomeMat);
    lysosome.position.set(
      -3.5 + (rng() - 0.5) * 1.9,
      -0.55 + (rng() - 0.5) * 1.7,
      0.9 + (rng() - 0.5) * 1.7
    );
    lysosome.scale.setScalar(0.75 + rng() * 0.9);
    endomembraneGroup.add(lysosome);
  }

  // --------------------------------------------------------------- mitosis --
  const mitosisGroup = new THREE.Group();
  mitosisGroup.scale.setScalar(1.16);
  cellRoot.add(mitosisGroup);
  const chromatidGeo = new THREE.CapsuleGeometry(0.075, 0.4, 4, 10);
  const chromatidMats = [
    new THREE.MeshStandardMaterial({
      color: 0xff6ab4,
      emissive: 0xb51d6f,
      emissiveIntensity: 0.7,
      roughness: 0.3,
      metalness: 0.15,
      transparent: true,
      opacity: 0.85,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x73f9ff,
      emissive: 0x168e9c,
      emissiveIntensity: 0.7,
      roughness: 0.28,
      metalness: 0.16,
      transparent: true,
      opacity: 0.85,
    }),
  ];
  const chromatids = [];
  for (let i = 0; i < 14; i += 1) {
    const angle = (i / 14) * TAU + 0.12;
    const meta = new THREE.Vector3(
      (rng() - 0.5) * 0.35,
      Math.cos(angle) * 1.28,
      Math.sin(angle) * 1.28
    );
    for (const side of [-1, 1]) {
      const group = new THREE.Group();
      const material = chromatidMats[side > 0 ? 0 : 1];
      for (let arm = 0; arm < 2; arm += 1) {
        const mesh = new THREE.Mesh(chromatidGeo, material);
        mesh.rotation.z = (arm === 0 ? 1 : -1) * 0.58;
        mesh.position.x = (arm === 0 ? 1 : -1) * 0.1;
        group.add(mesh);
      }
      group.position.copy(meta).add(new THREE.Vector3(side * 0.1, side * 0.045, 0));
      mitosisGroup.add(group);
      chromatids.push({
        group,
        meta: group.position.clone(),
        side,
        phase: rng() * TAU,
        baseScale: 0.82 + rng() * 0.35,
      });
    }
  }
  const spindlePositions = new Float32Array(chromatids.length * 2 * 3);
  const spindleGeo = new THREE.BufferGeometry();
  spindleGeo.setAttribute('position', new THREE.BufferAttribute(spindlePositions, 3));
  const spindleMat = new THREE.LineBasicMaterial({
    color: 0x83f8ff,
    transparent: true,
    opacity: 0.2,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const spindle = new THREE.LineSegments(spindleGeo, spindleMat);
  spindle.frustumCulled = false;
  mitosisGroup.add(spindle);

  const poleMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: timeUniform,
      uOpacity: { value: 0.55 },
      uColor: { value: new THREE.Color(0x7dfff0) },
      uColorB: { value: new THREE.Color(0xff6ab4) },
      uPower: { value: 2.1 },
    },
    vertexShader: SH.GLOW_VS,
    fragmentShader: SH.GLOW_FS,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const poles = [];
  for (const x of [-4.8, 4.8]) {
    const pole = new THREE.Mesh(new THREE.SphereGeometry(0.22, 18, 12), poleMat);
    pole.position.set(x, 0, 0);
    mitosisGroup.add(pole);
    poles.push(pole);
  }

  const daughterMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: timeUniform,
      uOpacity: { value: 0.28 },
      uColor: { value: new THREE.Color(0x8a7cff) },
      uColorB: { value: new THREE.Color(0x6affdd) },
      uPower: { value: 2.3 },
    },
    vertexShader: SH.GLOW_VS,
    fragmentShader: SH.GLOW_FS,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
  });
  const daughterNuclei = [];
  for (const x of [-3.8, 3.8]) {
    const daughter = new THREE.Mesh(new THREE.SphereGeometry(0.95, 32, 24), daughterMat);
    daughter.position.set(x, 0, 0);
    daughter.scale.setScalar(0.01);
    mitosisGroup.add(daughter);
    daughterNuclei.push(daughter);
  }

  addActor('membrane', membraneGroup);
  addActor('lipids', lipidGroup);
  addActor('proteins', proteinGroup);
  addActor('particles', particleGroup);
  addActor('cytoskeleton', cytoskeletonGroup);
  addActor('nucleus', nucleusGroup);
  addActor('mitochondria', mitochondriaGroup);
  addActor('endomembrane', endomembraneGroup);
  addActor('mitosis', mitosisGroup);

  // ------------------------------------------------------------- animation --
  const state = {
    time: 0,
    chapter: 0,
    chapterStart: 0,
    paused: false,
    brightness: 0.58,
    flash: 1,
    yaw: 0,
    yawTarget: 0,
    pitch: 0,
    pitchTarget: 0,
    pointerX: 0,
    pointerY: 0,
    pointerTargetX: 0,
    pointerTargetY: 0,
    zoom: 1,
    zoomTarget: 1,
    distanceScale: 1,
    dragging: false,
    dragDistance: 0,
    lastPointerX: 0,
    lastPointerY: 0,
  };

  const cameraBase = new THREE.Vector3().fromArray(CHAPTERS[0].camera.pos);
  const targetBase = new THREE.Vector3().fromArray(CHAPTERS[0].camera.target);
  const cameraGoal = new THREE.Vector3();
  const targetGoal = new THREE.Vector3();
  const lookAt = new THREE.Vector3();
  const goalOffset = new THREE.Vector3();
  let fovTarget = CHAPTERS[0].camera.fov;

  for (const actor of actors.values()) {
    actor.weight = WEIGHTS[actor.name][state.chapter];
    actor.target = actor.weight;
    applyActorWeight(actor, actor.weight);
  }

  function setChapter(index, immediate = false) {
    const next = clamp(index, 0, CHAPTERS.length - 1);
    state.chapter = next;
    state.chapterStart = state.time;
    state.flash = 1;
    state.yawTarget = 0;
    state.pitchTarget = 0;
    state.zoomTarget = 1;
    state.pointerTargetX = 0;
    state.pointerTargetY = 0;
    cameraBase.fromArray(CHAPTERS[next].camera.pos);
    targetBase.fromArray(CHAPTERS[next].camera.target);
    fovTarget = CHAPTERS[next].camera.fov;
    for (const actor of actors.values()) {
      actor.target = WEIGHTS[actor.name][next];
      if (immediate) {
        actor.weight = actor.target;
        applyActorWeight(actor, actor.weight);
      }
    }
    if (immediate) {
      camera.position.copy(cameraBase);
      lookAt.copy(targetBase);
      camera.lookAt(lookAt);
      camera.fov = fovTarget;
      camera.updateProjectionMatrix();
    }
  }

  function updateActors(dt) {
    const k = 1 - Math.exp(-dt * 1.55);
    for (const actor of actors.values()) {
      if (Math.abs(actor.target - actor.weight) < 0.0006) continue;
      actor.weight += (actor.target - actor.weight) * k;
      applyActorWeight(actor, actor.weight);
    }
  }

  function setBrightness(value) {
    const next = clamp(Number(value) || 0.58, 0.3, 1);
    state.brightness = next;
    renderer.toneMappingExposure = 0.55 + next * 0.5;
    bloom.strength = 0.14 + next * 0.46;
  }

  function updateCamera(dt) {
    state.yaw += (state.yawTarget - state.yaw) * (1 - Math.exp(-dt * 4.0));
    state.pitch += (state.pitchTarget - state.pitch) * (1 - Math.exp(-dt * 4.0));
    state.zoom += (state.zoomTarget - state.zoom) * (1 - Math.exp(-dt * 3.2));
    state.pointerX += (state.pointerTargetX - state.pointerX) * (1 - Math.exp(-dt * 2.5));
    state.pointerY += (state.pointerTargetY - state.pointerY) * (1 - Math.exp(-dt * 2.5));

    const distance = cameraBase.distanceTo(targetBase);
    const zoomedDistance = Math.max(1.4, distance * clamp(state.zoom, 0.42, 1.75) * state.distanceScale);
    const goal = cameraGoal.copy(targetBase);
    goalOffset.copy(cameraBase).sub(targetBase);
    goalOffset.normalize().multiplyScalar(zoomedDistance);
    goalOffset.applyAxisAngle(Y_AXIS, state.yaw);
    goalOffset.applyAxisAngle(X_AXIS, state.pitch);
    goal.copy(targetBase).add(goalOffset);
    const parallax = state.dragging ? 0 : clamp((zoomedDistance - 5.5) / 16, 0, 1);
    goal.x += state.pointerX * zoomedDistance * 0.018 * parallax + Math.sin(state.time * 0.21) * 0.05;
    goal.y += -state.pointerY * zoomedDistance * 0.013 * parallax + Math.cos(state.time * 0.17) * 0.04;
    camera.position.lerp(goal, 1 - Math.exp(-dt * 1.5));

    targetGoal.copy(targetBase);
    lookAt.lerp(targetGoal, 1 - Math.exp(-dt * 1.6));
    camera.lookAt(lookAt);

    camera.fov += (fovTarget - camera.fov) * (1 - Math.exp(-dt * 1.4));
    camera.updateProjectionMatrix();
  }

  function updateMembrane(dt) {
    const breath = 1 + Math.sin(state.time * 0.64) * 0.006;
    membraneShell.scale.setScalar(breath);
    physicalShell.scale.setScalar(breath);
  }

  function updateNucleus(dt) {
    chromatinGroup.rotation.y += dt * 0.018;
    chromatinGroup.rotation.x = Math.sin(state.time * 0.09) * 0.12;
    nucleolus.rotation.y += dt * 0.05;
    envelope.rotation.y -= dt * 0.012;
  }

  function updateCytoskeleton() {
    for (let i = 0; i < motorData.length; i += 1) {
      const data = motorData[i];
      const t = (data.offset + state.time * data.speed) % 1;
      if (!Number.isFinite(t) || !data.samples || data.samples.length < 2) continue;
      const scaled = Math.max(0, Math.min(1, t)) * (data.samples.length - 1);
      const lower = Math.floor(scaled);
      const upper = Math.min(data.samples.length - 1, lower + 1);
      const mix = scaled - lower;
      const a = data.samples[lower];
      const b = data.samples[upper];
      motorPositions[i * 3] = a.x + (b.x - a.x) * mix + data.radial.x;
      motorPositions[i * 3 + 1] = a.y + (b.y - a.y) * mix + data.radial.y;
      motorPositions[i * 3 + 2] = a.z + (b.z - a.z) * mix + data.radial.z;
    }
    motorGeo.attributes.position.needsUpdate = true;
  }

  function updateMitochondria(dt) {
    for (let i = 0; i < protonData.length; i += 1) {
      const data = protonData[i];
      const angle = data.angle + state.time * data.speed;
      const r = data.radius * (0.82 + Math.sin(state.time * 0.4 + data.angle) * 0.14);
      protonPositions[i * 3] = data.center.x + Math.cos(angle) * r;
      protonPositions[i * 3 + 1] = data.center.y + data.y + Math.sin(angle * 1.7) * 0.35;
      protonPositions[i * 3 + 2] = data.center.z + Math.sin(angle) * r;
    }
    protonGeo.attributes.position.needsUpdate = true;

    for (let i = 0; i < atpData.length; i += 1) {
      const data = atpData[i];
      data.age += dt;
      if (data.age > data.life) {
        data.age = 0;
        data.dir = randomUnit(rng);
        data.center.fromArray(mitoPositions[Math.floor(rng() * mitoPositions.length)]);
      }
      const life = clamp(data.age / data.life, 0, 1);
      const p = data.center.clone().addScaledVector(data.dir, data.age * data.speed);
      atpPositions[i * 3] = p.x;
      atpPositions[i * 3 + 1] = p.y + Math.sin(data.age * 1.7 + i) * 0.1;
      atpPositions[i * 3 + 2] = p.z;
      atpLife[i] = life;
    }
    atpGeo.attributes.position.needsUpdate = true;
    atpGeo.attributes.aLife.needsUpdate = true;
    mitoLight.intensity = 15 + Math.sin(state.time * 1.7) * 5;
  }

  function updateEndomembrane() {
    const t = state.time;
    for (const data of vesicles) {
      const u = (data.offset + t * data.speed) % 1;
      if (!Number.isFinite(u)) continue;
      const p = data.route.getPoint(u);
      data.mesh.position.copy(p);
      const s = 0.3 + 0.95 * Math.sin(Math.PI * u);
      data.mesh.scale.setScalar(s);
      data.mesh.rotation.y += 0.008;
      data.mesh.rotation.x += 0.004;
    }
    erMat.uniforms.uTime.value = t;
  }

  const mitosisTemp = new THREE.Vector3();
  const poleTemp = new THREE.Vector3();
  function updateMitosis() {
    if (state.chapter !== 6) return;
    const cycle = Math.max(0, state.time - state.chapterStart) % 12;
    const condense = smoothstep(0, 2.6, cycle);
    const separate = smoothstep(5.2, 9.4, cycle);
    const daughter = smoothstep(7.4, 10.8, cycle);
    const positions = spindleGeo.attributes.position.array;
    for (let i = 0; i < chromatids.length; i += 1) {
      const data = chromatids[i];
      const poleX = data.side * (3.45 + 0.22 * Math.sin(data.phase));
      mitosisTemp.set(poleX, data.meta.y * 0.78, data.meta.z * 0.78);
      data.group.position.lerpVectors(data.meta, mitosisTemp, separate);
      data.group.position.y += Math.sin(cycle * 2.0 + data.phase) * 0.045;
      data.group.position.z += Math.cos(cycle * 1.7 + data.phase) * 0.045;
      const scale = 0.28 + 0.72 * condense;
      data.group.scale.setScalar(scale * data.baseScale);
      data.group.rotation.z = Math.sin(data.phase + separate * 1.8) * 0.34;

      poleTemp.set(data.side * 4.8, 0, 0);
      positions[i * 6] = poleTemp.x;
      positions[i * 6 + 1] = poleTemp.y;
      positions[i * 6 + 2] = poleTemp.z;
      positions[i * 6 + 3] = data.group.position.x;
      positions[i * 6 + 4] = data.group.position.y;
      positions[i * 6 + 5] = data.group.position.z;
    }
    spindleGeo.attributes.position.needsUpdate = true;
    spindleMat.opacity = 0.07 + 0.17 * condense;

    for (let i = 0; i < daughterNuclei.length; i += 1) {
      const s = 0.01 + daughter * (0.92 + Math.sin(state.time * 1.6 + i) * 0.05);
      daughterNuclei[i].scale.setScalar(s);
    }
    poles[0].scale.setScalar(0.85 + Math.sin(state.time * 2.2) * 0.12);
    poles[1].scale.setScalar(0.85 + Math.cos(state.time * 2.1) * 0.12);
  }

  // --------------------------------------------------------------- controls --
  let raf = 0;
  let disposed = false;
  let renderFailed = false;
  let last = performance.now();

  function onPointerDown(event) {
    if (event.button !== undefined && event.button !== 0) return;
    state.dragging = true;
    state.dragDistance = 0;
    state.lastPointerX = event.clientX;
    state.lastPointerY = event.clientY;
    state.pointerTargetX = 0;
    state.pointerTargetY = 0;
    if (renderer.domElement.setPointerCapture) {
      try {
        renderer.domElement.setPointerCapture(event.pointerId);
      } catch (error) {
        /* pointer capture is optional */
      }
    }
  }

  function onPointerMove(event) {
    const rect = container.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      state.pointerTargetX = clamp(((event.clientX - rect.left) / rect.width) * 2 - 1, -1, 1);
      state.pointerTargetY = clamp(((event.clientY - rect.top) / rect.height) * 2 - 1, -1, 1);
    }
    if (!state.dragging) return;
    const dx = event.clientX - state.lastPointerX;
    const dy = event.clientY - state.lastPointerY;
    state.lastPointerX = event.clientX;
    state.lastPointerY = event.clientY;
    state.dragDistance += Math.abs(dx) + Math.abs(dy);
    if (state.dragDistance < 3) return;
    state.yawTarget = clamp(state.yawTarget + dx * 0.0021, -0.8, 0.8);
    state.pitchTarget = clamp(state.pitchTarget + dy * 0.0016, -0.22, 0.22);
  }

  function onPointerUp(event) {
    state.dragging = false;
    if (renderer.domElement.releasePointerCapture && event.pointerId !== undefined) {
      try {
        renderer.domElement.releasePointerCapture(event.pointerId);
      } catch (error) {
        /* ignore */
      }
    }
  }

  function onPointerLeave() {
    state.pointerTargetX = 0;
    state.pointerTargetY = 0;
  }

  function onWheel(event) {
    event.preventDefault();
    const raw =
      event.deltaMode === 1 ? event.deltaY * 16 : event.deltaMode === 2 ? event.deltaY * 400 : event.deltaY;
    const step = clamp(raw * 0.0012, -0.18, 0.18);
    state.zoomTarget = clamp(state.zoomTarget * Math.exp(step), 0.42, 1.75);
  }

  function onDoubleClick(event) {
    event.preventDefault();
    resetView();
  }

  function resetView() {
    state.yawTarget = 0;
    state.pitchTarget = 0;
    state.zoomTarget = 1;
    state.pointerTargetX = 0;
    state.pointerTargetY = 0;
  }

  renderer.domElement.addEventListener('pointerdown', onPointerDown);
  renderer.domElement.addEventListener('pointermove', onPointerMove);
  renderer.domElement.addEventListener('pointerup', onPointerUp);
  renderer.domElement.addEventListener('pointercancel', onPointerUp);
  renderer.domElement.addEventListener('pointerleave', onPointerLeave);
  renderer.domElement.addEventListener('wheel', onWheel, { passive: false });
  renderer.domElement.addEventListener('dblclick', onDoubleClick);

  function resize() {
    if (disposed) return;
    const width = Math.max(1, container.clientWidth);
    const height = Math.max(1, container.clientHeight);
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height, true);
    composer.setPixelRatio(dpr);
    composer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    dprUniform.value = dpr;
    finalPass.uniforms.uResolution.value.set(width * dpr, height * dpr);
  }

  const resizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null;
  if (resizeObserver) resizeObserver.observe(container);
  window.addEventListener('resize', resize);
  function onFullscreenChange() {
    requestAnimationFrame(resize);
  }
  document.addEventListener('fullscreenchange', onFullscreenChange);
  resize();

  function frame(now) {
    if (disposed) return;
    raf = requestAnimationFrame(frame);
    if (renderFailed) return;
    const delta = Math.min((now - last) / 1000, 0.05);
    last = now;
    const speed = state.paused ? 0.14 : 1;
    state.time += delta * speed;

    timeUniform.value = state.time;
    finalPass.uniforms.uTime.value = state.time;
    state.flash = Math.max(0, state.flash - delta * 1.8);
    finalPass.uniforms.uFlash.value = state.flash * 0.45;
    finalPass.uniforms.uGrain.value = state.paused ? 0.016 : 0.022;

    if (!state.paused) {
      cellRoot.rotation.y += delta * 0.013;
      backgroundGroup.rotation.y += delta * 0.0035;
      shaftGroup.rotation.y += delta * 0.006;
      stars.rotation.y += delta * 0.002;
    }

    updateActors(delta);
    updateCamera(delta);
    updateMembrane(delta);
    updateNucleus(delta);
    updateCytoskeleton();
    updateMitochondria(delta * speed);
    updateEndomembrane();
    updateMitosis();

    try {
      composer.render();
    } catch (renderError) {
      renderFailed = true;
      if (typeof options.onError === 'function') options.onError(renderError);
      return;
    }
    if (!options.didRender) {
      options.didRender = true;
      if (typeof options.onReady === 'function') options.onReady();
    }
  }

  setChapter(0, true);
  setBrightness(state.brightness);
  camera.aspect = Math.max(1, container.clientWidth) / Math.max(1, container.clientHeight);
  camera.fov = fovTarget;
  camera.updateProjectionMatrix();
  finalPass.uniforms.uResolution.value.set(
    Math.max(1, container.clientWidth) * maxDpr,
    Math.max(1, container.clientHeight) * maxDpr
  );
  raf = requestAnimationFrame(frame);

  function dispose() {
    if (disposed) return;
    disposed = true;
    cancelAnimationFrame(raf);
    renderer.domElement.removeEventListener('pointerdown', onPointerDown);
    renderer.domElement.removeEventListener('pointermove', onPointerMove);
    renderer.domElement.removeEventListener('pointerup', onPointerUp);
    renderer.domElement.removeEventListener('pointercancel', onPointerUp);
    renderer.domElement.removeEventListener('pointerleave', onPointerLeave);
    renderer.domElement.removeEventListener('wheel', onWheel);
    renderer.domElement.removeEventListener('dblclick', onDoubleClick);
    window.removeEventListener('resize', resize);
    document.removeEventListener('fullscreenchange', onFullscreenChange);
    if (resizeObserver) resizeObserver.disconnect();
    const geometries = new Set();
    const materials = new Set();
    scene.traverse((object) => {
      if (object.geometry) geometries.add(object.geometry);
      if (object.material) {
        const list = Array.isArray(object.material) ? object.material : [object.material];
        for (const material of list) if (material) materials.add(material);
      }
    });
    for (const geometry of geometries) {
      try {
        geometry.dispose();
      } catch (error) {
        /* ignore */
      }
    }
    for (const material of materials) {
      try {
        if (material.map) material.map.dispose();
        material.dispose();
      } catch (error) {
        /* ignore */
      }
    }
    if (envTexture) envTexture.dispose();
    try {
      bloom.dispose();
    } catch (error) {
      /* ignore */
    }
    try {
      composer.dispose();
    } catch (error) {
      /* ignore */
    }
    renderer.dispose();
    try {
      renderer.forceContextLoss();
    } catch (error) {
      /* ignore */
    }
    if (renderer.domElement.parentNode === container) container.removeChild(renderer.domElement);
  }

  return {
    setChapter(index) {
      setChapter(index, false);
    },
    setPaused(paused) {
      state.paused = Boolean(paused);
    },
    setBrightness(value) {
      setBrightness(value);
    },
    setDistanceScale(value) {
      state.distanceScale = clamp(Number(value) || 1, 0.6, 3);
    },
    resetView() {
      resetView();
    },
    pulse() {
      state.flash = Math.min(1.6, state.flash + 0.9);
    },
    getChapter() {
      return state.chapter;
    },
    dispose,
    renderer,
    scene,
  };
}
