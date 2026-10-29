// Hand-written GLSL for the Cell Atlas. Everything is procedural: no textures,
// no models, no external assets.

export const NOISE = /* glsl */ `
vec3 ca_mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 ca_mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 ca_permute(vec4 x) { return ca_mod289(((x * 34.0) + 1.0) * x); }
vec4 ca_taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float ca_snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = ca_mod289(i);
  vec4 p = ca_permute(ca_permute(ca_permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = ca_taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

float ca_fbm(vec3 p) {
  float f = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    f += a * ca_snoise(p);
    p = p * 2.02 + 11.7;
    a *= 0.5;
  }
  return f;
}
`;

export const MEMBRANE_VS = /* glsl */ `
uniform float uTime;
uniform float uAmp;
varying vec3 vN;
varying vec3 vV;
varying vec3 vPos;
varying float vNoise;
${NOISE}
void main() {
  vec3 p = position;
  vec3 dir = normalize(position);
  float n = ca_fbm(dir * 2.15 + vec3(0.0, uTime * 0.055, 0.0));
  float breath = sin(uTime * 0.72 + position.y * 0.55 + position.x * 0.31);
  p += normal * (n * uAmp + breath * 0.025);
  vec4 wp = modelMatrix * vec4(p, 1.0);
  vN = normalize(mat3(modelMatrix) * normal);
  vV = normalize(cameraPosition - wp.xyz);
  vPos = p;
  vNoise = n;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

export const MEMBRANE_FS = /* glsl */ `
uniform float uTime;
uniform float uOpacity;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uRim;
varying vec3 vN;
varying vec3 vV;
varying vec3 vPos;
varying float vNoise;
${NOISE}
void main() {
  vec3 N = normalize(vN);
  vec3 V = normalize(vV);
  float fres = pow(1.0 - clamp(abs(dot(N, V)), 0.0, 1.0), 2.3);
  float flow = 0.5 + 0.5 * sin(vPos.y * 1.9 + vPos.x * 1.4 - vNoise * 4.2 + uTime * 0.5);
  float veins = smoothstep(0.42, 0.82, ca_fbm(vPos * 1.05 + vec3(0.0, uTime * 0.045, 0.0)) * 0.5 + 0.5);
  float micro = 0.5 + 0.5 * sin(vPos.z * 8.0 + vPos.y * 3.0 + uTime * 1.1);
  vec3 col = mix(uColorA, uColorB, flow * 0.55 + veins * 0.45);
  col += uRim * (fres * 1.15 + flow * 0.06 + micro * 0.02);
  float alpha = (0.024 + fres * 0.4 + veins * 0.055) * uOpacity;
  if (alpha < 0.004) discard;
  gl_FragColor = vec4(col, alpha);
}
`;

export const GLOW_VS = /* glsl */ `
varying vec3 vN;
varying vec3 vV;
varying vec3 vPos;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vN = normalize(mat3(modelMatrix) * normal);
  vV = normalize(cameraPosition - wp.xyz);
  vPos = position;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

export const GLOW_FS = /* glsl */ `
uniform vec3 uColor;
uniform vec3 uColorB;
uniform float uOpacity;
uniform float uTime;
uniform float uPower;
varying vec3 vN;
varying vec3 vV;
varying vec3 vPos;
void main() {
  float fres = pow(1.0 - clamp(abs(dot(normalize(vN), normalize(vV))), 0.0, 1.0), uPower);
  float band = 0.5 + 0.5 * sin(vPos.y * 5.0 + vPos.x * 2.0 - uTime * 0.8);
  vec3 col = mix(uColor, uColorB, band * 0.45);
  col *= (0.72 + fres * 1.5);
  float alpha = uOpacity * (fres * 0.75 + 0.014);
  gl_FragColor = vec4(col, alpha);
}
`;

