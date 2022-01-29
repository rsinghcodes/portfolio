import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

interface SocialLinkPropsType {
  href: string;
  children: React.ReactNode;
}

const SocialLink = ({ href, children }: SocialLinkPropsType) => (
  <li className="mx-2.5 my-4 last-of-type:mb-9 hover:-translate-y-1 focus:-translate-y-1 hover:text-cyan-400 dark:hover:text-cyan-300">
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  </li>
);

const Social = () => {
  return (
    <div className="w-10 fixed bottom-0 left-10 right-auto z-10 text-slate-600 dark:text-slate-400 hidden md:block">
      <ul className="flex flex-col items-center m-0 p-0 list-none after:block after:w-[1px] after:h-[90px] after:my-0 after:mx-auto after:bg-slate-600 dark:after:bg-slate-400">
        <SocialLink href="https://github.com/">
          <FiGithub size={20} />
        </SocialLink>
        <SocialLink href="mailto:">
          <FiMail size={20} />
        </SocialLink>
        <SocialLink href="https://twitter.com/">
          <FiTwitter size={20} />
        </SocialLink>
        <SocialLink href="https://linkedin.com/in/">
          <FiLinkedin size={20} />
        </SocialLink>
      </ul>
    </div>
  );
};

export default Social;
