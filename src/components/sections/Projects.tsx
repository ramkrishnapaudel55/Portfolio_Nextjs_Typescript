"use client";

import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, ExternalLink, MessageSquare, Users, Video, BrainCircuit, Lock, Globe } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  icon: React.ReactNode;
  tech: string[];
  type: string;
  demoLink: string;
  githubLink: string;
  image: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Real-time Chat Application",
      description: "A real-time messaging platform with instant communication capabilities, featuring real-time message delivery, user presence, and chat rooms.",
      icon: <MessageSquare className="w-6 h-6" />,
      tech: ["React.js", "Node.js", "WebSocket", "Express", "Tailwind CSS"],
      type: "Full Stack",
      demoLink: "#",
      githubLink: "#",
      image: "./projects/chat-app.png"
    },
    {
      title: "User Management Dashboard",
      description: "Modern user panel with advanced filtering, sorting, and data visualization capabilities for efficient user management.",
      icon: <Users className="w-6 h-6" />,
      tech: ["React.js", "Django REST", "Redux", "PostgreSQL", "JWT"],
      type: "Frontend",
      demoLink: "#",
      githubLink: "#",
      image: "/projects/user-panel.jpeg"
    },
    {
      title: "Admin Control Panel",
      description: "Feature-rich admin dashboard with real-time analytics, user management, and comprehensive system controls.",
      icon: <Globe className="w-6 h-6" />,
      tech: ["React.js", "Django REST", "Chart.js", "Material UI"],
      type: "Frontend",
      demoLink: "#",
      githubLink: "#",
      image: "/projects/admin-panel.jpeg"
    },
    {
      title: "Movie Ticket Booking",
      description: "Console-based booking system with seat selection, multiple theaters, and automated billing system.",
      icon: <Video className="w-6 h-6" />,
      tech: ["C", "File I/O", "Data Structures", "Algorithms"],
      type: "Console App",
      demoLink: "#",
      githubLink: "#",
      image: "/projects/movie-booking.jpg"
    },
    {
      title: "Quiz System",
      description: "Interactive quiz platform with real-time scoring, multiple question types, and performance analytics.",
      icon: <BrainCircuit className="w-6 h-6" />,
      tech: ["VB.Net", "SQL Server", "Windows Forms"],
      type: "Desktop App",
      demoLink: "#",
      githubLink: "#",
      image: "/projects/quiz-system.jpeg"
    },
    {
      title: "Auth0 Integration",
      description: "Secure authentication system with social login integration, JWT token management, and role-based access.",
      icon: <Lock className="w-6 h-6" />,
      tech: ["Auth0", "React.js", "JWT", "OAuth 2.0"],
      type: "Security",
      demoLink: "#",
      githubLink: "#",
      image: "/projects/auth0.jpeg"
    }
  ];

  const categories = ["All", "Full Stack", "Frontend", "Console App", "Desktop App", "Security"] as const;
  type Category = (typeof categories)[number] | "All";
  
  const [activeCategory, setActiveCategory] = React.useState<Category>("All");

  const filteredProjects = projects.filter(project => 
    activeCategory === "All" ? true : project.type === activeCategory
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div id="projects" className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-background">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto space-y-12"
      >
        <div className="text-center space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400"
          >
            Featured Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Exploring the intersection of design and functionality
          </motion.p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <TabsList className="flex justify-center mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setActiveCategory(category as Category)}
                className="px-4 py-2"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={projectVariants}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group"
                >
                  <Card className="overflow-hidden border border-border bg-card hover:bg-accent/5 transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.githubLink}
                          className="p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                        >
                          <Github className="w-6 h-6 text-white" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.demoLink}
                          className="p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                        >
                          <ExternalLink className="w-6 h-6 text-white" />
                        </motion.a>
                      </div>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20">
                          {project.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{project.title}</h3>
                          <Badge variant="secondary" className="mt-1">
                            {project.type}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-4">
                        {project.tech.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="outline"
                            className="bg-background/50 backdrop-blur-sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Projects;