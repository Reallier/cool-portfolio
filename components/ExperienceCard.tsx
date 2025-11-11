"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
  title: string;
  period: string;
  company: string;
  description: string[];
}

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-colors">
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <motion.h3
              className="text-3xl font-semibold text-black"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {experience.title}
            </motion.h3>
            <motion.span
              className="text-gray-500 font-medium text-lg mt-2 md:mt-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.2 + 0.3 }}
            >
              {experience.period}
            </motion.span>
          </div>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.4 }}
          >
            {experience.company}
          </motion.p>
          <motion.ul
            className="text-gray-700 space-y-2 text-base leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.5 }}
          >
            {experience.description.map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + 0.6 + i * 0.1 }}
              >
                <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
}