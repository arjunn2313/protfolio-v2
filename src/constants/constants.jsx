import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb } from "react-icons/si";

// Navbar icons
export const navIcons = [
  {
    id: "linkedin",
    icons: <IoLogoLinkedin />,
    link:"https://www.linkedin.com/in/arjun-k-s-86aa59222/"
  },
  {
    id: "github",
    icons: <FaGithub />,
     link:"https://github.com/arjunn2313/"
  },
  {
    id: "instagram",
    icons: <FaInstagram />,
     link:"https://www.instagram.com/ar_j__un/"
  },
];

// tech
export const technologies = [
  { name: "React", icon: <FaReact />, color: "#61dafb" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#ffff" },
  { name: "Express", icon: <SiExpress />, color: "#6cc24a" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#3c873a" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#4db33d" },
  { name: "Git", icon: <FaGitAlt />, color: "#f34f29" },
];

// Experience

export const experience = [
  {
    id: 1,
    company: "Scope India",
    post: "Fullstack Developer - Intern",
    period: "2023(Feb) - 2024(Jan)",
    description:
      "Gained hands-on experience in MERN stack development. Worked on one major project using React.js, Node.js, Express, and MongoDB. Focused on building and integrating APIs, implementing front-end features, and managing databases.",
    tools: ["React JS", "Node JS", "MongoDB", "Express JS"],
  },
  {
    id: 2,
    post: "Fullstack Developer",
    company: "Spangles Infotech",
    period: "2023(Jan) - Present",
    description:
      "As a full-stack developer, I have successfully led and completed several full-fledged projects. My role involves developing end-to-end web applications, integrating both front-end and back-end technologies, managing databases, and ensuring high performance across projects.",
    tools: ["React JS", "Node JS", "MongoDB", "Express JS"],
  },
];

// Project
export const project = [
  {
    id: 1,
    name: "Furniro",
    image: "/furniro.png",
    description:
      "An e-commerce platform for furniture shopping, featuring an admin panel for managing products, orders, and users. Built using modern technologies for a smooth user experience.",
    tools: ["React Js", "Node Js", " Express Js", "MongoDb"],
    gitLink: "https://github.com/arjunn2313/Furniro.git",
  },
  {
    id: 2,
    name: "MLM",
    image: "/mlm.png",
    description:
      "A multi-level marketing (MLM) application where users can track their network and commissions, along with a robust admin panel for managing the system.",
    tools: ["React Js", "Node Js", "Express Js", "MongoDb"],
    gitLink: "https://github.com/arjunn2313/MLM-Admin-UI.git",
  },
  {
    id: 3,
    name: "Infinitevirtual-360",
    image: "/infinite360.png",
    description:
      "A static website showcasing a real estate photographer's 360-degree virtual tour services. Users can explore properties through immersive virtual tours and learn more about the services offered.",
    tools: ["Next Js"],
    gitLink: "https://github.com/arjunn2313/Infinitevirtual-360.git",
  },
  {
    id: 4,
    name: "General Trading",  
    image: "/generaltrading.png",
    description:
      "A sleek and responsive general trading website built with Next.js and Tailwind CSS, featuring a dynamic home page, an informative about section, a detailed services page, and a contact form—designed for seamless navigation and an engaging user experience.",
    tools: ["Next Js"],
    gitLink: "https://github.com/arjunn2313/general-trading.git",
  },
  {
    id: 5,
    name: "Megatron Cars Admin",  
    image: "/megatron.png",
    description:
      "Megatron Cars admin panel, built with React.js, Node.js, Express.js, and PostgreSQL, enables seamless management of car listings with full CRUD functionality, a dedicated Hot Deals section for special offers, and a responsive dashboard for efficient dealership operations. ",
      tools: ["React Js", "Node Js", "Express Js", "PSQL"],
    gitLink: "https://github.com/arjunn2313/general-trading.git",
  },
  {
    id: 6,
    name: "Church Management System",  
    image: "/church.png",
    description:
      "A powerful Church Management System built with React.js, Node.js, Express.js, and PostgreSQL, allowing admins to manage members, families, pastors, offerings, and expenses efficiently. It features role-based access, event scheduling, and financial tracking to streamline church administration and enhance community engagement.",
      tools: ["React Js", "Node Js", "Express Js", "MongoDb"],
    gitLink: "https://github.com/arjunn2313/general-trading.git",
  },
];
