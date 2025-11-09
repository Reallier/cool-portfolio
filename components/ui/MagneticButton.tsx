"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { cloneElement, isValidElement } from "react";

export default function MagneticButton({ children, asChild = false }:{ children: React.ReactNode; asChild?: boolean }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - (r.left + r.width / 2));
    y.set(e.clientY - (r.top + r.height / 2));
  };
  const onLeave = () => { x.set(0); y.set(0); };

  const child = asChild && isValidElement(children)
    ? cloneElement(children as any, { className: "rounded-full border border-zinc-600 px-5 py-2 inline-block" })
    : <button className="rounded-full border border-zinc-600 px-5 py-2">按钮</button>;

  return (
    <motion.div style={{ x, y, rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMove} onMouseLeave={onLeave} aria-live="polite">
      {child}
    </motion.div>
  );
}
