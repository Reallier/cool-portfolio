"use client";

import { Suspense, useMemo, type MouseEvent as ReactMouseEvent } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Stars, useGLTF, PerformanceMonitor, AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

function Blob() {
  return (
    <Float speed={1.4} rotationIntensity={0.45} floatIntensity={0.9}>
      <mesh scale={2.2}>
        <icosahedronGeometry args={[1.1, 2]} />
        <meshStandardMaterial color="#7c3aed" roughness={0.18} metalness={0.85} />
      </mesh>
    </Float>
  );
}

function Model() {
  const gltf = useGLTF("/models/hero.glb");
  return <primitive object={gltf.scene} scale={1.2} />;
}

export default function ThreeHero({ useModel = false }: { useModel?: boolean }) {
  const reduced = useReducedMotion();
  const dpr = useMemo(
    () => (typeof window !== "undefined" && window.devicePixelRatio > 1.5 ? 1.5 : 1.25),
    []
  );

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springX = useSpring(tiltX, { stiffness: 120, damping: 18, mass: 0.3 });
  const springY = useSpring(tiltY, { stiffness: 120, damping: 18, mass: 0.3 });

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    // 控制最大偏移，形成明显但不晕的视差
    const maxOffset = 26;
    tiltX.set((x / rect.width) * maxOffset);
    tiltY.set((y / rect.height) * maxOffset);
  };

  const handleMouseLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <motion.div
      className="absolute inset-0"
      style={{
        x: springX,
        y: springY,
        scale: reduced ? 1 : 1.02,
      }}
      onMouseMove={reduced ? undefined : handleMouseMove}
      onMouseLeave={reduced ? undefined : handleMouseLeave}
    >
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={reduced ? 1 : dpr}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 2, 5]} intensity={1.1} />
        <spotLight position={[6, 10, 8]} angle={0.35} penumbra={0.4} intensity={1.5} color="#60a5fa" />
        <pointLight position={[-5, -4, -2]} intensity={0.8} color="#22d3ee" />
        {!reduced && <Stars radius={60} depth={40} count={2600} factor={4} fade />}
        <Suspense fallback={null}>{useModel ? <Model /> : <Blob />}</Suspense>
        <PerformanceMonitor />
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
      </Canvas>
    </motion.div>
  );
}
