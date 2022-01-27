import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-start w-full min-h-screen">
      <h2 className="font-mono text-cyan-400 dark:text-cyan-300 mb-7">
        Hi, my name is
      </h2>
      <h1 className="font-bold text-[40px] leading-[1.1] md:text-7xl tracking-tight text-slate-900 dark:text-white">
        Raghvendra Singh.
      </h1>
      <h1 className="font-bold text-[40px] leading-[1.1] md:text-7xl tracking-tight mt-2.5 text-slate-700 dark:text-slate-300">
        I build things for the web.
      </h1>
      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mt-5">
        I&apos;m a developer with a knack of learning something new everyday,
        working to better understand how to make scalable Softwares which can be
        highly impactful. I am a fun-loving, goal-oriented, optimistic
        personality.
      </p>
    </section>
  );
};

export default Hero;
