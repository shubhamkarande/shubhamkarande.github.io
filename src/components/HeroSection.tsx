import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';


const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);
  const greetingRef = useRef<HTMLSpanElement>(null);

  const [currentGreeting, setCurrentGreeting] = useState(0);

  const greetings = [
    'Hi',
    'Hola',
    'नमस्ते',
    'Bonjour',
    'Hallo',
    'Привет',
    'Olá',
    'নমস্কার',
    '안녕하세요',
    'こんにちは',
    'مرحبا',
    '你好'
  ];

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });


    gsap.set([headlineRef.current, subtitleRef.current, ctaRef.current], {
      opacity: 0,
      y: 50,
      filter: "blur(10px)"
    });
    
    gsap.set(splineRef.current, {
      opacity: 0,
      x: 100,
      scale: 0.8
    });


    tl.to(headlineRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power3.out"
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power3.out"
    }, "-=0.6")
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4")
    .to(splineRef.current, {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 1.5,
      ease: "power3.out"
    }, "-=0.8");


    gsap.to(".glow-orb", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.5
    });


    const ctaButton = ctaRef.current;
    if (ctaButton) {
      const handleMouseEnter = () => {
        gsap.to(ctaButton, {
          scale: 1.05,
          boxShadow: "0 0 30px rgb(64, 165, 255)",
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(ctaButton, {
          scale: 1,
          boxShadow: "0 0 20px rgb(64, 165, 255)",
          duration: 0.3,
          ease: "power2.out"
        });
      };

      ctaButton.addEventListener('mouseenter', handleMouseEnter);
      ctaButton.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        ctaButton.removeEventListener('mouseenter', handleMouseEnter);
        ctaButton.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      if (greetingRef.current) {

        gsap.to(greetingRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {

            setCurrentGreeting((prev) => (prev + 1) % greetings.length);
            

            gsap.to(greetingRef.current, {
              opacity: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [greetings.length]);

  return (
    <section 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      data-scroll-section
    >

      <div className="absolute inset-0 w-full h-full z-0">
        <iframe 
          src='https://my.spline.design/orb-4CCbk99W5AktTVpK4DqWzNTA/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full object-cover"
          style={{ minHeight: '100vh' }}
        />
      </div>


      <div className="absolute inset-0 bg-black/40 z-10"></div>


      <div className="absolute inset-0 overflow-hidden z-20">
        <div className="glow-orb absolute top-20 left-20 w-32 h-32 bg-neon-blue/10 rounded-full blur-xl" />
        <div className="glow-orb absolute bottom-40 right-20 w-40 h-40 bg-neon-purple/10 rounded-full blur-xl" />
        <div className="glow-orb absolute top-1/2 left-1/3 w-24 h-24 bg-neon-cyan/10 rounded-full blur-xl" />
      </div>


      <div className="relative z-30 text-center px-6 lg:px-20 max-w-4xl">
        <h1 
          ref={headlineRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text mb-6 leading-relaxed pb-2"
          style={{ writingMode: 'horizontal-tb', textOrientation: 'mixed' }}
        >
          <span ref={greetingRef} className="inline-block" style={{ writingMode: 'horizontal-tb' }}>
            {greetings[currentGreeting]}
          </span>, I'm Shubham –<br />
          <span className="text-white">Software Engineer</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto"
        >
          Crafting digital experiences that inspire and engage through 
          innovative design and cutting-edge technology.
        </p>

        <div className="flex justify-center">
          <a 
            href="https://buymeacoffee.com/shubhamkarande" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button
              ref={ctaRef}
              className="hero-cta px-8 py-4 text-lg font-semibold bg-gradient-neon border-0 text-background shadow-glow-neon hover:shadow-glow-neon"
            >
              Buy Me a Coffee
            </Button>
          </a>
        </div>
      </div>


    </section>
  );
};

export default HeroSection;