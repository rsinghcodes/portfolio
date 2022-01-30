import Image from 'next/image';
import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ src, name, children, techs, githubLink, liveLink }) => (
  <li className="relative grid grid-cols-1 lg:grid-cols-2 items-center mb-24">
    <div className="hidden lg:flex justify-center items-center">
      <a href={liveLink} target="_blank" rel="noopener noreferrer">
        <Image src={src} width={530} height={320} alt={name} />
      </a>
    </div>
    <div className="relative lg:text-right p-6 lg:p-0 shadow-lg lg:shadow-none bg-slate-50 dark:bg-slate-800 lg:bg-transparent dark:lg:bg-transparent odd:order-2 even:order-1">
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-300 mb-5">
          {name}
        </h3>
        <div className="lg:shadow-lg relative z-[2] lg:p-6 lg:rounded   lg:bg-slate-100 dark:lg:bg-slate-800">
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400">
            {children}
          </p>
        </div>
        <ul className="flex justify-start lg:justify-end flex-wrap relative z-[2] mx-0 mt-6 mb-2.5 p-0 list-none font-mono">
          {techs.map((tech, i) => (
            <li
              className="text-slate-600 dark:text-slate-400 text-xs first-of-type:ml-0 ml-3 lg:ml-5 whitespace-nowrap"
              key={i}
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex justify-start lg:justify-end items-center relative mr-2.5 mt-2.5 text-slate-600 dark:text-slate-400">
          <a
            className="relative z-[1] flex justify-center items-center p-2.5"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub size={20} />
          </a>
          <a
            className="relative z-[1] flex justify-center items-center p-2.5"
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  </li>
);

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
        <ProjectCard
          name="Blogging App - ReadList"
          src={`https://user-images.githubusercontent.com/67682451/149627685-e53e0702-83cf-4433-acb0-98103a622cb1.png`}
          techs={['ReactJS', 'ChakraUI', 'GraphQL', 'MongoDB']}
          githubLink={`https://github.com/`}
          liveLink={`https://github.com/`}
        >
          ReadList is a blog web application where people can share writings,
          content and their ideas online. This app allows readers to read, like,
          comment and share on social handles.
        </ProjectCard>
        <li className="relative grid grid-cols-1 lg:grid-cols-2 items-center mb-24">
          <div className="hidden lg:flex justify-center items-center order-2">
            <a
              href={`https://github.com/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={`https://user-images.githubusercontent.com/67682451/124460610-326cbd80-ddad-11eb-8ce8-1128a14ee443.png`}
                width={530}
                height={320}
                alt={''}
              />
            </a>
          </div>
          <div className="relative lg:text-left p-6 lg:p-0 shadow-lg lg:shadow-none bg-slate-50 dark:bg-slate-800 lg:bg-transparent dark:lg:bg-transparent order-1">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-300 mb-5">
                Bulletin Board
              </h3>
              <div className="lg:shadow-lg relative z-[2] lg:p-6 lg:rounded   lg:bg-slate-100 dark:lg:bg-slate-800">
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-400">
                  An app to write anything on the board like reading list,
                  brainstorming ideas, upcoming appointments, to-do lists, and
                  many more creative things.
                </p>
              </div>
              <ul className="flex justify-start lg:justify-start flex-wrap relative z-[2] mx-0 mt-6 mb-2.5 p-0 list-none font-mono">
                {['ReactJS', 'ChakraUI'].map((tech, i) => (
                  <li
                    className="text-slate-600 dark:text-slate-400 text-xs first-of-type:ml-0 ml-3 lg:ml-5 whitespace-nowrap"
                    key={i}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="flex justify-start items-center relative mr-2.5 mt-2.5 text-slate-600 dark:text-slate-400">
                <a
                  className="relative z-[1] flex justify-center items-center p-2.5"
                  href={`https://github.com/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  className="relative z-[1] flex justify-center items-center p-2.5"
                  href={`https://github.com/`}
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
