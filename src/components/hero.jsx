"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-beigelight font-josefinSans">
      <motion.div
        className="hidden h-inherit md:block xl:hidden absolute z-100 inset-y-32 left-[22%] bg-beige rounded-xl shadow-lg shadow-gray-600 transform "
        animate={{ x: 0, scale: 1 }}
        initial={{ x: 100, scale: 0 }}
        transition={{
          ease: "linear",
          duration: 0.8,
          x: { duration: 1 },
        }}
      >
        <h1 className="capitalize mt-4 px-4 text-center text-4xl text-gray-600">
          Webentia: decentralized web & home of nerds!
        </h1>
      </motion.div>

      <motion.div
        className="hidden h-inherit xl:block w-3/4 absolute z-100 inset-y-32 left-[19%] bg-beige rounded-xl shadow-lg shadow-gray-600 transform"
        animate={{ x: 0, scale: 1 }}
        initial={{ x: 100, scale: 0 }}
        transition={{
          ease: "linear",
          duration: 0.8,
          x: { duration: 1 },
        }}
      >
        <h1 className="capitalize mt-4 px-4 text-center text-4xl text-gray-600">
          Webentia: decentralized web & home of nerds!
        </h1>
      </motion.div>

      <div className="md:hidden">
        <h1 className="capitalize text-center h-screen">
          Webentia: decentralized web & home of nerds!
        </h1>
      </div>
    </div>
  );
};

export default Hero;
