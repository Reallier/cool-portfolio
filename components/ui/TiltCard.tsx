"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import clsx from "clsx";

export default function TiltCard({ children, className }:{ children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0), y = useMotionValue(0);
  const rX = useTransform(y, [-50, 50], [10, -10]);
  const rY = useTransform(x, [-50, 50], [-10, 10]);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - (r.left + r.width/2)); y.set(e.clientY - (r.top + r.height/2));
  };
  const onLeave = () => { x.set(0); y.set(0); };
  return (
    <motion.div onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ rotateX: rX, rotateY: rY, transformStyle: "preserve-3d" }}
      className={clsx("will-change-transform", className)}>
      {children}
    </motion.div>
  );
}
