"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import ResumeDownload from "./ResumeDownload";

// Google font
export const popins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Hero() {
  return (
    <section className={`min-h-screen w-full ${popins.className}`}>
      <Navbar />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 p-6 sm:p-12">
        <motion.div
          className="mt-3 space-y-4 sm:space-y-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h1 className="text-3xl md:text-7xl">ARJUN K S</h1>
          <h3 className="text-4xl font-semibold bg-gradient-to-r from-purple-500 to-gray-400 bg-clip-text text-transparent">
            FULLSTACK DEVELOPER
          </h3>

          <p className="text-sm sm:w-[85%] text-gray-200 md:leading-loose md:text-lg">
            I am a passionate full stack developer with a knack for crafting
            robust and scalable web applications. With 1 year of hands-on
            experience, I have honed my skills in front-end technologies like
            React and Next.js, as well as back-end technologies like Node.js,
            Express.js, and MongoDB. My goal is to leverage my expertise to
            create innovative solutions that drive business growth and deliver
            exceptional user experiences.
          </p>
        
          <ResumeDownload/>
        
        </motion.div>
        <motion.div
          className="flex justify-center items-start"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Image
            src="/dev.jpg"
            alt="logo"
            width={500}
            height={500}
            className="w-full h-full sm:w-[90%] sm:h-[90%] rounded-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
