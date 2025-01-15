"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiDjango,
  SiNodedotjs,
  SiPostgresql,
} from "react-icons/si";

const Hero = () => {
  const technologies = [
    { name: "React.js", icon: <SiReact className="w-5 h-5 text-[#61DAFB]" /> },
    {
      name: "TypeScript",
      icon: <SiTypescript className="w-5 h-5 text-[#3178C6]" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="w-5 h-5 text-[#000000]" />,
    },
    { name: "Django", icon: <SiDjango className="w-5 h-5 text-[#092E20]" /> },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="w-5 h-5 text-[#339933]" />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="w-5 h-5 text-[#336791]" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background opacity-75 animate-gradient" />

      <div className="relative container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content section */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={containerVariants}
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-primary font-semibold inline-block px-4 py-2 rounded-full bg-primary/10">
                Hello, I'm
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold mt-4 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                Ram Krishna Paudel
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-medium">
                Full Stack Developer
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground mb-8"
            >
              I craft robust and scalable web applications, bringing ideas to
              life through clean code and intuitive user experiences.
              Specializing in modern web technologies and full-stack
              development.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-3 mb-8"
            >
              {technologies.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    variant="secondary"
                    className="px-4 py-2 text-sm hover:bg-primary/20 transition-colors duration-300"
                  >
                    <span className="mr-2 text-primary">{tech.icon}</span>
                    {tech.name}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="min-w-[160px] hover:scale-105 transition-transform"
                onClick={scrollToProjects}
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="min-w-[160px] hover:scale-105 transition-transform"
                onClick={scrollToContact}
              >
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Right illustration section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative w-full h-[600px]">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  {/* Gradients */}
                  <linearGradient
                    id="skinGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ffb6a3" />
                    <stop offset="100%" stopColor="#ff8c7a" />
                  </linearGradient>
                  <linearGradient
                    id="shirtGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      className="text-primary"
                      stopColor="currentColor"
                      stopOpacity="0.8"
                    />
                    <stop
                      offset="100%"
                      className="text-primary"
                      stopColor="currentColor"
                      stopOpacity="0.6"
                    />
                  </linearGradient>
                </defs>

                {/* Background Elements */}
                <circle
                  cx="200"
                  cy="200"
                  r="160"
                  className="text-primary"
                  fill="currentColor"
                  opacity="0.1"
                >
                  <animate
                    attributeName="r"
                    values="160;170;160"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Developer Figure */}
                <g>
                  {/* Head */}
                  <circle cx="200" cy="150" r="50" fill="url(#skinGradient)">
                    <animate
                      attributeName="transform"
                      type="scale"
                      values="1;1.05;1"
                      dur="2s"
                      repeatCount="indefinite"
                      additive="sum"
                    />
                  </circle>

                  {/* Body */}
                  <path
                    d="M150 200 L250 200 L270 350 L130 350 Z"
                    fill="url(#shirtGradient)"
                    className="text-primary"
                  >
                    <animate
                      attributeName="transform"
                      type="translate"
                      values="0,0; 0,-5; 0,0"
                      dur="2s"
                      repeatCount="indefinite"
                      additive="sum"
                    />
                  </path>

                  {/* Glasses */}
                  <path
                    d="M170 140 L230 140"
                    stroke="#333"
                    strokeWidth="4"
                    fill="none"
                  />
                  <circle
                    cx="180"
                    cy="140"
                    r="12"
                    stroke="#333"
                    strokeWidth="4"
                    fill="none"
                  />
                  <circle
                    cx="220"
                    cy="140"
                    r="12"
                    stroke="#333"
                    strokeWidth="4"
                    fill="none"
                  />

                  {/* Code Elements */}
                  <g
                    className="text-primary"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {[...Array(5)].map((_, i) => (
                      <path
                        key={i}
                        d={`M${280 + i * 20} ${100 + i * 20} L${320 + i * 20} ${
                          100 + i * 20
                        }`}
                        opacity="0.6"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.6;1;0.6"
                          dur="2s"
                          begin={`${i * 0.2}s`}
                          repeatCount="indefinite"
                        />
                      </path>
                    ))}
                  </g>
                </g>

                {/* Floating Elements */}
                {[...Array(3)].map((_, i) => (
                  <circle
                    key={i}
                    cx={100 + i * 100}
                    cy={50 + i * 30}
                    r="10"
                    className="text-primary"
                    fill="currentColor"
                    opacity="0.3"
                  >
                    <animate
                      attributeName="cy"
                      values={`${50 + i * 30};${40 + i * 30};${50 + i * 30}`}
                      dur={`${2 + i}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                ))}
              </svg>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
