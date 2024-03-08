"use client"

import React from "react";
import { motion } from "framer-motion";
import Hero from "@/components/hero";
import NavBtn from "@/components/navBtn";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="hidden h-inherit xl:block w-3/4 absolute z-100 top-[23%] left-[22%] transform">
        <motion.p
          className=" font-spaceGrotesk text-6xl text-justify px-6 mt-16 leading-relaxed"
          animate={{ x: 0, scale: 1 }}
          initial={{ x: 100, scale: 0 }}
          transition={{
            ease: "linear",
            duration: 0.8,
            x: { duration: 1 },
          }}
        >
          We Envision, Explore, Research & Develop new Paradigms in the
          ever-changing Province of Blockchain Technology, Privacy, Security &
          Web3.
        </motion.p>
        <NavBtn />
      </div>
      <motion.div className="hidden h-inherit md:block xl:hidden w-3/4 absolute z-100 top-[23%] left-[22%] transform">
        <motion.p
          className=" font-spaceGrotesk text-5xl text-justify px-6 mt-16 leading-relaxed"
          animate={{ x: 0, scale: 1 }}
          initial={{ x: 100, scale: 0 }}
          transition={{
            ease: "linear",
            duration: 0.8,
            x: { duration: 1 },
          }}
        >
          We Envision, Explore, Research & Develop new Paradigms in the
          ever-changing Province of Blockchain Technology, Privacy, Security &
          Web3.
        </motion.p>
      </motion.div>
      <div className="md:hidden w-full h-screen pt-[25%] transform absolute -z-10 bg-gradient-to-br from-tealdark via-teallight via-teal-100 via-fleshlight via-50% to-fleshdark">
        <motion.p
          className="font-spaceGrotesk text-4xl text-justify px-6 mt-16 leading-relaxed"
          animate={{ x: 0, scale: 1 }}
          initial={{ x: 100, scale: 0 }}
          transition={{
            ease: "linear",
            duration: 0.8,
            x: { duration: 1 },
          }}
        >
          We Envision, Explore, Research & Develop new Paradigms in the
          ever-changing Province of Blockchain Technology, Privacy, Security &
          Web3.
        </motion.p>
      </div>
    </div>
  );
};

export default Home;
