"use client";

import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface AchievementProps {
  title: string;
  prize?: string;
  description: string;
  image: string;
}

const achievements: AchievementProps[] = [
  {
    title: "National Level Hackathon 1.0 Champion",
    prize: "₹30,000",
    description: "24-hour AI coding challenge winner, developing a solution for automated medical diagnosis.",
    image: "/images/hackathon_winner.png",
  },
  {
    title: "NAUONMESH 2.0 ",
    description: "Top 15 performer in a national AI hackathon, showcasing a sustainable energy optimization system.",
    image: "/images/nauonmesh.png",
  },
  {
    title: "National Level Winner Award – Annual Day Recognition",
    prize: "₹3,000",
    description: "Recognized at the national level during the Annual Day celebration for exceptional innovation and technical excellenc",
    image: "/images/annual_day_award.png",
  },
];

function AchievementCard({ achievement, index }: { achievement: AchievementProps; index: number }) {
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
      <Card className="overflow-hidden border-border hover:border-primary/50 bg-card/50 hover:bg-card transition-all duration-300 h-full">
        <div className="aspect-video relative overflow-hidden bg-muted">
          <img 
            src={achievement.image} 
            alt={achievement.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          {achievement.prize && (
            <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 rounded-bl-lg font-medium">
              Prize: {achievement.prize}
            </div>
          )}
        </div>
        <CardContent className="p-6 space-y-4">
          <div className="flex items-start gap-4">
            <div className="mt-1 bg-primary/10 p-2 rounded-full">
              <Trophy className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
            </div>
          </div>
          <p className="text-gray-400 text-sm">{achievement.description}</p>
        </CardContent>
      </Card>
    </div>
  );
}

export function AchievementsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section id="achievements" className="bg-background">
      <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="section-heading">Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={achievement.title} 
              achievement={achievement} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
