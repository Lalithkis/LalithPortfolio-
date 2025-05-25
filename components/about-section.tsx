"use client";

import { Section } from "@/components/ui/section";
import { useInView } from "react-intersection-observer";

export function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section id="about" className="bg-gradient-to-b from-background to-card/50">
      <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              A driven and ambitious Machine Learning Engineer with a strong foundation in AI and ML. 
              Experienced in deploying ML models for real-world applications, particularly using Python, 
              TensorFlow, and scikit-learn. Also proficient in SQL, Excel, and data visualization tools.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold gradient-text">Education</h3>
              <div className="border-l-2 border-primary pl-4 py-2 hover:border-l-4 transition-all duration-300">
                <h4 className="text-lg font-medium text-white">B.E. in Artificial Intelligence and Machine Learning</h4>
                <p className="text-gray-400">K.S. Rangasamy College of Technology, Tiruchengode</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold gradient-text">Personal Info</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group">
                  <p className="text-sm text-gray-400 group-hover:text-primary transition-colors duration-300">Email</p>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    <a href="mailto:lalithkishore325@gmail.com" className="hover:underline">lalithkishore325@gmail.com</a>
                  </p>
                </div>
                <div className="group">
                  <p className="text-sm text-gray-400 group-hover:text-primary transition-colors duration-300">Phone</p>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    <a href="tel:+916374355868" className="hover:underline">+91 63743 55868</a>
                  </p>
                </div>
                <div className="group">
                  <p className="text-sm text-gray-400 group-hover:text-primary transition-colors duration-300">LinkedIn</p>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300 truncate">
                    <a href="https://linkedin.com/in/lalith-kishore-v-s-688480272" target="_blank" rel="noopener noreferrer" className="hover:underline">lalith-kishore-v-s-688480272</a>
                  </p>
                </div>
                <div className="group">
                  <p className="text-sm text-gray-400 group-hover:text-primary transition-colors duration-300">GitHub</p>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    <a href="https://github.com/Lalithkis" target="_blank" rel="noopener noreferrer" className="hover:underline">Lalithkis</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-xl animate-pulse-shadow"></div>
            <div className="relative p-6 bg-card rounded-lg border border-border glass">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold gradient-text">My Approach</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I believe in creating AI solutions that are not just technically sound but also 
                    practical and accessible. Every project is an opportunity to combine technical 
                    excellence with real-world impact.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold gradient-text">My Mission</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To leverage artificial intelligence and machine learning technologies to solve 
                    complex problems and create meaningful solutions that improve lives and businesses.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-muted p-4 rounded-md text-center group hover:bg-primary/10 transition-colors duration-300 animate-float">
                    <h4 className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">2+</h4>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Years of Experience</p>
                  </div>
                  <div className="bg-muted p-4 rounded-md text-center group hover:bg-secondary/10 transition-colors duration-300 animate-float" style={{ animationDelay: '2s' }}>
                    <h4 className="text-3xl font-bold text-secondary group-hover:scale-110 transition-transform duration-300">10+</h4>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
