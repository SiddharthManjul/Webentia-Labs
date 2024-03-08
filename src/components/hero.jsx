"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="font-spaceGrotesk">
      <div className="hidden h-inherit md:block xl:hidden absolute z-100 top-[10%] left-[19%] transform right-[4%]">
        <h1 className="capitalize px-4 text-end text-8xl text-gray-600">
          Webentia Labs
        </h1>
        <motion.p
          className="text-5xl text-justify px-6 mt-[7%] leading-relaxed"
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

      <div className="hidden h-inherit xl:block w-3/4 absolute z-100 top-[8%] left-[22%] transform">
        <h1 className="capitalize ml- px-6 text-end text-9xl text-gray-600">
          Webentia Labs
        </h1>
        <motion.p
          className="text-6xl text-justify px-6 mt-16 leading-relaxed"
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

      <div className="md:hidden pt-10 h-screen bg-gradient-to-br from-tealdark via-teallight via-teal-100 via-fleshlight via-50% to-fleshdark">
        <h1 className="capitalize text-end h-inherit text-5xl mr-8 mt-0 text-gray-600">
          Webentia Labs
        </h1>
      </div>
    </div>
  );
};

export default Hero;
