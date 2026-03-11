import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere, Torus, Octahedron, Float, Stars } from "@react-three/drei";
import { useRef, useMemo, Suspense, lazy } from "react";
import * as THREE from "three";

/* ─── Floating orb ─────────────────────────────────────── */
function FloatingOrb({ position, color, size = 0.4, speed = 1 }: {
  position: [number, number, number];
  color: string;
  size?: number;
  speed?: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.2;
    mesh.current.rotation.x += 0.005;
    mesh.current.rotation.z += 0.003;
  });
  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        transparent
        opacity={0.55}
        roughness={0.1}
        metalness={0.8}
      />
    </mesh>
  );
}

/* ─── Glowing ring ──────────────────────────────────────── */
function GlowRing({ position, color, rotation }: {
  position: [number, number, number];
  color: string;
  rotation?: [number, number, number];
}) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (!mesh.current) return;
    mesh.current.rotation.z += 0.004;
    mesh.current.rotation.x += 0.002;
  });
  return (
    <mesh ref={mesh} position={position} rotation={rotation ? new THREE.Euler(...rotation) : undefined}>
      <torusGeometry args={[0.9, 0.025, 16, 100]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

/* ─── Octahedron gem ────────────────────────────────────── */
function FloatingGem({ position, color }: {
  position: [number, number, number];
  color: string;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.5;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.3;
    mesh.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
  });
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={mesh} position={position}>
        <octahedronGeometry args={[0.25]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.8}
          transparent
          opacity={0.75}
          metalness={1}
          roughness={0}
        />
      </mesh>
    </Float>
  );
}

/* ─── Particle field ────────────────────────────────────── */
function Particles({ count = 120 }: { count?: number }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, [count]);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#4DA3FF" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

/* ─── Cursor tracking rig ───────────────────────────────── */
function CameraRig({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const { camera } = useThree();
  useFrame(() => {
    camera.position.x += (mouse.current[0] * 0.5 - camera.position.x) * 0.04;
    camera.position.y += (mouse.current[1] * 0.3 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

/* ─── Full scene ─────────────────────────────────────────── */
function Scene({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  return (
    <>
      <CameraRig mouse={mouse} />
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} color="#4DA3FF" intensity={2} />
      <pointLight position={[-5, -3, 3]} color="#8B5CF6" intensity={1.5} />
      <pointLight position={[0, 5, -5]} color="#ffffff" intensity={0.5} />

      <Stars radius={60} depth={30} count={800} factor={2} fade speed={0.5} />
      <Particles />

      <FloatingOrb position={[-3.5, 1.2, -1]} color="#4DA3FF" size={0.35} speed={0.8} />
      <FloatingOrb position={[3.8, -0.8, -2]} color="#8B5CF6" size={0.28} speed={1.2} />
      <FloatingOrb position={[-2.5, -1.8, -0.5]} color="#4DA3FF" size={0.18} speed={1.5} />
      <FloatingOrb position={[2, 2.2, -1.5]} color="#8B5CF6" size={0.22} speed={0.9} />

      <GlowRing position={[1.8, 0.5, -1]} color="#4DA3FF" rotation={[0.5, 0.3, 0]} />
      <GlowRing position={[-2, -0.5, -2]} color="#8B5CF6" rotation={[0.2, 1.2, 0.4]} />

      <FloatingGem position={[-4, 0.3, 0]} color="#4DA3FF" />
      <FloatingGem position={[4.5, 1.5, -1]} color="#8B5CF6" />
      <FloatingGem position={[0.5, -2.5, 0]} color="#4DA3FF" />
    </>
  );
}

/* ─── Exported canvas ────────────────────────────────────── */
export default function HeroCanvas({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{ position: "absolute", inset: 0 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        <Scene mouse={mouse} />
      </Suspense>
    </Canvas>
  );
}
