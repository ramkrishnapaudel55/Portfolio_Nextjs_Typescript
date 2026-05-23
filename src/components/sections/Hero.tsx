"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiDjango,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiFastapi,
} from "react-icons/si";

const TYPING_TEXTS = [
  "System Initialized: Access Granted",
  "Establishing Secure Connection...",
  "Loading Backend Architecture...",
  "Optimizing Database Queries...",
  "Ready to Build Scalable Solutions."
];

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentText = TYPING_TEXTS[textIndex];

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % TYPING_TEXTS.length);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        }, 30);
      }
    } else {
      if (displayText === currentText) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 60);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  const technologies = [
    {
      name: "Python",
      icon: <SiPython className="w-5 h-5 text-[#3776AB]" />,
    },
    { name: "Django", icon: <SiDjango className="w-5 h-5 text-[#]" /> },
    {
      name: "Django REST Framework",
      icon: <SiDjango className="w-5 h-5 text-[#092E20]" />,
    },
    {
      name: "Fast API",
      icon: <SiFastapi className="w-5 h-5 text-[#FF9900]" />,
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
    <section id="about" className="min-h-screen relative overflow-hidden bg-background">
      {/* Animated gradient background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-600/20 rounded-full blur-[120px] animate-[pulse_10s_ease-in-out_infinite_reverse]" />
      <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-green-600/20 rounded-full blur-[100px] animate-[pulse_12s_ease-in-out_infinite]" />

      <div className="relative container mx-auto px-6 py-20 min-h-screen flex items-center z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content section */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={containerVariants}
            className="max-w-2xl relative"
          >
            <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full hidden md:block opacity-50" />
            <motion.div variants={itemVariants} className="mb-6 md:pl-8">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md min-h-[34px]">
                {displayText}
                <span className="flex items-center ml-1.5 space-x-1">
                  <span className="animate-[pulse_0.8s_ease-in-out_infinite] w-1.5 h-4 bg-primary/80 inline-block rounded-sm"></span>
                  <span className="animate-[pulse_1.2s_ease-in-out_infinite] w-1.5 h-4 bg-primary/40 inline-block rounded-sm"></span>
                </span>
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mt-6 mb-4 tracking-tight text-foreground">
                I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-emerald-400 to-green-500 animate-gradient">Ram Krishna</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-medium">
                Expert Backend Developer
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-muted-foreground/80 leading-relaxed mb-10 md:pl-8 font-light"
            >
              I architect robust, scalable, and high-performance backend systems.
              Turning complex problems into elegant, clean code solutions.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-3 mb-10 md:pl-8"
            >
              {technologies.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    variant="outline"
                    className="px-4 py-2.5 text-sm font-medium bg-background/40 backdrop-blur-md border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 shadow-sm"
                  >
                    <span className="mr-2 text-lg drop-shadow-md">{tech.icon}</span>
                    {tech.name}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 md:pl-8"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto min-w-[160px] hover:scale-105 transition-transform"
                onClick={scrollToProjects}
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto min-w-[160px] hover:scale-105 transition-transform"
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
            className="hidden lg:block relative"
          >
            {/* Fake multiplayer cursors */}
            <motion.div
              className="absolute z-20 flex flex-col items-start pointer-events-none"
              animate={{
                x: [0, 120, 60, -40, 0],
                y: [0, -60, 100, 40, 0]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              style={{ top: "25%", left: "15%" }}
            >
              <MousePointer2 className="text-emerald-500 fill-emerald-500 w-6 h-6 -rotate-12 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              <div className="bg-emerald-500/90 backdrop-blur-sm text-white text-[10px] px-2.5 py-1 rounded-full mt-1 ml-4 shadow-lg font-medium tracking-wide border border-emerald-400/50">
                Reviewer_01
              </div>
            </motion.div>

            <motion.div
              className="absolute z-20 flex flex-col items-start pointer-events-none"
              animate={{
                x: [0, -80, -20, 80, 0],
                y: [0, 80, -40, -80, 0]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              style={{ top: "65%", right: "15%" }}
            >
              <MousePointer2 className="text-primary fill-primary w-6 h-6 -rotate-12 drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
              <div className="bg-primary/90 backdrop-blur-sm text-white text-[10px] px-2.5 py-1 rounded-full mt-1 ml-4 shadow-lg font-medium tracking-wide border border-primary/50">
                Recruiter_XYZ
              </div>
            </motion.div>

            <div className="relative w-full h-[600px] flex items-center justify-center">
              {/* Abstract 3D/Tech Constellation SVG */}
              <svg viewBox="0 0 500 500" className="w-full h-full max-w-[500px] overflow-visible">
                <defs>
                  <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
                  </linearGradient>
                  <radialGradient id="core" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity="1" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </radialGradient>
                  <filter id="blurGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Base SVG Orbits & Hexagon (Background Elements) */}
                <g className="origin-center" style={{ transformOrigin: "250px 250px" }}>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 250 250"
                    to="360 250 250"
                    dur="40s"
                    repeatCount="indefinite"
                  />

                  {/* Outer Orbit Path */}
                  <circle cx="250" cy="250" r="200" fill="none" stroke="url(#glow)" strokeWidth="1" strokeDasharray="4 8" opacity="0.5" />

                  {/* Middle Orbit Path */}
                  <circle cx="250" cy="250" r="130" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" opacity="0.3" />

                  {/* Hexagon Core */}
                  <g filter="url(#blurGlow)">
                    <polygon
                      points="250,150 336.6,200 336.6,300 250,350 163.4,300 163.4,200"
                      fill="none"
                      stroke="url(#glow)"
                      strokeWidth="2"
                    />
                    <polygon
                      points="250,170 319.3,210 319.3,290 250,330 180.7,290 180.7,210"
                      fill="none"
                      stroke="currentColor"
                      className="text-primary"
                      strokeWidth="1"
                      opacity="0.5"
                    />
                  </g>

                  {/* Inner Core Pulse */}
                  <circle cx="250" cy="250" r="40" fill="url(#core)">
                    <animate attributeName="r" values="35; 45; 35" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6; 1; 0.6" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="250" cy="250" r="20" fill="var(--primary)" filter="url(#blurGlow)" />

                  {/* Connecting Lines */}
                  <path d="M 250 150 L 250 50" stroke="url(#glow)" strokeWidth="1" opacity="0.5" strokeDasharray="4 4" />
                  <path d="M 336.6 200 L 423.2 150" stroke="url(#glow)" strokeWidth="1" opacity="0.3" />
                  <path d="M 163.4 300 L 76.8 350" stroke="url(#glow)" strokeWidth="1" opacity="0.4" />
                </g>

                {/* Counter Rotating Orbit (Background Elements) */}
                <g style={{ transformOrigin: "250px 250px" }}>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="360 250 250"
                    to="0 250 250"
                    dur="25s"
                    repeatCount="indefinite"
                  />
                  <circle cx="250" cy="250" r="165" fill="none" stroke="var(--primary)" strokeWidth="1" strokeDasharray="1 12" opacity="0.4" />
                </g>

                {/* --- FOREGROUND ELEMENTS (Rendered on top, never go behind!) --- */}

                {/* Floating Particles (Foreground) */}
                {[...Array(6)].map((_, i) => {
                  const seed1 = (i * 137.5) % 1;
                  const seed2 = (i * 93.1) % 1;
                  const seed3 = (i * 21.3) % 1;
                  const cx = 150 + seed1 * 200;
                  const cy = 150 + seed2 * 200;
                  const r = seed3 * 3 + 1;
                  const dur1 = 3 + seed1 * 4;

                  return (
                    <circle
                      key={i}
                      cx={cx}
                      cy={cy}
                      r={r}
                      fill="#4ade80"
                      opacity="0.9"
                      filter="url(#blurGlow)"
                    >
                      <animate
                        attributeName="cy"
                        values={`${cy};${cy - 50};${cy}`}
                        dur={`${dur1}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  );
                })}

                {/* Rotating Outer Dots (Foreground) */}
                <g className="origin-center" style={{ transformOrigin: "250px 250px" }}>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 250 250"
                    to="360 250 250"
                    dur="40s"
                    repeatCount="indefinite"
                  />
                  <circle cx="250" cy="50" r="6" fill="#22c55e" filter="url(#blurGlow)" />
                  <circle cx="450" cy="250" r="4" fill="#10b981" />
                  <circle cx="50" cy="250" r="8" fill="#22c55e" opacity="0.8" />
                </g>

                {/* Counter Rotating Dots (Foreground) */}
                <g style={{ transformOrigin: "250px 250px" }}>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="360 250 250"
                    to="0 250 250"
                    dur="25s"
                    repeatCount="indefinite"
                  />
                  <circle cx="415" cy="250" r="3" fill="#34d399" filter="url(#blurGlow)" />
                  <circle cx="85" cy="250" r="5" fill="#22c55e" filter="url(#blurGlow)" />
                </g>
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
