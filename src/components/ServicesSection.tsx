import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  PaintBrush, 
  Rocket, 
  Globe, 
  DeviceMobile, 
  Lightning 
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript.',
      color: 'text-neon-blue'
    },
    {
      icon: DeviceMobile,
      title: 'Mobile Development',
      description: 'Cross-platform mobile apps using React Native and Flutter for iOS and Android platforms.',
      color: 'text-neon-purple'
    },
    {
      icon: PaintBrush,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces with smooth animations and exceptional user experiences.',
      color: 'text-neon-green'
    },
    {
      icon: Globe,
      title: 'Full-Stack Solutions',
      description: 'End-to-end development from database design to frontend implementation with modern tech stacks.',
      color: 'text-orange-400'
    },
    {
      icon: Lightning,
      title: 'Performance Optimization',
      description: 'Speed up your applications with advanced optimization techniques and best practices.',
      color: 'text-yellow-400'
    },
    {
      icon: Rocket,
      title: 'Deployment & DevOps',
      description: 'Cloud deployment, CI/CD pipelines, and infrastructure management for scalable applications.',
      color: 'text-cyan-400'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      });

      tl.to(".service-card", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="services"
      ref={sectionRef}
      className="pt-24 pb-20 px-6 lg:px-20 bg-background/50"
      data-scroll-section
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-section gradient-text mb-6">
            Services
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            I offer comprehensive development services to bring your digital ideas to life with cutting-edge technologies and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card glass-card p-8 rounded-2xl hover:glow-blue transition-all duration-300 group"
              style={{
                opacity: 0,
                transform: 'translateY(30px) scale(0.9)'
              }}
            >
              <div className="mb-6">
                <service.icon 
                  size={48} 
                  className={`${service.color} group-hover:scale-110 transition-transform duration-300`}
                />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-neon-blue transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;