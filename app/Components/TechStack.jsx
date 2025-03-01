import React from "react";
import { JavaOriginal, NextjsOriginal, JavascriptOriginal, ReactOriginal, TailwindcssOriginal, SpringOriginal,
    MavenOriginal, OracleOriginal, MysqlOriginalWordmark, DockerPlain, ApachekafkaOriginalWordmark, RabbitmqPlainWordmark,
    GitOriginal, GithubOriginal, JenkinsOriginal 
} from 'devicons-react';

const TechStack = () => {
    return (
        <section className="py-20 px-4" id="tech-stack">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold text-left mb-16 bg-gradient-to-r from-white to-purple-600 bg-clip-text text-transparent">
                    Tech Stack
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Backend Card */}
                    <div className="group relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] transform hover:-translate-y-2 border-2 border-transparent hover:border-green-100">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 -z-10"></div>
                        <h3 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2 text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4M4 8h16M4 16h16" />
                            </svg>
                            Backend
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[JavaOriginal, SpringOriginal, MavenOriginal, OracleOriginal, MysqlOriginalWordmark, DockerPlain, ApachekafkaOriginalWordmark, RabbitmqPlainWordmark].map((Icon, idx) => (
                                <div key={idx} className="flex flex-col items-center p-4 bg-white rounded-lg hover:bg-green-50 transition-colors duration-200">
                                    <Icon size="40" className="transition-transform duration-300 hover:scale-110" />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Frontend Card */}
                    <div className="group relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-100">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 -z-10"></div>
                        <h3 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2 text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 4v16M15 12l-6 6m0 0l-6-6m6 6V4" />
                            </svg>
                            Frontend
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[NextjsOriginal, JavascriptOriginal, ReactOriginal, TailwindcssOriginal].map((Icon, idx) => (
                                <div key={idx} className="flex flex-col items-center p-4 bg-white rounded-lg hover:bg-blue-50 transition-colors duration-200">
                                    <Icon size="40" className="transition-transform duration-300 hover:scale-110" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* DevOps Card */}
                    <div className="group relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] transform hover:-translate-y-2 border-2 border-transparent hover:border-purple-100">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 -z-10"></div>
                        <h3 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2 text-purple-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            DevOps
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[GitOriginal, GithubOriginal, JenkinsOriginal].map((Icon, idx) => (
                                <div key={idx} className="flex flex-col items-center p-4 bg-white rounded-lg hover:bg-purple-50 transition-colors duration-200">
                                    <Icon size="40" className="transition-transform duration-300 hover:scale-110" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TechStack;