export const LIPID_VS = /* glsl */ `
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
varying vec3 vCol;
varying float vPulse;
void main() {
  vec3 p = position;
  vec3 ip = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
  float ph = uTime * 0.72 + ip.x * 1.35 + ip.y * 2.1 + ip.z * 1.65;
  p.x += sin(ph) * 0.04;
  p.z += cos(ph * 0.91) * 0.04;
  p.y += sin(ph * 0.47) * 0.025;
  vec4 wp = modelMatrix * instanceMatrix * vec4(p, 1.0);
  vCol = mix(uColorA, uColorB, 0.5 + 0.5 * sin(ph * 0.55));
  vPulse = 0.62 + 0.38 * sin(ph);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

export const LIPID_FS = /* glsl */ `
uniform float uOpacity;
varying vec3 vCol;
varying float vPulse;
void main() {
  gl_FragColor = vec4(vCol * (1.25 + vPulse * 0.9), uOpacity * vPulse);
}
`;

export const PARTICLE_VS = /* glsl */ `
uniform float uTime;
uniform float uPixelRatio;
uniform float uSize;
uniform float uOpacity;
uniform float uDrift;
attribute float aSeed;
attribute float aScale;
varying float vSeed;
varying float vAlpha;
${NOISE}
void main() {
  vSeed = aSeed;
  vec3 p = position;
  float ang = uTime * (0.025 + aSeed * 0.055);
  float c = cos(ang);
  float s = sin(ang);
  p.xz = mat2(c, -s, s, c) * p.xz;
  float n1 = ca_snoise(position * 0.18 + vec3(0.0, uTime * 0.05, 0.0));
  float n2 = ca_snoise(position * 0.16 + vec3(17.0, uTime * 0.04, 3.0));
  p += vec3(n1, n2, ca_snoise(position * 0.2 + vec3(3.0, uTime * 0.03, 7.0))) * uDrift;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  float depth = max(-mv.z, 0.1);
  gl_PointSize = clamp(uSize * aScale * uPixelRatio * (230.0 / depth), 1.0, 20.0);
  vAlpha = smoothstep(0.0, 1.6, depth);
}
`;

export const PARTICLE_FS = /* glsl */ `
uniform float uOpacity;
varying float vSeed;
varying float vAlpha;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  float core = smoothstep(0.5, 0.0, d);
  float halo = smoothstep(0.5, 0.12, d) * 0.35;
  vec3 col = mix(vec3(0.30, 0.96, 0.88), vec3(1.0, 0.35, 0.68), smoothstep(0.52, 0.9, fract(vSeed * 13.71)));
  col = mix(col, vec3(1.0, 0.72, 0.36), smoothstep(0.87, 0.995, fract(vSeed * 7.31)) * 0.8);
  gl_FragColor = vec4(col, (core + halo) * vAlpha * uOpacity);
}
`;

export const NUCLEUS_VS = /* glsl */ `
uniform float uTime;
varying vec3 vN;
varying vec3 vV;
varying vec3 vPos;
varying float vNoise;
${NOISE}
void main() {
  vec3 p = position;
  float n = ca_fbm(normalize(position) * 1.35 + vec3(0.0, uTime * 0.04, 0.0));
  p += normal * n * 0.065;
  vec4 wp = modelMatrix * vec4(p, 1.0);
  vN = normalize(mat3(modelMatrix) * normal);
  vV = normalize(cameraPosition - wp.xyz);
  vPos = p;
  vNoise = n;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

export const NUCLEUS_FS = /* glsl */ `
uniform float uTime;
uniform float uOpacity;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
varying vec3 vN;
varying vec3 vV;
varying vec3 vPos;
varying float vNoise;
${NOISE}
void main() {
  vec3 N = normalize(vN);
  vec3 V = normalize(vV);
  float fres = pow(1.0 - clamp(abs(dot(N, V)), 0.0, 1.0), 2.0);
  float n = ca_fbm(vPos * 0.78 + vec3(0.0, uTime * 0.07, 4.0));
  float veins = smoothstep(-0.2, 0.55, n);
  float filament = smoothstep(0.55, 0.9, ca_fbm(vPos * 2.1 + vec3(3.0, uTime * 0.03, 0.0)) * 0.5 + 0.5);
  vec3 col = mix(uColorA, uColorB, veins * 0.8);
  col += uColorC * (pow(fres, 1.7) * 1.25 + filament * 0.12);
  col += uColorB * pow(max(0.0, sin(vPos.y * 3.4 + vPos.x * 1.7 + uTime * 0.65)), 8.0) * 0.12;
  gl_FragColor = vec4(col, uOpacity);
}
`;

export const MITO_VS = /* glsl */ `
uniform float uTime;
varying vec3 vN;
varying vec3 vV;
varying vec3 vLocal;
${NOISE}
void main() {
  vec3 p = position;
  float pulse = ca_snoise(normalize(position) * 2.0 + vec3(0.0, uTime * 0.25, 0.0));
  p += normal * pulse * 0.018;
  vec4 wp = modelMatrix * vec4(p, 1.0);
  vN = normalize(mat3(modelMatrix) * normal);
  vV = normalize(cameraPosition - wp.xyz);
  vLocal = position;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

export const MITO_FS = /* glsl */ `
uniform float uTime;
uniform float uOpacity;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
varying vec3 vN;
varying vec3 vV;
varying vec3 vLocal;
void main() {
  vec3 N = normalize(vN);
  vec3 V = normalize(vV);
  float fres = pow(1.0 - clamp(abs(dot(N, V)), 0.0, 1.0), 2.0);
  float ribs = 0.5 + 0.5 * sin(vLocal.y * 19.0 + sin(vLocal.x * 8.5 + uTime * 1.15) * 1.9 + vLocal.z * 5.0);
  float ribs2 = pow(ribs, 3.0);
  vec3 col = mix(uColorA, uColorB, ribs * 0.62 + 0.2);
  col += uColorC * (ribs2 * 1.1 + fres * 0.9);
  float alpha = uOpacity * (0.65 + fres * 0.25);
  gl_FragColor = vec4(col, alpha);
}
`;

export const ER_VS = /* glsl */ `
varying vec2 vUv;
varying vec3 vN;
varying vec3 vV;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vUv = uv;
  vN = normalize(mat3(modelMatrix) * normal);
  vV = normalize(cameraPosition - wp.xyz);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

export const ER_FS = /* glsl */ `
uniform float uTime;
uniform float uOpacity;
uniform vec3 uColorA;
uniform vec3 uColorB;
varying vec2 vUv;
varying vec3 vN;
varying vec3 vV;
void main() {
  float fres = pow(1.0 - clamp(abs(dot(normalize(vN), normalize(vV))), 0.0, 1.0), 2.0);
  float dash = smoothstep(0.22, 0.95, sin(vUv.x * 40.0 - uTime * 2.6 + vUv.y * 7.0) * 0.5 + 0.5);
  vec3 col = mix(uColorA, uColorB, vUv.x * 0.62 + 0.15);
  col += uColorB * (dash * 1.15 + fres * 1.3);
  float alpha = uOpacity * (0.22 + dash * 0.58 + fres * 0.28);
  gl_FragColor = vec4(col, alpha);
}
`;

export const LINE_VS = /* glsl */ `
attribute float aT;
attribute float aSeed;
varying float vT;
varying float vSeed;
void main() {
  vT = aT;
  vSeed = aSeed;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const LINE_FS = /* glsl */ `
uniform float uTime;
uniform float uOpacity;
uniform vec3 uColorA;
uniform vec3 uColorB;
varying float vT;
varying float vSeed;
void main() {
  float pulse = 0.5 + 0.5 * sin(vT * 28.0 - uTime * 1.9 + vSeed * 6.283);
  vec3 col = mix(uColorA, uColorB, pulse * 0.7 + vSeed * 0.3);
  float alpha = uOpacity * (0.16 + 0.62 * pulse);
  gl_FragColor = vec4(col * (1.0 + pulse * 0.6), alpha);
}
`;

export const BACKGROUND_VS = /* glsl */ `
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const BACKGROUND_FS = /* glsl */ `
uniform float uTime;
uniform float uOpacity;
varying vec3 vDir;
${NOISE}
void main() {
  vec3 d = normalize(vDir);
  float horizon = smoothstep(-0.75, 0.85, d.y);
  vec3 col = mix(vec3(0.0025, 0.006, 0.011), vec3(0.008, 0.028, 0.046), horizon);
  float n = ca_fbm(d * 3.1 + vec3(0.0, uTime * 0.009, 0.0));
  float cloud = pow(max(n * 0.5 + 0.5, 0.0), 3.0);
  col += vec3(0.025, 0.12, 0.145) * cloud * 1.2;
  float ribbon = smoothstep(0.67, 0.94, sin(d.x * 4.2 + d.y * 5.8 + n * 2.2 + uTime * 0.025) * 0.5 + 0.5);
  col += vec3(0.20, 0.025, 0.13) * ribbon * 0.32;
  float glow = smoothstep(0.45, 1.0, 1.0 - abs(d.x * 0.6 + d.y * 0.3));
  col += vec3(0.012, 0.055, 0.06) * glow * 0.5;
  gl_FragColor = vec4(col * uOpacity, 1.0);
}
`;

export const SHAFT_VS = /* glsl */ `
varying vec2 vUv;
varying vec3 vN;
varying vec3 vV;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vUv = uv;
  vN = normalize(mat3(modelMatrix) * normal);
  vV = normalize(cameraPosition - wp.xyz);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

export const SHAFT_FS = /* glsl */ `
uniform float uTime;
uniform float uOpacity;
uniform vec3 uColor;
varying vec2 vUv;
varying vec3 vN;
varying vec3 vV;
${NOISE}
void main() {
  float facing = abs(dot(normalize(vN), normalize(vV)));
  float fall = smoothstep(0.0, 0.25, vUv.y) * (1.0 - smoothstep(0.55, 1.0, vUv.y));
  float n = ca_fbm(vec3(vUv * vec2(6.0, 2.4), uTime * 0.07));
  float wisps = 0.5 + 0.5 * n;
  float alpha = uOpacity * fall * (0.08 + facing * 0.42) * (0.45 + wisps * 0.75);
  gl_FragColor = vec4(uColor * (1.1 + wisps * 0.9), alpha);
}
`;

export const FINAL_FS = /* glsl */ `
uniform sampler2D tDiffuse;
uniform vec2 uResolution;
uniform float uTime;
uniform float uFlash;
uniform float uIntensity;
uniform float uGrain;
uniform float uLetterbox;
varying vec2 vUv;

float ca_hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

void main() {
  vec2 uv = vUv;
  vec2 c = uv - 0.5;
  float r = length(c);
  vec2 dir = normalize(c + 0.00001);
  float lens = r * r * 0.008 * uIntensity;
  vec2 warped = uv + dir * lens;
  float ca = 0.00035 + r * 0.00065;
  ca *= uIntensity;
  vec3 col;
  col.r = texture2D(tDiffuse, warped + dir * ca).r;
  col.g = texture2D(tDiffuse, warped).g;
  col.b = texture2D(tDiffuse, warped - dir * ca).b;

  // A lens-side focus falloff: the optical centre stays sharp while the
  // periphery is softened, like a wide-open macro lens.
  vec3 blur = vec3(0.0);
  float total = 0.0;
  for (int i = 0; i < 7; i++) {
    float f = float(i) / 6.0;
    float w = 1.0 - f;
    blur += texture2D(tDiffuse, warped - dir * r * r * 0.008 * f).rgb * w;
    total += w;
  }
  blur /= total;
  col = mix(col, blur, smoothstep(0.4, 0.95, r) * 0.24 * uIntensity);

  col += vec3(0.18, 0.48, 0.54) * uFlash * (0.12 + r * 0.56);
  float grain = ca_hash(gl_FragCoord.xy + uTime * 61.0) - 0.5;
  col += grain * uGrain * (0.4 + uIntensity * 0.6);
  float vig = smoothstep(1.06, 0.24, r);
  col *= mix(1.0, vig, 0.7);
  float luma = dot(col, vec3(0.299, 0.587, 0.114));
  col = mix(col, vec3(luma), 0.045);
  col *= vec3(0.965, 1.015, 1.03);
  col = max(col, vec3(0.0));
  gl_FragColor = vec4(col, 1.0);
}
`;
