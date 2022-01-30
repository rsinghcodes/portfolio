import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Head from 'next/head';
import { useRouter } from 'next/router';

import NavItem from './NavItem';
import Social from './Social';
import Footer from './Footer';
import MobileMenu from './MobileMenu';

import { email } from '../data/data';

interface ContainerPropsType {
  children: React.ReactNode;
  title: string;
}

const Container = ({ children, title }: ContainerPropsType) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const meta = {
    title: title,
    description: `Developer with passion for Computer Science`,
    // image: "https://rsinghcodes.vercel.app/static/images/banner.png",
    type: 'website',
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-100 dark:bg-slate-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        {/* <meta
          property="og:url"
          content={`https://rsinghcodes.vercel.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://rsinghcodes.vercel.app${router.asPath}`}
        /> */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Raghvendra Singh" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@raghvendrrsingh" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        {/* <meta name="twitter:image" content={meta.image} /> */}
      </Head>

      <nav className="flex items-center justify-between w-full py-8 px-6 md:px-12 mx-auto my-0 bg-slate-100 dark:bg-slate-900 sticky-nav bg-opacity-60">
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
          <MobileMenu />
          <NavItem href="/#about" text="01. About" />
          <NavItem href="/#skills" text="02. Skills" />
          <NavItem href="/#projects" text="03. Projects" />
          <NavItem href="/#contact" text="04. Contact" />
        </div>
      </nav>

      {/* ------------------------------------------Social Icons ---------------------------------------- */}

      <Social />

      {/* -------------------------------------------- Email -------------------------------------------- */}

      {email && (
        <div className="w-10 fixed bottom-0 left-auto right-10 z-10 hidden md:block">
          <div className="flex flex-col items-center relative after:block after:w-[1px] after:h-[90px] after:my-0 after:mx-auto after:bg-gray-600 dark:after:bg-slate-400">
            <a
              className="my-5 mx-auto p-2.5 font-mono text-xs leading-5 tracking-widest hover:-translate-y-1 focus:-translate-y-1 text-slate-600 dark:text-slate-400 hover:text-cyan-400 dark:hover:text-cyan-300"
              style={{ writingMode: 'vertical-rl' }}
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {email}
            </a>
          </div>
        </div>
      )}

      <main
        id="skip"
        className="flex flex-col items-center mx-auto w-full px-6 md:px-[100px] xl:px-4 max-w-5xl min-h-screen"
      >
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Container;
