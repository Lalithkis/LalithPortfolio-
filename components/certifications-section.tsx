"use client";

import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";

interface CertificationProps {
  title: string;
  issuer: string;
  image: string;
  date: string;
  url?: string;
}

const certifications: CertificationProps[] = [
  {
    title: "Data Analytics with Python",
    issuer: "Udemy",
    image: "/images/cert_data_analytics.png",
    date: "March 2023",
    url: "#",
  },
  {
    title: "Python for Data Science (NPTEL)",
    issuer: "NPTEL",
    image: "/images/cert_python_ds.png",
    date: "December 2022",
    url: "#",
  },
  {
    title: "Generative AI Foundation Models",
    issuer: "Coursera",
    image: "/images/cert_genai.png",
    date: "February 2024",
    url: "#",
  },
  {
    title: "Machine Learning for All (University of London)",
    issuer: "University of London",
    image: "/images/cert_mlforall.png",
    date: "August 2023",
    url: "#",
  },
];

function CertificationCard({ certification, index }: { certification: CertificationProps; index: number }) {
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
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="overflow-hidden border-border hover:border-primary/50 bg-card/50 hover:bg-card transition-all duration-300 h-full">
        <div className="aspect-[4/3] relative overflow-hidden bg-muted group">
          <img 
            src={certification.image} 
            alt={certification.title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
            <p className="text-sm text-white font-medium">{certification.issuer} Certificate</p>
          </div>
        </div>
        <CardContent className="p-5 space-y-3">
          <h3 className="text-lg font-semibold text-white">{certification.title}</h3>
          <div className="space-y-1">
            <p className="text-sm text-gray-400">
              <span className="font-medium text-primary">{certification.issuer}</span> • {certification.date}
            </p>
          </div>
          {certification.url && (
            <a 
              href={certification.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-primary hover:text-primary/80 transition-colors inline-block mt-2"
            >
              View Certificate
            </a>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export function CertificationsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section id="certifications" className="bg-card/30">
      <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="section-heading">Certifications</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((certification, index) => (
            <CertificationCard 
              key={certification.title} 
              certification={certification} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
