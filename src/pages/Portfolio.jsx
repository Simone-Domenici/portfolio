import React from "react";
import ReversedInfiniteSlider from "../components/ReversedInfiniteSlider";
import InfiniteSlider from "../components/InfiniteSlider";


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
        <img src="/portfolio/img/profile.jpeg" className="w-64  rounded-full" />
      </section>

      {/* Technology Sliders */}
      <InfiniteSlider />
      
      {/* Contact Section */}
      <div className="text-center mt-5 mb-15">
      <section id="contact" className="text-center my-5 p-5 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-gray-400 lg:px-50 text-xl mt-3">
          Hi, I'm Simone Domenici, a passionate Full-Stack Web Developer from Rome. I love anime and video games, and my ultimate goal is to become a Game Developer. I'm constantly learning new technologies beyond web development to bring my ideas to life in the gaming world.
        </p>
        <p className="text-gray-400 mt-5">
          Find me on <a href="#" className="text-blue-500 hover:underline">LinkedIn</a> or <a href="#" className="text-blue-500 hover:underline">GitHub</a>, or reach out via <a href="mailto:your.email@example.com" className="text-blue-500 hover:underline">email</a>.
        </p>
      </section>
      </div>
      <ReversedInfiniteSlider />
      
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
      <footer className="bg-gray-800 text-center pb-5 mt-5 flex justify-center flex-col">
        <img className="h-30 text-center" src="public\img\KnK_Logo.svg" alt="Logo" />
        <p>&copy; 2025 KuroNoKenshi.dev. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
