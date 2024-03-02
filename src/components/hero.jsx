"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-beigelight font-josefinSans">
      <motion.div
        className="hidden h-inherit border-[24px] border-gray-600 md:block xl:hidden absolute z-100 inset-y-32 left-[19%] bg-beige rounded-xl shadow-lg shadow-gray-600 transform right-[4%]"
        animate={{ x: 0, scale: 1 }}
        initial={{ x: 100, scale: 0 }}
        transition={{
          ease: "linear",
          duration: 0.8,
          x: { duration: 1 },
        }}
      >
        <h1 className="capitalize mt-4 px-4 text-center text-4xl text-gray-600">
          Webentia Labs: Researchers & Developers Community!
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quis, cupiditate officia libero doloribus sapiente deleniti repellendus dolorum, quam voluptates, placeat quaerat itaque illo error consequuntur ab non voluptatum facilis?</p>
      </motion.div>

      <motion.div
        className="hidden h-inherit border-[24px] border-gray-600 xl:block w-3/4 absolute z-100 inset-y-32 left-[19%] bg-beige rounded-xl shadow-lg shadow-gray-600 transform right-[4%]"
        animate={{ x: 0, scale: 1 }}
        initial={{ x: 100, scale: 0 }}
        transition={{
          ease: "linear",
          duration: 0.8,
          x: { duration: 1 },
        }}
      >
        <h1 className="capitalize mt-28 px-6 text-center text-9xl text-gray-600">
          Webentia Labs: Researchers & Developers Community!
        </h1>
      </motion.div>

      <div className="md:hidden">
        <h1 className="capitalize text-center h-screen">
          Webentia Labs: Researchers & Developers Community!
        </h1>
      </div>
    </div>
  );
};

export default Hero;
