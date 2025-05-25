"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    console.log("Hero section loaded and animation triggered");
  }, []);

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden grid-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
          <div className={`w-full md:w-1/2 space-y-6 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-medium text-primary">Hello, I'm</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight">
                LALITH KISHORE <span className="text-primary">V S</span>
              </h1>
              <p className="text-2xl md:text-3xl font-medium text-gray-300 mt-2">
                Machine Learning Engineer
              </p>
            </div>
            
            <p className="text-lg text-gray-300 max-w-2xl">
              Crafting intelligent solutions through AI, data, and innovation.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="glow" asChild>
                <a href="/docs/LALITH.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#portfolio" className="flex items-center">
                  <ArrowDown className="mr-2 h-4 w-4" />
                  Explore My Work
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <a href="https://github.com/Lalithkis" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/lalith-kishore-v-s-688480272" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          <div className={`w-full md:w-1/2 flex justify-center ${isLoaded ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-50"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-card">
                <Image 
                  src="/images/profile.jpg" 
                  alt="Lalith Kishore V S" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
