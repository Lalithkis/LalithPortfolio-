"use client";

import { Section } from "@/components/ui/section";
import { useInView } from "react-intersection-observer";

interface SkillProps {
  name: string;
  level: number;
  category: string;
}

const skills: SkillProps[] = [
  // Languages
  { name: "Python", level: 90, category: "Languages" },
  { name: "SQL", level: 85, category: "Languages" },
  { name: "Java", level: 70, category: "Languages" },
  { name: "C", level: 75, category: "Languages" },
  
  // Frameworks & Libraries
  { name: "Pandas", level: 95, category: "Frameworks & Libraries" },
  { name: "NumPy", level: 90, category: "Frameworks & Libraries" },
  { name: "Matplotlib", level: 85, category: "Frameworks & Libraries" },
  { name: "TensorFlow", level: 80, category: "Frameworks & Libraries" },
  { name: "OpenCV", level: 75, category: "Frameworks & Libraries" },
  { name: "Scikit-learn", level: 85, category: "Frameworks & Libraries" },
  
  // Visualization Tools
  { name: "MS Excel", level: 90, category: "Visualization Tools" },
  { name: "Tableau", level: 80, category: "Visualization Tools" },
  { name: "Power BI", level: 75, category: "Visualization Tools" },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-200">{name}</span>
        <span className="text-xs font-semibold px-2 py-0.5 bg-primary/20 rounded-full text-primary">{level}%</span>
      </div>
      <div className="h-2.5 bg-muted rounded-full overflow-hidden shadow-inner">
        <div 
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out relative" 
          style={{ width: inView ? `${level}%` : '0%' }}
        >
          <span className="absolute inset-0 flex justify-center items-center">
            <span className="w-1 h-1 rounded-full bg-white/70 animate-pulse"></span>
          </span>
        </div>
      </div>
    </div>
  );
}

export function SkillsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Group skills by category
  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, SkillProps[]>);

  return (
    <Section id="skills" className="bg-gradient-to-b from-background to-card/30">
      <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="section-heading">Technical Skills</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {Object.entries(categories).map(([category, categorySkills], index) => (
            <div 
              key={category} 
              className="space-y-6 p-6 bg-card/50 rounded-lg border border-border hover:border-primary/30 transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-1 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                <h3 className="text-xl font-semibold text-white">{category}</h3>
              </div>
              <div className="space-y-5">
                {categorySkills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
