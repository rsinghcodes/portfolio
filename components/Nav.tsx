import React from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { NextComponentType } from "next";
import cn from "classnames";

// import MobileMenu from "./MobileMenu";

function NavItem({ href, text }: { href: string; text: string }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? "font-semibold text-gray-800"
            : "font-normal text-gray-600",
          "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 transition-all"
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

const Nav: NextComponentType = () => {
  return (
    <nav className="flex items-center justify-between w-full max-w-7xl p-6 mx-auto my-0 text-gray-900 bg-white sticky-nav md:my-2 bg-opacity-60">
      <a href="#skip" className="skip-nav">
        Skip to content
      </a>
      <button
        aria-label="Logo"
        type="button"
        className="w-10 h-10 p-3 bg-gray-200 rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          className="w-4 h-4 text-gray-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>
      <div className="font-mono text-xs">
        <NavItem href="/" text="01. Home" />
        <NavItem href="/skills" text="02. Skills" />
        <NavItem href="/projects" text="03. Projects" />
        <NavItem href="/contact" text="04. Contact" />
      </div>
    </nav>
  );
};

export default Nav;
