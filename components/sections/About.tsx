import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center w-full min-h-screen"
    >
      <h2 className="flex items-center relative mx-0 mb-10 w-full text-slate-900 dark:text-slate-100 text-2xl md:text-3xl font-semibold leading-tight whitespace-nowrap before:relative before:bottom-1 before:content-['01.'] before:mr-2.5 before:text-cyan-400 before:font-mono before:text-xl md:before:text-2xl before:font-normal after:block after:relative after:-top-[5px] after:w-full after:md:w-[200px] after:xl:w-[300px] after:h-[1px] after:m-[10px] after:sm:ml-5 after:bg-slate-600">
        About me
      </h2>
      <div className="relative overflow-hidden shadow-xl flex bg-slate-100 sm:rounded-xl dark:bg-slate-800/70 dark:backdrop-blur ring-1 ring-inset ring-slate-500/30 dark:ring-white/10">
        <div className="relative w-full flex flex-col">
          <div className="flex-none border-b border-slate-500/30">
            <div className="flex items-center h-8 space-x-1.5 px-3">
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
              <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
            </div>
          </div>
          <div className="relative min-h-0 flex-auto flex flex-col">
            <div className="flex-auto relative block text-slate-50 p-5 overflow-auto">
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mt-5">
                I&apos;m a final year undergraduate student pursuing B.S in IT
                from Career Point University, Kota. I like designing & building
                products that positively impact the lives of users. I don&apos;t
                associate myself with specific tools and technology. They are
                merely the means to build. This mindset has helped me be a quick
                learner and concentrate more on solving the problem at hand.
              </p>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mt-5">
                I love exploring newer technologies and developing software
                solutions and quick hacks. In my free time, I work on my logic
                building skills and enhancing my programming skills. I always
                have this 1 % done attitude, The more I learn, the more I want
                to learn.
              </p>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 my-5">
                A firm believer of Ideas + Technology = Success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
