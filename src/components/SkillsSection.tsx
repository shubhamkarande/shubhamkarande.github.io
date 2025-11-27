import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaHtml5, 
  FaJs, 
  FaReact, 
  FaPython, 
  FaNodeJs,
  FaAws,
  FaDocker,
  FaCode
} from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiVuedotjs,
  SiSvelte, 
  SiSolid,
  SiFlutter, 
  SiExpress, 
  SiNestjs,
  SiFastify,
  SiFastapi,
  SiDjango,
  SiFlask,
  SiGin,
  SiCss3,
  SiTailwindcss,
  SiGraphql, 
  SiPostgresql, 
  SiMongodb, 
  SiRedis, 
  SiFirebase, 
  SiApachekafka,
  SiKubernetes,
  SiAmazonec2,
  SiAmazons3,
  SiAwslambda,
  SiAmazonrds,
  SiGooglecloud,
  SiLangchain,
  SiHuggingface,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiJupyter,
  SiGnubash,
  SiGithub,
  SiLinux,
  SiPlotly,
  SiGooglecolab,
  SiGo,
  SiDart
} from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    // Frontend Languages & Markup
    { icon: FaHtml5, name: 'HTML5', color: 'text-orange-500' },
    { icon: SiCss3, name: 'CSS3', color: 'text-blue-500' },
    { icon: FaJs, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-600' },
    
    // Programming Languages
    { icon: FaPython, name: 'Python', color: 'text-yellow-500' },
    { icon: SiGo, name: 'Golang', color: 'text-cyan-400' },
    { icon: SiDart, name: 'Dart', color: 'text-blue-400' },
    
    // Frontend Frameworks & Styling
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-cyan-400' },
    { icon: FaReact, name: 'React', color: 'text-cyan-300' },
    { icon: SiNextdotjs, name: 'Next.js', color: 'text-white' },
    { icon: SiVuedotjs, name: 'Vue.js', color: 'text-green-500' },
    { icon: SiSvelte, name: 'Svelte', color: 'text-orange-600' },
    { icon: SiSvelte, name: 'SvelteKit', color: 'text-orange-500' },
    { icon: SiSolid, name: 'SolidJS', color: 'text-blue-500' },
    
    // Mobile Development
    { icon: FaReact, name: 'React Native', color: 'text-cyan-300' },
    { icon: SiFlutter, name: 'Flutter', color: 'text-blue-400' },
    
    // API & Communication
    { icon: FaCode, name: 'REST APIs', color: 'text-green-400' },
    { icon: SiGraphql, name: 'GraphQL', color: 'text-pink-500' },
    { icon: FaCode, name: 'WebSocket', color: 'text-green-500' },
    
    // Databases
    { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-500' },
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-500' },
    { icon: SiRedis, name: 'Redis', color: 'text-red-500' },
    { icon: SiFirebase, name: 'Firebase', color: 'text-yellow-500' },
    
    // Backend Frameworks
    { icon: FaNodeJs, name: 'Node.js', color: 'text-green-500' },
    { icon: SiExpress, name: 'Express', color: 'text-gray-400' },
    { icon: SiNestjs, name: 'NestJS', color: 'text-red-600' },
    { icon: SiFastify, name: 'Fastify', color: 'text-blue-600' },
    { icon: SiFastapi, name: 'FastAPI', color: 'text-teal-500' },
    { icon: SiDjango, name: 'Django', color: 'text-green-600' },
    { icon: SiFlask, name: 'Flask', color: 'text-gray-400' },
    { icon: SiGin, name: 'Gin', color: 'text-cyan-500' },
    
    // Cloud Platforms
    { icon: FaAws, name: 'Amazon Web Services', color: 'text-orange-400' },
    { icon: VscAzure, name: 'Microsoft Azure', color: 'text-blue-600' },
    { icon: SiGooglecloud, name: 'Google Cloud Platform', color: 'text-blue-500' },
    
    // DevOps & Containerization
    { icon: FaDocker, name: 'Docker', color: 'text-blue-400' },
    { icon: SiKubernetes, name: 'Kubernetes', color: 'text-blue-500' },
    { icon: SiAmazonec2, name: 'Amazon EC2', color: 'text-orange-400' },
    { icon: SiAmazons3, name: 'Amazon S3', color: 'text-green-600' },
    { icon: SiAwslambda, name: 'AWS Lambda', color: 'text-orange-500' },
    { icon: SiAmazonrds, name: 'Amazon RDS', color: 'text-blue-600' },
    
    // AI/ML & LLM Engineering
    { icon: SiLangchain, name: 'LangChain', color: 'text-green-400' },
    { icon: FaCode, name: 'LlamaIndex', color: 'text-orange-500' },
    { icon: SiHuggingface, name: 'Hugging Face', color: 'text-yellow-500' },
    { icon: FaCode, name: 'ChromaDB', color: 'text-purple-600' },
    { icon: FaCode, name: 'Pinecone', color: 'text-purple-500' },
    { icon: FaCode, name: 'AWS SageMaker', color: 'text-orange-400' },
    
    // Data Science & ML
    { icon: SiNumpy, name: 'NumPy', color: 'text-blue-600' },
    { icon: SiPandas, name: 'pandas', color: 'text-blue-700' },
    { icon: SiScikitlearn, name: 'scikit-learn', color: 'text-orange-500' },
    { icon: SiPytorch, name: 'PyTorch', color: 'text-red-500' },
    { icon: SiTensorflow, name: 'TensorFlow', color: 'text-orange-500' },
    { icon: SiKeras, name: 'Keras', color: 'text-red-600' },
    { icon: FaCode, name: 'Matplotlib', color: 'text-blue-500' },
    { icon: FaCode, name: 'Seaborn', color: 'text-blue-400' },
    { icon: SiPlotly, name: 'Plotly', color: 'text-blue-600' },
    { icon: SiJupyter, name: 'Jupyter Notebook', color: 'text-orange-500' },
    { icon: SiGooglecolab, name: 'Google Colab', color: 'text-yellow-600' },
    
    // Tools & Utilities
    { icon: SiLinux, name: 'Linux', color: 'text-yellow-500' },
    { icon: SiGnubash, name: 'Bash', color: 'text-gray-400' },
    { icon: SiGithub, name: 'GitHub Actions', color: 'text-gray-400' }
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

      tl.to(".skill-icon", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.02,
        ease: "back.out(1.7)"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="skills"
      ref={sectionRef}
      className="pt-24 pb-20 px-6 lg:px-20"
      data-scroll-section
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-section gradient-text mb-6">
            Technical Skills
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            The engineering stack I use to create reliable, scalable, and production-ready applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div ref={skillsRef}>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 sm:gap-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="skill-icon group glass-card p-3 sm:p-4 rounded-xl text-center hover:glow-blue transition-all duration-300 cursor-pointer opacity-0"
              >
                <skill.icon 
                  size={28} 
                  className={`${skill.color} mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}
                />
                <p className="text-[9px] sm:text-[10px] text-foreground/70 font-medium leading-tight">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;