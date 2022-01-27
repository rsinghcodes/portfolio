import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

const Social = () => {
  return (
    <div className="w-10 fixed bottom-0 left-10 right-auto z-10 text-slate-600 dark:text-slate-300 hidden md:block">
      <ul className="flex flex-col items-center m-0 p-0 list-none after:block after:w-[1px] after:h-[90px] after:my-0 after:mx-auto after:bg-slate-600 dark:after:bg-slate-300">
        <li className="mx-2.5 my-4 hover:-translate-y-1 focus:-translate-y-1 hover:text-cyan-400 dark:hover:text-cyan-300">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FiGithub size="20" />
          </a>
        </li>
        <li className="mx-2.5 my-4 hover:-translate-y-1 focus:-translate-y-1 hover:text-cyan-400 dark:hover:text-cyan-300">
          <a href="mailto:" target="_blank" rel="noreferrer">
            <FiMail size="20" />
          </a>
        </li>
        <li className="mx-2.5 my-4 hover:-translate-y-1 focus:-translate-y-1 hover:text-cyan-400 dark:hover:text-cyan-300">
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <FiTwitter size="20" />
          </a>
        </li>
        <li className="mx-2.5 mt-4 mb-9 hover:-translate-y-1 focus:-translate-y-1 hover:text-cyan-400 dark:hover:text-cyan-300">
          <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer">
            <FiLinkedin size="20" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;