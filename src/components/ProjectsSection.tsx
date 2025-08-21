import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowSquareOut } from 'phosphor-react';

import { projectsData } from '@/data/projectsData';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filterButtons = ['All', 'Web', 'App', 'Other'];

const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.set(titleRef.current, {
        opacity: 0,
        y: 50,
        filter: "blur(10px)"
      });

      gsap.set(".project-card", {
        opacity: 0,
        y: 60,
        scale: 0.9
      });


      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });


      gsap.to(".project-card", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });


      document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.02,
            y: -10,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
            duration: 0.3,
            ease: "power2.out"
          });
          
          const image = card.querySelector('.project-image');
          gsap.to(image, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            duration: 0.3,
            ease: "power2.out"
          });
          
          const image = card.querySelector('.project-image');
          gsap.to(image, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 lg:px-20"
      data-scroll-section
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-section gradient-text mb-6"
          >
            Featured Projects
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Explore my latest work showcasing innovative solutions and cutting-edge 
            technologies that bring ideas to life.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-background-secondary/50 backdrop-blur-sm rounded-full p-1 border border-glass-border">
            {filterButtons.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-neon text-background shadow-glow-neon'
                    : 'text-foreground/70 hover:text-foreground hover:bg-background-secondary/30'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div 
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card glass-card rounded-2xl overflow-hidden group cursor-pointer flex flex-col h-full hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-neon-blue transition-colors duration-300 mb-3">
                  {project.title}
                </h3>
                
                <div className="flex-grow mb-4 overflow-y-auto max-h-32 custom-scrollbar">
                  <p className="text-foreground/70 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-neon-blue/10 text-neon-blue border border-neon-blue/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block mt-auto"
                >
                  <Button className="w-full bg-gradient-neon border-0 hover:shadow-glow-neon transition-all duration-300">
                    View Project
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;