import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaJava } from "react-icons/fa";
import { motion } from "framer-motion";
import InfiniteSlider from "../components/InfiniteSlider";

const technologies = [
  { icon: <FaReact size={40} />, name: "React" },
  { icon: <FaNodeJs size={40} />, name: "Node.js" },
  { icon: <FaHtml5 size={40} />, name: "HTML5" },
  { icon: <FaCss3Alt size={40} />, name: "CSS3" },
  { icon: <FaJs size={40} />, name: "JavaScript" },
  { icon: <FaGithub size={40} />, name: "GitHub" },
  { icon: <FaJava size={40} />, name: "Java" },
];

const Portfolio = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="p-5 flex justify-between items-center bg-gray-800 shadow-md">
        <h1 className="text-xl font-bold">KuroNoKenshi.dev</h1>
        <nav>
          <ul className="flex gap-5">
            <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center p-10 gap-10">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold">Hello, I'm a Full-Stack Developer</h2>
          <p className="text-gray-400 mt-3">I build modern and performant web applications.</p>
          <button className="mt-5 px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded">Contact Me</button>
        </div>
        <img src="\img\profile.jpeg" className="w-64  rounded-full" />
      </section>

      {/* Technology Sliders */}
      <InfiniteSlider />
      
      {/* Contact Section */}
      <div className="text-center my-5">
        <p>Find me on <a href="#" className="text-blue-500">LinkedIn</a> & <a href="#" className="text-blue-500">GitHub</a></p>
      </div>
      <motion.div className="overflow-hidden whitespace-nowrap py-3 bg-gray-700">
        <motion.div className="flex gap-10" animate={{ x: [0, 300] }} transition={{ repeat: Infinity, duration: 5 }}>
          {technologies.map((tech, index) => <div key={index} className="flex items-center gap-2">{tech.icon}{tech.name}</div>)}
        </motion.div>
      </motion.div>
      
      {/* Projects Section */}
      <section id="projects" className="p-10">
        <h2 className="text-3xl font-bold text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          <div className="bg-gray-800 p-5 rounded shadow-md">Project 1</div>
          <div className="bg-gray-800 p-5 rounded shadow-md">Project 2</div>
          <div className="bg-gray-800 p-5 rounded shadow-md">Project 3</div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-center py-5 mt-5">
        <p>&copy; 2025 My Portfolio. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
