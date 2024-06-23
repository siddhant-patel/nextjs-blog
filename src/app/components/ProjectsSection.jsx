"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Employee Database Management",
    description: "Experience the power of efficient database management with my Java-based application. Utilizing Java, Swing, and AWT libraries, my app offers a user-friendly interface for seamless interaction. With MySQL as the backend, all data operations are streamlined and easy. Whether it's adding, removing, updating, or viewing records, our application simplifies complex tasks. Plus, export your data to CSV or PDF formats effortlessly",
    image: "/images/projects/empManagement.png",
    tag: ["All", "Software Development"],
    gitUrl: "https://github.com/siddhant-patel/GUI-for-Employee-Database-Management",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Deep Learning Video Super Resolution using Adaptive Upsampling filters",
    description: "This project aims to enhance the quality of low-resolution videos using deep learning techniques, specifically adaptive upsampling filters. Traditional methods for video super-resolution often fall short in capturing fine details and preserving temporal coherence. My approach tackles these challenges by dynamically generating upsampling filters tailored to the local characteristics of each frame in a video sequence.",
    image: "/images/projects/dl-vsr.png",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/siddhant-patel/CSE509-Project-VSR-Dynamic-Upsampling",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Social Distancing and Face Mask Detection",
    description: "The project aims to create a real-time system on the Jetson Nano board for face mask detection and social distancing monitoring using Deep Learning techniques. By optimizing algorithms and implementing features like threading and data augmentation, the system enhances accuracy and performance for crowded environments, addressing challenges in model design and hardware/software setup for future advancements in object detection and Computer Vision.",
    image: "/images/projects/jetson-nano-2gb.jpg",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/siddhant-patel/Face-Mask-and-Social-Distancing-Detection-using-Jetson-Nano-Board",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "E-Voting on Ethereum",
    description: "E-Voting on Ethereum is a blockchain-based voting system revolutionizing traditional electoral processes. Powered by Ethereum's smart contracts, it facilitates secure voting, transparent result viewing, and seamless user interaction. With a user-friendly frontend and Truffle for development, the system ensures reliability and integrity. Installation involves cloning the repository, installing dependencies, configuring Truffle, and deploying contracts. Thorough testing is prioritized for compatibility and security, aiming to provide a trustworthy platform for transparent elections.",
    image: "/images/projects/evoting-resized.png",
    tag: ["All", "Software Development"],
    gitUrl: "https://github.com/siddhant-patel/EVoting-on-Ethereum",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Exploring COVID-19 Vaccine Trends on Twitter",
    description: "This is a project that utilizes social media mining techniques to analyze discussions and trends related to the COVID-19 vaccine on Twitter. It involves crawling Twitter data, processing and performing exploratory analysis, and generating network models to gain insights into the topics, hashtags, and influencers surrounding the vaccine discourse. The project employs libraries like snscrape, NetworkX, and Pyvis to scrape data, construct networks, visualize graphs, and calculate network measures. The analysis provides valuable insights into the evolution of vaccine-related discussions, identifying popular hashtags and influential users, and observing changes in network characteristics over time",
    image: "/images/projects/didItWork.jpg",
    tag: ["All", "Data Analysis"],
    gitUrl: "https://github.com/siddhant-patel/COVID-19-Vaccine-Data-Analysis",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Predictive Income Modeling for College Recruitment",
    description: "This project builds a predictive model using the US Census Bureau's Adult Income Dataset to forecast individual incomes based on demographic and employment factors. The goal is to help UVW College's marketing team target potential students with higher income levels. It involves data exploration, feature engineering, and developing an accurate income classification model. Various data visualizations, including heatmaps, distribution plots, and clustered analyses, provide insights into the relationship between income and factors like age, education, and occupation. The repository contains the code and data",
    image: "/images/projects/predModel.jpg",
    tag: ["All", "Machine Learning", "Data Analysis"],
    gitUrl: "https://github.com/siddhant-patel/Predictive-Model-for-Enrollment-Increase-based-on-Income-Analysis",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Spotify EDA & Popularity Prediction",
    description: "This project explores the Spotify dataset containing various attributes of songs released between 1921 and 2020. The primary objective is to analyze the relationships between different song parameters, such as acousticness, danceability, energy, and popularity, using Exploratory Data Analysis (EDA) techniques. By leveraging machine learning algorithms, specifically the Decision Tree algorithm, the project aims to develop a predictive model capable of forecasting the popularity of songs based on their attributes. The insights gained from this project can be valuable for music streaming platforms like Spotify, enabling them to enhance their recommendation systems and better understand the factors contributing to song popularity.",
    image: "/images/projects/spotify.png",
    tag: ["All", "Machine Learning", "Data Analysis"],
    gitUrl: "https://github.com/siddhant-patel/Spotify-Attributes-EDA-Popularity-Prediction",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Buddy's Barkery Website",
    description: "Designed and managed Buddy’s Barkery Website, a start-up's digital storefront, utilizing React for dynamic front-end functionalities and Node.js for robust back-end support. Integrated seamless navigation, product showcases, and customer engagement features. Employed responsive design strategies, optimized performance for efficient deployment, and ensured polished styling using CSS. Managed project dependencies via yarn for streamlined development.",
    image: "/images/projects/buddysbarkery.png",
    tag: ["All", "Software Development"],
    gitUrl: "https://github.com/siddhant-patel/Buddys-Barkery",
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

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
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
        name="Software Development"
        isSelected={tag === "Software Development"}
      />
      <ProjectTag
        onClick={handleTagChange}
        name="Machine Learning"
        isSelected={tag === "Machine Learning"}
      />
      <ProjectTag
        onClick={handleTagChange}
        name="Data Analysis"
        isSelected={tag === "Data Analysis"}
      />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
