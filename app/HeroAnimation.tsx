'use client';

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import dynamic from "next/dynamic";
import AnimatedIntro from "@/components/ui/AnimatedIntro";
const AvatarWithFloat = dynamic(() => import("./AvatarWithFloat"), { ssr: false });

const INTRO_SECTIONS = [
  {
    text: "拥有大型企业（联想）和海外公司（Garena新加坡）工作经验的资深测试开发工程师。",
  },
  {
    text: "精通Python全栈开发、DevOps实践和自动化测试，擅长企业级项目架构设计、性能优化和高可用系统构建。",
  },
  {
    text: "专注于AI智能体开发，熟练掌握大语言模型集成、RAG架构设计、提示工程优化和多模态AI应用。具备丰富的AI应用落地经验，致力于将AI技术与传统软件开发相结合，构建智能化解决方案。",
  }
];

export default function HeroAnimation() {
  const leftControls = useAnimation();
  const avatarControls = useAnimation();
  const rightControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // 1. 左侧内容弹射入场
      await leftControls.start({
        x: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100, damping: 20, mass: 1, delay: 0.5 },
      });

      // 2. 触发头像拨动
      await avatarControls.start({
        rotateY: [0, -15, 15, -15, 15, 0],
        transition: { duration: 0.8, ease: "easeInOut", delay: 0.1 },
      });

      // 3. 右侧内容出现
      rightControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.2 },
      });
    };

    sequence();
  }, [leftControls, avatarControls, rightControls]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16 xl:gap-20 px-4 sm:px-0 w-[80%] mx-auto">
      <motion.div
        className="flex-1 min-w-0 space-y-6 sm:space-y-8 text-center lg:text-right order-2 lg:order-1"
        animate={leftControls}
        initial={{ opacity: 0, x: 0, y: 20 }}
      >
        <p className="text-xs sm:text-sm font-semibold tracking-[0.4em] text-text-soft uppercase">
          Hello, I'm
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-primary-blue to-primary-cyan bg-clip-text text-transparent">
            Reallier Wei
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl text-text-muted leading-tight">
          Senior Testing Developer & Full-Stack Engineer
        </p>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg text-text-soft leading-tight">
          Python专家 · DevOps实践者 · 技术创新者
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-end pt-4">
          {["Python 全栈", "云原生 & Kubernetes", "自动化测试开发", "DevOps & CI/CD"].map((tag) => (
            <span
              key={tag}
              className="px-2 sm:px-3 py-1.5 sm:py-2 text-xs font-medium rounded-full bg-page-section text-text-muted border border-border-subtle/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div className="flex-shrink-0 order-1 lg:order-2" animate={avatarControls}>
        <AvatarWithFloat />
      </motion.div>

      <div className="flex-1 min-w-0 space-y-6 sm:space-y-8 text-center lg:text-left order-3">
        <motion.div animate={rightControls} initial={{ opacity: 0, y: 20 }}>
          <AnimatedIntro sections={INTRO_SECTIONS} baseDelay={0} />
        </motion.div>
      </div>
    </div>
  );
}