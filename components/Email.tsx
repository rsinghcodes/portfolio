import React from "react";

const Email = ({ email }: { email: string }) => {
  return (
    <div className="w-10 fixed bottom-0 left-auto right-10 z-10 hidden md:block">
      <div className="flex flex-col items-center relative after:block after:w-0.5 after:h-24 after:my-0 after:mx-auto after:bg-gray-600 dark:after:bg-slate-300">
        <a
          className="my-5 mx-auto p-2.5 font-mono text-xs leading-5 tracking-widest hover:-translate-y-1 focus:-translate-y-1 text-slate-600 dark:text-slate-300 dark:hover:text-cyan-300"
          style={{ writingMode: "vertical-rl" }}
          href={`mailto:${email}`}
        >
          {email}
        </a>
      </div>
    </div>
  );
};

export default Email;
