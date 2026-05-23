"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import SectionHeading from '@/components/shared/SectionHeading';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiDjango,
  SiDocker,
  SiGit,
  SiMysql,
  SiCplusplus,
  SiC,
  SiMozilla,
  SiPostgresql,
  SiFastapi,
  SiPostman,
  SiJenkins,
  SiPython
} from 'react-icons/si';

import { FiCode } from 'react-icons/fi';
import { FaDatabase, FaServer, FaCode, FaGlobe } from 'react-icons/fa';

const getIconForSkill = (skillName: string) => {
  const icons: { [key: string]: React.ReactNode } = {
    "React.js": <SiReact className="w-8 h-8 text-blue-400" />,
    "TypeScript": <SiTypescript className="w-8 h-8 text-[#3178C6]" />,
    "JavaScript": <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />,
    "Node.js": <SiNodedotjs className="w-8 h-8 text-[#339933]" />,
    "Django": <SiDjango className="w-8 h-8 text-[#092E20]" />,
    "Django REST Framework": <SiDjango className="w-8 h-8 text-[#A30000]" />,
    "C++": <SiCplusplus className="w-8 h-8 text-[#00599C]" />,
    "C": <SiC className="w-8 h-8 text-[#A8B9CC]" />,
    "Visual Basic .NET": <FiCode className="w-8 h-8 text-[#512BD4]" />,
    "Microsoft SQL Server": <SiMysql className="w-8 h-8 text-[#CC2927]" />,
    "Git": <SiGit className="w-8 h-8 text-[#F05032]" />,
    "Docker": <SiDocker className="w-8 h-8 text-[#2496ED]" />,
    "Web Hosting": <FaGlobe className="w-8 h-8 text-[#00A4EF]" />,
    "PostgreSQL": <SiPostgresql className="w-8 h-8 text-[#336791]" />,
    "FastAPI": <SiFastapi className="w-8 h-8 text-[#009688]" />,
    "Postman": <SiPostman className="w-8 h-8 text-[#FF6C37]" />,
    "Jenkins": <SiJenkins className="w-8 h-8 text-[#D24939]" />,
    "Python": <SiPython className="w-8 h-8 text-[#3776AB]" />,
  };
  return icons[skillName] || <FaCode className="w-8 h-8 text-gray-500" />;
};

const categoryIcons = {
  "Backend Development": <FaServer className="w-6 h-6 text-green-500" />,
  "Programming Languages": <FaCode className="w-6 h-6 text-purple-500" />,
  "Database & DevOps": <FaDatabase className="w-6 h-6 text-red-500" />
};

const skillsData = {
  "Backend Development": [
    { name: "Django" },
    { name: "Django REST Framework" },
    { name: "FastAPI" },
    { name: "Postman" },
    { name: "Node.js" },
  ],
  "Programming Languages": [
    { name: "Python" },
    { name: "JavaScript" },
    { name: "C++" },
    { name: "C" },
    { name: "Visual Basic .NET" },
  ],
  "Database & DevOps": [
    { name: "Microsoft SQL Server" },
    { name: "PostgreSQL" },
    { name: "Git" },
    { name: "Docker" },
    { name: "Jenkins" },
    { name: "Web Hosting" },
  ]
};

const Skills = () => {
  const categories = Object.keys(skillsData);
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
      {/* Decorative blurred blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technical Arsenal"
          subtitle="A comprehensive overview of my technical proficiency"
        />

        <div className="mt-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Categories Sidebar */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <motion.div
                  key={category}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveCategory(category)}
                  className={`cursor-pointer p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4
                    ${isActive
                      ? 'bg-primary/10 border-primary/50 shadow-[0_0_20px_rgba(var(--primary),0.15)] dark:shadow-[0_0_20px_rgba(255,255,255,0.05)]'
                      : 'bg-card border-border hover:border-primary/30 hover:bg-accent/5'}`}
                >
                  <div className={`p-2.5 rounded-xl transition-colors ${isActive ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                    {categoryIcons[category as keyof typeof categoryIcons]}
                  </div>
                  <h3 className={`font-semibold text-lg ${isActive ? 'text-primary' : 'text-foreground'}`}>
                    {category}
                  </h3>
                </motion.div>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="w-full lg:w-2/3 min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              >
                {skillsData[activeCategory as keyof typeof skillsData].map((skill, index) => {
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="bg-card p-5 rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all group relative flex items-center justify-center min-h-[140px]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10 flex flex-col items-center gap-4">
                        <div className="p-3 bg-background rounded-2xl border border-border shadow-sm group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                          {getIconForSkill(skill.name)}
                        </div>
                        <h4 className="font-semibold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors text-center">
                          {skill.name}
                        </h4>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;