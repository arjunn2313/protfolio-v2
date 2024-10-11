 "use client";
import React from 'react';
import Heading from './Heading';
import { technologies } from '@/constants/constants';
import { delay, motion } from 'framer-motion';
import { Poppins } from 'next/font/google';

export const popins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Skills() {
  // Define a smoother jumping animation variant
  const itemVariants = {
    jump: {
      y: [0, -10, 0, -5, 0], // Create a smoother jumping effect
      transition: {
        duration: 6, // Increased duration for a smoother effect
        repeat: Infinity, // Repeat the animation infinitely
        ease: "easeInOut", 
        delay:0.1,// Smooth easing
      },
    },
  };

  return (
    <section className="sm:py-20 py-5 ">
      <Heading heading="Technologies" />
      <ul className="flex py-10 sm:py-20 justify-center gap-8 flex-wrap sm:space-x-4">
        {technologies.map((tech, index) => (
          <motion.li
            key={index}
            className="flex border-4 border-gray-500 p-4 sm:p-8 items-center space-x-2 rounded-xl font-semibold"
            style={{ color: tech.color }}
            initial="jump"  // Use the jumping variant initially
            animate="jump"  // Set the jumping animation to play continuously
            variants={itemVariants}  // Apply variants
            whileInView={{
              y: [0, -10, 0, -5, 0], // Create the jumping effect
              transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2, // Stagger the delay for each item
              },
            }}
            viewport={{ once: false }} // Ensure the animation can trigger again when in view
          >
            <span className='text-3xl sm:text-7xl font-bold'>{tech.icon}</span>
            {/* <span>{tech.name}</span> */}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

