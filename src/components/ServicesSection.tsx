import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  PaintBrush, 
  Rocket, 
  Globe, 
  DeviceMobile, 
  Lightning,
  Desktop,
  CloudArrowUp,
  Brain,
  ChartLineUp,
  Database,
  ChartBar,
  CurrencyBtc,
  Cube,
  Gear,
  Robot,
  Cpu,
  Shield
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Code,
      title: 'Full Stack Web Development',
      description: 'Modern, responsive web applications using React, Next.js, TypeScript, and secure backend APIs. Focused on performance, scalability, and clean UI/UX.',
      color: 'text-neon-blue'
    },
    {
      icon: DeviceMobile,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile apps built with React Native and Flutter, delivering native-like performance and smooth user experiences.',
      color: 'text-neon-purple'
    },
    {
      icon: CloudArrowUp,
      title: 'Cloud Computing',
      description: 'Deployment and hosting of web and mobile applications using cloud platforms like AWS, Azure and GCP with focus on scalability, performance, and secure infrastructure setup.',
      color: 'text-cyan-400'
    },
    {
      icon: Rocket,
      title: 'DevOps',
      description: 'CI/CD pipelines, Docker-based environments, and workflow automation to ensure smooth, reliable development and deployment processes.',
      color: 'text-orange-400'
    },
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Exploring foundational AI concepts with hands-on experience in deep learning, NLP, and model integration into real applications.',
      color: 'text-pink-400'
    },
    {
      icon: Lightning,
      title: 'Machine Learning',
      description: 'Building projects with Python, Scikit-learn, Pandas, and TensorFlow to solve data-driven challenges and enhance product intelligence.',
      color: 'text-yellow-400'
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
          <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
            I deliver end-to-end development across Web, Mobile, DevOps and emerging AI/ML — turning concepts into real, scalable products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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