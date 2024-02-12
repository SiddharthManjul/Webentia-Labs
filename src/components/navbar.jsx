"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "about",
    },
    {
      id: 2,
      link: "projects",
    },
    {
      id: 3,
      link: "research",
    },
    {
      id: 4,
      link: "community",
    },
    {
      id: 5,
      link: "contact us",
    },
  ];

  return (
    <>
      <div className="flex font-ubuntu bg-beigelight">
        <ul className="hidden md:flex md:flex-col h-screen justify-center gap-y-8 relative z-10">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="uppercase text-xl text-gray-600 hover:translate-x-4 hover:text-cyan-600 hover:translate-y-2 hover:scale-125 transition duration-300"
            >
              <Link href={link}>{link}</Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer p-4 w-full z-10 text-beigelight md:hidden"
        >
          {nav ? (
            <FaTimes
              size={30}
              className="animate-spin hover:rotate-90 w-16 h-16 p-2 border-2 rounded-full border-beige bg-gray-600 hover:bg-cyan-600 transition duration-300 text-beige"
            />
          ) : (
            <FaBars
              size={30}
              className="w-16 h-16 p-2 border-2 rounded-full border-beigelight bg-gray-600 hover:animate-spin hover:bg-cyan-600 transition duration-300"
            />
          )}
        </div>

        {nav && (
          <div
            className={
              nav
                ? "flex flex-col justify-center items-left z-1000 absolute top-0 left-0 ease-in duration-300 w-full h-screen bg-beige text-gray-600"
                : "flex flex-col justify-center items-left z-1000 absolute top-0 left-[-100%] ease-in duration-300 w-full h-screen bg-beige text-gray-600"
            }
          >
            <ul>
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer uppercase py-6 text-4xl hover:translate-x-2 hover:text-cyan-600 transition duration-300"
                >
                  <Link onClick={() => setNav(!nav)} href={link}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
