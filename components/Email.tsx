import React from 'react';

const Email = ({ email }: { email: string }) => {
  return (
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
  );
};

export default Email;
