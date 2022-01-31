import React from 'react';
import { socials } from '../data/data';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center h-auto min-h-[70px] px-4 pt-4 pb-6 text-center">
      <div className="block md:hidden w-full max-w-[150px] my-0 mx-auto text-slate-600 dark:text-slate-300">
        <ul className="flex items-center justify-between p-0 m-0 list-none">
          {socials.map(({ link, icon }, i) => (
            <li key={i}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5"
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-slate-600 dark:text-slate-400 text-xs font-mono leading-4">
        <a
          className="p-2.5"
          href="https://github.com/rsinghcodes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed &amp; Built by Raghvendra Singh
        </a>
      </div>
    </footer>
  );
};

export default Footer;
