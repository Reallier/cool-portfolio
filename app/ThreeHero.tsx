"use client";

import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Stars, useGLTF, PerformanceMonitor, AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";

function Blob() {
  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh scale={2}>
        <icosahedronGeometry args={[1.1, 2]} />
        <meshStandardMaterial color="#7c3aed" roughness={0.2} metalness={0.7} />
      </mesh>
    </Float>
  );
}

function Model() {
  const gltf = useGLTF("/models/hero.glb");
  return <primitive object={gltf.scene} scale={1.2} />;
}
useGLTF.preload("/models/hero.glb");

export default function ThreeHero({ useModel = false }: { useModel?: boolean }) {
  const reduced = useReducedMotion();
  const dpr = useMemo(() => (typeof window !== "undefined" && window.devicePixelRatio > 1.5 ? 1.5 : 1.25), []);
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={reduced ? 1 : dpr}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 2, 5]} intensity={1} />
        {!reduced && <Stars radius={60} depth={40} count={2500} factor={4} fade />}
        <Suspense fallback={null}>
          {useModel ? <Model /> : <Blob />}
        </Suspense>
        <PerformanceMonitor />
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
      </Canvas>
    </div>
  );
}
