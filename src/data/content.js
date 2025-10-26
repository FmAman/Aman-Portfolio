import {
  FiCode,
  FiGithub,
  FiGlobe,
  FiLayers,
  FiLinkedin,
  FiServer,
  FiTool,
  FiCloud,
  FiShield,
} from "react-icons/fi";
import { SiMedium } from "react-icons/si";
import logo from "../assets/endavaLogo.png";

export const heroContent = {
  name: "Fayaz Mohamed Aman",
  title: "Full Stack Developer",
  tagline:
    "I engineer scalable systems and intuitive interfaces, blending clean architecture with seamless user experiences.",
  location: "Bangalore, India",
};

export const heroHighlights = [
  { value: '3+', label: 'Years of hands-on development' },
  { value: '5+', label: 'Enterprise-grade apps delivered' },
  { value: '50k+', label: 'Daily users impacted' },
];


// export const skillGroups = [
//   {
//     title: 'Frontend Craft',
//     icon: FiCode,
//     items: [
//       { name: 'React & Next.js', mastery: 92 },
//       { name: 'JavaScript & TypeScript', mastery: 88 },
//       { name: 'Design Systems', mastery: 82 },
//     ],
//   },
//   {
//     title: 'Platform & Backend',
//     icon: FiServer,
//     items: [
//       { name: 'Java & Springboot', mastery: 86 },
//       { name: 'GraphQL & REST', mastery: 80 },
//       { name: 'Kafka', mastery: 78 },
//     ],
//   },
//   {
//     title: 'DevOps & Tools',
//     icon: FiTool,
//     items: [
//       { name: 'CI/CD Automation', mastery: 84 },
//       { name: 'Docker & Kubernetes', mastery: 76 },
//       { name: 'Observability', mastery: 72 },
//     ],
//   }
// ];
export const skillGroupsLeft = [
  {
    title: "Frontend Craft",
    icon: FiCode,
    items: [
      { name: "React & Next.js", mastery: 90 },
      { name: "JavaScript & TypeScript", mastery: 88 },
      { name: "Design Systems & Storybook", mastery: 85 },
    ],
  },
  {
    title: "DevOps & Tooling",
    icon: FiTool,
    items: [
      { name: "CI/CD with Git & Jenkins", mastery: 84 },
      { name: "Docker & Kubernetes", mastery: 78 },
      { name: "Build Tools: Maven & Gradle", mastery: 76 },
    ],
  },
  {
    title: "Testing & QA",
    icon: FiShield,
    items: [
      { name: "Cypress & Jest", mastery: 85 },
      { name: "JUnit & Postman", mastery: 80 },
      { name: "Testing Strategy & Coverage", mastery: 78 },
    ],
  },
];
export const skillGroupsRight = [
  {
    title: "Platform & Backend",
    icon: FiServer,
    items: [
      { name: "Java & Spring Boot/WebFlux", mastery: 86 },
      { name: "REST APIs & Microservices", mastery: 83 },
      { name: "SQL & NoSQL Databases", mastery: 80 },
    ],
  },
  {
    title: "Cloud & Monitoring",
    icon: FiCloud,
    items: [
      { name: "AWS & Azure Functions", mastery: 82 },
      { name: "Splunk, Dynatrace, Moogsoft", mastery: 79 },
      { name: "Application Health Dashboards", mastery: 77 },
    ],
  },
  {
    title: "Process & Architecture",
    icon: FiLayers,
    items: [
      { name: "Agile & Scrum Methodologies", mastery: 88 },
      { name: "Micro Frontend Architecture", mastery: 84 },
      { name: "Design Patterns & Best Practices", mastery: 82 },
    ],
  },
];
export const experiences = [
  {
    role: "Senior Software Developer",
    company: "Endava",
    period: "Jan 2025 — Present",
    highlights: [
      "Architected a cloud-native monitoring dashboard on Azure, integrating Splunk, Dynatrace, and Moogsoft for real-time incident detection, reducing average incident response time by 80%.",
      "Delivered proactive alerting frameworks across platforms, reducing average incident response time by 80%.",
    ],
    // icon: FiGlobe,
    logo: logo,
    link: "https://www.endava.com/",
  },
  {
    role: "Software Developer",
    company: "Endava",
    period: "Jan 2024 — Dec 2024",
    highlights: [
      "Developed a micro frontend-based card management application with reusable UI components, ensuring consistency and maintainability across large-scale MFEs.",
      "Enhanced application accessibility and internationalization by implementing standard compliance and multilingual support, improving global usability.",
    ],
    // icon: FiLayers,
    logo: logo,
    link: "https://www.endava.com/",
  },
  {
    role: "Associate Software Developer",
    company: "Endava",
    period: "Aug 2022 — Dec 2023",
    highlights: [
      "Developed and launched a leave management platform using React and Spring WebFlux, used by 1,000+ employees across departments.",
      "Developed and enhanced a code impact analysis tool to automate dependency mapping, predictive analysis, and cross-language documentation impact tracking.",
    ],
    // icon: FiTrendingUp,
    logo: logo,
    link: "https://www.endava.com/",
  },
];

export const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, animated portfolio built with React and Framer Motion showcasing projects, experience, and skills. Features smooth transitions, interactive UI, and responsive design optimized for performance and accessibility.",
    tech: ["React", "Framer Motion", "Github Actions"],
    repo: "https://github.com/FmAman/Aman-Portfolio",
    demo: "https://fmaman.github.io/Aman-Portfolio/",
    gradient: "linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)",
  },
  {
    title: "Figma2React - Design to Code Converter",
    description:
      "An intelligent web tool that parses Figma JSON exports and auto-generates reusable, theme-aware React components. Supports live preview, code export, and responsive layouts — bridging the gap between design and development.",
    tech: ["TypeScript", "Figma API", "Styled Components"],
    repo: "https://github.com/FmAman/Figma2React",
    demo: "https://example.com/palette",
    gradient: "linear-gradient(135deg, #f472b6 0%, #fb7185 100%)",
  },
  {
    title: "HelpMeSign - E-Signature Generator",
    description:
      "Developed a responsive Next.js web app to create and embed e-signatures into images and PDFs. Integrated optimized PDF rendering, canvas-based drawing, reducing document signing time by 40%.",
    tech: ["Next.js", "Node.js", "Canvas API"],
    repo: "https://github.com/FmAman/HelpMeSign",
    demo: "https://example.com/pulsecare",
    gradient: "linear-gradient(135deg, #34d399 0%, #10b981 100%)",
  },
  {
    title: "MediKart - Medical E-Commerce Platform",
    description:
      "Developed a feature-rich medical e-commerce platform with secure authentication, product browsing, and cart management. Ensured scalability and performance using React for the frontend and Spring Boot with MySQL for the backend.",
    tech: ["React", "Spring Boot", "MySQL"],
    repo: "https://github.com/FmAman/MediKart",
    demo: "https://example.com/atlas",
    gradient: "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)",
  },
];


export const socialLinks = [
  {
    label: "LinkedIn",
    icon: FiLinkedin,
    url: "https://linkedin.com/in/fayaz-mohamed-aman",
  },
  {
    label: "GitHub",
    icon: FiGithub,
    url: "https://github.com/FmAman",
  },
  {
    label: "Medium",
    icon: SiMedium,
    url: "https://medium.com/@fayazmohamedaman",
  },
];

export const contactConfig = {
  formEndpoint: "https://formspree.io/f/mjkpbper",
};
