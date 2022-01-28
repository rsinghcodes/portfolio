import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center h-auto min-h-[70px] px-4 pt-4 pb-6 text-center">
      <div className="block md:hidden w-full max-w-[150px] my-0 mx-auto text-slate-600 dark:text-slate-300">
        <ul className="flex items-center justify-between p-0 m-0 list-none">
          <li>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="p-5"
            >
              <FiGithub size="20" />
            </a>
          </li>
          <li>
            <a href="mailto:" target="_blank" rel="noreferrer" className="p-5">
              <FiMail size="20" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="p-5"
            >
              <FiTwitter size="20" />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noreferrer"
              className="p-5"
            >
              <FiLinkedin size="20" />
            </a>
          </li>
        </ul>
      </div>
      <div className="text-slate-600 dark:text-slate-400 text-xs font-mono leading-4">
        <a
          className="p-2.5"
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          Designed &amp; Built by Raghvendra Singh
        </a>
      </div>
    </footer>
  );
};

export default Footer;
