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
  },
  {
    id: "github",
    icons: <FaGithub />,
  },
  {
    id: "instagram",
    icons: <FaInstagram />,
  },
];

// tech
export const technologies = [
  { name: "React", icon: <FaReact />, color: "#61dafb" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  { name: "Express", icon: <SiExpress />, color: "#6cc24a" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#3c873a" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#4db33d" },
  { name: "Git", icon: <FaGitAlt />, color: "#f34f29" },
];

// Experience

export const experience = [
  {
    id: 1,
    post: "Fullstack Developer - Intern",
    period: "2023(Oct) - 2024(Jan)",
    description:
      "Led a team in developing web applications using JavaScript, React.js, Node.js, python. Implemented RESTful APIs and integrated with MySql databases. Collaborated with stakeholders to define project requirements and timelines.",
    tools: ["React JS", "Node JS", "MongoDB", "Express JS"],
  },
  {
    id: 2,
    post: "Fullstack Developer - Intern",
    period: "2023(Oct) - 2024(Jan)",
    description:
      "Led a team in developing web applications using JavaScript, React.js, Node.js, python. Implemented RESTful APIs and integrated with MySql databases. Collaborated with stakeholders to define project requirements and timelines.",
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
    gitLink: "www.github.com",
  },
  {
    id: 2,
    name: "MLM",
    image: "/mlm.png",
    description:
      "A multi-level marketing (MLM) application where users can track their network and commissions, along with a robust admin panel for managing the system.",
    tools: ["React Js", "Node Js", "Express Js", "MongoDb"],
    gitLink: "www.github.com",
  },
  {
    id: 3,
    name: "Infinitevirtual-360",
    image: "/infinite360.png",
    description:
      "A static website showcasing a real estate photographer's 360-degree virtual tour services. Users can explore properties through immersive virtual tours and learn more about the services offered.",
    tools: ["Next Js"],
    gitLink: "www.github.com",
  },
];
