"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <div className="grid sm:grid-cols-1 md:grid-cols-6">
          <div>
            <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">Programming Languages</h3>
            <ul className="list-disc pl-2">
              <li>Python</li>
              <li>R</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>C/C++</li>
              <li>SQL</li>
              <li>MATLAB</li>
              <li>Verilog HDL</li>
              <li>Assembly Language</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">Web Techs</h3>
            <ul className="list-disc pl-2">
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>NextJS</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">Databases</h3>
            <ul className="list-disc pl-2">
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Redis</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">Cloud & DevOps</h3>
            <ul className="list-disc pl-2">
              <li>AWS (EC2, S3)</li>
              <li>Kubernetes</li>
              <li>Docker</li>
              <li>Git</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">ML & AI</h3>
            <ul className="list-disc pl-2">
              <li>PyTorch</li>
              <li>Tensorflow</li>
              <li>Keras</li>
              <li>scikit-learn</li>
              <li>OpenCV</li>
              <li>CUDA</li>
              <li>TVM</li>
              <li>LLVM</li>
              <li>TensorRT</li>
              <li>BERT</li>
              <li>XGBoost</li>
              <li>NLP</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">Other Tools & Frameworks</h3>
            <ul className="list-disc pl-2">
              <li>ETL</li>
              <li>GraphQL</li>
              <li>Django</li>
              <li>Apache Spark</li>
              <li>PySpark</li>
              <li>Scala</li>
              <li>Unix/Linux</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>
            M.S. Computer Science, Ira A. Fulton Schools of Engineering, Arizona State University (Aug 2022 - May 2024)
          </li>
          <li>
            B.Tech. Electronics and Communications Engineering, Nirma University, Institute of Technology (July 2018 - June 2022)
          </li>
        </ul>
      ),
    },
    {
      title: "Publication",
      id: "publication",
      content: (
        <ul className="list-disc pl-2">
          <li>GraDex - Graph-based Data Analytics for Extractive Text Summarization (SPRINGER)</li>
        </ul>
      ),
    },
  ];
  

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
  
    const handleTabChange = (id) => {
      startTransition(() => {
        setTab(id);
    });
  };

  return (
    <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-0 sm:py-16 xl:px-8">
            <Image src="" alt="Profile Photo" width={500} height={500} />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-lg text-justify">
                    As a highly skilled graduate student in Computer Science at Arizona State University, 
                    with a strong academic background (GPA: 3.93/4.0), I possess a diverse skill set 
                    spanning programming languages, frameworks, databases, cloud technologies, machine 
                    learning, and tools. 
                    <br></br>
                    My expertise lies in developing feature-rich applications, data analysis, 
                    visualization, and implementing cutting-edge solutions like deep learning for video super-resolution.
                    Beyond technical prowess, 
                    <br></br>
                    I bring strong communication, problem-solving, leadership, 
                    and adaptability skills to drive projects effectively. With a passion for continuous 
                    learning and delivering innovative solutions, I am well-equipped to make a significant 
                    impact in the field of computer science. My dedication, critical thinking, and commitment
                     to excellence enable me to tackle complex challenges and contribute meaningfully to any 
                     team or organization.
                </p> 
                <div className="flex flex-row justify-start mt-8">
                    <TabButton
                    selectTab={() => handleTabChange("skills")}
                    active={tab === "skills"}
                    >
                    {" "}
                    Skills{" "}
                    </TabButton>
                    <TabButton
                    selectTab={() => handleTabChange("education")}
                    active={tab === "education"}
                    >
                    {" "}
                    Education{" "}
                    </TabButton>
                    <TabButton
                    selectTab={() => handleTabChange("publication")}
                    active={tab === "publication"}
                    >
                    {" "}
                    Publication{" "}
                    </TabButton>
                </div>
                <div className="mt-8">
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
)};

export default AboutSection;