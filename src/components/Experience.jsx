 "use client";
import React from "react";
import Heading from "./Heading";
import { experience } from "@/constants/constants";
 
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

export const popins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Experience() {
  return (
    <section className={`py-10 ${popins.className}`}>
      <Heading heading="Experience" />

      <div className="grid px-5 sm:px-0 grid-cols-1 sm:grid-cols-2 gap-10 py-6 sm:py-16">
        {experience.map((exp) => (
          <React.Fragment key={exp.id}>
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-xl font-semibold">{exp.company}</h2>
              <h6 className="text-gray-200">{exp.period}</h6>
            </div>
            <motion.div
              className="w-full space-y-4"
              initial={{ opacity: 0, y: 20 }} // Initial state
              whileInView={{ opacity: 1, y: 0 }} // Animate to this state
              transition={{ duration: 0.5 }} // Transition properties
            >
              <h2 className="text-xl">{exp.post}</h2>
              <p className="sm:w-3/4 leading-relaxed text-gray-100">{exp.description}</p>
              <div className="flex flex-wrap gap-5">
                {exp.tools.map((tool) => (
                  <span key={tool} className="border text-purple-400 bg-gray-800 w-fit text-sm py-1 px-3 rounded-lg">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
