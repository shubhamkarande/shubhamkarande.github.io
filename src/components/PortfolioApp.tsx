import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


import Preloader from './Preloader';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import QualificationSection from './QualificationSection';
import ServicesSection from './ServicesSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';


gsap.registerPlugin(ScrollTrigger);

const PortfolioApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if (!isLoading) {

      ScrollTrigger.refresh();
    }
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    

    gsap.to("body", {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  if (isLoading) {
    return <Preloader onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="relative">
      <Navigation />
      
      <div 
        ref={containerRef}
        className="relative"
      >
        <main>
          <section id="home">
            <HeroSection />
          </section>
          
          <section id="about">
            <AboutSection />
          </section>
          
          <SkillsSection />
          
          <QualificationSection />
          
          <ServicesSection />
          
          <section id="portfolio">
            <ProjectsSection />
          </section>
          
          <section id="contact">
            <ContactSection />
          </section>
          
          <Footer />
        </main>
      </div>


      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioApp;