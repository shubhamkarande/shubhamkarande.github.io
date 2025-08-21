
import Work1 from '@/assets/HireSense.png';
import Work2 from '@/assets/Bloggen.png';
import Work3 from '@/assets/MindMerge.png';
import Work4 from '@/assets/Learnix.png';
import Work5 from '@/assets/DevTasker.png';
import Work6 from '@/assets/Zer0Drop.png';
import Work7 from '@/assets/Roofly.png';
import Work8 from '@/assets/BitPad.png';
import Work9 from '@/assets/Healio.png';
import Work10 from '@/assets/NomadHire.png';
import Work11 from '@/assets/MeetNexa.png';
import Work12 from '@/assets/StaySphere.png';
import Work13 from '@/assets/AthleniQ.png';
import Work14 from '@/assets/DailyXP.png';
import Work15 from '@/assets/Eventory.png';
import Work16 from '@/assets/Chippin.png';
import Work17 from '@/assets/SoulSync.png';
import Work18 from '@/assets/VocaPop.png';
import Work19 from '@/assets/PantryGo.png';
import Work20 from '@/assets/ChatMate.png';
import Work21 from '@/assets/StudyBuddy.png';
import Work22 from '@/assets/FlowDesk.png';
import Work23 from '@/assets/GoBus.png';
import Work24 from '@/assets/Chatterly.png';
import Work25 from '@/assets/Other1.png';
import Work26 from '@/assets/Other2.png';
import Work27 from '@/assets/Other3.png';
import Work28 from '@/assets/Other4.png';
import Work29 from '@/assets/Other5.png';
import Work30 from '@/assets/Other6.png';

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: 'HireSense – Smart Remote Job Finder',
    category: 'Web',
    description: 'HireSense – Smart Remote Job Finder is an AI-powered platform for discovering remote jobs. Built with React, Tailwind, Redux, Node.js, and MongoDB. Uses OpenAI API for smart job suggestions, JWT auth, cron-based scraping, and serverless Express backend on AWS Lambda. Frontend runs on GCP Cloud Run with Framer Motion UI.',
    demoLink: 'https://github.com/shubhamkarande/HireSense',
    tech: ["React", "Tailwind", "Redux", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    image: Work2,
    title: 'Bloggen – AI-Powered Blog Writer',
    category: 'Web',
    description: 'Bloggen – AI-Powered Blog Writer auto-generates SEO-optimized blog posts using GPT-4. Built with Next.js, Tailwind, and Framer Motion for a sleek UI. Backend uses Flask on Azure, with PostgreSQL on GCP Cloud SQL. Frontend is deployed on Vercel. Features include AI content writing, SEO tools, and clean UX.',
    demoLink: 'https://github.com/shubhamkarande/Bloggen',
    tech: ["Next.js", "Tailwind", "Flask", "PostgreSQL"]
  },
  {
    id: 3,
    image: Work3,
    title: 'MindMerge – Synchronized Thinking, One Note at a Time',
    category: 'Web',
    description: 'MindMerge – Synchronized Thinking, One Note at a Time enables real-time collaborative note editing. Built with SvelteKit, Tailwind, and Vite. Backend runs Node.js with Socket.io on AWS Elastic Beanstalk, using Redis and PostgreSQL. Live sync lets users co-edit seamlessly. Frontend deployed on Netlify.',
    demoLink: 'https://github.com/shubhamkarande/MindMerge',
    tech: ["SvelteKit", "Tailwind", "Node.js", "Socket.io"]
  },
  {
    id: 4,
    image: Work4,
    title: 'Learnix – Stream. Learn. Grow.',
    category: 'Web',
    description: 'Learnix – Stream. Learn. Grow. is a video learning platform with courses, progress tracking, and quizzes. Built with Angular, Tailwind, and Vite. Backend uses Django REST on Azure App Service with MySQL. Videos hosted on Cloudinary or AWS S3. Stripe integration enables payments. Scalable, secure, and user-friendly.',
    demoLink: 'https://github.com/shubhamkarande/Learnix',
    tech: ["Angular", "Tailwind", "Django", "MySQL"]
  },
  {
    id: 5,
    image: Work5,
    title: 'DevTasker – Agile Board for Team Productivity',
    category: 'Web',
    description: 'DevTasker – Agile Board for Team Productivity is a Jira-style task manager with Kanban boards, user roles, and team invites. Built with React, Vite, Tailwind, Redux, and DnD Kit for smooth drag-and-drop. Backend is powered by ASP.NET Core on Azure with SQL Server. Designed for agile workflows and team collaboration.',
    demoLink: 'https://github.com/shubhamkarande/DevTasker',
    tech: ["React", "Tailwind", "ASP.NET", "SQL Server"]
  },
  {
    id: 6,
    image: Work6,
    title: 'Zer0Drop – Censorship-Free File Exchange',
    category: 'Web',
    description: 'Zer0Drop – Censorship-Free File Exchange is a decentralized file sharing app with Web3 wallet login and IPFS-based storage via Web3Storage. Built with Vue.js, Tailwind, and Vite. Backend uses Gin (Go) deployed on AWS Lambda. Enables censorship-resistant uploads and file minting, ensuring privacy, security, and permanence.',
    demoLink: 'https://github.com/shubhamkarande/Zer0Drop',
    tech: ["Vue.js", "Tailwind", "Go", "IPFS"]
  },
  {
    id: 7,
    image: Work7,
    title: 'Roofly – Explore Homes, From Anywhere',
    category: 'Web',
    description: 'Roofly – Explore Homes, From Anywhere is a real estate listing platform with search filters, maps, and image carousels. Built using Nuxt.js, Vite, and Tailwind for the frontend. Backend runs Laravel with a REST API on GCP App Engine and uses MySQL. Integrated with Leaflet or Google Maps API for property visualization.',
    demoLink: 'https://github.com/shubhamkarande/Roofly',
    tech: ["Nuxt.js", "Tailwind", "Laravel", "MySQL"]
  },
  {
    id: 8,
    image: Work8,
    title: 'BitPad – Fast, Collaborative Online Coding',
    category: 'Web',
    description: 'BitPad – Fast, Collaborative Online Coding is an online code playground to write, run, and share code snippets. Built with React, Vite, and Monaco Editor for an IDE-like experience. Backend uses Flask with Docker sandboxing on AWS Fargate. PostgreSQL stores user data and snippets. Lightweight, fast, and team-friendly.',
    demoLink: 'https://github.com/shubhamkarande/BitPad',
    tech: ["React", "Monaco Editor", "Flask", "Docker"]
  },
  {
    id: 9,
    image: Work9,
    title: 'Healio – A Smarter Way to Monitor Your Wellbeing',
    category: 'Web',
    description: 'Healio – A Smarter Way to Monitor Your Wellbeing is a personal health dashboard with BMI tracking, diet planning, and health goals. Built with Angular, Tailwind, and Chart.js. Backend uses Spring Boot on GCP Cloud Run, with PostgreSQL. An AI-powered FastAPI microservice provides wellness tips tailored to user data.',
    demoLink: 'https://github.com/shubhamkarande/Healio',
    tech: ["Angular", "Chart.js", "Spring Boot", "PostgreSQL"]
  },
  {
    id: 10,
    image: Work10,
    title: 'NomadHire – Freelancers Without Borders',
    category: 'Web',
    description: 'NomadHire – Freelancers Without Borders is a freelance marketplace with bidding, milestones, and real-time chat. Built using Svelte, Tailwind, and GSAP for rich UI animations. Backend is powered by Ruby on Rails on Azure App Service with PostgreSQL. Supports Razorpay and Stripe for secure global payments.',
    demoLink: 'https://github.com/shubhamkarande/NomadHire',
    tech: ["Svelte", "GSAP", "Ruby on Rails", "PostgreSQL"]
  },
  {
    id: 11,
    image: Work11,
    title: 'MeetNexa – Connect Visually, Anywhere',
    category: 'Web',
    description: 'MeetNexa – Connect Visually, Anywhere is a Google Meet clone with real-time video calls, chat, and screen sharing. Built with Next.js, Tailwind, and Zustand. Uses WebRTC and Socket.io for peer-to-peer connections. Backend runs on Node.js. Firebase stores meeting metadata, user auth, and messages.',
    demoLink: 'https://github.com/shubhamkarande/MeetNexa',
    tech: ["Next.js", "WebRTC", "Socket.io", "Firebase"]
  },
  {
    id: 12,
    image: Work12,
    title: 'StaySphere – Book Unique Stays Around the Globe',
    category: 'Web',
    description: 'StaySphere – Book Unique Stays Around the Globe is an Airbnb-style platform built with Astro and Tailwind CSS. Backend uses Laravel REST API on GCP App Engine with PostgreSQL. Features include listings, search with filters, Stripe payments, messaging, reviews, and image uploads via Cloudinary.',
    demoLink: 'https://github.com/shubhamkarande/StaySphere',
    tech: ["Astro", "Tailwind", "Laravel", "PostgreSQL"]
  },
  {
    id: 13,
    image: Work13,
    title: 'AthleniQ – AI Fitness Coach in Your Pocket',
    category: 'App',
    description: 'AthleniQ – AI Fitness Coach in Your Pocket is an AI-powered fitness app with real-time pose detection and workout generation. Built using Flutter for cross-platform support. Backend runs Flask and OpenCV on AWS Lambda. Firebase handles auth and data. Offers intelligent coaching, feedback, and personalized training.',
    demoLink: 'https://github.com/shubhamkarande/AthleniQ',
    tech: ["Flutter", "Flask", "OpenCV", "Firebase"]
  },
  {
    id: 14,
    image: Work14,
    title: 'DailyXP – Earn XP by Crushing Your Daily Goals',
    category: 'App',
    description: 'DailyXP – Earn XP by Crushing Your Daily Goals is a gamified habit tracker with daily goals, XP rewards, and streak tracking. Built with React Native, Tailwind CSS, and Redux Toolkit. Backend uses Express.js on GCP Cloud Functions with MongoDB Atlas. Boosts motivation with RPG-style progress and goal management.',
    demoLink: 'https://github.com/shubhamkarande/DailyXP',
    tech: ["React Native", "Redux", "Express.js", "MongoDB"]
  },
  {
    id: 15,
    image: Work15,
    title: 'Eventory – Discover Events, RSVP Instantly',
    category: 'App',
    description: 'Eventory – Discover Events, RSVP Instantly is a Kotlin-based app to find nearby events, RSVP via QR codes, and sync with your calendar. Built using Jetpack Compose for modern UI. Backend uses Spring Boot on Azure App Service with PostgreSQL. Delivers real-time updates, smart suggestions, and smooth RSVP flow.',
    demoLink: 'https://github.com/shubhamkarande/Eventory',
    tech: ["Kotlin", "Jetpack Compose", "Spring Boot", "PostgreSQL"]
  },
  {
    id: 16,
    image: Work16,
    title: 'Chippin – Share Bills. Stay Chill.',
    category: 'App',
    description: 'Chippin – Share Bills. Stay Chill. is a finance app that auto-splits bills with friends using OCR for receipts and Firebase for sync. Built with Flutter for cross-platform UI. Backend uses Django REST on GCP Cloud Run, with local SQLite storage synced via Firebase. Export receipts, track balances, and settle smartly.',
    demoLink: 'https://github.com/shubhamkarande/Chippin',
    tech: ["Flutter", "Django", "Firebase", "SQLite"]
  },
  {
    id: 17,
    image: Work17,
    title: 'SoulSync – Reflect. Heal. Evolve.',
    category: 'App',
    description: 'SoulSync – Reflect. Heal. Evolve. is a mental health journal app with mood tracking and AI-generated affirmations. Built as a native Android app using Java and XML UI. Backend powered by Spring Boot with optional AWS Lambda AI services. Uses MongoDB Atlas or Room DB for offline journaling with sync capabilities.',
    demoLink: 'https://github.com/shubhamkarande/SoulSync',
    tech: ["Java", "Spring Boot", "MongoDB", "Room DB"]
  },
  {
    id: 18,
    image: Work18,
    title: 'VocaPop – Pop a Card. Learn a Word. Get Fluent.',
    category: 'App',
    description: 'VocaPop – Pop a Card. Learn a Word. Get Fluent. is a language flashcard app using SRS (Spaced Repetition System), quizzes, and TTS for vocabulary mastery. Built with Flutter for a smooth cross-platform experience. Backend runs Laravel on Azure Functions with MySQL. Boosts retention through smart review scheduling.',
    demoLink: 'https://github.com/shubhamkarande/VocaPop',
    tech: ["Flutter", "Laravel", "MySQL", "TTS"]
  },
  {
    id: 19,
    image: Work19,
    title: 'PantryGo – Stock Your Kitchen in a Few Taps',
    category: 'App',
    description: 'PantryGo – Stock Your Kitchen in a Few Taps is a Kotlin-based grocery app with cart management, orders, and real-time delivery tracking. Backend uses ASP.NET Core on Azure App Service with PostgreSQL. Integrated with Razorpay for payments and Firebase Cloud Messaging for push notifications. Fast, simple, and secure.',
    demoLink: 'https://github.com/shubhamkarande/PantryGo',
    tech: ["Kotlin", "ASP.NET", "PostgreSQL", "Firebase"]
  },
  {
    id: 20,
    image: Work20,
    title: 'ChatMate – Your On-the-Go AI Companion',
    category: 'App',
    description: 'ChatMate – Your On-the-Go AI Companion is a cross-platform AI chatbot app built with React Native, Redux, and Tailwind-RN. Uses FastAPI or OpenAI API for chat, Firebase Auth & Firestore for user/session data. Voice powered by Expo Speech or react-native-voice. Optional Redis caching & Stripe for monetization. Deployed via Expo/EAS.',
    demoLink: 'https://github.com/shubhamkarande/ChatMate',
    tech: ["React Native", "OpenAI", "Firebase", "Redux"]
  },
  {
    id: 21,
    image: Work21,
    title: 'StudyBuddy – Focus. Plan. Succeed.',
    category: 'App',
    description: 'StudyBuddy is an AI-powered study planner app built with React Native (Expo), Tailwind-RN, and Redux Toolkit. Backend uses Node.js (Fastify/Express) via Google Cloud Functions. Firebase Firestore powers real-time AI study plans, focus mode, and streak tracking—helping students stay organized and succeed.',
    demoLink: 'https://github.com/shubhamkarande/StudyBuddy',
    tech: ["React Native", "Redux", "Node.js", "Firebase"]
  },
  {
    id: 22,
    image: Work22,
    title: 'FlowDesk – Create, Write, Plan. No Wi-Fi Needed.',
    category: 'App',
    description: 'FlowDesk – Create, Write, Plan. No Wi-Fi Needed. is an offline-first productivity app with to-dos, calendar, and encrypted notes. Built in Flutter and PWA-ready. Uses local SQLite with optional Firebase sync. Export via Google Drive API. Ideal for planning, writing, and organizing without constant internet access.',
    demoLink: 'https://github.com/shubhamkarande/FlowDesk',
    tech: ["Flutter", "SQLite", "Firebase", "PWA"]
  },
  {
    id: 23,
    image: Work23,
    title: 'GoBus – Your Commute, Simplified',
    category: 'App',
    description: 'GoBus – Your Commute, Simplified is a React Native bus booking app with route search, seat selection, QR e-tickets, and trip history. Built with Expo, Tailwind-RN, and React Navigation. Backend runs Django REST on GCP with PostgreSQL. Payments via Razorpay. Real-time sync with Firebase Auth and FCM.',
    demoLink: 'https://github.com/shubhamkarande/GoBus',
    tech: ["React Native", "Django", "PostgreSQL", "Razorpay"]
  },
  {
    id: 24,
    image: Work24,
    title: 'Chatterly – Real-Time Conversations Made Simple',
    category: 'App',
    description: 'Chatterly – Real-Time Conversations Made Simple is a React Native chat app with real-time messaging, group chats, media sharing, and push notifications. Built using Expo, Tailwind-RN, and Redux Toolkit. Backend runs Node.js with Socket.io on AWS. Firebase Firestore handles auth, sync, and chat storage.',
    demoLink: 'https://github.com/shubhamkarande/Chatterly',
    tech: ["React Native", "Socket.io", "Firebase", "Redux"]
  },
  {
    id: 25,
    image: Work25,
    title: 'Lung Diseases Prediction',
    category: 'Other',
    description: 'Uses machine learning to detect the likelihood of lung diseases such as pneumonia or lung cancer from medical data or X-rays.',
    demoLink: 'https://github.com/shubhamkarande/Lung-Diseases-Detection',
    tech: ["Python", "Machine Learning", "Medical AI", "X-Ray Analysis"]
  },
  {
    id: 26,
    image: Work26,
    title: 'VARK: Student Learning Style Prediction',
    category: 'Other',
    description: 'Predicts a students preferred learning style Visual, Audio, Read/Write, Kinesthetic based on questionnaire inputs using a basic ML model.',
    demoLink: 'https://github.com/shubhamkarande/VARK',
    tech: ["Python", "Machine Learning", "Education", "Data Analysis"]
  },
  {
    id: 27,
    image: Work27,
    title: 'Resale Marketplace',
    category: 'Other',
    description: 'A mini e-commerce platform for users to list and buy second-hand products with the help of cryptocurrency. It uses the Solidity and Metamask Wallet.',
    demoLink: 'https://github.com/shubhamkarande/Resale-Marketplace',
    tech: ["Solidity", "Blockchain", "Metamask", "Web3"]
  },
  {
    id: 28,
    image: Work28,
    title: 'House Price Prediction',
    category: 'Other',
    description: 'Predicts real estate prices based on features like location, area, and number of rooms using regression models.',
    demoLink: 'https://github.com/shubhamkarande/House-Price-Prediction',
    tech: ["Python", "Machine Learning", "Real Estate", "Regression"]
  },
  {
    id: 29,
    image: Work29,
    title: 'Movie Recommendation System',
    category: 'Other',
    description: 'Recommends movies to users based on their preferences using collaborative or content-based filtering.',
    demoLink: 'https://github.com/shubhamkarande/Movie-Recommendation-System',
    tech: ["Python", "Machine Learning", "Recommendation", "Data Science"]
  },
  {
    id: 30,
    image: Work30,
    title: 'Music Recommendation System',
    category: 'Other',
    description: 'Suggests music tracks based on user mood or listening history using basic ML or API integrations like Spotify.',
    demoLink: 'https://github.com/shubhamkarande/Music-Recommendation-System',
    tech: ["Python", "Machine Learning", "Spotify API", "Music"]
  }
];

export const projectsNav = [
  {
    name: 'All',
  },
  {
    name: 'Web',
  },
  {
    name: 'App',
  },
  {
    name: 'Other'
  },
];
