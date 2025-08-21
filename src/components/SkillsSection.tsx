import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaHtml5, 
  FaJs, 
  FaReact, 
  FaAngular, 
  FaVuejs, 
  FaNodeJs, 
  FaPython, 
  FaJava, 
  FaPhp, 
  FaGitAlt, 
  FaDocker, 
  FaAws, 
  FaMicrosoft,
  FaGoogle,
  FaFigma,
  FaRust,
  FaCode
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiSvelte, 
  SiFlutter, 
  SiExpress, 
  SiDjango, 
  SiFlask, 
  SiDotnet, 
  SiSpring, 
  SiLaravel, 
  SiKotlin, 
  SiDart, 
  SiGo, 
  SiRuby, 
  SiSqlite, 
  SiMongodb, 
  SiFirebase, 
  SiRedis, 
  SiMysql, 
  SiPostgresql, 
  SiKubernetes, 
  SiGraphql, 
  SiPostman, 
  SiVite, 
  SiAdobexd, 
  SiThreedotjs, 
  SiRedux, 
  SiJsonwebtokens, 
  SiC, 
  SiCplusplus, 
  SiSharp,
  SiGin,
  SiRocket,
  SiCss3,
  SiR,
  SiSolidity,
  SiSwift,
  SiZig,
  SiNpm,
  SiYarn,
  SiPnpm,
  SiBun,
  SiComposer,
  SiDeno,
  SiAlpinedotjs,
  SiAstro,
  SiBackbonedotjs,
  SiBootstrap,
  SiCakephp,
  SiElectron,
  SiEmberdotjs,
  SiFastapi,
  SiGatsby,
  SiIonic,
  SiJetpackcompose,
  SiJquery,
  SiKtor,
  SiLit,
  SiNestjs,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPreact,
  SiQt,
  SiQwik,
  SiSpringboot,
  SiSymfony,
  SiTailwindcss,
  SiTauri,
  SiCanva,
  SiGithub,
  SiWordpress
} from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [

    { icon: SiC, name: 'C', color: 'text-blue-600' },
    { icon: SiCplusplus, name: 'C++', color: 'text-blue-500' },
    { icon: SiSharp, name: 'C#', color: 'text-purple-600' },
    { icon: SiCss3, name: 'CSS3', color: 'text-blue-500' },
    { icon: SiDart, name: 'DART', color: 'text-blue-400' },
    { icon: SiGo, name: 'GO', color: 'text-cyan-500' },
    { icon: FaCode, name: 'GROOVY', color: 'text-blue-600' },
    { icon: FaHtml5, name: 'HTML5', color: 'text-orange-500' },
    { icon: FaJava, name: 'JAVA', color: 'text-orange-600' },
    { icon: FaJs, name: 'JAVASCRIPT', color: 'text-yellow-400' },
    

    { icon: SiKotlin, name: 'KOTLIN', color: 'text-orange-500' },
    { icon: FaCode, name: 'OBJECTIVE-C', color: 'text-blue-500' },
    { icon: FaPhp, name: 'PHP', color: 'text-indigo-500' },
    { icon: FaPython, name: 'PYTHON', color: 'text-yellow-500' },
    { icon: SiR, name: 'R', color: 'text-blue-600' },
    { icon: SiRuby, name: 'RUBY', color: 'text-red-500' },
    { icon: FaRust, name: 'RUST', color: 'text-orange-700' },
    { icon: SiSolidity, name: 'SOLIDITY', color: 'text-gray-400' },
    { icon: SiSwift, name: 'SWIFT', color: 'text-orange-500' },
    

    { icon: SiTypescript, name: 'TYPESCRIPT', color: 'text-blue-600' },
    { icon: SiDotnet, name: 'VB.NET', color: 'text-purple-500' },
    { icon: SiZig, name: 'ZIG', color: 'text-orange-600' },
    { icon: SiNpm, name: 'NPM', color: 'text-red-500' },
    { icon: SiYarn, name: 'YARN', color: 'text-blue-400' },
    { icon: SiPnpm, name: 'PNPM', color: 'text-orange-500' },
    { icon: SiBun, name: 'BUN', color: 'text-gray-300' },
    { icon: SiComposer, name: 'COMPOSER', color: 'text-orange-600' },
    { icon: SiDeno, name: 'DENO', color: 'text-gray-400' },
    

    { icon: SiDotnet, name: '.NET', color: 'text-purple-600' },
    { icon: SiDotnet, name: '.NET CORE', color: 'text-purple-500' },
    { icon: SiDotnet, name: '.NET FRAMEWORK', color: 'text-purple-600' },
    { icon: SiDotnet, name: '.NET MAUI', color: 'text-purple-400' },
    { icon: SiAlpinedotjs, name: 'ALPINE.JS', color: 'text-teal-500' },
    { icon: FaAngular, name: 'ANGULAR', color: 'text-red-600' },
    { icon: FaAngular, name: 'ANGULARJS', color: 'text-red-500' },
    

    { icon: SiDotnet, name: 'ASP.NET', color: 'text-purple-600' },
    { icon: SiDotnet, name: 'ASP.NET CORE', color: 'text-purple-500' },
    { icon: SiAstro, name: 'ASTRO', color: 'text-orange-500' },
    { icon: SiBackbonedotjs, name: 'BACKBONE.JS', color: 'text-blue-500' },
    { icon: SiBootstrap, name: 'BOOTSTRAP', color: 'text-purple-600' },
    { icon: SiCakephp, name: 'CAKEPHP', color: 'text-red-500' },
    { icon: SiDjango, name: 'DJANGO', color: 'text-green-600' },
    

    { icon: SiElectron, name: 'ELECTRON', color: 'text-teal-400' },
    { icon: SiEmberdotjs, name: 'EMBER.JS', color: 'text-orange-600' },
    { icon: SiExpress, name: 'EXPRESS.JS', color: 'text-gray-400' },
    { icon: SiFastapi, name: 'FASTAPI', color: 'text-teal-500' },
    { icon: SiFlask, name: 'FLASK', color: 'text-gray-300' },
    { icon: SiFlutter, name: 'FLUTTER', color: 'text-blue-400' },
    { icon: FaCode, name: 'GANACHE', color: 'text-orange-600' },
    

    { icon: SiGatsby, name: 'GATSBY', color: 'text-purple-600' },
    { icon: SiGin, name: 'GIN', color: 'text-cyan-400' },
    { icon: FaCode, name: 'HARDHAT', color: 'text-yellow-500' },
    { icon: SiGraphql, name: 'GRAPHQL', color: 'text-pink-500' },
    { icon: SiIonic, name: 'IONIC', color: 'text-blue-500' },
    { icon: SiJetpackcompose, name: 'JETPACK COMPOSE', color: 'text-blue-600' },
    { icon: SiJquery, name: 'JQUERY', color: 'text-blue-600' },
    

    { icon: SiJquery, name: 'JQUERY MOBILE', color: 'text-blue-500' },
    { icon: SiKtor, name: 'KTOR', color: 'text-orange-500' },
    { icon: SiKotlin, name: 'KOTLIN MULTIPLATFORM', color: 'text-orange-600' },
    { icon: SiLaravel, name: 'LARAVEL', color: 'text-red-500' },
    { icon: SiLit, name: 'LIT', color: 'text-blue-400' },
    { icon: FaCode, name: 'LYNX', color: 'text-teal-500' },
    { icon: SiNestjs, name: 'NESTJS', color: 'text-red-500' },
    

    { icon: SiNextdotjs, name: 'NEXT.JS', color: 'text-white' },
    { icon: SiNodedotjs, name: 'NODE.JS', color: 'text-green-500' },
    { icon: SiNuxtdotjs, name: 'NUXT', color: 'text-green-400' },
    { icon: SiPreact, name: 'PREACT', color: 'text-purple-500' },
    { icon: SiPostman, name: 'POSTMAN', color: 'text-orange-500' },
    { icon: SiQt, name: 'PYQT', color: 'text-green-500' },
    { icon: SiQt, name: 'QT', color: 'text-green-600' },
    { icon: SiQwik, name: 'QWIK', color: 'text-blue-500' },
    { icon: FaReact, name: 'REACT NATIVE', color: 'text-cyan-300' },
    { icon: SiRedux, name: 'REDUX', color: 'text-purple-600' },
    { icon: SiJsonwebtokens, name: 'RESTFUL API', color: 'text-green-400' },
    { icon: SiRocket, name: 'REVEL', color: 'text-teal-500' },
    { icon: SiRocket, name: 'ROCKET', color: 'text-orange-600' },
    { icon: FaCode, name: 'SOLID.JS', color: 'text-blue-500' },
    { icon: SiSpring, name: 'SPRING', color: 'text-green-500' },
    { icon: SiSpringboot, name: 'SPRING BOOT', color: 'text-green-400' },
    { icon: SiSvelte, name: 'SVELTE', color: 'text-orange-500' },
    { icon: SiSvelte, name: 'SVELTEKIT', color: 'text-orange-600' },
    { icon: SiSymfony, name: 'SYMFONY', color: 'text-gray-400' },
    { icon: SiTailwindcss, name: 'TAILWIND CSS', color: 'text-cyan-400' },
    { icon: SiTauri, name: 'TAURI', color: 'text-orange-500' },
    { icon: SiThreedotjs, name: 'THREE.JS', color: 'text-white' },
    { icon: FaCode, name: 'TRUFFLE', color: 'text-orange-600' },
    { icon: SiVite, name: 'VITE', color: 'text-purple-500' },
    { icon: SiFirebase, name: 'FIREBASE', color: 'text-yellow-500' },
    { icon: SiMongodb, name: 'MONGODB', color: 'text-green-500' },
    { icon: SiMysql, name: 'MYSQL', color: 'text-blue-600' },
    { icon: SiPostgresql, name: 'POSTGRESQL', color: 'text-blue-500' },
    { icon: SiRedis, name: 'REDIS', color: 'text-red-500' },
    { icon: SiSqlite, name: 'SQLITE', color: 'text-blue-300' },
    { icon: SiAdobexd, name: 'ADOBE XD', color: 'text-pink-500' },
    { icon: FaAws, name: 'AWS', color: 'text-orange-400' },
    { icon: SiCanva, name: 'CANVA', color: 'text-cyan-400' },
    { icon: FaDocker, name: 'DOCKER', color: 'text-blue-400' },
    { icon: FaFigma, name: 'FIGMA', color: 'text-purple-400' },
    { icon: FaGitAlt, name: 'GIT', color: 'text-orange-500' },
    { icon: SiGithub, name: 'GITHUB', color: 'text-gray-400' },
    { icon: FaGoogle, name: 'GOOGLE CLOUD', color: 'text-blue-400' },
    { icon: SiKubernetes, name: 'KUBERNETES', color: 'text-blue-500' },
    { icon: FaMicrosoft, name: 'MICROSOFT AZURE', color: 'text-blue-500' },
    { icon: SiWordpress, name: 'WORDPRESS', color: 'text-blue-600' }
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
            A comprehensive overview of the technologies, frameworks, and tools I work with to build modern, scalable applications.
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