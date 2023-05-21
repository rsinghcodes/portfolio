import Image from 'next/image';
import { skills } from '../../data/data';

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center w-full max-w-[700px] min-h-screen"
    >
      <h2 className="flex items-center relative mx-0 mb-10 w-full text-slate-800 dark:text-slate-300 text-[26px] sm:text-[2rem] font-semibold leading-tight whitespace-nowrap before:relative before:bottom-1 before:content-['02.'] before:mr-2.5 before:text-cyan-400 before:font-mono before:text-xl md:before:text-2xl before:font-normal after:block after:relative after:-top-[5px] after:w-full after:md:w-[200px] after:xl:w-[300px] after:h-[1px] after:m-[10px] after:sm:ml-5 after:bg-slate-600">
        Tech Stack, I Know
      </h2>
      <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-6">
        still a work in progress but working on adding more skills soon...
      </p>
      <div className="flex flex-row justify-center items-center m-0 p-0 before:block before:w-[1px] before:h-80 before:md:h-[182px] before:my-0 before:mr-6 before:bg-slate-600">
        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3">
          {skills.map(({ name, src, width, height }, i) => (
            <div className="flex flex-row items-center" key={i}>
              <Image alt={name} src={src} width={width} height={height} />
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 ml-2 -mb-1">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
