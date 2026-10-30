import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { CHAPTERS, WEIGHTS } from './chapters.js';
import * as SH from './shaders.js';
import { cisternaGeometry } from './model-geometry.js';
import { sphericalBilayer, decorateMembraneProtein, cytoskeletonCurve,
  cytoskeletonDetails, mitochondrialInterior, nuclearBasket, chromatinBeads,
  roughERSheets, divisionAnatomy } from './scene-anatomy.js';

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
  // Keep the fill outside the Golgi stack; an embedded point light clips the
  // cisternae to white and hides their lumen/stacking in the close-up.
  const amberLight = new THREE.PointLight(0xffab58, 22, 34, 2);
  amberLight.position.set(-7, 4, 5);
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
      uOpacity: { value: 0.56 },
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
    opacity: 0.16,
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
  const dummy = new THREE.Object3D();
  const proteinDirs = fibonacciSphere(30);
  // Keep a representative channel and receptor in the membrane close-up,
  // rather than placing every identifiable protein outside its initial frame.
  proteinDirs[12].set(-0.18, 0.28, 0.94).normalize();
  proteinDirs[13].set(-0.39, 0.12, 0.91).normalize();
  lipidGroup.add(sphericalBilayer(fibonacciSphere(2400), CELL_RADIUS, proteinDirs));

  const proteinGroup = new THREE.Group();
  cellRoot.add(proteinGroup);
  for (let i = 0; i < proteinDirs.length; i += 1) {
    const dir = proteinDirs[i];
    const protein = new THREE.Group();
    protein.position.copy(dir).multiplyScalar(CELL_RADIUS - 0.03);
    protein.quaternion.setFromUnitVectors(UP, dir);
    protein.rotateY(rng() * TAU);
    const scale = 0.86 + rng() * 0.20;
    protein.scale.setScalar(scale);
    decorateMembraneProtein(protein, i);
    proteinGroup.add(protein);
  }

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
  for (let f = 0; f < 48; f += 1) {
    const curve = cytoskeletonCurve(f);
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
  cytoskeletonGroup.add(cytoskeletonDetails(fiberCurves));
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
          (-1 + rng() * 2) * Math.sqrt(Math.max(0, 7.7 ** 2 - radius ** 2)),
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
      uOpacity: { value: 0.22 },
      uColorA: { value: new THREE.Color(0x4b1b70) },
      uColorB: { value: new THREE.Color(0xc344a4) },
      uColorC: { value: new THREE.Color(0x8ff5ff) },
    },
    vertexShader: SH.NUCLEUS_VS,
    fragmentShader: SH.NUCLEUS_FS,
    transparent: true,
    depthWrite: false,
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
  const innerEnvelope = new THREE.Mesh(new THREE.SphereGeometry(2.66, 64, 40), envelopeMaterial.clone());
  innerEnvelope.material.uniforms.uOpacity.value = 0.10;
  nucleusGroup.add(innerEnvelope);

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

  // A readable, camera-facing nuclear pore complex: eight spokes, outer/inner
  // rings, a central channel and animated cargo moving in both directions.
  const npcDir = new THREE.Vector3(0.58, 0.32, 0.75).normalize();
  const npc = new THREE.Group();
  npc.position.copy(npcDir.clone().multiplyScalar(2.78));
  npc.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), npcDir);
  const npcMat = new THREE.MeshBasicMaterial({
    color: 0x9be8ff,
    transparent: true,
    opacity: 0.74,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const npcInnerMat = new THREE.MeshBasicMaterial({
    color: 0xffb8e8,
    transparent: true,
    opacity: 0.62,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const npcOuter = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.030, 8, 40), npcMat);
  const npcInner = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.020, 8, 30), npcInnerMat);
  npc.add(npcOuter, npcInner);
  const npcSpokes = new THREE.Group();
  const spokeGeo = new THREE.CylinderGeometry(0.016, 0.016, 0.28, 6);
  for (let i = 0; i < 8; i += 1) {
    const a = (i / 8) * TAU;
    const spoke = new THREE.Mesh(spokeGeo, npcMat);
    spoke.position.set(Math.cos(a) * 0.32, Math.sin(a) * 0.32, 0);
    spoke.rotation.z = a - Math.PI / 2;
    npcSpokes.add(spoke);
  }
  npcSpokes.name = 'fixed-npc-scaffold';
  npc.add(npcSpokes, nuclearBasket());
  const channel = new THREE.Mesh(
    new THREE.CylinderGeometry(0.085, 0.085, 0.30, 16, 1, true),
    new THREE.MeshBasicMaterial({ color: 0x6fe8ff, transparent: true, opacity: 0.18, side: THREE.DoubleSide, depthWrite: false })
  );
  channel.rotation.x = Math.PI / 2;
  npc.add(channel);
  const npcPlug = new THREE.Mesh(
    new THREE.SphereGeometry(0.06, 12, 8),
    new THREE.MeshBasicMaterial({ color: 0xffd2f1, transparent: true, opacity: 0.9, depthWrite: false })
  );
  npc.add(npcPlug);
  const npcCargo = [];
  for (let i = 0; i < 6; i += 1) {
    const exportCargo = i % 2 === 1;
    const a = (i / 6) * TAU;
    const cargo = new THREE.Mesh(
      new THREE.SphereGeometry(0.045, 10, 7),
      new THREE.MeshBasicMaterial({
        color: exportCargo ? 0xffc27a : 0x75e8ff,
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    cargo.position.set(Math.cos(a) * 0.09, Math.sin(a) * 0.09, exportCargo ? 0.62 : -0.62);
    npc.add(cargo);
    npcCargo.push({ mesh: cargo, phase: i / 6, speed: 0.28 + (i % 2) * 0.10, dir: exportCargo ? 1 : -1 });
  }
  nucleusGroup.add(npc);

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
  chromatinGroup.add(chromatinNodes, chromatinBeads(chromatinPoints));

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
      uOpacity: { value: 0.24 },
      uColorA: { value: new THREE.Color(0x7a2f11) },
      uColorB: { value: new THREE.Color(0xff9e4a) },
      uColorC: { value: new THREE.Color(0xffe4a4) },
    },
    vertexShader: SH.MITO_VS,
    fragmentShader: SH.MITO_FS,
    transparent: true,
    depthWrite: false,
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
  const mitoBodies = [];
  const mitoGeometry = new THREE.CapsuleGeometry(0.42, 1.5, 6, 18);
  const mitoGlowGeometry = new THREE.CapsuleGeometry(0.5, 1.55, 6, 18);
  for (let i = 0; i < mitoPositions.length; i += 1) {
    const group = new THREE.Group();
    group.position.fromArray(mitoPositions[i]);
    group.rotation.set(rng() * TAU, rng() * TAU, rng() * TAU);
    group.scale.set(0.8 + rng() * 0.45, 0.82 + rng() * 0.55, 0.8 + rng() * 0.45);
    const mito = new THREE.Mesh(mitoGeometry, mitoMaterial);
    group.add(mito, mitochondrialInterior());
    mitoBodies.push(group);
    const glow = new THREE.Mesh(mitoGlowGeometry, mitoGlowMaterial);
    group.add(glow);
    mitochondriaGroup.add(group);
  }

  // ATP synthase assemblies: F0 ring in the inner membrane, a stalk and the
  // F1 head facing the matrix. The highlighted assemblies also receive a
  // visible H+ stream from the intermembrane space.
  const synthaseAnchors = [];
  const synthaseRotors = [];
  const synthaseRingMat = new THREE.MeshBasicMaterial({
    color: 0x78f5df,
    transparent: true,
    opacity: 0.72,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const synthaseGoldMat = new THREE.MeshStandardMaterial({
    color: 0xffb85e,
    emissive: 0x9a4a13,
    emissiveIntensity: 0.85,
    roughness: 0.3,
    metalness: 0.08,
    transparent: true,
    opacity: 0.9,
  });
  [0, 1, 2, 5, 7].forEach((index) => {
    const body = mitoBodies[index];
    body.updateMatrix();
    const dir = new THREE.Vector3(0, 0, 1).applyQuaternion(body.quaternion);
    const anchor = new THREE.Vector3(0.04, 0.08, 0.30).applyMatrix4(body.matrix);
    const assembly = new THREE.Group();
    assembly.position.copy(anchor);
    assembly.scale.setScalar(0.62);
    assembly.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir);
    const f0 = new THREE.Mesh(new THREE.TorusGeometry(0.30, 0.026, 8, 32), synthaseRingMat);
    const f0Inner = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.015, 8, 24), synthaseRingMat);
    assembly.add(f0, f0Inner);
    const rotor = new THREE.Group();
    rotor.position.z = -0.30;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 12), synthaseGoldMat);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.21, 0.022, 8, 28), synthaseGoldMat);
    rotor.add(head, ring);
    for (let i = 0; i < 3; i += 1) {
      const a = (i / 3) * TAU;
      const paddle = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), synthaseGoldMat);
      paddle.position.set(Math.cos(a) * 0.19, Math.sin(a) * 0.19, 0);
      rotor.add(paddle);
    }
    assembly.add(rotor);
    const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 0.25, 8), synthaseGoldMat);
    stalk.rotation.x = Math.PI / 2;
    stalk.position.z = -0.14;
    assembly.add(stalk);
    mitochondriaGroup.add(assembly);
    rotor.name = 'fixed-f1-head';
    const shaft = new THREE.Group();
    shaft.name = 'rotating-gamma-shaft';
    assembly.remove(stalk);
    shaft.add(stalk);
    const cam = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 6), synthaseGoldMat);
    cam.position.set(0.035, 0, -0.2);
    shaft.add(cam);
    assembly.add(shaft);
    const stator = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.34, 6), synthaseGoldMat);
    stator.rotation.x = Math.PI / 2;
    stator.position.set(0.20, 0, -0.15);
    assembly.add(stator);
    synthaseRotors.push(shaft);
    synthaseAnchors.push({ anchor, dir, quaternion: assembly.quaternion.clone() });
  });

  const synthaseFlowCount = 180;
  const synthaseFlowPositions = new Float32Array(synthaseFlowCount * 3);
  const synthaseFlowData = [];
  for (let i = 0; i < synthaseFlowCount; i += 1) {
    const assembly = synthaseAnchors[i % synthaseAnchors.length];
    const a = rng() * TAU;
    synthaseFlowData.push({
      anchor: assembly.anchor,
      quaternion: assembly.quaternion,
      x: Math.cos(a) * (0.02 + rng() * 0.07),
      y: Math.sin(a) * (0.02 + rng() * 0.07),
      phase: rng(),
      speed: 0.24 + rng() * 0.38,
    });
  }
  const synthaseFlowGeo = new THREE.BufferGeometry();
  synthaseFlowGeo.setAttribute('position', new THREE.BufferAttribute(synthaseFlowPositions, 3));
  const synthaseFlowMat = new THREE.PointsMaterial({
    color: 0x8ff7ff,
    size: 0.045,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.62,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const synthaseFlow = new THREE.Points(synthaseFlowGeo, synthaseFlowMat);
  synthaseFlow.frustumCulled = false;
  mitochondriaGroup.add(synthaseFlow);

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

  const atpCount = 120;
  const atpPositions = new Float32Array(atpCount * 3);
  const atpLife = new Float32Array(atpCount);
  const atpData = [];
  for (let i = 0; i < atpCount; i += 1) {
    const assembly = synthaseAnchors[i % synthaseAnchors.length];
    const dir = assembly.dir.clone();
    const tangent = new THREE.Vector3(-dir.y, dir.x, 0).normalize();
    atpData.push({
      origin: assembly.anchor.clone().addScaledVector(dir, -0.34),
      dir,
      tangent,
      age: rng() * 3,
      life: 2.6 + rng() * 2.4,
      speed: 0.34 + rng() * 0.55,
      wobble: rng() * TAU,
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

  const adpCount = 56;
  const adpPositions = new Float32Array(adpCount * 3);
  const adpData = [];
  for (let i = 0; i < adpCount; i += 1) {
    const assembly = synthaseAnchors[i % synthaseAnchors.length];
    adpData.push({
      anchor: assembly.anchor,
      dir: assembly.dir,
      tangent: new THREE.Vector3(-assembly.dir.y, assembly.dir.x, 0).normalize(),
      phase: rng(),
      speed: 0.20 + rng() * 0.28,
    });
  }
  const adpGeo = new THREE.BufferGeometry();
  adpGeo.setAttribute('position', new THREE.BufferAttribute(adpPositions, 3));
  const adpMat = new THREE.PointsMaterial({
    color: 0x8fd8ff,
    size: 0.042,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.32,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const adp = new THREE.Points(adpGeo, adpMat);
  adp.frustumCulled = false;
  mitochondriaGroup.add(adp);
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
  endomembraneGroup.add(roughERSheets());
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
    emissiveIntensity: 0.22,
    roughness: 0.34,
    metalness: 0.16,
    transparent: true,
    opacity: 0.55,
  });
  for (let i = 0; i < 6; i += 1) {
    const radius = 1.13 - i * 0.08;
    const cisterna = new THREE.Mesh(
      cisternaGeometry(radius, radius * 0.70, 0.046, 0.15, i),
      golgiMat
    );
    cisterna.position.z = (i - 2.5) * 0.16;
    cisterna.rotation.x = Math.PI / 2;
    cisterna.rotation.z = (i - 2.5) * 0.035;
    golgiGroup.add(cisterna);
  }

  const vesicleRoutes = [];
  for (let i = 0; i < 18; i += 1) {
    const start = erCurves[i % erCurves.length].getPoint(0.35 + rng() * 0.3);
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
    if (i % 3 === 0) {
      const coat = new THREE.Mesh(new THREE.IcosahedronGeometry(0.13, 1),
        new THREE.MeshBasicMaterial({ color: 0xc5b292, wireframe: true, transparent: true, opacity: 0.4, depthWrite: false }));
      mesh.add(coat);
    }
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
    const contents = new THREE.Mesh(organicSphereGeometry(0.11, 16, 12, 0.035, i),
      new THREE.MeshStandardMaterial({ color: 0x925263, roughness: 0.8, transparent: true, opacity: 0.8 }));
    lysosome.add(contents);
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
        // Arms meet at the centromere and trail behind the pole-facing tip.
        mesh.position.set(-side * 0.13, (arm === 0 ? 1 : -1) * 0.2, 0);
        mesh.rotation.z = (arm === 0 ? -side : side) * 0.58;
        group.add(mesh);
      }
      const kinetochore = new THREE.Mesh(new THREE.SphereGeometry(0.065, 10, 8),
        new THREE.MeshStandardMaterial({ color: 0xe6d7a9, roughness: 0.65, transparent: true, opacity: 0.9 }));
      kinetochore.name = 'kinetochore';
      group.add(kinetochore);
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
  for (const x of [-3.25, 3.25]) {
    const daughter = new THREE.Mesh(new THREE.SphereGeometry(1.85, 32, 24), daughterMat);
    daughter.position.set(x, 0, 0);
    daughter.scale.setScalar(0.01);
    mitosisGroup.add(daughter);
    daughterNuclei.push(daughter);
  }

  const division = divisionAnatomy();
  mitosisGroup.add(division);

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
    bloom.strength = 0.10 + next * 0.30;
  }

  function updateCamera(dt) {
    state.yaw += (state.yawTarget - state.yaw) * (1 - Math.exp(-dt * 4.0));
    state.pitch += (state.pitchTarget - state.pitch) * (1 - Math.exp(-dt * 4.0));
    state.zoom += (state.zoomTarget - state.zoom) * (1 - Math.exp(-dt * 3.2));
    state.pointerX += (state.pointerTargetX - state.pointerX) * (1 - Math.exp(-dt * 2.5));
    state.pointerY += (state.pointerTargetY - state.pointerY) * (1 - Math.exp(-dt * 2.5));

    const distance = cameraBase.distanceTo(targetBase);
    const portraitFit = clamp(0.95 / camera.aspect, 1, 2.4);
    const zoomedDistance = Math.max(1.4, distance * clamp(state.zoom, 0.42, 1.75) * state.distanceScale * portraitFit);
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
    const breath = 1 + Math.sin(state.time * 0.64) * 0.002;
    membraneShell.scale.setScalar(breath);
    physicalShell.scale.setScalar(breath);
  }

  function updateNucleus(dt) {
    nucleusLight.intensity = 6 * actors.get('nucleus').weight;
    chromatinGroup.rotation.y += dt * 0.018;
    chromatinGroup.rotation.x = Math.sin(state.time * 0.09) * 0.12;
    nucleolus.rotation.y += dt * 0.05;
    envelope.rotation.y -= dt * 0.012;
    // NPC scaffold is stationary; cargo translocation does not rotate the pore.
    npcCargo.forEach(({ mesh, phase, speed, dir }) => {
      const u = ((state.time * speed + phase) % 1 + 1) % 1;
      mesh.position.z = dir > 0 ? -0.62 + u * 1.24 : 0.62 - u * 1.24;
      mesh.scale.setScalar(0.7 + Math.sin(u * Math.PI) * 0.5);
      mesh.material.opacity = (0.32 + Math.sin(u * Math.PI) * 0.6) * actors.get('nucleus').weight;
    });
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

  const flowVec = new THREE.Vector3();
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

    // H+ moves inward through each ATP synthase, down the electrochemical gradient.
    for (let i = 0; i < synthaseFlowData.length; i += 1) {
      const data = synthaseFlowData[i];
      const u = ((state.time * data.speed + data.phase) % 1 + 1) % 1;
      flowVec.set(data.x, data.y, 0.58 - u * 0.92).applyQuaternion(data.quaternion).add(data.anchor);
      synthaseFlowPositions[i * 3] = flowVec.x;
      synthaseFlowPositions[i * 3 + 1] = flowVec.y;
      synthaseFlowPositions[i * 3 + 2] = flowVec.z;
    }
    synthaseFlowGeo.attributes.position.needsUpdate = true;

    for (let i = 0; i < adpData.length; i += 1) {
      const data = adpData[i];
      const u = ((state.time * data.speed + data.phase) % 1 + 1) % 1;
      flowVec.copy(data.anchor)
        .addScaledVector(data.dir, 1.02 - u * 0.82)
        .addScaledVector(data.tangent, Math.sin(u * TAU + data.phase) * 0.12);
      adpPositions[i * 3] = flowVec.x;
      adpPositions[i * 3 + 1] = flowVec.y;
      adpPositions[i * 3 + 2] = flowVec.z;
    }
    adpGeo.attributes.position.needsUpdate = true;

    for (let i = 0; i < atpData.length; i += 1) {
      const data = atpData[i];
      data.age += dt;
      if (data.age > data.life) data.age = 0;
      const life = clamp(data.age / data.life, 0, 1);
      flowVec.copy(data.origin)
        .addScaledVector(data.dir, data.age * data.speed)
        .addScaledVector(data.tangent, Math.sin(data.age * 1.8 + data.wobble) * 0.18);
      atpPositions[i * 3] = flowVec.x;
      atpPositions[i * 3 + 1] = flowVec.y;
      atpPositions[i * 3 + 2] = flowVec.z;
      atpLife[i] = life;
    }
    atpGeo.attributes.position.needsUpdate = true;
    atpGeo.attributes.aLife.needsUpdate = true;
    synthaseRotors.forEach((rotor, i) => {
      rotor.rotation.z = state.time * (1.35 + i * 0.08);
    });
    mitoLight.intensity = (5 + Math.sin(state.time * 1.7) * 1.2) * actors.get('mitochondria').weight;
  }

  function updateEndomembrane() {
    const t = state.time;
    for (const data of vesicles) {
      const u = THREE.MathUtils.euclideanModulo(data.offset + t * data.speed, 1);
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
    division.userData.update(smoothstep(8.2, 11.8, cycle));
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
    spindleMat.opacity = (0.07 + 0.17 * condense) * (1 - daughter);

    for (let i = 0; i < daughterNuclei.length; i += 1) {
      const s = 0.01 + daughter * (0.92 + Math.sin(state.time * 1.6 + i) * 0.05);
      // Flatten along the spindle axis to enclose the chromosome cluster
      // while keeping the centrosome outside the re-forming nuclear envelope.
      daughterNuclei[i].scale.set(s * 0.55, s, s);
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
    if (camera.aspect < 0.85) {
      // Reserve the lower phone screen for the existing chapter caption.
      camera.setViewOffset(width, height, 0, height * 0.18, width, height);
    } else {
      camera.clearViewOffset();
    }
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
    // RAF timestamps can precede construction's performance.now() in the first
    // frame. Never run paths backwards out of their [0, 1] parameter interval.
    const delta = clamp((now - last) / 1000, 0, 0.05);
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
