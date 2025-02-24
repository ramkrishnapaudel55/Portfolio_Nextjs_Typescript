"use client";

import React, { useState } from 'react';
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
  SiMysql ,
  SiCplusplus,
  SiC,
//   SiVisualstudiocode,
  SiMozilla
} from 'react-icons/si';

import { FiCode  } from 'react-icons/fi';
// import { SiVisualstudiocode } from 'react-icons/si';
import { FaDatabase, FaServer, FaCode, FaGlobe } from 'react-icons/fa';

const getIconForSkill = (skillName: string) => {
  const icons: { [key: string]: React.ReactNode } = {
    "React.js": <SiReact className="w-5 h-5 text-blue-400" />,
    "TypeScript": <SiTypescript className="w-5 h-5 text-blue-600" />,
    "JavaScript": <SiJavascript className="w-5 h-5 text-yellow-400" />,
    "Node.js": <SiNodedotjs className="w-5 h-5 text-green-500" />,
    "Django": <SiDjango className="w-5 h-5 text-green-600" />,
    "Django REST Framework": <FaServer className="w-5 h-5 text-red-500" />,
    "C++": <SiCplusplus className="w-5 h-5 text-purple-500" />,
    "C": <SiC className="w-5 h-5 text-blue-500" />,
    "Visual Basic .NET": <FiCode  className="w-5 h-5 text-indigo-500" />,
    "Microsoft SQL Server": <SiMysql  className="w-5 h-5 text-red-400" />,
    "Git": <SiGit className="w-5 h-5 text-orange-500" />,
    "Docker": <SiDocker className="w-5 h-5 text-blue-500" />,
    "Web Hosting": <SiMozilla className="w-5 h-5 text-green-400" />
  };
  return icons[skillName] || <FaCode className="w-5 h-5 text-gray-500" />;
};

const categoryIcons = {
  "Frontend Development": <SiReact className="w-6 h-6 text-blue-500" />,
  "Backend Development": <FaServer className="w-6 h-6 text-green-500" />,
  "Programming Languages": <FaCode className="w-6 h-6 text-purple-500" />,
  "Database & DevOps": <FaDatabase className="w-6 h-6 text-red-500" />
};

const skillsData = {
  "Frontend Development": [
    { name: "React.js", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
  ],
  "Backend Development": [
    { name: "Django", level: "Advanced" },
    { name: "Django REST Framework", level: "Advanced" },
    { name: "Node.js", level: "Intermediate" },
  ],
  "Programming Languages": [
    { name: "C++", level: "Intermediate" },
    { name: "C", level: "Intermediate" },
    { name: "Visual Basic .NET", level: "Intermediate" },
  ],
  "Database & DevOps": [
    { name: "Microsoft SQL Server", level: "Advanced" },
    { name: "Git", level: "Advanced" },
    { name: "Docker", level: "Intermediate" },
    { name: "Web Hosting", level: "Advanced" },
  ]
};

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-background/80">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies I work with"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {Object.entries(skillsData).map(([category, skills]) => (
            <Card 
              key={category}
              className="p-4 sm:p-6 hover:shadow-xl transition-all duration-300 border-t-4 hover:scale-[1.02] h-full"
              style={{
                borderTopColor: category.includes("Frontend") ? "#3B82F6" :
                              category.includes("Backend") ? "#10B981" :
                              category.includes("Programming") ? "#8B5CF6" :
                              "#EF4444"
              }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                {categoryIcons[category as keyof typeof categoryIcons]}
                <h3 className="text-lg sm:text-xl font-semibold">{category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <Badge 
                      variant={hoveredSkill === skill.name ? "secondary" : "outline"}
                      className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm cursor-pointer transition-all duration-200 
                               hover:shadow-md flex items-center gap-1.5 sm:gap-2 group-hover:scale-105"
                    >
                      {getIconForSkill(skill.name)}
                      <span className="hidden xs:inline">{skill.name}</span>
                      <span className="xs:hidden">{skill.name.split('.')[0]}</span>
                      <span 
                        className={`h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full inline-block
                          ${skill.level === 'Advanced' ? 'bg-green-500' : 
                            skill.level === 'Intermediate' ? 'bg-yellow-500' : 
                            'bg-blue-500'}`}
                      />
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 flex justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-green-500"/>
            Advanced
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-yellow-500"/>
            Intermediate
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;