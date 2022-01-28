import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center w-full max-w-xl min-h-screen"
    >
      <h4 className="font-mono font-normal text-md text-cyan-400 dark:text-cyan-300 mb-5 before:relative before:content-['04.'] before:mr-2.5 before:text-cyan-400 dark:before:text-cyan-300 before:text-sm md:before:text-md before:font-normal">
        What&apos;s Next?
      </h4>
      <h2 className="text-center relative mx-0 mb-5 w-full text-5xl md:text-6xl font-semibold leading-tight whitespace-nowrap">
        Get In Touch
      </h2>
      <p className="text-center text-lg md:text-xl text-slate-600 dark:text-slate-400">
        I&apos;m currently looking for the new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I&apos;ll try
        my best to get back to you!
      </p>
      <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
        <a
          className="text-cyan-400 dark:text-cyan-300 bg-transparent border-[1px] border-solid border-cyan-400 dark:border-cyan-300 rounded text-sm font-mono cursor-pointer no-underline transition-all duration-[0.25s] ease-[cubic-bezier(0.645, 0.045, 0.355, 1)] py-5 px-7"
          href="mailto:"
          target="_blank"
          rel="noreferrer"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
