import React from 'react';
import Image from 'next/image';
import type { NextPage } from 'next';
import { FiExternalLink, FiFolder, FiGithub } from 'react-icons/fi';

import Container from '../components/Container';
import { projects as myprojects } from '../data/data';

const projects: NextPage = () => {
  return (
    <Container title="Projects | Raghvendra Singh">
      <section
        id="projects"
        className="flex flex-col justify-center w-full min-h-screen mt-28 sm:my-28"
      >
        <h2 className="flex items-center relative mx-0 mb-10 w-full text-slate-800 dark:text-slate-300 text-[26px] sm:text-[2rem] font-semibold leading-tight whitespace-nowrap after:block after:relative after:-top-[5px] after:w-full after:md:w-[200px] after:xl:w-[300px] after:h-[1px] after:m-[10px] after:sm:ml-5 after:bg-slate-600">
          Projects
        </h2>
        <ul className="grid gap-4 relative p-0 m-0 list-none">
          {myprojects.map(({ name, description, techs, code, live }, i) => (
            <li
              className="relative cursor-pointer shadow-lg group hover:-translate-y-2 :focus-within:-translate-y-2"
              key={i}
            >
              <div className="flex justify-between flex-col items-start relative h-full py-8 px-7 rounded bg-slate-50 dark:bg-slate-800">
                <div className="w-full h-full">
                  <div className="flex justify-between items-center mb-9 -mr-2.5">
                    <FiFolder
                      size={40}
                      className="text-cyan-400 dark:text-cyan-300"
                    />
                    <div className="flex items-center text-slate-600 dark:text-slate-400">
                      <a
                        className="relative z-[1] flex justify-center items-center pr-2.5 pl-0 hover:text-cyan-400 dark:hover:text-cyan-300"
                        href={code}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiGithub size={20} />
                      </a>
                      {live && (
                        <a
                          className="relative z-[1] flex justify-center items-center p-2.5 hover:text-cyan-400 dark:hover:text-cyan-300"
                          href={live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-[22px] font-semibold text-slate-800 dark:text-slate-300 group-hover:text-cyan-400 dark:group-hover:text-cyan-300 mb-3">
                    <a
                      href={live ? live : code}
                      target="_blank"
                      rel="noreferrer"
                      className="static before:block before:absolute before:z-0 before:w-full before:h-full before:top-0 before:left-0"
                    >
                      {name}
                    </a>
                  </h3>
                  <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400">
                    {description}
                  </p>
                  <ul className="flex items-end flex-wrap flex-grow mt-5 p-0 list-none">
                    {techs.map((tech, i: React.Key) => (
                      <li
                        className="text-slate-600 dark:text-slate-400 font-mono text-xs mr-4 last-of-type:mr-0"
                        key={i}
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
};

export default projects;
