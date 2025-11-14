"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function AvatarWithFloat() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 20, mass: 0.3 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // 计算鼠标相对于头像中心的偏移
    const offsetX = mouseX - centerX;
    const offsetY = mouseY - centerY;

    // 限制最大偏移距离
    const maxOffset = 30;
    const distance = Math.sqrt(offsetX ** 2 + offsetY ** 2);
    const clampedDistance = Math.min(distance, maxOffset);

    // 计算归一化方向
    const normalizedX = distance > 0 ? (offsetX / distance) * clampedDistance : 0;
    const normalizedY = distance > 0 ? (offsetY / distance) * clampedDistance : 0;

    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="relative h-80 w-80 sm:h-96 sm:w-96 cursor-pointer"
      style={{
        x: springX,
        y: springY,
        transformStyle: "preserve-3d",
      }}
      initial={{
        opacity: 0,
        rotateY: -90,
        scale: 0.5
      }}
      animate={{
        opacity: 1,
        rotateY: 0,
        scale: 1
      }}
      transition={{
        duration: 1,
        delay: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-blue to-primary-cyan opacity-60 blur-2xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      <div className="relative h-full w-full rounded-full overflow-hidden border-6 border-white/70 shadow-[0_0_80px_rgba(37,99,235,0.85)]">
        <Image
          src="/avatar.png"
          alt="Reallier Wei"
          fill
          sizes="384px"
          className="object-cover"
        />
      </div>
    </motion.div>
  );
}