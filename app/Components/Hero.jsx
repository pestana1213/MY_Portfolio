"use client";
import React from "react";
import Image from "next/image";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadCV from "./DownloadCV";

const Hero = () => {
  const myName = ['J', 'o', 'ã', 'o', ' ', 'N', 'o', 'g', 'u', 'e', 'i', 'r', 'a'];

  return (
    <section className="relative flex items-center justify-center min-h-screen p-4 md:p-6 z-0" id="home">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl w-full gap-8">
        {/* Text Section */}
        <div className="max-w-2xl text-center md:text-left order-2 md:order-1">
          <div className="mb-4">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-lg">
              Hello,
            </h1>
            <div className="flex flex-wrap justify-center">
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-lg">
                I'm 
              </h1>
              <span className="mx-2" /> 

              {myName.map((letter, index) => (
                <span 
                  key={index}
                  className="text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-lg transition-transform duration-500 ease-out md:hover:scale-110"
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </div>  
          </div>

          <p className="mt-3 text-base md:text-lg lg:text-xl drop-shadow-md">
            A Software Engineer with a passion for creating amazing applications
          </p>
          
          <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
            <a href="https://linkedin.com" target="_blank" className="p-2">
              <LinkedInIcon style={{ fontSize: '2.5rem' }} className="shadow-lg transition-all duration-300 ease-in-out active:scale-95 md:hover:scale-105" />
            </a>
            <a href="https://github.com" target="_blank" className="p-2">
              <GitHubIcon style={{ fontSize: '2.5rem' }} className="shadow-lg transition-all duration-300 ease-in-out active:scale-95 md:hover:scale-105" />
            </a>
            <DownloadCV />
          </div>
        </div>

        {/* Image Section */}
        <div className="order-1 md:order-2">
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/profile_photo.jpeg"
              alt="Profile Photo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 320px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;