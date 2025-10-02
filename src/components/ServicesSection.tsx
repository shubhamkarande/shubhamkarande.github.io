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
  Cube
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Next.js, TypeScript, and Vue.js with responsive design and SEO optimization.',
      color: 'text-neon-blue'
    },
    {
      icon: DeviceMobile,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications using React Native, Flutter, and native iOS/Android development with seamless user experiences.',
      color: 'text-neon-purple'
    },
    {
      icon: Desktop,
      title: 'Desktop App Development',
      description: 'Cross-platform desktop applications using Electron, Tauri, Qt, and .NET frameworks for Windows, macOS, and Linux platforms.',
      color: 'text-neon-green'
    },
    {
      icon: Rocket,
      title: 'DevOps',
      description: 'CI/CD pipelines, containerization with Docker, Kubernetes orchestration, infrastructure as code, and automated deployment solutions.',
      color: 'text-orange-400'
    },
    {
      icon: CloudArrowUp,
      title: 'Cloud Computing',
      description: 'AWS, Azure, and Google Cloud solutions including serverless architectures, microservices, cloud migration, and scalable infrastructure.',
      color: 'text-cyan-400'
    },
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'AI-powered solutions including natural language processing, computer vision, chatbots, and intelligent automation systems.',
      color: 'text-pink-400'
    },
    {
      icon: Lightning,
      title: 'Machine Learning',
      description: 'Custom ML models using TensorFlow, PyTorch, and scikit-learn for predictive analytics, classification, and recommendation systems.',
      color: 'text-yellow-400'
    },
    {
      icon: ChartLineUp,
      title: 'Data Science',
      description: 'Data analysis, statistical modeling, visualization with Python, R, and advanced analytics to derive actionable business insights.',
      color: 'text-purple-400'
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Big data pipelines, ETL processes, data warehousing with Apache Spark, Kafka, and modern data stack technologies.',
      color: 'text-blue-400'
    },
    {
      icon: ChartBar,
      title: 'Data Analytics',
      description: 'Business intelligence solutions, dashboard creation with Tableau, Power BI, and comprehensive data analysis services.',
      color: 'text-green-400'
    },
    {
      icon: Globe,
      title: 'Web3',
      description: 'Decentralized applications (dApps), smart contract integration, Web3 wallets, and blockchain-based web solutions.',
      color: 'text-indigo-400'
    },
    {
      icon: CurrencyBtc,
      title: 'Blockchain',
      description: 'Smart contract development, DeFi protocols, NFT platforms, cryptocurrency solutions, and blockchain consulting services.',
      color: 'text-amber-400'
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
            I offer comprehensive development and consulting services across multiple domains to bring your digital ideas to life with cutting-edge technologies and industry best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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