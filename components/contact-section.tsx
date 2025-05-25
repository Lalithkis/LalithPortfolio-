"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
}

const contactInfo: ContactInfoProps[] = [
  {
    icon: <Phone className="h-5 w-5 text-primary" />,
    title: "Phone",
    content: "+91 63743 55868",
    link: "tel:+916374355868",
  },
  {
    icon: <Mail className="h-5 w-5 text-primary" />,
    title: "Email",
    content: "lalithkishore325@gmail.com",
    link: "mailto:lalithkishore325@gmail.com",
  },
  {
    icon: <MapPin className="h-5 w-5 text-primary" />,
    title: "Location",
    content: "Salem, Tamil Nadu, India",
  },
];

export function ContactSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    console.log(`Form field ${name} updated to: ${value}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitted(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await res.json();
        alert("Failed to send message: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      alert("Failed to send message: " + (err as Error).message);
    } finally {
      setIsSubmitting(false);
      // Reset submitted state after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <Section id="contact" className="bg-gradient-to-b from-card/30 to-background">
      <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Feel free to reach out to me for collaboration, opportunities, or just to say hello.
              I'm always open to discussing new projects and ideas.
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title} 
                  className="bg-card/50 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-full group-hover:scale-110 transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-400 group-hover:text-primary transition-colors duration-300">{info.title}</h3>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-white hover:text-primary transition-colors group-hover:font-medium"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-white group-hover:font-medium transition-all duration-300">{info.content}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="border border-border bg-card/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-primary to-secondary animate-gradient"></div>
              <CardContent className="p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-10 space-y-4 text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 animate-pulse">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Message Sent!</h3>
                    <p className="text-gray-300">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-400">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-muted border-border focus:border-primary/50 transition-colors"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-400">
                          Your Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-muted border-border focus:border-primary/50 transition-colors"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-400">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-muted border-border focus:border-primary/50 transition-colors"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-400">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-muted border-border focus:border-primary/50 transition-colors min-h-[150px] resize-none"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full relative overflow-hidden group" 
                      disabled={isSubmitting}
                    >
                      <span className="absolute inset-0 w-0 bg-gradient-to-r from-secondary to-primary group-hover:w-full transition-all duration-700"></span>
                      <span className="relative flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </span>
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}
