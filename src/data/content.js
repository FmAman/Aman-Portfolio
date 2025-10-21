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
  name: "FM Aman",
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
    title: "Portfolio|InsightStream",
    description:
      "Collaborative analytics workspace with live storytelling, annotations, and AI-assisted insights.",
    tech: ["React", "Node.js", "WebSockets"],
    repo: "https://github.com/example/insightstream",
    demo: "https://example.com/insightstream",
    gradient: "linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)",
  },
  {
    title: "1mg Clone|Palette Studio",
    description:
      "Theme-aware design system generator that exports component libraries for React and Vue.",
    tech: ["TypeScript", "Figma API", "Styled Components"],
    repo: "https://github.com/example/palette-studio",
    demo: "https://example.com/palette",
    gradient: "linear-gradient(135deg, #f472b6 0%, #fb7185 100%)",
  },
  {
    title: "HelpmEsign|PulseCare",
    description:
      "Remote patient monitoring platform with proactive alerting and clinician dashboards.",
    tech: ["Next.js", "GraphQL", "AWS"],
    repo: "https://github.com/example/pulsecare",
    demo: "https://example.com/pulsecare",
    gradient: "linear-gradient(135deg, #34d399 0%, #10b981 100%)",
  },
  {
    title: "Atlas Docs",
    description:
      "Documentation engine with markdown, live code sandboxes, and multi-brand theming.",
    tech: ["MDX", "Vite", "Framer Motion"],
    repo: "https://github.com/example/atlas-docs",
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
  formEndpoint: "https://formspree.io/f/yourFormId",
};
