"use client";
import React from "react";
import { motion } from "framer-motion";
import { GithubOriginal } from 'devicons-react';
import Image from "next/image";

const projects = [
  {
    title: "Order Management System Sender",
    description: "A simple order management system that sends events to a Kafka topic. It was built using Spring Boot and Kafka.",
    github: "https://github.com/pestana1213/Order-event-sender",
    live: "",
    image: "/order-management-system.png"
  },
  {
    title: "Order Management System Receiver",
    description: "A simple order management system that receives and process events from a Kafka topic. It was built using Spring Boot, Kafka and MongoDB.",
    github: "https://github.com/pestana1213/Order-event-processor",
    live: "",
    image: "/order-management-system.png"
  },
  {
    title: "Geometrix",
    description: "Game to learn geometry concepts",
    github: "https://github.com/pestana1213/Geometrix",
    live: "https://www.hypatiamat.com/jogos/geometrixv7/index.html",
    image: "/geometrix.png"
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden" onClick={() => window.open(project.live, "_blank")}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          placeholder="blur"
          blurDataURL="/placeholder.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
          >
            <GithubOriginal size={20} />
            <span>Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-left mb-12 bg-gradient-to-r from-white to-purple-600 bg-clip-text text-transparent"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;