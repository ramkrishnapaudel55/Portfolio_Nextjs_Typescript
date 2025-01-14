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
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies I work with"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {Object.entries(skillsData).map(([category, skills]) => (
            <Card 
              key={category}
              className="p-6 hover:shadow-xl transition-all duration-300 border-t-4 hover:scale-[1.02]"
              style={{
                borderTopColor: category.includes("Frontend") ? "#3B82F6" :
                              category.includes("Backend") ? "#10B981" :
                              category.includes("Programming") ? "#8B5CF6" :
                              "#EF4444"
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                {categoryIcons[category as keyof typeof categoryIcons]}
                <h3 className="text-xl font-semibold">{category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <Badge 
                      variant={hoveredSkill === skill.name ? "secondary" : "outline"}
                      className="px-3 py-1.5 text-sm cursor-pointer transition-all duration-200 
                               hover:shadow-md flex items-center gap-2 group-hover:scale-105"
                    >
                      {getIconForSkill(skill.name)}
                      {skill.name}
                      <span 
                        className={`h-2 w-2 rounded-full inline-block
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

        <div className="mt-8 flex justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500"/>
            Advanced
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-yellow-500"/>
            Intermediate
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
