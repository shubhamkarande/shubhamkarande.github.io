import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Briefcase, Calendar, MapPin } from "phosphor-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

gsap.registerPlugin(ScrollTrigger);

const QualificationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("education");

  const education = [
    {
      degree: "B.E. in Computer Engineering",
      institution: "University of Mumbai",
      period: "2022 - 2025",
      status: "Completed",
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "MSBTE",
      period: "2019 - 2022",
      status: "Completed",
    },
  ];

  const experience = [
    {
      position: "Software Engineer",
      company: "Vserv Digital Services Pvt. Ltd.",
      period: "August 2025 - Present",
      type: "Full-time",
      workMode: "On-site",
      status: "Current",
    },
    {
      position: "Freelance Software Engineer",
      company: "Mindrift",
      period: "June 2025 - August 2025",
      type: "Freelance",
      workMode: "Remote",
      status: "Completed",
    },
    {
      position: "Software Engineer",
      company: "Outlier",
      period: "October 2024 - April 2025",
      type: "Part-time",
      workMode: "Remote",
      status: "Completed",
    },
    {
      position: "Software Engineer Intern",
      company: "Prodigy InfoTech",
      period: "July 2024 - September 2024",
      type: "Internship",
      workMode: "Remote",
      status: "Completed",
    },
    {
      position: "Freelance Web Developer",
      company: "Remotasks",
      period: "January 2023 - December 2023",
      type: "Freelance",
      workMode: "Remote",
      status: "Completed",
    },
    {
      position: "Intern",
      company: "HyperStellar Technology",
      period: "August 2021 - September 2021",
      type: "Internship",
      workMode: "Remote",
      status: "Completed",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      });


      gsap.set(".qualification-card", { opacity: 0, y: 30, scale: 0.95 });

      tl.to(".qualification-card", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      className="pt-24 pb-20 px-6 lg:px-20 bg-background/30"
      data-scroll-section
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-section gradient-text mb-6">
            Qualification & Experience
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            My educational background and professional journey in software
            development and engineering.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8 bg-background/50 backdrop-blur-xl p-1 rounded-2xl border border-glass-border">
            <TabsTrigger 
              value="education" 
              className="flex items-center gap-2 data-[state=active]:bg-gradient-neon data-[state=active]:text-background data-[state=active]:shadow-glow-blue data-[state=inactive]:text-foreground/70 data-[state=inactive]:hover:text-foreground transition-all duration-300 rounded-xl font-semibold"
            >
              <GraduationCap size={20} />
              Education
            </TabsTrigger>
            <TabsTrigger 
              value="experience" 
              className="flex items-center gap-2 data-[state=active]:bg-gradient-neon data-[state=active]:text-background data-[state=active]:shadow-glow-purple data-[state=inactive]:text-foreground/70 data-[state=inactive]:hover:text-foreground transition-all duration-300 rounded-xl font-semibold"
            >
              <Briefcase size={20} />
              Experience
            </TabsTrigger>
          </TabsList>

          <TabsContent value="education" className="mt-0">
            <div className="relative px-2 sm:px-8 lg:px-16">
              <Carousel
                opts={{
                  align: "start",
                  loop: false,
                }}
                className="w-full max-w-5xl mx-auto"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {education.map((edu, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                      <div className="qualification-card glass-card p-4 sm:p-6 rounded-2xl hover:glow-blue transition-all duration-300 group h-[200px] flex flex-col justify-between">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-neon-blue transition-colors duration-300">
                        {edu.degree}
                      </h4>
                      <p className="text-foreground/70 mb-2">
                        {edu.institution}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium text-center border ${
                        edu.status === "Current"
                          ? "bg-neon-green/20 text-neon-green border-neon-green/30 shadow-sm shadow-neon-green/20"
                          : "bg-neon-blue/20 text-neon-blue border-neon-blue/30"
                      }`}
                    >
                      {edu.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-foreground/60">
                    <Calendar size={16} />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                </div>
                    </CarouselItem>
              ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-12 bg-gradient-neon border-0 text-background font-semibold shadow-glow-blue hover:shadow-glow-neon hover:scale-105 hover:brightness-110 transition-all duration-300" />
                <CarouselNext className="hidden sm:flex -right-4 lg:-right-12 bg-gradient-neon border-0 text-background font-semibold shadow-glow-blue hover:shadow-glow-neon hover:scale-105 hover:brightness-110 transition-all duration-300" />
              </Carousel>
            </div>
          </TabsContent>

          <TabsContent value="experience" className="mt-0">
            <div className="relative px-2 sm:px-8 lg:px-16">
              <Carousel
                opts={{
                  align: "start",
                  loop: false,
                }}
                className="w-full max-w-5xl mx-auto"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {experience.map((exp, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                      <div className="qualification-card glass-card p-4 sm:p-6 rounded-2xl hover:glow-purple transition-all duration-300 group h-[200px] flex flex-col justify-between">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-neon-purple transition-colors duration-300">
                        {exp.position}
                      </h4>
                      <div className="flex items-center gap-2 text-foreground/70 mb-2">
                        <MapPin size={16} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                          <div className="flex flex-col gap-1">
                      <span
                              className={`px-2 py-1 rounded-full text-xs font-medium text-center border ${
                          exp.status === "Current"
                            ? "bg-neon-green/20 text-neon-green border-neon-green/30 shadow-sm shadow-neon-green/20"
                            : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                        }`}
                      >
                        {exp.status}
                      </span>
                                                        <span className="px-2 py-1 rounded-full text-xs font-medium text-center border bg-neon-purple/20 text-neon-purple border-neon-purple/30">
                        {exp.type}
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium text-center border ${
                          exp.workMode === "On-site"
                            ? "bg-orange-500/20 text-orange-400 border-orange-500/30"
                            : "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
                        }`}
                      >
                        {exp.workMode}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-foreground/60">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                    </CarouselItem>
              ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-12 bg-gradient-neon border-0 text-background font-semibold shadow-glow-purple hover:shadow-glow-neon hover:scale-105 hover:brightness-110 transition-all duration-300" />
                <CarouselNext className="hidden sm:flex -right-4 lg:-right-12 bg-gradient-neon border-0 text-background font-semibold shadow-glow-purple hover:shadow-glow-neon hover:scale-105 hover:brightness-110 transition-all duration-300" />
              </Carousel>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default QualificationSection;
