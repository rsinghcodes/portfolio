import React from 'react';
import NextLink from 'next/link';

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-start w-full min-h-screen">
      <h2 className="font-mono font-semibold text-cyan-400 dark:text-cyan-300 mb-7">
        Hi, my name is
      </h2>
      <h1 className="font-bold text-[40px] leading-[1.1] sm:text-6xl md:text-7xl tracking-tight text-slate-900 dark:text-slate-100">
        Raghvendra Singh.
      </h1>
      <h1 className="font-bold text-[40px] leading-[1.1] sm:text-6xl md:text-7xl tracking-tight mt-2.5 text-slate-600 dark:text-slate-300">
        I build things for the web.
      </h1>
      <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mt-5 w-full max-w-xl">
        I&apos;m a developer with a knack of learning something new everyday,
        working to better understand how to make scalable Softwares which can be
        highly impactful. I am a fun-loving, goal-oriented, optimistic
        personality.
      </p>
      <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
        <NextLink href="/#contact">
          <a className="text-cyan-400 dark:text-cyan-300 bg-transparent border-[1px] border-solid border-cyan-400 dark:border-cyan-300 rounded text-sm font-mono cursor-pointer no-underline transition-all duration-[0.25s] ease-[cubic-bezier(0.645, 0.045, 0.355, 1)] py-5 px-7">
            Get in touch
          </a>
        </NextLink>
      </div>
    </section>
  );
};

export default Hero;
