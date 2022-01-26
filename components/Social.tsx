import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

const Social = () => {
  return (
    <div className="w-10 fixed bottom-0 left-10 right-auto z-10 text-slate-600 dark:text-slate-300 hidden md:block">
      <ul className="flex flex-col items-center m-0 p-0 list-none after:block after:w-0.5 after:h-36 after:my-0 after:mx-auto after:bg-slate-600 dark:after:bg-slate-300">
        <li className="p-2.5 hover:-translate-y-1 focus:-translate-y-1 dark:hover:text-cyan-300">
          <a href="https://github.com/rsinghcodes">
            <FiGithub size="20" />
          </a>
        </li>
        <li className="p-2.5 hover:-translate-y-1 focus:-translate-y-1 dark:hover:text-cyan-300">
          <a href="mailto:raghvendrrsingh@gmail.com">
            <FiMail size="20" />
          </a>
        </li>
        <li className="p-2.5 hover:-translate-y-1 focus:-translate-y-1 dark:hover:text-cyan-300">
          <a href="https://github.com/rsinghcodes">
            <FiTwitter size="20" />
          </a>
        </li>
        <li className="mb-5 p-2.5 hover:-translate-y-1 focus:-translate-y-1 dark:hover:text-cyan-300">
          <a href="https://github.com/rsinghcodes">
            <FiLinkedin size="20" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
