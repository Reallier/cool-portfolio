"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
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

      // 检查鼠标悬停的元素是否可点击，用于改变光标样式
      const target = e.target as HTMLElement;
      const computedStyle = window.getComputedStyle(target);
      const cursorStyle = computedStyle.cursor;

      const clickableCursors = ['pointer', 'text', 'alias', 'copy', 'move', 'grab', 'grabbing'];
      setIsClickable(clickableCursors.includes(cursorStyle) || target.tagName === 'A' || target.tagName === 'BUTTON' ||
                     target.onclick !== null || target.getAttribute('role') === 'button');
    };

    const hideCursor = () => {
      setIsVisible(false);
      setIsClickable(false);
    };

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
      {/* 放大镜效果 - 放大的背景内容 */}
      <motion.div
        className="pointer-events-none fixed z-[9997]"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: "-50%",
          y: "-50%",
          width: isClickable ? "96px" : "144px",
          height: isClickable ? "96px" : "144px",
        }}
      >
        <div
          className="relative w-full h-full rounded-full overflow-hidden"
          style={{
            transform: "scale(1.5)",
            transformOrigin: "center center",
          }}
        >
          <div
            className="absolute inset-0 backdrop-blur-[2px]"
            style={{
              maskImage: "radial-gradient(circle at center, black 0%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(circle at center, black 0%, transparent 70%)",
            }}
          />
        </div>
      </motion.div>

      {/* 液态玻璃透镜效果 */}
      <motion.div
        className="pointer-events-none fixed z-[9999] mix-blend-screen"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: "-50%",
          y: "-50%",
        }}
      >
        <div className={`relative transition-all duration-200 ${isClickable ? 'h-24 w-24' : 'h-36 w-36'}`}>
          {/* 外层光环 */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/50 to-cyan-600/50 blur-xl animate-pulse ${isClickable ? 'scale-75' : 'scale-100'}`} />

          {/* 透镜主体 - 完全透明的玻璃效果 */}
          <div className={`absolute inset-[6px] rounded-full border-[3px] backdrop-blur-sm shadow-[0_0_40px_rgba(37,99,235,0.6),inset_0_0_30px_rgba(255,255,255,0.2)] ${isClickable ? 'border-blue-600/85 scale-90' : 'border-blue-500/75'}`}>
            {/* 玻璃高光 */}
            <div className="absolute top-2 left-2 right-2 h-1/3 rounded-t-full bg-gradient-to-b from-white/30 to-transparent" />
            
            {/* 十字辅助线 */}
            <div className="absolute left-1/2 top-1/4 bottom-1/4 w-[1px] bg-blue-400/20 -translate-x-1/2" />
            <div className="absolute top-1/2 left-1/4 right-1/4 h-[1px] bg-blue-400/20 -translate-y-1/2" />
          </div>

          {/* 中心点 */}
          <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_12px_rgba(37,99,235,0.9)] ${isClickable ? 'h-3 w-3 bg-blue-600/85' : 'h-2.5 w-2.5 bg-blue-500/75'}`} />
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
        <div className={`rounded-full bg-gradient-to-r from-blue-600/25 to-cyan-600/25 blur-3xl transition-all duration-200 ${isClickable ? 'h-32 w-32' : 'h-48 w-48'}`} />
      </motion.div>
    </>
  );
}