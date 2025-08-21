import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { List, X } from 'phosphor-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {

    gsap.fromTo(navRef.current, 
      { 
        opacity: 0, 
        y: -20,
        filter: "blur(10px)"
      },
      { 
        opacity: 1, 
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        delay: 0.5,
        ease: "power3.out"
      }
    );


    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        gsap.to(navRef.current, {
          backgroundColor: "rgba(20, 20, 23, 0.9)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(64, 64, 74, 0.3)",
          duration: 0.3,
          ease: "power2.out"
        });
      } else {
        gsap.to(navRef.current, {
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)",
          borderBottom: "1px solid transparent",
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {

    if (isMenuOpen) {
      gsap.set(mobileMenuRef.current, { display: 'flex' });
      gsap.fromTo(mobileMenuRef.current,
        { 
          opacity: 0,
          scale: 0.9,
          filter: "blur(10px)"
        },
        { 
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.3,
          ease: "power2.out"
        }
      );
      
      gsap.fromTo(".mobile-nav-item",
        { 
          opacity: 0,
          x: 50,
          filter: "blur(5px)"
        },
        { 
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 0.4,
          stagger: 0.1,
          delay: 0.1,
          ease: "power2.out"
        }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        scale: 0.9,
        filter: "blur(10px)",
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(mobileMenuRef.current, { display: 'none' });
        }
      });
    }
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    

    const target = document.querySelector(href);
    if (target) {
      const targetRect = target.getBoundingClientRect();
      const offsetTop = window.pageYOffset + targetRect.top;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav 
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-20 py-4 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          <a 
            href="#home" 
            className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            SHUBHAM
          </a>


          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-foreground/80 hover:text-neon-blue transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>


          <a 
            href="https://www.fiverr.com/shubham_karande/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <Button className="bg-gradient-neon border-0 text-background font-semibold shadow-glow-blue hover:shadow-glow-neon hover:scale-105 hover:brightness-110 transition-all duration-300">
              Hire Me
            </Button>
          </a>


          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-neon-blue transition-colors duration-300 z-50 relative"
          >
            {isMenuOpen ? <X size={24} /> : <List size={24} />}
          </Button>
        </div>
      </nav>


      <div
        ref={mobileMenuRef}
        className="fixed inset-0 z-40 hidden md:hidden items-center justify-center bg-background/30 backdrop-blur-sm"
        style={{ backdropFilter: 'blur(4px)' }}
      >
        <div className="text-center space-y-8 pointer-events-auto">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="mobile-nav-item block text-2xl font-semibold text-foreground/80 hover:text-neon-blue transition-colors duration-300 cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;