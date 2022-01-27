import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import Head from './Head';
import NavItem from './NavItem';
import Social from './Social';
import Email from './Email';
import Footer from './Footer';

const Container = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-[#0B1120]">
      <Head />
      <nav className="flex items-center justify-between w-full py-8 px-12 mx-auto my-0 text-gray-900 bg-slate-50 dark:bg-[#0B1120] sticky-nav bg-opacity-60">
        <a href="#skip" className="skip-nav">
          Skip to content
        </a>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-600"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="w-4 h-4 text-gray-800 dark:text-gray-200"
            >
              {resolvedTheme === 'dark' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
        <div className="font-mono text-xs">
          <NavItem href="/#about" text="01. About" />
          <NavItem href="/#skills" text="02. Skills" />
          <NavItem href="/#projects" text="03. Projects" />
          <NavItem href="/#contact" text="04. Contact" />
        </div>
      </nav>
      <Social />
      <Email email="email@gmail.com" />
      <main
        id="skip"
        className="flex flex-col mx-auto w-full px-6 md:px-[100px] xl:px-4 max-w-5xl min-h-screen bg-slate-50 dark:bg-[#0B1120]"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Container;
