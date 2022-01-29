import Image from 'next/image';
import React from 'react';

interface SkillIconPropsType {
  width: number;
  height: number;
  src: string;
  children: string;
}

const SkillIcon = ({ width, height, src, children }: SkillIconPropsType) => (
  <div className="flex flex-row items-center">
    <Image alt={children} src={src} width={width} height={height} />
    <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 ml-2 -mb-1">
      {children}
    </p>
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center w-full max-w-[700px] min-h-screen"
    >
      <h2 className="flex items-center relative mx-0 mb-10 w-full text-slate-900 dark:text-slate-100 text-2xl md:text-3xl font-semibold leading-tight whitespace-nowrap before:relative before:bottom-1 before:content-['02.'] before:mr-2.5 before:text-cyan-400 before:font-mono before:text-xl md:before:text-2xl before:font-normal after:block after:relative after:-top-[5px] after:w-full after:md:w-[200px] after:xl:w-[300px] after:h-[1px] after:m-[10px] after:sm:ml-5 after:bg-slate-600">
        Tech Stack, I Know
      </h2>
      <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-6">
        still a work in progress but working on adding more skills soon...
      </p>
      <div className="flex flex-row justify-center items-center m-0 p-0 before:block before:w-[1px] before:h-[16.5rem] before:md:h-[182px] before:my-0 before:mr-6 before:bg-slate-600">
        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3">
          <SkillIcon src="/icons/html-5.png" width={24} height={24}>
            HTML5
          </SkillIcon>
          <SkillIcon src="/icons/css-3.png" width={24} height={24}>
            CSS3
          </SkillIcon>
          <SkillIcon src="/icons/javascript.png" width={24} height={24}>
            JavaScript
          </SkillIcon>
          <SkillIcon src="/icons/typescript.png" width={24} height={24}>
            TypeScript
          </SkillIcon>
          <SkillIcon src="/icons/reactjs.png" width={24} height={24}>
            ReactJS
          </SkillIcon>
          <SkillIcon src="/icons/redux.png" width={24} height={24}>
            Redux
          </SkillIcon>
          <SkillIcon src="/icons/nextjs.png" width={24} height={24}>
            Next.js
          </SkillIcon>
          <SkillIcon src="/icons/tailwind-css.png" width={24} height={14}>
            Tailwind CSS
          </SkillIcon>
          <SkillIcon src="/icons/node-js.png" width={24} height={24}>
            Node.js
          </SkillIcon>
          <SkillIcon src="/icons/graphql.png" width={24} height={24}>
            GraphQL
          </SkillIcon>
          <SkillIcon src="/icons/expressjs.png" width={24} height={14}>
            Expressjs
          </SkillIcon>
          <SkillIcon src="/icons/mongodb.png" width={24} height={24}>
            MongoDB
          </SkillIcon>
          <SkillIcon src="/icons/firebase.png" width={24} height={24}>
            Firebase
          </SkillIcon>
          <SkillIcon src="/icons/python.png" width={24} height={24}>
            Python
          </SkillIcon>
          <SkillIcon src="/icons/mysql.png" width={24} height={24}>
            MySQL
          </SkillIcon>
        </div>
      </div>
    </section>
  );
};

export default Skills;
