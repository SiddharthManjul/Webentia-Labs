"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="font-josefinSans">
      <motion.div
        className="hidden h-inherit md:block xl:hidden absolute z-100 inset-y-32 left-[19%] transform right-[4%]"
        animate={{ x: 0, scale: 1 }}
        initial={{ x: 100, scale: 0 }}
        transition={{
          ease: "linear",
          duration: 0.8,
          x: { duration: 1 },
        }}
      >
        <h1 className="capitalize mt-12 px-4 text-center text-8xl text-gray-600">
          Webentia Labs: Researchers & Developers Community!
        </h1>
      </motion.div>

      <motion.div
        className="hidden h-inherit xl:block w-3/4 absolute z-100 inset-y-32 left-[19%] transform right-[4%]"
        animate={{ x: 0, scale: 1 }}
        initial={{ x: 100, scale: 0 }}
        transition={{
          ease: "linear",
          duration: 0.8,
          x: { duration: 1 },
        }}
      >
        <h1 className="capitalize mt-20 px-6 text-center text-9xl text-gray-600">
          Webentia Labs: Researchers & Developers Community!
        </h1>
      </motion.div>

      
    </div>
  );
};

export default Hero;
