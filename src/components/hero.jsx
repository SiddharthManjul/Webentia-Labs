import React from "react";

const Hero = () => {
  return (
    <div className="bg-beigelight font-josefinSans">

      <div className="hidden h-screen md:block absolute z-100 inset-y-40 left-[22%] bg-beige rounded-t-xl">
        <h1 className="capitalize mt-4 px-4 text-center text-4xl text-gray-600">
          Webentia: decentralized web & home of nerds!
        </h1>
      </div>

      <div className="">
      <h1 className="capitalize text-center md:hidden">
          Webentia: decentralized web & home of nerds!
        </h1>
      </div>
    </div>
  );
};

export default Hero;