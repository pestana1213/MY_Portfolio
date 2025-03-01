"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full p-4 md:px-8 ${
        isScrolled 
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      } flex justify-between items-center z-50 transition-all duration-300`}
    >
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-xl font-bold text-gray-800 dark:text-white ml-4"
      >
        {/* Add your logo or name here */}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          João Nogueira
        </span>
      </motion.h2>

      <nav className="hidden md:block">
        <ul className="flex gap-6 text-gray-600 dark:text-gray-300">
          {["Home", "About Me", "Tech Stack", "Projects", "Contact Me"].map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="relative px-2 py-1 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

    </motion.header>
  );
};

export default Header;