const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center w-full min-h-screen"
    >
      <h2 className="flex items-center relative mx-0 mb-10 w-full text-slate-800 dark:text-slate-300 text-[26px] sm:text-[2rem] font-semibold leading-tight whitespace-nowrap before:relative before:bottom-1 before:content-['01.'] before:mr-2.5 before:text-cyan-400 before:font-mono before:text-xl md:before:text-2xl before:font-normal after:block after:relative after:-top-[5px] after:w-full after:md:w-[200px] after:xl:w-[300px] after:h-[1px] after:m-[10px] after:sm:ml-5 after:bg-slate-600">
        About Me
      </h2>
      <div className="relative overflow-hidden shadow-xl flex bg-slate-100 rounded sm:rounded dark:bg-slate-800/70 dark:backdrop-blur ring-1 ring-inset ring-slate-500/30 dark:ring-white/10">
        <div className="relative w-full flex flex-col">
          <div className="flex-none border-b border-slate-500/30">
            <div className="flex items-center h-8 space-x-1.5 px-3">
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
              <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
            </div>
          </div>
          <div className="relative min-h-0 flex-auto flex flex-col">
            <div className="flex-auto relative block text-slate-50 p-5 overflow-auto">
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mt-5">
                I am a recent graduate with a{' '}
                <span className="text-slate-800 dark:text-slate-300 font-medium">
                  Bachelor of Science degree in Information Technology
                </span>
                . I am passionate about designing and building products that
                have a positive impact on the lives of users. I am not limited
                to any specific tools or technologies, as I believe that they
                are simply a means to build. This mindset has allowed me to be a
                quick learner and to focus on solving the problem at hand.
              </p>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mt-5">
                I am always eager to learn new things and to push the boundaries
                of what is possible.{' '}
                <span className="text-slate-800 dark:text-slate-300 font-medium">
                  In my free time,
                </span>{' '}
                I enjoy exploring new technologies, developing software
                solutions, and creating quick hacks. I am also constantly
                working to improve my logic building skills and my programming
                skills. I have a 1% done attitude, which means the more I learn,
                the more I want to learn. I believe that there is always room
                for improvement, and I am always striving to learn more and to
                become a better engineer.
              </p>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 my-5">
                I am confident that I have the skills and experience necessary
                to be a valuable asset to any team. I am a hard worker, always
                willing to learn new things, and look for ways to improve. I
                have passion to make a positive impact on the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
