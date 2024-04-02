"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Employee Database Management",
    description: "Experience the power of efficient database management with my Java-based application. Utilizing Java, Swing, and AWT libraries, my app offers a user-friendly interface for seamless interaction. With MySQL as the backend, all data operations are streamlined and easy. Whether it's adding, removing, updating, or viewing records, our application simplifies complex tasks. Plus, export your data to CSV or PDF formats effortlessly.",
    image: "/images/empManagement.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/siddhant-patel/GUI-for-Employee-Database-Management",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Deep Learning Video Super Resolution using Adaptive Upsampling filters",
    description: "This project aims to enhance the quality of low-resolution videos using deep learning techniques, specifically adaptive upsampling filters. Traditional methods for video super-resolution often fall short in capturing fine details and preserving temporal coherence. My approach tackles these challenges by dynamically generating upsampling filters tailored to the local characteristics of each frame in a video sequence.",
    image: "/images/dl-vsr.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Social Distancing and Face Mask Detection",
    description: "The project aims to create a real-time system on the Jetson Nano board for face mask detection and social distancing monitoring using Deep Learning techniques. By optimizing algorithms and implementing features like threading and data augmentation, the system enhances accuracy and performance for crowded environments, addressing challenges in model design and hardware/software setup for future advancements in object detection and Computer Vision.",
    image: "/images/jetsonNano.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "E-Voting on Ethereum",
    description: "E-Voting on Ethereum is a blockchain-based voting system revolutionizing traditional electoral processes. Powered by Ethereum's smart contracts, it facilitates secure voting, transparent result viewing, and seamless user interaction. With a user-friendly frontend and Truffle for development, the system ensures reliability and integrity. Installation involves cloning the repository, installing dependencies, configuring Truffle, and deploying contracts. Thorough testing is prioritized for compatibility and security, aiming to provide a trustworthy platform for transparent elections.",
    image: "/images/evoting.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Project 5 description",
    image: "",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Project 6",
    description: "Project 6 description",
    image: "",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4">
          My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
      <ProjectTag
        onClick={handleTagChange}
        name="All"
        isSelected={tag === "All"}
      />
      <ProjectTag
        onClick={handleTagChange}
        name="Web"
        isSelected={tag === "Web"}
      />
      <ProjectTag
        onClick={handleTagChange}
        name="Mobile"
        isSelected={tag === "Mobile"}
      />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-4 text-justify">
          {filteredProjects.map((project) => (
            <ProjectCard 
                key={project.id} 
                title={project.title} 
                description={project.description} 
                imgUrl={project.image} 
                tags={project}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
            />
          ))}
      </div>
    </>
  );
};

export default ProjectsSection;