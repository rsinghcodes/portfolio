import type { NextPage } from 'next';
import NextLink from 'next/link';

import Container from '../components/Container';

const NotFound: NextPage = () => {
  return (
    <Container title="Page Not Found | Raghvendra Singh">
      <section className="flex flex-col justify-center items-center w-full max-w-xl min-h-screen">
        <h4 className="font-mono font-normal text-md text-cyan-400 dark:text-cyan-300 mb-5 before:relative before:content-[''] before:mr-2.5 before:text-cyan-400 dark:before:text-cyan-300 before:text-sm md:before:text-md before:font-normal">
          Oops! Page Not Found
        </h4>
        <h2 className="text-center relative mx-0 mb-5 w-full text-slate-900 dark:text-slate-100 text-5xl md:text-6xl font-semibold leading-tight whitespace-nowrap">
          404
        </h2>
        <p className="text-center text-lg md:text-xl text-slate-600 dark:text-slate-400">
          It seems you&apos;ve found something that used to exist, or you
          spelled something wrong. I&apos;m guessing you spelled something
          wrong. Can you double check that URL?
        </p>
        <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
          <NextLink legacyBehavior href="/">
            <a className="text-cyan-400 dark:text-cyan-300 bg-transparent border-[1px] border-solid border-cyan-400 dark:border-cyan-300 rounded text-sm font-mono cursor-pointer no-underline transition-all duration-[0.25s] ease-[cubic-bezier(0.645, 0.045, 0.355, 1)] py-5 px-7">
              Return Home
            </a>
          </NextLink>
        </div>
      </section>
    </Container>
  );
};

export default NotFound;
