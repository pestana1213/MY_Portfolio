import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <section className="py-10 px-4" id="about-me">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold text-left mb-16 bg-gradient-to-r from-white to-purple-600 bg-clip-text text-transparent">
                    More About Me
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex flex-col items-center p-4 rounded-lg transition-colors duration-200">
                        <Image
                        width={400}
                        height={400}
                        src="/quote.jpg"
                        alt="Profile Photo"
                        className="shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                    />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-center mb-6 text-white">
                            Software Engineering at Accenture Portugal
                        </h1>
                        <p className="text-lg text-center font-light">
                            Currently working as a Software Engineer at Accenture Portugal, I have been developing new features, fixing bugs and optimizing performance for the past years.
                            I have a passion for software development and I am always looking for new challenges and opportunities to learn and grow.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;