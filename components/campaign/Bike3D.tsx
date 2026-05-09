"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Html } from "@react-three/drei";
import { Mesh, Group } from "three";

function Bike({ autoRotate = true }: { autoRotate?: boolean }) {
  const groupRef = useRef<Group>(null);
  const frameRef = useRef<Mesh>(null);

  useFrame(() => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += 0.004;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main frame - blue aluminum tube structure */}
      <group position={[0, 0, 0]}>
        {/* Top tube */}
        <mesh position={[0, 0.3, 0]} castShadow>
          <cylinderGeometry args={[0.035, 0.035, 0.8, 8]} />
          <meshStandardMaterial color="#0066ff" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Down tube */}
        <mesh
          position={[-0.15, -0.1, 0]}
          rotation={[0.3, 0, 0]}
          castShadow
        >
          <cylinderGeometry args={[0.038, 0.038, 0.9, 8]} />
          <meshStandardMaterial color="#0066ff" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Seat tube */}
        <mesh position={[0, 0.15, 0]} rotation={[0.15, 0, 0]} castShadow>
          <cylinderGeometry args={[0.032, 0.032, 0.6, 8]} />
          <meshStandardMaterial color="#0066ff" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Chainstays (rear stays) */}
        <mesh position={[-0.35, -0.35, 0.1]} rotation={[0, 0, -0.4]} castShadow>
          <cylinderGeometry args={[0.028, 0.028, 0.5, 8]} />
          <meshStandardMaterial color="#0055cc" metalness={0.8} roughness={0.2} />
        </mesh>

        <mesh position={[-0.35, -0.35, -0.1]} rotation={[0, 0, -0.4]} castShadow>
          <cylinderGeometry args={[0.028, 0.028, 0.5, 8]} />
          <meshStandardMaterial color="#0055cc" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Seatstays */}
        <mesh position={[-0.2, 0.05, 0.12]} rotation={[0.2, 0, -0.3]} castShadow>
          <cylinderGeometry args={[0.025, 0.025, 0.5, 8]} />
          <meshStandardMaterial color="#0055cc" metalness={0.8} roughness={0.2} />
        </mesh>

        <mesh position={[-0.2, 0.05, -0.12]} rotation={[0.2, 0, -0.3]} castShadow>
          <cylinderGeometry args={[0.025, 0.025, 0.5, 8]} />
          <meshStandardMaterial color="#0055cc" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* Fork - black curved steel */}
      <group position={[0.15, 0.25, 0]}>
        <mesh position={[0, -0.15, 0.08]} castShadow>
          <cylinderGeometry args={[0.022, 0.022, 0.35, 8]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.3} />
        </mesh>
        <mesh position={[0, -0.15, -0.08]} castShadow>
          <cylinderGeometry args={[0.022, 0.022, 0.35, 8]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.3} />
        </mesh>
      </group>

      {/* Headset/fork crown */}
      <mesh position={[0.12, 0.25, 0]} castShadow>
        <cylinderGeometry args={[0.045, 0.045, 0.08, 8]} />
        <meshStandardMaterial color="#0066ff" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Front wheel hub position indicator */}
      <mesh position={[0.15, -0.2, 0]} castShadow>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#000" metalness={0.7} roughness={0.4} />
      </mesh>

      {/* Front wheel spokes */}
      {Array.from({ length: 32 }).map((_, i) => (
        <mesh
          key={`spoke-front-${i}`}
          position={[0.15, -0.2, 0]}
          rotation={[0, (i * Math.PI) / 16, 0]}
          castShadow
        >
          <cylinderGeometry args={[0.008, 0.008, 0.24, 4]} />
          <meshStandardMaterial color="#aaa" metalness={0.6} roughness={0.3} />
        </mesh>
      ))}

      {/* Rear wheel hub */}
      <mesh position={[-0.35, -0.2, 0]} castShadow>
        <sphereGeometry args={[0.11, 16, 16]} />
        <meshStandardMaterial color="#000" metalness={0.7} roughness={0.4} />
      </mesh>

      {/* Rear wheel spokes */}
      {Array.from({ length: 32 }).map((_, i) => (
        <mesh
          key={`spoke-rear-${i}`}
          position={[-0.35, -0.2, 0]}
          rotation={[0, (i * Math.PI) / 16, 0]}
          castShadow
        >
          <cylinderGeometry args={[0.008, 0.008, 0.22, 4]} />
          <meshStandardMaterial color="#aaa" metalness={0.6} roughness={0.3} />
        </mesh>
      ))}

      {/* Handlebars - black drop bars */}
      <mesh position={[0.12, 0.45, 0]} castShadow>
        <cylinderGeometry args={[0.02, 0.02, 0.35, 8]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.85} roughness={0.3} />
      </mesh>

      {/* Handlebar stem */}
      <mesh position={[0.12, 0.35, 0]} castShadow>
        <cylinderGeometry args={[0.025, 0.025, 0.15, 8]} />
        <meshStandardMaterial color="#ddd" metalness={0.8} roughness={0.4} />
      </mesh>

      {/* Seat - black */}
      <mesh position={[-0.05, 0.4, 0]} castShadow>
        <boxGeometry args={[0.15, 0.05, 0.08]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.5} />
      </mesh>

      {/* Seatpost */}
      <mesh position={[-0.05, 0.25, 0]} castShadow>
        <cylinderGeometry args={[0.018, 0.018, 0.2, 8]} />
        <meshStandardMaterial color="#0066ff" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Crankset - black */}
      <mesh position={[-0.1, 0, 0]} rotation={[0, 0, 0.3]} castShadow>
        <cylinderGeometry args={[0.06, 0.06, 0.12, 32]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.85} roughness={0.3} />
      </mesh>

      {/* Chain rings (visible as dark circles) */}
      <mesh position={[-0.1, 0, -0.08]} castShadow>
        <cylinderGeometry args={[0.055, 0.055, 0.02, 32]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.4} />
      </mesh>

      {/* Pedals - black */}
      {[-1, 1].map((side, i) => (
        <mesh key={`pedal-${i}`} position={[-0.1 + side * 0.08, -0.05, 0]} castShadow>
          <boxGeometry args={[0.05, 0.02, 0.06]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.4} />
        </mesh>
      ))}

      {/* Brake calipers (subtle detail) */}
      <mesh position={[0.12, -0.1, 0.1]} castShadow>
        <boxGeometry args={[0.08, 0.04, 0.03]} />
        <meshStandardMaterial color="#333" metalness={0.7} roughness={0.5} />
      </mesh>

      <mesh position={[-0.35, -0.1, 0.1]} castShadow>
        <boxGeometry args={[0.08, 0.04, 0.03]} />
        <meshStandardMaterial color="#333" metalness={0.7} roughness={0.5} />
      </mesh>

      {/* "ROCKY MOUNTAIN" text badge on frame */}
      <Html position={[-0.1, 0.15, 0.04]} scale={0.003}>
        <div className="whitespace-nowrap text-xs font-bold text-blue-300">
          ROCKY MOUNTAIN
        </div>
      </Html>
    </group>
  );
}

function BikeScene() {
  return (
    <>
      <Bike autoRotate />
      <OrbitControls enableZoom enablePan enableRotate />
      <color attach="background" args={['#18181b']} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.5} castShadow />
      <directionalLight position={[-5, 3, -5]} intensity={0.8} />
      <pointLight position={[0, 2, 3]} intensity={0.5} />
    </>
  );
}

export function Bike3D() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }} className="rounded-xl border border-white/20 bg-gradient-to-br from-zinc-950 to-zinc-900 p-1 overflow-hidden">
      <Suspense fallback={<div className="h-full w-full bg-zinc-900 animate-pulse flex items-center justify-center" style={{ width: '100%', height: '100%' }}>
        <div className="text-zinc-400">Loading 3D Bike...</div>
      </div>}>
        <Canvas 
          camera={{ position: [0.8, 0.4, 0.8], fov: 50 }} 
          shadows 
          dpr={[1, 2]}
          style={{ width: '100%', height: '100%', display: 'block' }}
        >
          <BikeScene />
        </Canvas>
      </Suspense>
    </div>
  );
}
