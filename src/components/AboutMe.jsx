 "use client";
import Image from "next/image";
import React from "react";
import Heading from "./Heading";
import ComputersCanvas from "./Canvas";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

// Google font
export const popins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export default function AboutMe() {
  // Create a ref to check if the section is in view
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once

  return (
    <section className="sm:py-20 py-5" ref={ref}>
      <Heading heading="About Me" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 sm:mt-5 sm:py-10">
        <motion.div
          className="flex justify-center items-center overflow-hidden"
          initial={{ opacity: 0, x: -20 }} // Initial state
          animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate when in view
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ComputersCanvas />
        </motion.div>
        <motion.div
          className={`${popins.className} mb-20`}
          initial={{ opacity: 0, y: 20 }} // Initial state
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-sm text-gray-200 md:leading-loose px-5 md:text-lg">
            I am a dedicated and versatile full stack developer with a passion
            for creating efficient and user-friendly web applications. I have
            worked with a variety of technologies, including React, Next.js,
            Node.js, PostgreSQL. My journey in web development began with a deep
            curiosity for how things work, and it has evolved into a career
            where I continuously strive to learn and adapt to new challenges. I
            thrive in collaborative environments and enjoy solving complex
            problems to deliver high-quality solutions. Outside of coding, I
            enjoy staying active, exploring new technologies, and contributing
            to open-source projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
