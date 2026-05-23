"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/themes/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const offsetTop = section.offsetTop - 80; // Adjust for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { href: "#about", label: "About", icon: "👋" },
    { href: "#skills", label: "Skills", icon: "💡" },
    { href: "#projects", label: "Projects", icon: "🚀" },
    { href: "#contact", label: "Contact", icon: "📫" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pt-4 px-4 pointer-events-none">
      <header
        className={`pointer-events-auto transition-all duration-500 rounded-full border ${
          isScrolled
            ? "bg-background/70 backdrop-blur-xl border-border/50 shadow-[0_8px_32px_rgba(34,197,94,0.12)] w-full max-w-4xl py-2"
            : "bg-background/20 backdrop-blur-md border-transparent w-full max-w-7xl py-4"
        }`}
      >
        <nav className="px-6 flex items-center justify-between">
          <a
            href="#"
            className="text-xl font-bold hover:text-primary transition-colors duration-300 flex items-center gap-2"
          >
            <span className="text-2xl drop-shadow-md">👨‍💻</span>
            <span className="font-extrabold bg-gradient-to-r from-primary via-emerald-400 to-green-500 bg-clip-text text-transparent hidden sm:inline-block">
              Portfolio
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 bg-background/40 px-6 py-2 rounded-full border border-border/20 shadow-inner">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href.slice(1))}
                  className={`group flex items-center gap-1 text-sm font-medium transition-colors relative ${
                    activeSection === link.href.slice(1)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                  )}
                </a>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex">
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/10 rounded-full"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-background/90 backdrop-blur-xl border-l-primary/20">
                <SheetClose className="absolute right-4 top-4 rounded-full hover:bg-primary/20">
                  <X className="h-6 w-6" />
                </SheetClose>
                <div className="flex flex-col gap-6 mt-16">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href.slice(1))}
                      className={`group flex items-center justify-between text-lg transition-all duration-300 p-3 rounded-xl border border-transparent ${
                        activeSection === link.href.slice(1)
                          ? "bg-primary/10 text-primary border-primary/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]"
                          : "hover:bg-primary/5 hover:border-border/50"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span>{link.icon}</span>
                        {link.label}
                      </span>
                      <ChevronRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
