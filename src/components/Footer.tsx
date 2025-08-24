import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  GithubLogo, 
  LinkedinLogo, 
  Heart,
  InstagramLogo,
  SnapchatLogo
} from 'phosphor-react';
import { SiLeetcode, SiX, SiDribbble, SiMedium } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.set(".footer-element", {
        opacity: 0,
        y: 30,
        filter: "blur(8px)"
      });

      gsap.set(".particle", {
        opacity: 0,
        scale: 0
      });


      gsap.to(".footer-element", {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });


      gsap.to(".particle", {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });


      gsap.to(".particle", {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.2
      });

    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="relative py-16 px-6 lg:px-20 mt-20 border-t border-glass-border"
      data-scroll-section
    >

      <div 
        ref={particlesRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-neon-blue/30 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-16 mb-8 sm:mb-12">

          <div className="footer-element">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              SHUBHAM
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              Crafting digital experiences that inspire and engage through 
              innovative design and cutting-edge technology.
            </p>
          </div>


          <div className="footer-element">
            <h4 className="text-lg font-semibold text-neon-blue mb-6">
              Social Links
            </h4>
            

            <div className="grid grid-cols-4 gap-3">
              <a 
                href="https://linkedin.com/in/karandeshubham" 
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card py-1.5 rounded-lg hover:glow-blue transition-all duration-300 group flex flex-col items-center gap-0"
              >
                <LinkedinLogo 
                  size={16} 
                  className="text-foreground group-hover:text-blue-400 transition-colors duration-300" 
                />
                <span className="text-[8px] text-foreground/70 group-hover:text-blue-400 transition-colors duration-300">
                  LinkedIn
                </span>
              </a>
              
              <a 
                href="https://github.com/shubhamkarande" 
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card py-1.5 rounded-lg hover:glow-blue transition-all duration-300 group flex flex-col items-center gap-0"
              >
                <GithubLogo 
                  size={16} 
                  className="text-foreground group-hover:text-purple-400 transition-colors duration-300" 
                />
                <span className="text-[8px] text-foreground/70 group-hover:text-purple-400 transition-colors duration-300">
                  GitHub
                </span>
              </a>
              
              <a 
                href="https://leetcode.com/u/stfushubham/" 
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card py-1.5 rounded-lg hover:glow-blue transition-all duration-300 group flex flex-col items-center gap-0"
              >
                <SiLeetcode 
                  size={16} 
                  className="text-foreground group-hover:text-yellow-400 transition-colors duration-300" 
                />
                <span className="text-[8px] text-foreground/70 group-hover:text-yellow-400 transition-colors duration-300">
                  LeetCode
                </span>
              </a>
              
              <a 
                href="https://www.instagram.com/_stfu.shubham_/" 
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card py-1.5 rounded-lg hover:glow-blue transition-all duration-300 group flex flex-col items-center gap-0"
              >
                <InstagramLogo 
                  size={16} 
                  className="text-foreground group-hover:text-pink-400 transition-colors duration-300" 
                />
                <span className="text-[8px] text-foreground/70 group-hover:text-pink-400 transition-colors duration-300">
                  Instagram
                </span>
              </a>
              
              <a 
                href="https://x.com/stfu_shubham09" 
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card py-1.5 rounded-lg hover:glow-blue transition-all duration-300 group flex flex-col items-center gap-0"
              >
                <SiX 
                  size={16} 
                  className="text-foreground group-hover:text-cyan-400 transition-colors duration-300" 
                />
                <span className="text-[8px] text-foreground/70 group-hover:text-cyan-400 transition-colors duration-300">
                  X (Twitter)
                </span>
              </a>
              
              <a 
                href="https://www.snapchat.com/@stfu.shubham09" 
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card py-1.5 rounded-lg hover:glow-blue transition-all duration-300 group flex flex-col items-center gap-0"
              >
                <SnapchatLogo 
                  size={16} 
                  className="text-foreground group-hover:text-yellow-300 transition-colors duration-300" 
                />
                <span className="text-[8px] text-foreground/70 group-hover:text-yellow-300 transition-colors duration-300">
                  Snapchat
                </span>
              </a>
              
              <a 
                href="https://dribbble.com/shubhamkarande" 
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card py-1.5 rounded-lg hover:glow-blue transition-all duration-300 group flex flex-col items-center gap-0"
              >
                <SiDribbble 
                  size={16} 
                  className="text-foreground group-hover:text-pink-400 transition-colors duration-300" 
                />
                <span className="text-[8px] text-foreground/70 group-hover:text-pink-400 transition-colors duration-300">
                  Dribbble
                </span>
              </a>
              
              <a 
                href="https://medium.com/@shubhamkarande94" 
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card py-1.5 rounded-lg hover:glow-blue transition-all duration-300 group flex flex-col items-center gap-0"
              >
                <SiMedium 
                  size={16} 
                  className="text-foreground group-hover:text-green-400 transition-colors duration-300" 
                />
                <span className="text-[8px] text-foreground/70 group-hover:text-green-400 transition-colors duration-300">
                  Medium
                </span>
              </a>
            </div>
          </div>
        </div>


        <div className="footer-element pt-8 border-t border-glass-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 text-sm">
              © 2025 Shubham Karande. All rights reserved.
            </p>
            <p className="text-foreground/60 text-sm flex items-center gap-1">
              Made with <Heart size={16} className="text-neon-pink" /> using React & GSAP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;