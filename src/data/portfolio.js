import {
  BiLogoAngular,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { FaGithub, FaLinkedinIn, FaLinux } from "react-icons/fa";
import {
  Braces,
  ChefHat,
  Database,
  Globe,
  Layers3,
  Mail,
  PlugZap,
  Rocket,
  ServerCog,
  ShieldCheck,
  SquareCode,
  Terminal,
  Wrench,
} from "lucide-react";
import ashutoshPic from "../assets/ashutoshpic.jpeg";
import resumePdf from "../assets/Ashutosh-Kumar-Resume.pdf";

export const profile = {
  name: "Ashutosh Kumar",
  role: "Full Stack Developer",
  experience: "2+ Years",
  location: "Noida, India",
  email: "ashutosh.dev2002@gmail.com",
  githubUser: "Ashutosh6565",
  github: "https://github.com/Ashutosh6565",
  linkedin: "https://linkedin.com/in/ashutoshkumar90",
  codechef: "https://www.codechef.com/users/Ashutosh6565",
  imagePath: ashutoshPic,
  resumeFileName: "Ashutosh-Kumar-Resume.pdf",
  resumePath: resumePdf,
  resumeSnapshotPath: ashutoshPic,
  tagline:
    "Building scalable web applications with modern technologies and beautiful user experiences.",
  summary:
    "Full Stack Developer focused on React, Node.js, Express, MongoDB, REST APIs, and clean client-facing product experiences. Based in Noida, India, with hands-on delivery experience at E2 Web Services.",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub Stats", href: "#github" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "25+", label: "Projects shipped" },
  { value: "2+", label: "Years experience" },
  { value: "10+", label: "Core technologies" },
];

export const skillGroups = [
  {
    name: "Frontend",
    icon: Layers3,
    skills: [
      { name: "React", level: 92, icon: BiLogoReact },
      { name: "Angular", level: 74, icon: BiLogoAngular },
      { name: "JavaScript", level: 90, icon: BiLogoJavascript },
      { name: "HTML", level: 94, icon: BiLogoHtml5 },
      { name: "CSS", level: 91, icon: BiLogoCss3 },
      { name: "Tailwind CSS", level: 88, icon: BiLogoTailwindCss },
    ],
  },
  {
    name: "Backend",
    icon: ServerCog,
    skills: [
      { name: "Node.js", level: 86, icon: BiLogoNodejs },
      { name: "Express.js", level: 84, icon: Braces },
      { name: "REST APIs", level: 88, icon: PlugZap },
    ],
  },
  {
    name: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 82, icon: BiLogoMongodb },
      { name: "SQL", level: 76, icon: Database },
    ],
  },
  {
    name: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", level: 86, icon: Terminal },
      { name: "GitHub", level: 88, icon: FaGithub },
      { name: "Postman", level: 82, icon: PlugZap },
      { name: "VS Code", level: 90, icon: SquareCode },
      { name: "Linux", level: 75, icon: FaLinux },
    ],
  },
];

export const services = [
  {
    title: "Frontend Development",
    description:
      "Modern, responsive React interfaces with sharp interaction design, clean state flow, and accessible component systems.",
    icon: Globe,
  },
  {
    title: "Backend Development",
    description:
      "Scalable Node.js and Express APIs with thoughtful data models, REST conventions, validation, and integration-ready endpoints.",
    icon: ServerCog,
  },
  {
    title: "Full Stack Development",
    description:
      "Complete product builds from polished UI to APIs, databases, deployment preparation, and client-ready documentation.",
    icon: Layers3,
  },
  {
    title: "API Integration",
    description:
      "Reliable third-party service integrations, data synchronization, authentication flows, and production-minded error handling.",
    icon: PlugZap,
  },
];

export const experience = [
  {
    company: "E2 Web Services",
    role: "Full Stack Developer",
    period: "Professional Experience",
    location: "Noida, India",
    bullets: [
      "Built and maintained full stack web applications using React, Node.js, Express, and database-backed APIs.",
      "Translated client requirements into responsive interfaces, reusable components, and measurable product workflows.",
      "Integrated REST APIs, improved UI consistency, and collaborated across delivery tasks from frontend polish to backend logic.",
    ],
  },
];

export const education = [
  {
    title: "Full Stack Engineering Practice",
    detail:
      "React, Node.js, Express, MongoDB, SQL, REST APIs, Git, Linux, and deployment-oriented workflows.",
  },
  {
    title: "Client Delivery Focus",
    detail:
      "Portfolio, business websites, dashboards, API integrations, and modern web application development.",
  },
];

export const processSteps = [
  {
    title: "Discover",
    text: "Clarify goals, users, content, technical scope, and the exact business outcome the product must support.",
  },
  {
    title: "Design",
    text: "Map the experience, define reusable UI patterns, and shape a responsive interface before implementation.",
  },
  {
    title: "Build",
    text: "Develop frontend and backend pieces with clean boundaries, accessible components, and maintainable code.",
  },
  {
    title: "Launch",
    text: "Prepare performance, SEO, integrations, testing, handoff notes, and deployment-ready assets.",
  },
];

export const testimonials = [
  {
    quote:
      "Ashutosh brings clarity to full stack work. The implementation feels organized, responsive, and easy to extend.",
    name: "Product Collaborator",
    title: "Web Application Build",
  },
  {
    quote:
      "He focuses on the details clients notice: page speed, clean UI states, mobile polish, and reliable API behavior.",
    name: "Project Lead",
    title: "Client Delivery",
  },
  {
    quote:
      "Strong ownership across React UI and backend routes. Communication stayed practical and the finished product was easy to review.",
    name: "Technical Reviewer",
    title: "Full Stack Project",
  },
];

export const socialLinks = [
  { label: "GitHub", href: profile.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedinIn },
  { label: "CodeChef", href: profile.codechef, icon: ChefHat },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export const projectCategories = [
  "All",
  "Frontend",
  "React",
  "Backend",
  "Full Stack",
  "AI Projects",
];

export const fallbackProjects = [
  {
    id: "portfolio-system",
    name: "Premium Developer Portfolio",
    description:
      "An animated React portfolio experience with GitHub-powered project cards, SEO metadata, smooth scrolling, and polished contact flows.",
    html_url: profile.github,
    homepage: "",
    language: "React",
    topics: ["react", "vite", "tailwind", "gsap", "portfolio"],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-06-05T00:00:00Z",
    category: "React",
    featured: true,
  },
  {
    id: "full-stack-api",
    name: "Full Stack API Platform",
    description:
      "A production-style Node.js and Express backend foundation for REST endpoints, MongoDB persistence, and frontend integration.",
    html_url: profile.github,
    homepage: "",
    language: "Node.js",
    topics: ["nodejs", "express", "mongodb", "api"],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-06-05T00:00:00Z",
    category: "Backend",
    featured: true,
  },
  {
    id: "client-dashboard",
    name: "Client Operations Dashboard",
    description:
      "A responsive dashboard concept for tracking workflows, surfacing metrics, and managing everyday business actions.",
    html_url: profile.github,
    homepage: "",
    language: "JavaScript",
    topics: ["dashboard", "frontend", "tailwind", "react"],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-06-05T00:00:00Z",
    category: "Frontend",
    featured: false,
  },
];

export const valuePillars = [
  { label: "Accessible UI", icon: ShieldCheck },
  { label: "Fast builds", icon: Rocket },
  { label: "Clean APIs", icon: PlugZap },
  { label: "SEO ready", icon: Globe },
];
