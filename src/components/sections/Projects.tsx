"use client";

import React from 'react';

import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, ExternalLink, Users, Video, BrainCircuit, Globe } from 'lucide-react';

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
      title: "Leukaa E-commerce",
      description: "A full-featured e-commerce platform with secure checkout, product management, and optimized backend architecture.",
      icon: <Globe className="w-6 h-6" />,
      tech: ["Python", "Django REST", "Next.js", "PostgreSQL", "Docker"],
      type: "Backend",
      demoLink: "https://www.leukaa.com",
      githubLink: "#",
      image: "/projects/Leukaa_2.png"
    },
    {
      title: "Nagarkata Ray of Hope Society",
      description: "A social volunteer platform enabling community engagement, event management, and volunteer coordination.",
      icon: <Users className="w-6 h-6" />,
      tech: ["Django REST Framework", "Python", "Next.js", "PostgreSQL"],
      type: "Backend",
      demoLink: "https://www.nagarkatarayofhopesociety.org/",
      githubLink: "#",
      image: "/projects/Nagarkata.png"
    },
    {
      title: "CV Builder",
      description: "Robust backend services for a comprehensive resume building platform.",
      icon: <BrainCircuit className="w-6 h-6" />,
      tech: ["Django REST", "PostgreSQL", "Django", "Python"],
      type: "Backend",
      demoLink: "#",
      githubLink: "https://github.com/CV-Builder-ResumeForge/Backend",
      image: "/projects/CV_builder.png"
    },
    {
      title: "Smart Vyapar",
      description: "Scalable backend architecture for a business management mobile application.",
      icon: <Globe className="w-6 h-6" />,
      tech: ["Flutter", "Python", "Django", "Django REST", "PostgreSQL"],
      type: "Backend",
      demoLink: "#",
      githubLink: "https://github.com/ramkrishnapaudel55/Smart_Vyapar_api",
      image: "/projects/smartvyapar.jpeg"
    },
    {
      title: "Movie Ticket Booking",
      description: "Console-based booking system with seat selection, multiple theaters, and automated billing system.",
      icon: <Video className="w-6 h-6" />,
      tech: ["C", "File I/O", "Data Structures", "Algorithms"],
      type: "Console App",
      demoLink: "#",
      githubLink: "https://github.com/ramkrishnapaudel55/MovieTicketBookingSystem",
      image: "/projects/movie-booking.jpg"
    },
    {
      title: "Quiz System",
      description: "Interactive quiz platform with real-time scoring, multiple question types, and performance analytics.",
      icon: <BrainCircuit className="w-6 h-6" />,
      tech: ["VB.Net", "SQL Server", "Windows Forms"],
      type: "Desktop App",
      demoLink: "#",
      githubLink: "https://github.com/ramkrishnapaudel55/QuizSystem.Net",
      image: "/projects/quiz-system.jpeg"
    }
  ];

  const categories = ["All", "Backend", "Console App", "Desktop App"] as const;
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
        className="w-full px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center space-y-4 mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-emerald-400 to-green-500 animate-gradient"
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
          <TabsList className="flex flex-wrap justify-center mb-8 bg-background/50 backdrop-blur-md border border-border/50 rounded-lg p-1 h-auto shadow-sm">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setActiveCategory(category as Category)}
                className="px-5 py-2 text-muted-foreground transition-all duration-300 
                          hover:text-primary 
                          data-[state=active]:bg-primary data-[state=active]:text-primary-foreground 
                          rounded-md shadow-sm"
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={projectVariants}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group w-full"
                >
                  <Card className="overflow-hidden border border-border/50 bg-card/40 backdrop-blur-md hover:bg-card/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] group-hover:-translate-y-2">
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