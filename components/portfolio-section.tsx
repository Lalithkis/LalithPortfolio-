"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
}

const projects: ProjectProps[] = [
  {
    title: "Predictive Maintenance for Fleet Management",
    description: "An AI-powered system that predicts maintenance needs for vehicle fleets, reducing downtime and optimizing maintenance schedules.",
    image: "/images/predictive_maintenance.png",
    tags: ["Python", "TensorFlow", "Time Series", "Predictive Analytics"],
    github: "https://github.com/Lalithkis/Machine-Learning-Project",
  },
  {
    title: "Predicting Agricultural Commodity Prices",
    description: "A machine learning model that forecasts agricultural commodity prices based on historical data, weather patterns, and market trends.",
    image: "/images/agri_prices.png",
    tags: ["Python", "Scikit-learn", "Data Analysis", "Forecasting"],
    github: "https://github.com/Lalithkis/Predicting-Agricultural-Commodity-Prices-for-a-Sustainable-Future",
  },
  {
    title: "Autonomous Search and Rescue Drone",
    description: "A computer vision system for drones that can identify and locate people in search and rescue scenarios using object detection algorithms.",
    image: "/images/search_rescue_drone.png",
    tags: ["Python", "OpenCV", "TensorFlow", "Object Detection"],
    github: "https://github.com/Lalithkis/Human-detection",
  },
];

function ProjectCard({ project, index }: { project: ProjectProps; index: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-700 transform ${inView 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-20'}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <Card className="overflow-hidden bg-card hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/50 h-full">
        <div className="aspect-video relative overflow-hidden bg-muted">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs bg-primary/80 px-2 py-1 rounded-full text-white">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <CardContent className="p-6 space-y-4">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="text-gray-400 text-sm">{project.description}</p>
          
          <div className="flex items-center gap-3 pt-4">
            <Button variant="outline" size="sm" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            {project.demo && (
              <Button size="sm" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function PortfolioSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section id="portfolio" className="bg-background">
      <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="section-heading">My Portfolio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild>
            <a href="https://github.com/Lalithkis" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Github className="mr-2 h-4 w-4" />
              View More Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}
