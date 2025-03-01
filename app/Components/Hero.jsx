"use client";
import React from "react";
import Image from "next/image";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadCV from "./DownloadCV";


const Hero = () => {

  const myName = ['J', 'o', 'ã', 'o', ' ', 'N', 'o', 'g', 'u', 'e', 'i', 'r', 'a'];

  return (
    <section className="relative flex items-center justify-center h-screen p-6 z-0" id="home">
      <div className="flex items-center max-w-7xl w-full">
        {/* Text Section */}
        <div className="max-w-2xl text-center md:text-left">
            <div>
                <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl drop-shadow-lg">
                    Hello,
                </h1>
                <div className="flex justify-center">
                    <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl drop-shadow-lg">
                        I'm 
                    </h1>
                    <span className="mx-2" /> 
                    {myName.map((letter, index) => (
                        letter === ' ' ? (
                            <h1
                            key={index}
                            className="text-5xl font-bold md:text-6xl lg:text-7xl drop-shadow-lg transition-transform duration-500 ease-out transform hover:scale-110 hover:drop-shadow-2xl"
                            >
                            &nbsp;
                            </h1>
                        ) : (
                            <h1
                            key={index}
                            className="text-5xl font-bold md:text-6xl lg:text-7xl drop-shadow-lg transition-transform duration-500 ease-out transform hover:scale-110 hover:drop-shadow-2xl"
                            >
                            {letter}
                            </h1>
                                )
                            )
                        )   
                    }
                </div>  
            </div>

          <p className="mt-4 text-lg md:text-xl drop-shadow-md">
            A Software Engineer with a passion for creating amazing applications
          </p>
          <div className="mt-6 flex justify-center gap-4 md:justify-start">
            <a href="https://www.linkedin.com/in/jo%C3%A3o-nogueira-fafe/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon fontSize="large" className="shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"/>
            </a>
            <a href="https://github.com/pestana1213" target="_blank" rel="noopener noreferrer">
                <GitHubIcon fontSize="large" className="shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg" />
            </a>
              <DownloadCV />
          </div>
        </div>

        <div className="ml-10 hidden md:block">
        <Image
            width={400}
            height={400}
            src="/profile_photo.jpeg"
            alt="Profile Photo"
            className="shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        />
        </div>
      </div>
    </section>
  );
};

export default Hero;
