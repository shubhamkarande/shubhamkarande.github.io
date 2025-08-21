import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Briefcase, Headphones, Download, FilePdf } from 'phosphor-react';
import resumePDF from '@/assets/Shubham-Karande-Resume.pdf';
import profileImage from '@/assets/Shubham2.jpg';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: MapPin,
      title: 'Experience',
      value: '1 Year',
      color: 'text-neon-blue'
    },
    {
      icon: Briefcase,
      title: 'Completed',
      value: '30+ Projects',
      color: 'text-neon-purple'
    },
    {
      icon: Headphones,
      title: 'Support',
      value: 'Online 24/7',
      color: 'text-neon-green'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.set([imageRef.current, contentRef.current], {
        opacity: 0,
        filter: "blur(10px)"
      });

      gsap.set(imageRef.current, { x: -50 });
      gsap.set(contentRef.current, { y: 30 });


      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      });

      tl.to(imageRef.current, {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out"
      })
      .to(contentRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out"
      }, "-=0.6")
      .to(".stat-card", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=0.4");


      const profileImage = imageRef.current;
      if (profileImage) {
        profileImage.addEventListener('mouseenter', () => {
          gsap.to(profileImage, {
            rotationY: 5,
            rotationX: -5,
            scale: 1.05,
            duration: 0.4,
            ease: "power2.out"
          });
        });

        profileImage.addEventListener('mouseleave', () => {
          gsap.to(profileImage, {
            rotationY: 0,
            rotationX: 0,
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
          });
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="pt-24 pb-20 px-6 lg:px-20"
      data-scroll-section
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-section gradient-text mb-6">
            About Me
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Get to know more about my journey, experience, and passion for creating innovative digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div 
            ref={imageRef}
            className="relative"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-neon rounded-full p-1 glow-neon">
                <div className="w-full h-full bg-background rounded-full overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Shubham - Software Engineer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              

              <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-blue/30 rounded-full blur-sm float" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-neon-purple/30 rounded-full blur-sm float-delayed" />
            </div>
          </div>


          <div ref={contentRef} className="space-y-8">

            <div ref={statsRef} className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.title}
                  className="stat-card glass-card p-4 rounded-xl text-center hover:glow-blue transition-all duration-300 flex flex-col items-center justify-center"
                  style={{
                    opacity: 0,
                    transform: 'translateY(20px) scale(0.9)'
                  }}
                >
                  <stat.icon 
                    size={32} 
                    className={`${stat.color} mx-auto mb-2`}
                  />
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    {stat.title}
                  </h3>
                  <p className="text-xs text-foreground/70">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>


            <div>
              <div className="space-y-4 text-foreground/80 text-lg leading-relaxed mb-8">
                <p>
                  I specialize in crafting responsive, modern websites and high-performance mobile applications. With over 1 year of experience, I have collaborated with various tech startups and organizations to deliver innovative and reliable solutions tailored to their needs.
                </p>
              </div>


              <div className="flex justify-center lg:justify-start">
                <Button 
                  className="bg-gradient-neon border-0 text-background font-semibold px-8 py-3 shadow-glow-neon hover:shadow-glow-neon hover:scale-105 hover:brightness-110 transition-all duration-300 flex items-center gap-2"
                  onClick={() => {

                    const link = document.createElement('a');
                    link.href = resumePDF;
                    link.download = 'Shubham-Karande-Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  Download Resume
                  <FilePdf size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;