import Image from 'next/image';
import React from 'react';

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center w-full max-w-[700px] min-h-screen"
    >
      <h2 className="flex items-center relative mx-0 mb-10 w-full text-2xl md:text-3xl font-semibold leading-tight whitespace-nowrap before:relative before:bottom-1 before:content-['02.'] before:mr-2.5 before:text-cyan-400 before:font-mono before:text-xl md:before:text-2xl before:font-normal after:block after:relative after:-top-[5px] after:w-full after:md:w-[200px] after:xl:w-[300px] after:h-[1px] after:m-[10px] after:sm:ml-5 after:bg-slate-600">
        Tech Stack, I Know
      </h2>
      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-6">
        still a work in progress but working on adding more skills soon...
      </p>
      <div className="flex flex-row justify-start items-center m-0 p-0 before:block before:w-[1px] before:h-[16.5rem] before:md:h-[182px] before:my-0 before:mr-6 before:bg-slate-600">
        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3">
          <div className="flex flex-row items-center">
            <Image alt="HTML5" src="/icons/html-5.png" width={24} height={24} />
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 ml-2 -mb-1">
              HTML5
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Image alt="CSS3" src="/icons/css-3.png" width={24} height={24} />
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 ml-2 -mb-1">
              CSS3
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Image
              alt="JavaScript"
              src="/icons/javascript.png"
              width={24}
              height={24}
            />
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 ml-2 -mb-1">
              JavaScript
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Image
              alt="TypeScript"
              src="/icons/typescript.png"
              width={24}
              height={24}
            />
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 ml-2 -mb-1">
              TypeScript
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Image
              alt="Reactjs"
              src="/icons/reactjs.png"
              width={24}
              height={24}
            />
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 ml-2 -mb-1">
              Reactjs
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Image alt="Redux" src="/icons/redux.png" width={24} height={24} />
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 ml-2 -mb-1">
              Redux
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Image
              alt="Nextjs"
              src="/icons/nextjs.png"
              width={24}
              height={24}
            />
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 ml-2 -mb-1">
              Next.js
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Image
              alt="Tailwind CSS"
              src="/icons/tailwind-css.png"
              width={24}
              height={14}
            />
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 ml-2 -mb-1">
              Tailwind CSS
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Image
              alt="Nodejs"
              src="/icons/node-js.png"
              width={24}
              height={24}
            />
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 ml-2 -mb-1">
              Node.js
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Image
              alt="GraphQL"
              src="/icons/graphql.png"
              width={24}
              height={24}
            />
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 ml-2 -mb-1">
              GraphQL
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Image
              alt="Expressjs"
              src="/icons/expressjs.png"
              width={24}
              height={14}
            />
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 ml-2 -mb-1">
              Expressjs
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Image
              alt="MongoDB"
              src="/icons/mongodb.png"
              width={24}
              height={24}
            />
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 ml-2 -mb-1">
              MongoDB
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Image
              alt="Python"
              src="/icons/python.png"
              width={24}
              height={24}
            />
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 ml-2 -mb-1">
              Python
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Image alt="MySQL" src="/icons/mysql.png" width={24} height={24} />
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 ml-2 -mb-1">
              MySQL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
