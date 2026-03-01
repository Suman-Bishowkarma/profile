import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  docker,
  django,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  anup,
  shiva,
  saroj,
} from "../assets";

// Navigation links
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// Services offered
const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

// Technologies
const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
  { name: "Django", icon: django },
];

// Work experiences
const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

// Testimonials
const testimonials = [
  {
    testimonial:
      "suman displayed strong technical skills and professionalism, effectively solving problems and reliably meeting all project deadlines with dedication.",
    name: "ANUP ADHIKARI ",
    designation: "Professor",
    company: "GANDAKI UNIVERSITY",
    image: anup,
  },
  {
    testimonial:
      "suman consistently demonstrated strong technical skills, creativity, and initiative in his projects. His work consistently met high standards with excellence.",
    name: "SAROJ GIRI",
    designation: "Coordinator",
    company: "GANDAKI UNIVERSITY",
    image: saroj,
  },
  {
    testimonial:
      "We are extremely satisfied with suman's exceptional and outstanding work. He is reliable, skilled, and goes above and beyond to consistently deliver excellent results.",
    name: "SHIVA RAMDAM",
    designation: "Professor",
    company: "GANDAKI UNIVERSITY",
    image: shiva,
  },
];

// Projects
const projects = [
  {
    name: "GPA Calculator",
    description:
      "Web-based platform that allows users to calculate their GPA based on their grades and credits.",
    tags: [
      { name: "Django", color: "blue-text-gradient" },
      { name: "Tailwind-css", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/Suman-Bishowkarma/GPA_calculator",
  },
  {
    name: "Dairy Website",
    description:
      "Web-based dairy delivery platform with real-time order tracking and intelligent customer interaction.",
    tags: [
      { name: "Django", color: "blue-text-gradient" },
      { name: "Html", color: "green-text-gradient" },
      { name: "Tailwind-css", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/Suman-Bishowkarma/diary-website",
  },
  {
    name: "Student Management System",
    description:
      "A web application for managing student information, including enrollment, grades, and attendance.",
    tags: [
      { name: "Django", color: "blue-text-gradient" },
      { name: "Html", color: "green-text-gradient" },
      { name: "Tailwind-css", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/Suman-Bishowkarma/schoool_management_system",
  },
];

// Exports
export { services, technologies, experiences, testimonials, projects };
