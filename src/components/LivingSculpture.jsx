import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// GLSL Shaders
const vertexShader = `
  uniform float uTime;
  uniform vec3 uMouse;
  uniform float uHover;
  
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec3 vViewPosition;
  varying float vNoise;
  varying float vDisplacement;

  // Classic Perlin 3D Noise 
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 = v - i + dot(i, C.xxx) ;

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;

    i = mod289(i); 
    vec4 p = permute( permute( permute( 
               i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
             + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    float n_ = 0.142857142857;
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                  dot(p2,x2), dot(p3,x3) ) );
  }

  void main() {
    vUv = uv;
    // Calculate normal matrix manually since we are deforming
    // (Approximation for performance, correct would be derivative)
    vNormal = normalize(normalMatrix * normal);
    
    // HEAVY / SLOW Movement
    float noiseFreq = 1.5; // Lower frequency for bigger "globs"
    float timeSlow = uTime * 0.2; // Significantly slower for "heavy" liquid feel
    
    float n = snoise(vec3(position.x * noiseFreq + timeSlow, position.y * noiseFreq, position.z * noiseFreq));
    vNoise = n;

    // Subtle breathing
    float breathe = sin(uTime * 0.3) * 0.02; 
    
    // Mouse Interaction
    float dist = distance(position, uMouse);
    float disperse = 0.0;
    float influenceRadius = 0.6;
    
    if (uHover > 0.01 && dist < influenceRadius) {
        float chaos = snoise(vec3(position.x * 5.0, position.y * 5.0, position.z * 5.0 + uTime * 5.0));
        float intensity = smoothstep(influenceRadius, 0.0, dist);
        intensity *= uHover;
        disperse = chaos * intensity * 0.2; 
    }
    
    float totalDisplacement = (n * 0.15) + breathe + disperse; // Heightened displacement for "blobby" look
    vDisplacement = totalDisplacement;
    
    vec3 newPos = position + normal * totalDisplacement;
    vPosition = (modelViewMatrix * vec4(newPos, 1.0)).xyz;
    vViewPosition = -vPosition;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
    
    // Recalculate normal based on displacement (approx via neighbors or analytic - using simple cheat here)
    // To make it look truly watery we rely heavily on the Fragment Shader's gloss
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform float uScroll;
  
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec3 vViewPosition;
  varying float vNoise;
  varying float vDisplacement;

  void main() {
    vec3 viewDir = normalize(vViewPosition);
    vec3 normal = normalize(vNormal);
    
    // 1. Base Material: Dark Black/Blue Chrome
    // Much darker base for high contrast cyberpunk look
    vec3 baseColor = vec3(0.01, 0.01, 0.02); 
    
    // 2. Lighting Setup (Virtual Lights)
    vec3 lightPos1 = vec3(5.0, 5.0, 5.0);
    vec3 lightColor1 = vec3(0.8, 0.9, 1.0); // Cool White/Cyan tint
    
    vec3 lightPos2 = vec3(-5.0, -2.0, 2.0);
    vec3 lightColor2 = vec3(0.2, 0.0, 0.4); // Deep Purple/Magenta fill
    
    vec3 lightDir1 = normalize(lightPos1);
    vec3 lightDir2 = normalize(lightPos2);
    
    // Diffuse
    float diff1 = max(dot(normal, lightDir1), 0.0);
    float diff2 = max(dot(normal, lightDir2), 0.0);
    
    // Specular (Blinn-Phong) - The "Wet" Look
    vec3 halfDir1 = normalize(lightDir1 + viewDir);
    float spec1 = pow(max(dot(normal, halfDir1), 0.0), 80.0); // Higher shininess
    
    vec3 halfDir2 = normalize(lightDir2 + viewDir);
    float spec2 = pow(max(dot(normal, halfDir2), 0.0), 40.0);
    
    // 3. Fresnel (Rim Light) - The "Metallic" Edge (Neon Cyan)
    float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 3.0);
    vec3 fresnelColor = vec3(0.0, 0.95, 1.0); // Neon Cyan Edge
    
    // 4. Fake Environment Reflection (Metallic feel)
    float reflectionIntensity = smoothstep(-1.0, 1.0, normal.y);
    vec3 skyColor = vec3(0.05, 0.1, 0.2); // Dark Cyber Sky
    vec3 groundColor = vec3(0.0, 0.0, 0.05); // Black Ground
    vec3 envReflection = mix(groundColor, skyColor, reflectionIntensity) * 0.5;
    
    // 5. Veins / Internal Glow (Subtle, Deep)
    // Map to "heat" or "energy" inside
    float veinMask = smoothstep(0.4, 0.6, vNoise); 
    // Pulse between Cyan and Neon Red/Pink
    vec3 accentColor = mix(vec3(0.0, 1.0, 1.0), vec3(1.0, 0.0, 0.23), sin(uTime * 0.5) * 0.5 + 0.5);
    
    vec3 deepGlow = accentColor * vDisplacement * 3.0 * (1.0 - fresnel);
    
    // Composition
    vec3 lighting = (baseColor * (diff1 + diff2 + 0.1)) // Low Ambient
                  + (lightColor1 * spec1 * 1.5) // Strong wet highlight
                  + (lightColor2 * spec2 * 0.8) // Purple fill specular
                  + (envReflection * 0.2) // Metallic reflection
                  + (fresnelColor * fresnel * 0.6) // Cyan Rim
                  + (deepGlow * 0.3); // Visible glow
                  
    // Tone Mapping (ACES approximation for contrast)
    lighting = lighting / (lighting + vec3(1.0));
    lighting = pow(lighting, vec3(1.0/2.2)); // Gamma correction
    
    gl_FragColor = vec4(lighting, 1.0);
  }
`;

const Sculpture = () => {
    const meshRef = useRef();
    const materialRef = useRef();

    // Track 3D cursor position in local space
    const [cursorPos, setCursorPos] = useState(new THREE.Vector3(999, 999, 999));
    const [hovered, setHovered] = useState(false);

    const hoverStrength = useRef(0);
    const targetHoverStrength = useRef(0);

    useFrame((state) => {
        targetHoverStrength.current = hovered ? 1 : 0;
        hoverStrength.current = THREE.MathUtils.lerp(hoverStrength.current, targetHoverStrength.current, 0.05); // Slower reaction for heavy feel

        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
            materialRef.current.uniforms.uMouse.value.copy(cursorPos);
            materialRef.current.uniforms.uHover.value = hoverStrength.current;
            materialRef.current.uniforms.uScroll.value = window.scrollY / 500;
        }
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.0005; // Even slower rotation
        }
    });

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uScroll: { value: 0 },
            uMouse: { value: new THREE.Vector3(0, 0, 0) },
            uHover: { value: 0 },
        }),
        []
    );

    const handlePointerMove = (e) => {
        if (meshRef.current) {
            const localPoint = meshRef.current.worldToLocal(e.point.clone());
            setCursorPos(localPoint);
        }
    };

    return (
        <mesh
            ref={meshRef}
            position={[0, 0, 0]}
            scale={2.0}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => {
                setHovered(false);
            }}
            onPointerMove={handlePointerMove}
        >
            <icosahedronGeometry args={[1, 128]} />
            <shaderMaterial
                ref={materialRef}
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
            />
        </mesh>
    );
};

const LivingSculpture = () => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
            <Canvas camera={{ position: [0, 0, 7], fov: 45 }} gl={{ alpha: true, antialias: true }}>
                <Sculpture />
            </Canvas>
        </div>
    );
};

export default LivingSculpture;
