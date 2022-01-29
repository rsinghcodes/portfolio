import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center w-full min-h-screen"
    >
      <h2 className="flex items-center relative mx-0 mb-10 w-full text-slate-900 dark:text-slate-100 text-2xl md:text-3xl font-semibold leading-tight whitespace-nowrap before:relative before:bottom-1 before:content-['03.'] before:mr-2.5 before:text-cyan-400 before:font-mono before:text-xl md:before:text-2xl before:font-normal after:block after:relative after:-top-[5px] after:w-full after:md:w-[200px] after:xl:w-[300px] after:h-[1px] after:m-[10px] after:sm:ml-5 after:bg-slate-600">
        Projects I&apos;ve Built
      </h2>
      <ul className="p-0 m-0 list-none">
        <li className="relative grid gap-2.5 md:grid-cols-12 items-center mb-24">
          <div className="relative col-[1/7] row-[1/-1] text-right">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-300 mb-5">
                Blogging App - ReadList
              </h3>
              <div className="shadow-lg relative z-[2] p-6 rounded bg-slate-100 dark:bg-slate-800">
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-400">
                  A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                  iTerm, and more. Available on Visual Studio Marketplace,
                  Package Control, Atom Package Manager, and npm.
                </p>
              </div>
              <ul className="flex justify-end flex-wrap relative z-[2] mx-0 mt-6 mb-2.5 p-0 list-none font-mono">
                <li className="text-slate-600 dark:text-slate-400 text-xs ml-5 whitespace-nowrap">
                  ReactJS
                </li>
                <li className="text-slate-600 dark:text-slate-400 text-xs ml-5 whitespace-nowrap">
                  ChakraUI
                </li>
                <li className="text-slate-600 dark:text-slate-400 text-xs ml-5 whitespace-nowrap">
                  GraphQL
                </li>
                <li className="text-slate-600 dark:text-slate-400 text-xs ml-5 whitespace-nowrap">
                  MongoDB
                </li>
              </ul>
              <div className="flex justify-end items-center relative mr-2.5 mt-2.5 text-slate-600 dark:text-slate-400">
                <a
                  className="relative z-[1] flex justify-center items-center p-2.5"
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  className="relative z-[1] flex justify-center items-center p-2.5"
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="relative grid gap-2.5 grid-cols-12 items-center mb-24">
          <div className="relative col-[1/7] row-[1/-1] text-left">
            <div>
              <h3 className="text-3xl font-semibold text-slate-600 dark:text-slate-300 mb-5">
                Bulletin Board
              </h3>
              <div className="shadow-lg relative z-[2] p-6 rounded bg-slate-100 dark:bg-slate-800">
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                  iTerm, and more. Available on Visual Studio Marketplace,
                  Package Control, Atom Package Manager, and npm.
                </p>
              </div>
              <ul className="flex justify-start flex-wrap relative z-[2] mx-0 mt-6 mb-2.5 p-0 list-none font-mono">
                <li className="text-slate-600 dark:text-slate-400 text-xs ml-5 whitespace-nowrap">
                  ReactJS
                </li>
                <li className="text-slate-600 dark:text-slate-400 text-xs ml-5 whitespace-nowrap">
                  ChakraUI
                </li>
              </ul>
              <div className="flex justify-start items-center relative mr-2.5 mt-2.5 text-slate-600 dark:text-slate-400">
                <a
                  className="relative z-[1] flex justify-center items-center p-2.5"
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  className="relative z-[1] flex justify-center items-center p-2.5"
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
