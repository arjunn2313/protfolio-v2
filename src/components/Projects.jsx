"use client";
import React from "react";
import Heading from "./Heading";
import { motion } from "framer-motion";
import Image from "next/image";
import { project } from "@/constants/constants";
import { Poppins } from "next/font/google";
import { FaGithub, FaGithubAlt } from "react-icons/fa"; // Import GitHub icon

export const popins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Projects() {
  return (
    <section className={`py-10 ${popins.className}`}>
      <Heading heading="Projects" />
      <div className="grid px-5 sm:px-0 grid-cols-1 py-10 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {project.map((work, index) => (
          <motion.div
            key={work.id}
            className="border p-4 shadow-lg rounded-lg relative" // Add relative positioning here
            initial={{ opacity: 0, y: 20 }} // Initial state
            whileInView={{ opacity: 1, y: 0 }} // Animate to this state when in view
            transition={{
              duration: 0.5,
              delay: index * 0.2, // Stagger the animations by index
            }}
          >
            {/* GitHub Icon */}
            <a
              href={work.gitLink} // Assuming you have a `github` field in your project data
              target="_blank"
              rel="noopener noreferrer"
              className="absolute  top-5 left-5 cursor-pointer bg-white border-1 text-black rounded-full  hover:text-white hover:bg-black"
            >
              <FaGithub size={24} />
            </a>

            <Image
              src={work.image}
              alt={work.name} // Changed alt text to be more descriptive
              width={500}
              height={500}
              className="w-full h-52 object-contain"
            />
            <h2 className="text-xl sm:text-2xl font-bold mt-4">{work.name}</h2>
            <p className="mt-2 text-md">{work.description}</p>
            <div className="flex flex-wrap gap-3 items-center pt-3">
              {work.tools.map((tool, ind) => (
                <span
                  key={ind}
                  className="border text-purple-500 p-1 rounded-full text-xs px-2"
                >
                  #{tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
