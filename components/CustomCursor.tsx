"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* 液态玻璃透镜效果 */}
      <motion.div
        className="pointer-events-none fixed z-[9999] mix-blend-difference"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: "-50%",
          y: "-50%",
        }}
      >
        <div className="relative h-12 w-12">
          {/* 外层光环 */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-blue to-primary-cyan opacity-60 blur-md animate-pulse" />
          
          {/* 透镜主体 */}
          <div className="absolute inset-[4px] rounded-full border-2 border-white/70 bg-white/10 backdrop-blur-sm shadow-[0_0_25px_rgba(255,255,255,0.7)]">
            <div className="h-full w-full rounded-full bg-gradient-to-br from-white/30 to-transparent" />
          </div>
          
          {/* 中心点 */}
          <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
        </div>
      </motion.div>

      {/* 跟随的模糊光晕 */}
      <motion.div
        className="pointer-events-none fixed z-[9998]"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: "-50%",
          y: "-50%",
        }}
      >
        <div className="h-24 w-24 rounded-full bg-gradient-to-r from-primary-blue/20 to-primary-cyan/20 blur-2xl" />
      </motion.div>
    </>
  );
}