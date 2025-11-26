import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { VscAzure } from "react-icons/vsc";
import { 
  FaHtml5, 
  FaJs, 
  FaReact, 
  FaPython, 
  FaNodeJs,
  FaCode,
  FaAws,
  FaMicrosoft,
  FaGoogle,
  FaDocker
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiSvelte, 
  SiFlutter, 
  SiExpress, 
  SiFastapi,
  SiDart, 
  SiCplusplus,
  SiCss3,
  SiGraphql, 
  SiNginx,
  SiExpo,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiJupyter,
  SiLangchain,
  SiMysql, 
  SiPostgresql, 
  SiMongodb, 
  SiRedis, 
  SiSqlite, 
  SiFirebase, 
  SiRabbitmq, 
  SiApachekafka,
  SiAmazonec2,
  SiAmazons3,
  SiAwslambda,
  SiAmazonrds,
  SiKubernetes,
  SiGnubash,
  SiGithub,
  SiAnsible,
  SiTerraform,
  SiTailwindcss,
  SiPlotly,
  SiGooglecolab,
  SiHuggingface,
  SiLinux,
  SiGooglecloud
} from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    // Programming Languages
    { icon: FaJs, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-600' },
    { icon: FaPython, name: 'Python', color: 'text-yellow-500' },
    { icon: SiDart, name: 'Dart', color: 'text-blue-400' },
    { icon: SiCplusplus, name: 'C++', color: 'text-blue-500' },

    // Full Stack Web Development
    { icon: FaReact, name: 'React', color: 'text-cyan-300' },
    { icon: SiNextdotjs, name: 'Next.js', color: 'text-white' },
    { icon: SiSvelte, name: 'Svelte', color: 'text-orange-600' },
    { icon: FaHtml5, name: 'HTML5', color: 'text-orange-500' },
    { icon: SiCss3, name: 'CSS3', color: 'text-blue-500' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-cyan-400' },
    { icon: FaNodeJs, name: 'Node.js', color: 'text-green-500' },
    { icon: SiExpress, name: 'Express', color: 'text-gray-400' },
    { icon: SiFastapi, name: 'FastAPI', color: 'text-teal-500' },
    { icon: SiGraphql, name: 'GraphQL', color: 'text-pink-500' },
    { icon: FaCode, name: 'REST APIs', color: 'text-green-400' },
    { icon: SiNginx, name: 'Nginx', color: 'text-green-600' },

    // Mobile App Development
    { icon: FaReact, name: 'React Native', color: 'text-cyan-300' },
    { icon: SiExpo, name: 'Expo', color: 'text-blue-500' },
    { icon: SiFlutter, name: 'Flutter', color: 'text-blue-400' },

    // AI / Machine Learning
    { icon: SiNumpy, name: 'NumPy', color: 'text-blue-600' },
    { icon: SiPandas, name: 'pandas', color: 'text-blue-700' },
    { icon: SiScikitlearn, name: 'Scikit-learn', color: 'text-orange-500' },
    { icon: SiPytorch, name: 'PyTorch', color: 'text-red-500' },
    { icon: SiTensorflow, name: 'TensorFlow', color: 'text-orange-500' },
    { icon: SiKeras, name: 'Keras', color: 'text-red-600' },
    { icon: FaCode, name: 'Matplotlib', color: 'text-blue-500' },
    { icon: FaCode, name: 'Seaborn', color: 'text-blue-400' },
    { icon: SiPlotly, name: 'Plotly', color: 'text-blue-600' },
    { icon: SiJupyter, name: 'Jupyter Notebook', color: 'text-orange-500' },
    { icon: SiGooglecolab, name: 'Google Colab', color: 'text-yellow-600' },
    { icon: FaCode, name: 'PyBrain', color: 'text-blue-500' },

    // GenAI / LLM Engineering
    { icon: SiLangchain, name: 'LangChain', color: 'text-green-400' },
    { icon: FaCode, name: 'LlamaIndex', color: 'text-orange-500' },
    { icon: SiHuggingface, name: 'Hugging Face', color: 'text-yellow-500' },
    { icon: FaCode, name: 'ChromaDB', color: 'text-purple-600' },
    { icon: FaCode, name: 'Pinecone', color: 'text-purple-500' },
    { icon: FaCode, name: 'Amazon SageMaker', color: 'text-orange-400' },

    // Databases, Messaging & Streaming
    { icon: SiMysql, name: 'MySQL', color: 'text-blue-600' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-500' },
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-500' },
    { icon: SiRedis, name: 'Redis', color: 'text-red-500' },
    { icon: SiSqlite, name: 'SQLite', color: 'text-blue-300' },
    { icon: SiFirebase, name: 'Firebase', color: 'text-yellow-500' },
    { icon: SiRabbitmq, name: 'RabbitMQ', color: 'text-orange-600' },
    { icon: SiApachekafka, name: 'Apache Kafka', color: 'text-gray-700' },

    // Cloud & DevOps
    { icon: FaAws, name: 'AWS', color: 'text-orange-400' },
    { icon: SiAmazonec2, name: 'Amazon EC2', color: 'text-orange-400' },
    { icon: SiAmazons3, name: 'Amazon S3', color: 'text-green-600' },
    { icon: SiAwslambda, name: 'AWS Lambda', color: 'text-orange-500' },
    { icon: SiAmazonrds, name: 'Amazon RDS', color: 'text-blue-600' },
    { icon: VscAzure, name: 'Azure', color: 'text-blue-500' },
    { icon: SiGooglecloud, name: 'GCP', color: 'text-blue-400' },
    { icon: FaDocker, name: 'Docker', color: 'text-blue-400' },
    { icon: SiKubernetes, name: 'Kubernetes', color: 'text-blue-500' },
    { icon: SiLinux, name: 'Linux', color: 'text-yellow-500' },
    { icon: SiGnubash, name: 'Bash', color: 'text-gray-400' },
    { icon: SiGithub, name: 'GitHub Actions', color: 'text-gray-400' },
    { icon: SiAnsible, name: 'Ansible', color: 'text-red-600' },
    { icon: SiTerraform, name: 'Terraform', color: 'text-purple-500' }
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
                className="skill-icon group glass-card p-3 sm:p-4 rounded-xl text-center hover:glow-blue transition-all duration-300 cursor-pointer"
                style={{
                  opacity: 0,
                  transform: 'translateY(20px) scale(0.8)'
                }}
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