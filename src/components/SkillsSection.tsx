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
  FaCode,
  FaHardHat,
  FaMeteor,
  FaEthereum
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
  SiWebpack, 
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
  SiWordpress,
  SiGitlab,
  SiMariadb,
  SiOracle,
  SiApachekafka,
  SiRabbitmq,
  SiElasticsearch,
  SiApachesolr,
  SiApachecouchdb,
  SiAmazondynamodb,
  SiApachecassandra,
  SiApachehadoop,
  SiApachespark,
  SiNeo4J,
  SiAmazonec2,
  SiAwslambda,
  SiAmazonecs,
  SiAmazons3,
  SiAmazonrds,
  SiAmazonredshift,
  SiBitbucket,
  SiJenkins,
  SiApachetomcat,
  SiCloudflare,
  SiCircleci,
  SiPrometheus,
  SiGrafana,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiScala,
  SiJira,
  SiSlack,
  SiTrello,
  SiSketch,
  SiSolana,
  SiEthereum,
  SiPolygon,
  SiOpenzeppelin,
  SiDatadog,
  SiOpencv,
  SiRemix,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiBlender,
  SiTableau,
  SiCockroachlabs,
  SiApacheflink,
  SiTravisci,
  SiSolid,
  SiGooglecloud,
  SiApachehbase,
  SiAmazonelasticache,
  SiLinuxcontainers,
  SiGnubash,
  SiLangchain,
  SiWeb3Dotjs,
  SiEthers,
  SiN8N,
  SiApachegroovy,
  SiFramer,
  SiWebgl,
  SiShadcnui,
  SiSocketdotio,
  SiExpo,
  SiSupabase,
  SiRubyonrails,
  SiAssemblyscript,
  SiJulia,
  SiWebassembly,
  SiVmware,
  SiNginx,
  SiHuggingface,
  SiTerraform,
  SiAnsible,
  SiFastify,
  SiPrisma,
  SiNeovim,
  SiCypress,
  SiJest,
  SiMocha,
  SiChai,
  SiSelenium,
  SiJupyter,
  SiYaml,
  SiMercurial,
  SiGitea,
  SiPhoenixframework,
  SiSailsdotjs,
  SiMeteor,
  SiVim,
  SiGnuemacs,
  SiCaddy,
  SiAlibabacloud,
  SiHtmx,
  SiApachemaven,
  SiStencil
} from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [

    // Programming Languages
  { icon: SiAssemblyscript, name: 'Assembly', color: 'text-gray-500' },
  { icon: SiC, name: 'C', color: 'text-blue-600' },
  { icon: SiCplusplus, name: 'C++', color: 'text-blue-500' },
  { icon: SiSharp, name: 'C#', color: 'text-purple-600' },
  { icon: SiDart, name: 'Dart', color: 'text-blue-400' },
  { icon: SiGo, name: 'Golang', color: 'text-cyan-500' },
  { icon: SiApachegroovy, name: 'Apache Groovy', color: 'text-blue-600' },
  { icon: FaJava, name: 'Java', color: 'text-orange-600' },
  { icon: FaJs, name: 'JavaScript', color: 'text-yellow-400' },
  { icon: SiJulia, name: 'Julia', color: 'text-green-600' },
  { icon: SiKotlin, name: 'Kotlin', color: 'text-orange-500' },
  { icon: FaCode, name: 'Objective-C', color: 'text-blue-500' },
  { icon: FaPhp, name: 'PHP', color: 'text-indigo-500' },
  { icon: FaPython, name: 'Python', color: 'text-yellow-500' },
  { icon: SiR, name: 'R', color: 'text-blue-600' },
  { icon: SiRuby, name: 'Ruby', color: 'text-red-500' },
  { icon: FaRust, name: 'Rust', color: 'text-orange-700' },
  { icon: SiScala, name: 'Scala', color: 'text-red-600' },
  { icon: SiSolidity, name: 'Solidity', color: 'text-gray-400' },
  { icon: SiSwift, name: 'Swift', color: 'text-orange-500' },
  { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-600' },
  { icon: SiDotnet, name: 'Visual Basic', color: 'text-purple-500' },
  { icon: FaCode, name: 'Vyper', color: 'text-blue-500' },
  { icon: SiWebassembly, name: 'WebAssembly', color: 'text-purple-600' },
  { icon: SiZig, name: 'Zig', color: 'text-orange-600' },
  { icon: SiVim, name: 'Vim', color: 'text-green-500' },
  { icon: SiGnuemacs, name: 'GNU Emacs', color: 'text-purple-500' },
  { icon: FaCode, name: 'NLTK', color: 'text-blue-500' },
  { icon: FaCode, name: 'Theano', color: 'text-orange-500' },
  { icon: FaCode, name: 'PyBrain', color: 'text-blue-500' },
  { icon: FaCode, name: 'Deeplearning4j', color: 'text-red-500' },
  { icon: FaCode, name: 'LightGBM', color: 'text-orange-500' },
  { icon: FaCode, name: 'Apache MXNet', color: 'text-orange-600' },

  // Frontend & Markup
    { icon: FaHtml5, name: 'HTML5', color: 'text-orange-500' },
    { icon: SiCss3, name: 'CSS3', color: 'text-blue-500' },
    { icon: SiBootstrap, name: 'Bootstrap', color: 'text-purple-600' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-cyan-400' },
    { icon: SiShadcnui, name: 'shadcn/ui', color: 'text-gray-400' },
    { icon: SiYaml, name: 'YAML', color: 'text-gray-500' },

  // Package Managers
    { icon: SiNpm, name: 'npm', color: 'text-red-500' },
    { icon: SiYarn, name: 'Yarn', color: 'text-blue-400' },
    { icon: SiPnpm, name: 'pnpm', color: 'text-orange-500' },
    { icon: SiBun, name: 'Bun', color: 'text-gray-300' },
    { icon: SiComposer, name: 'Composer', color: 'text-orange-600' },
    { icon: SiDeno, name: 'Deno', color: 'text-gray-400' },
    { icon: SiApachemaven, name: 'Apache Maven', color: 'text-orange-600' },

  // Frontend Frameworks & Libraries
    { icon: FaAngular, name: 'Angular', color: 'text-red-600' },
    { icon: FaAngular, name: 'AngularJS', color: 'text-red-500' },
    { icon: SiAlpinedotjs, name: 'Alpine.js', color: 'text-teal-500' },
    { icon: SiAstro, name: 'Astro', color: 'text-orange-500' },
    { icon: SiBackbonedotjs, name: 'Backbone.js', color: 'text-blue-500' },
    { icon: SiEmberdotjs, name: 'Ember.js', color: 'text-orange-600' },
    { icon: SiGatsby, name: 'Gatsby', color: 'text-purple-600' },
    { icon: SiHtmx, name: 'HTMX', color: 'text-blue-600' },
    { icon: SiJquery, name: 'jQuery', color: 'text-blue-600' },
    { icon: SiJquery, name: 'jQuery Mobile', color: 'text-blue-500' },
    { icon: FaCode, name: 'Knockout.js', color: 'text-red-500' },
    { icon: SiLit, name: 'Lit', color: 'text-blue-400' },
    { icon: FaCode, name: 'Lynx', color: 'text-teal-500' },
    { icon: FaCode, name: 'Mithril.js', color: 'text-blue-600' },
    { icon: SiNextdotjs, name: 'Next.js', color: 'text-white' },
    { icon: SiNuxtdotjs, name: 'Nuxt', color: 'text-green-400' },
    { icon: SiPreact, name: 'Preact', color: 'text-purple-500' },
    { icon: SiQwik, name: 'Qwik', color: 'text-blue-500' },
    { icon: FaReact, name: 'React', color: 'text-cyan-300' },
    { icon: SiRemix, name: 'Remix', color: 'text-blue-400' },
    { icon: SiRedux, name: 'Redux', color: 'text-purple-600' },
    { icon: SiSolid, name: 'SolidJS', color: 'text-blue-500' },
    { icon: SiStencil, name: 'Stencil.js', color: 'text-purple-500' },
    { icon: SiSvelte, name: 'Svelte', color: 'text-orange-600' },
    { icon: SiSvelte, name: 'SvelteKit', color: 'text-orange-600' },
    { icon: FaCode, name: 'RippleJS', color: 'text-blue-400' },
    { icon: SiVite, name: 'Vite', color: 'text-purple-500' },
    { icon: SiWebpack, name: 'Webpack', color: 'text-blue-500' },
    { icon: SiMeteor, name: 'Meteor.js', color: 'text-orange-600' },
    { icon: SiPhoenixframework, name: 'Phoenix', color: 'text-red-500' },
    { icon: SiSailsdotjs, name: 'Sails.js', color: 'text-blue-500' },

  // Backend Frameworks
    { icon: SiDotnet, name: '.NET', color: 'text-purple-600' },
    { icon: SiDotnet, name: '.NET Core', color: 'text-purple-500' },
    { icon: SiDotnet, name: '.NET Framework', color: 'text-purple-600' },
    { icon: SiDotnet, name: 'ASP.NET', color: 'text-purple-600' },
    { icon: SiDotnet, name: 'ASP.NET Core', color: 'text-purple-500' },
    { icon: SiCakephp, name: 'CakePHP', color: 'text-red-500' },
    { icon: SiDjango, name: 'Django', color: 'text-green-600' },
    { icon: SiExpress, name: 'Express', color: 'text-gray-400' },
    { icon: SiFastapi, name: 'FastAPI', color: 'text-teal-500' },
    { icon: SiFlask, name: 'Flask', color: 'text-gray-300' },
    { icon: SiGin, name: 'Gin', color: 'text-cyan-400' },
    { icon: SiKtor, name: 'Ktor', color: 'text-orange-500' },
    { icon: SiLaravel, name: 'Laravel', color: 'text-red-500' },
    { icon: SiRubyonrails, name: 'Ruby on Rails', color: 'text-red-500' },
    { icon: SiNestjs, name: 'NestJS', color: 'text-red-500' },
    { icon: SiNodedotjs, name: 'Node.js', color: 'text-green-500' },
    { icon: FaCode, name: 'Revel', color: 'text-teal-500' },
    { icon: SiRocket, name: 'Rocket', color: 'text-orange-600' },
    { icon: SiSpring, name: 'Spring', color: 'text-green-500' },
    { icon: SiSpringboot, name: 'Spring Boot', color: 'text-green-400' },
    { icon: SiSymfony, name: 'Symfony', color: 'text-gray-400' },
    { icon: SiFastify, name: 'Fastify', color: 'text-green-500' },

  // Mobile Development
    { icon: SiDotnet, name: '.NET MAUI', color: 'text-purple-400' },
    { icon: SiExpo, name: 'Expo', color: 'text-blue-500' },
    { icon: SiFlutter, name: 'Flutter', color: 'text-blue-400' },
    { icon: SiIonic, name: 'Ionic', color: 'text-blue-500' },
    { icon: SiJetpackcompose, name: 'Jetpack Compose', color: 'text-blue-600' },
    { icon: SiKotlin, name: 'Kotlin Multiplatform', color: 'text-orange-600' },
    { icon: FaReact, name: 'React Native', color: 'text-cyan-300' },
    { icon: FaCode, name: 'Xamarin', color: 'text-blue-600' },

  // Desktop Development
    { icon: SiElectron, name: 'Electron', color: 'text-teal-400' },
    { icon: SiQt, name: 'PyQt', color: 'text-green-500' },
    { icon: SiQt, name: 'Qt', color: 'text-green-600' },
    { icon: SiTauri, name: 'Tauri', color: 'text-orange-500' },
    { icon: SiVmware, name: 'VMware', color: 'text-blue-400' },

  // APIs & Protocols
    { icon: SiGraphql, name: 'GraphQL', color: 'text-pink-500' },
    { icon: FaCode, name: 'gRPC', color: 'text-blue-500' },
    { icon: SiJsonwebtokens, name: 'REST API', color: 'text-green-400' },
    { icon: SiJsonwebtokens, name: 'RESTful API', color: 'text-green-400' },
    { icon: FaCode, name: 'SOAP API', color: 'text-green-500' },
    { icon: FaCode, name: 'WebSockets', color: 'text-blue-400' },
    { icon: SiSocketdotio, name: 'Socket.IO', color: 'text-gray-500' },
    { icon: SiPostman, name: 'Postman', color: 'text-orange-500' },

  // Animation & 3D Libraries
    { icon: FaCode, name: 'Anime.js', color: 'text-pink-500' },
    { icon: SiFramer, name: 'Framer Motion', color: 'text-purple-500' },
    { icon: FaCode, name: 'GSAP', color: 'text-green-500' },
    { icon: FaCode, name: 'Lenis', color: 'text-orange-500' },
    { icon: FaCode, name: 'LottieFiles', color: 'text-yellow-500' },
    { icon: FaCode, name: 'Spline', color: 'text-blue-500' },
    { icon: SiThreedotjs, name: 'Three.js', color: 'text-white' },
    { icon: SiWebgl, name: 'WebGL', color: 'text-cyan-500' },

  // Databases - SQL
    { icon: SiCockroachlabs, name: 'CockroachDB', color: 'text-blue-600' },
    { icon: SiMariadb, name: 'MariaDB', color: 'text-blue-800' },
    { icon: FaCode, name: 'Microsoft SQL', color: 'text-red-600' },
    { icon: SiMysql, name: 'MySQL', color: 'text-blue-600' },
    { icon: SiOracle, name: 'Oracle Database', color: 'text-red-500' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-500' },
    { icon: SiSqlite, name: 'SQLite', color: 'text-blue-300' },
    { icon: SiSupabase, name: 'Supabase', color: 'text-green-500' },

  // Databases - NoSQL
    { icon: SiAmazondynamodb, name: 'Amazon DynamoDB', color: 'text-orange-500' },
    { icon: SiApachecassandra, name: 'Apache Cassandra', color: 'text-cyan-400' },
    { icon: SiApachecouchdb, name: 'Apache CouchDB', color: 'text-red-500' },
    { icon: FaCode, name: 'Azure Cosmos DB', color: 'text-purple-500' },
    { icon: SiFirebase, name: 'Firebase', color: 'text-yellow-500' },
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-500' },
    { icon: SiNeo4J, name: 'Neo4j', color: 'text-blue-500' },
    { icon: FaCode, name: 'OrientDB', color: 'text-orange-500' },
    { icon: SiRedis, name: 'Redis', color: 'text-red-500' },
    { icon: FaCode, name: 'RethinkDB', color: 'text-blue-400' },

  // Databases - Specialized
    { icon: FaCode, name: 'Amazon Neptune', color: 'text-blue-400' },
    { icon: FaCode, name: 'Amazon Bedrock', color: 'text-orange-400' },
    { icon: SiAmazonrds, name: 'Amazon RDS', color: 'text-blue-600' },
    { icon: SiAmazonredshift, name: 'Amazon Redshift', color: 'text-red-600' },
    { icon: FaCode, name: 'TimescaleDB', color: 'text-orange-500' },
    { icon: FaCode, name: 'Neon', color: 'text-cyan-500' },

  // Caching & In-Memory
    { icon: SiAmazonelasticache, name: 'Amazon ElastiCache', color: 'text-red-500' },
    { icon: FaCode, name: 'Memcached', color: 'text-green-400' },

  // Message Queues & Streaming
    { icon: SiApachekafka, name: 'Apache Kafka', color: 'text-gray-700' },
    { icon: SiRabbitmq, name: 'RabbitMQ', color: 'text-orange-600' },

  // Search & Analytics
    { icon: SiElasticsearch, name: 'Elasticsearch', color: 'text-yellow-500' },
    { icon: SiApachesolr, name: 'Apache Solr', color: 'text-red-600' },

  // Big Data & Processing
    { icon: SiApacheflink, name: 'Apache Flink', color: 'text-blue-500' },
    { icon: SiApachehadoop, name: 'Apache Hadoop', color: 'text-yellow-600' },
    { icon: SiApachehbase, name: 'Apache HBase', color: 'text-blue-600' },
    { icon: SiApachespark, name: 'Apache Spark', color: 'text-orange-500' },

  // Business Intelligence & Visualization
    { icon: FaCode, name: 'Microsoft Excel', color: 'text-green-600' },
    { icon: FaCode, name: 'Power BI', color: 'text-yellow-600' },
    { icon: SiTableau, name: 'Tableau', color: 'text-blue-500' },

  // Cloud Platforms
    { icon: FaAws, name: 'Amazon Web Services', color: 'text-orange-400' },
    { icon: SiGooglecloud, name: 'Google Cloud', color: 'text-blue-400' },
    { icon: FaMicrosoft, name: 'Microsoft Azure', color: 'text-blue-500' },
    { icon: SiAlibabacloud, name: 'Alibaba Cloud', color: 'text-orange-500' },

  // AWS Services
    { icon: FaCode, name: 'Amazon CloudFront', color: 'text-orange-400' },
    { icon: SiAmazonec2, name: 'Amazon EC2', color: 'text-orange-400' },
    { icon: SiAmazonecs, name: 'Amazon ECS', color: 'text-orange-400' },
    { icon: SiAwslambda, name: 'Amazon Lambda', color: 'text-orange-500' },
    { icon: SiAmazons3, name: 'Amazon S3', color: 'text-orange-500' },
    { icon: FaCode, name: 'Amazon SageMaker', color: 'text-green-500' },
    { icon: FaCode, name: 'AWS CodeCommit', color: 'text-orange-500' },

  // Containers & Orchestration
    { icon: FaDocker, name: 'Docker', color: 'text-blue-400' },
    { icon: SiKubernetes, name: 'Kubernetes', color: 'text-blue-500' },
    { icon: SiLinuxcontainers, name: 'Linux Containers', color: 'text-yellow-500' },
    { icon: SiTerraform, name: 'Terraform', color: 'text-purple-500' },

  // Version Control
    { icon: SiBitbucket, name: 'Bitbucket', color: 'text-blue-600' },
    { icon: FaGitAlt, name: 'Git', color: 'text-orange-500' },
    { icon: SiGithub, name: 'GitHub', color: 'text-gray-400' },
    { icon: SiGitlab, name: 'GitLab', color: 'text-orange-500' },
    { icon: FaCode, name: 'Perforce Helix Core', color: 'text-blue-500' },
    { icon: SiMercurial, name: 'Mercurial', color: 'text-orange-500' },
    { icon: SiGitea, name: 'Gitea', color: 'text-orange-600' },

  // CI/CD
    { icon: SiCircleci, name: 'CircleCI', color: 'text-green-500' },
    { icon: SiGitlab, name: 'GitLab CI/CD', color: 'text-orange-500' },
    { icon: SiJenkins, name: 'Jenkins', color: 'text-blue-500' },
    { icon: SiTravisci, name: 'Travis CI', color: 'text-yellow-500' },
    { icon: FaCode, name: 'TeamCity', color: 'text-orange-600' },

  // Infrastructure & Networking
    { icon: SiApachetomcat, name: 'Apache Tomcat', color: 'text-yellow-600' },
    { icon: SiCloudflare, name: 'Cloudflare', color: 'text-orange-500' },
    { icon: SiNginx, name: 'nginx', color: 'text-green-600' },
    { icon: SiCaddy, name: 'Caddy', color: 'text-blue-400' },

  // Shell & Scripting
    { icon: SiGnubash, name: 'Bash', color: 'text-gray-400' },
    { icon: SiNeovim, name: 'Neovim', color: 'text-green-500' },

  // Monitoring & Observability
    { icon: SiDatadog, name: 'Datadog', color: 'text-purple-600' },
    { icon: SiGrafana, name: 'Grafana', color: 'text-orange-600' },
    { icon: SiPrometheus, name: 'Prometheus', color: 'text-orange-500' },

  // Machine Learning & AI
    { icon: SiKeras, name: 'Keras', color: 'text-red-600' },
    { icon: SiLangchain, name: 'LangChain', color: 'text-green-400' },
    { icon: FaCode, name: 'LlamaIndex', color: 'text-orange-500' },
    { icon: FaCode, name: 'Matplotlib', color: 'text-blue-500' },
    { icon: FaCode, name: 'MCP Server', color: 'text-blue-500' },
    { icon: SiNumpy, name: 'NumPy', color: 'text-blue-600' },
    { icon: SiOpencv, name: 'OpenCV', color: 'text-blue-600' },
    { icon: SiPandas, name: 'pandas', color: 'text-blue-700' },
    { icon: SiPytorch, name: 'PyTorch', color: 'text-red-500' },
    { icon: SiScikitlearn, name: 'Scikit-learn', color: 'text-orange-500' },
    { icon: FaCode, name: 'seaborn', color: 'text-blue-400' },
    { icon: SiTensorflow, name: 'TensorFlow', color: 'text-orange-500' },
    { icon: FaCode, name: 'dplyr', color: 'text-blue-400' },
    { icon: SiHuggingface, name: 'Hugging Face', color: 'text-yellow-500' },

  // Blockchain & Web3
    { icon: FaCode, name: 'Brownie', color: 'text-orange-600' },
    { icon: FaCode, name: 'Echidna', color: 'text-green-500' },
    { icon: SiEthers, name: 'Ethers.js', color: 'text-blue-500' },
    { icon: SiEthereum, name: 'Ethereum', color: 'text-gray-400' },
    { icon: FaCode, name: 'Everscale', color: 'text-blue-400' },
    { icon: FaCode, name: 'Foundry', color: 'text-gray-500' },
    { icon: FaCode, name: 'Ganache', color: 'text-orange-600' },
    { icon: FaCode, name: 'GOSH', color: 'text-green-500' },
    { icon: FaHardHat, name: 'Hardhat', color: 'text-yellow-500' },
    { icon: FaCode, name: 'Manticore', color: 'text-blue-600' },
    { icon: FaCode, name: 'Moralis', color: 'text-blue-400' },
    { icon: FaCode, name: 'MythX', color: 'text-purple-500' },
    { icon: SiOpenzeppelin, name: 'OpenZeppelin', color: 'text-blue-500' },
    { icon: SiPolygon, name: 'Polygon', color: 'text-purple-600' },
    { icon: FaCode, name: 'Slither', color: 'text-red-500' },
    { icon: SiSolana, name: 'Solana', color: 'text-purple-400' },
    { icon: FaCode, name: 'TON', color: 'text-blue-500' },
    { icon: FaCode, name: 'Truffle Suite', color: 'text-orange-600' },
    { icon: FaCode, name: 'Venom', color: 'text-green-400' },
    { icon: SiWeb3Dotjs, name: 'Web3.js', color: 'text-orange-500' },
    { icon: FaCode, name: 'MetaMask', color: 'text-orange-400' },
    { icon: FaCode, name: 'Geth', color: 'text-blue-600' },
    { icon: FaCode, name: 'Soileum', color: 'text-purple-500' },

  // Design & Creative Tools
    { icon: SiAdobeillustrator, name: 'Adobe Illustrator', color: 'text-orange-500' },
    { icon: SiAdobexd, name: 'Adobe XD', color: 'text-pink-500' },
    { icon: SiAdobephotoshop, name: 'Adobe Photoshop', color: 'text-blue-600' },
    { icon: SiBlender, name: 'Blender', color: 'text-orange-600' },
    { icon: SiCanva, name: 'Canva', color: 'text-cyan-400' },
    { icon: FaFigma, name: 'Figma', color: 'text-purple-400' },

  // Project Management & Communication
    { icon: SiJira, name: 'Jira', color: 'text-blue-600' },
    { icon: SiTrello, name: 'Trello', color: 'text-blue-500' },

  // CMS & Other Tools
    { icon: SiN8N, name: 'n8n', color: 'text-red-500' },
    { icon: SiWordpress, name: 'WordPress', color: 'text-blue-600' },
    { icon: SiAnsible, name: 'Ansible', color: 'text-red-600' },
    { icon: SiPrisma, name: 'Prisma', color: 'text-teal-500' }
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