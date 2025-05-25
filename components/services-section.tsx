"use client";

import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { BrainCircuit, LineChart, Bot, BarChart3 } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceProps[] = [
  {
    title: "ML Model Development",
    description: "Custom machine learning models designed and developed for your specific business needs with comprehensive testing and validation.",
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
  },
  {
    title: "Time-Series Forecasting",
    description: "Advanced time-series analysis and forecasting models to predict future trends and patterns in your data.",
    icon: <LineChart className="h-10 w-10 text-primary" />,
  },
  {
    title: "AI-Powered Automation",
    description: "Intelligent automation solutions that leverage AI to streamline workflows and enhance operational efficiency.",
    icon: <Bot className="h-10 w-10 text-primary" />,
  },
  {
    title: "Data Analytics & Visualization",
    description: "Comprehensive data analysis and visualization services to derive actionable insights from your data.",
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
  },
];

function ServiceCard({ service, index }: { service: ServiceProps; index: number }) {
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
      <Card className="h-full overflow-hidden border-border hover:border-primary/50 bg-card/50 hover:bg-card transition-all duration-300 relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-bl-full -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
        
        <CardContent className="p-6 flex flex-col items-center text-center space-y-4 relative z-10">
          <div className="p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
            {service.icon}
          </div>
          <h3 className="text-xl font-semibold text-white">{service.title}</h3>
          <p className="text-gray-400 text-sm">{service.description}</p>
        </CardContent>
      </Card>
    </div>
  );
}

export function ServicesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section id="services" className="bg-gradient-to-b from-card/30 to-background">
      <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="section-heading">My Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
