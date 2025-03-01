"use client";
import React, { useState } from "react";
import { JavaOriginal, NextjsOriginal, JavascriptOriginal, ReactOriginal, TailwindcssOriginal, SpringOriginal,
    MavenOriginal, OracleOriginal, MysqlOriginalWordmark, DockerPlain, ApachekafkaOriginalWordmark, RabbitmqPlainWordmark,
    GitOriginal, GithubOriginal, JenkinsOriginal 
} from 'devicons-react';

const TechGrid = () => {
    const technologies = [
        { id: 1, name: "Next.js", icon: NextjsOriginal },
        { id: 2, name: "JavaScript", icon: JavascriptOriginal },
        { id: 3, name: "React", icon: ReactOriginal },
        { id: 4, name: "Tailwind", icon: TailwindcssOriginal },
        { id: 5, name: "Java", icon: JavaOriginal },
        { id: 6, name: "Spring", icon: SpringOriginal },
        { id: 7, name: "Maven", icon: MavenOriginal },
        { id: 8, name: "Oracle", icon: OracleOriginal },
        { id: 9, name: "MySQL", icon: MysqlOriginalWordmark },
        { id: 10, name: "Docker", icon: DockerPlain },
        { id: 11, name: "Kafka", icon: ApachekafkaOriginalWordmark },
        { id: 12, name: "RabbitMQ", icon: RabbitmqPlainWordmark },
        { id: 13, name: "Git", icon: GitOriginal },
        { id: 14, name: "GitHub", icon: GithubOriginal },
        { id: 15, name: "Jenkins", icon: JenkinsOriginal },
    ];

    // Random positions for nodes (adjust ranges as needed)
    const getRandomPosition = () => ({
        x: Math.floor(Math.random() * 80) + 10, // 10-90% 
        y: Math.floor(Math.random() * 40) + 10,
        size: 20, 
        rotation: 360
    });

    const [positions] = useState(() => 
        technologies.map(() => getRandomPosition())
    );

    const [hoveredNode, setHoveredNode] = useState(null);

    // Generate random connections between nodes
    const connections = [];
    technologies.forEach((tech, index) => {
        const numConnections = Math.floor(Math.random() * 3) + 1; // 1-3 connections
        for (let i = 0; i < numConnections; i++) {
            const target = Math.floor(Math.random() * technologies.length);
            if (target !== index) {
                connections.push({ from: index, to: target });
            }
        }
    });

    return (
        <section className="py-12 px-4 relative h-[600px] w-full">
            
            <div className="relative w-full h-full">

                {/* Technology nodes */}
                {technologies.map((tech, index) => {
                    const { x, y, size, rotation } = positions[index];
                    const Icon = tech.icon;
                    
                    return (
                        <div
                            key={tech.id}
                            className="absolute flex items-center justify-center transition-all duration-500 ease-out"
                            style={{
                                left: `${x}%`,
                                top: `${y}%`,
                                width: `${size}px`,
                                height: `${size}px`,
                                transform: `rotate(${rotation}deg) scale(${hoveredNode === index ? 1.2 : 1})`,
                                zIndex: hoveredNode === index ? 10 : 1
                            }}
                            onMouseEnter={() => setHoveredNode(index)}
                            onMouseLeave={() => setHoveredNode(null)}
                        >
                            <div className="relative group">
                                <div className={`absolute inset-0 rounded-full blur-md transition-opacity ${
                                    hoveredNode === index ? 'opacity-50' : 'opacity-0'
                                }`} 
                                style={{ background: `hsl(${index * 60}, 70%, 50%)` }}
                                />
                                
                                <div className="relative flex items-center justify-center p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg transition-transform duration-300 hover:shadow-xl">
                                    <Icon 
                                        size={size * 0.6} 
                                        className="text-gray-800 dark:text-gray-200 transition-all duration-300" 
                                    />
                                </div>
                                
                                <span className={`absolute left-1/2 -translate-x-1/2 text-sm font-medium ${
                                    hoveredNode === index ? 'opacity-100' : 'opacity-0'
                                } transition-opacity duration-300 mt-2 whitespace-nowrap`}
                                style={{ 
                                    top: `calc(100% + 10px)`,
                                    color: `hsl(${index * 60}, 70%, 50%)`
                                }}>
                                    {tech.name}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default TechGrid;