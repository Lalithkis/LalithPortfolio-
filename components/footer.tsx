"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="bg-card py-10 border-t border-border relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          <div className="text-center md:text-left">
            <Link href="#home" className="text-2xl font-bold font-heading text-white hover:text-primary transition-colors">
              LALITH<span className="text-primary">.</span>
            </Link>
            <p className="text-gray-400 mt-2 text-sm">
              Machine Learning Engineer | AI Enthusiast
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-400 text-sm">
              Connect with me
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/Lalithkis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors hover:scale-110 transform"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/lalith-kishore-v-s-688480272" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:lalithkishore325@gmail.com" 
                className="text-gray-400 hover:text-primary transition-colors hover:scale-110 transform"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Lalith Kishore V S. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#home" className="text-gray-400 hover:text-primary transition-colors text-sm">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-primary transition-colors text-sm">
              About
            </a>
            <a href="#portfolio" className="text-gray-400 hover:text-primary transition-colors text-sm">
              Portfolio
            </a>
            <a href="#contact" className="text-gray-400 hover:text-primary transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <Button 
        onClick={scrollToTop} 
        className={`fixed bottom-6 right-6 p-3 rounded-full shadow-xl bg-primary hover:bg-primary/90 transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        size="icon"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </Button>
    </footer>
  );
}
