"use client";

import { Section } from "@/components/ui/section";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import Image from "next/image";

export function ExperienceSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "AI/ML Drone Intern",
      company: "CubeAISolutions Tech Pvt Ltd",
      logo: "/images/cubeai_logo.png",
      location: "Bengaluru, India",
      period: "Mar 2025 – Apr 2025",
      description: "Autonomous AI-Powered Drone System: Developed an AI-powered drone system for real-time search and rescue operations in remote or disaster-affected areas. Integrated YOLO-based object detection to accurately identify missing persons through onboard camera feeds. Enabled autonomous navigation using GPS and computer vision to dynamically locate and approach individuals. Designed the system to capture and transmit real-time images and GPS coordinates to rescue teams. Focused on optimizing detection accuracy, response time, and reliability under challenging environmental conditions.",
      technologies: ["AI/ML", "YOLO", "Computer Vision", "GPS Navigation", "Drone Technology", "Real-time Systems"]
    },
  ];

  return (
    <Section id="experience" className="bg-gradient-to-b from-card/50 to-background">
      <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="section-heading">Experience</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-card rounded-xl border border-border glass hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient background effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative space-y-6">
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300 flex items-center gap-3">
                        <Briefcase className="w-6 h-6 flex-shrink-0" />
                        <span className="break-words">{experience.title}</span>
                      </h3>
                      <div className="flex items-center gap-3 mt-3">
                        <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white/10 border border-border flex items-center justify-center">
                          <Image
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>
                        <p className="text-xl text-gray-300 font-semibold">{experience.company}</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm text-gray-400 flex items-center gap-2 justify-end">
                        <Calendar className="w-4 h-4" />
                        {experience.period}
                      </p>
                      <p className="text-sm text-gray-400 flex items-center gap-2 justify-end mt-1">
                        <MapPin className="w-4 h-4" />
                        {experience.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <div className="p-6 bg-muted/30 rounded-lg border-l-4 border-primary/40 hover:border-primary hover:bg-muted/50 transition-all duration-300">
                    <p className="text-gray-200 leading-relaxed text-base">
                      {experience.description}
                    </p>
                  </div>
                </div>

                {/* Technologies/Skills tags */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {experience.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-4 py-2 text-sm font-medium bg-primary/15 text-primary rounded-full border border-primary/30 hover:bg-primary/25 hover:border-primary/50 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
