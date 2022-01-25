import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse sm:flex-row items-start">
      <div className="flex flex-col pr-8">
        <h2 className="font-mono text-gray-600 mb-7">Hi, my name is</h2>
        <h1 className="font-bold text-4xl md:text-7xl tracking-tight text-black">
          Raghvendra Singh.
        </h1>
        <h1 className="font-bold text-4xl md:text-7xl tracking-tight mt-2.5 text-gray-600">
          I build things for the web.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-5">
          I'm a final year undergraduate student pursuing B.S in IT from Career
          Point University, Kota. I'm a passionate Developer with a knack of
          learning something new everyday, working to better understand how to
          make scalable Softwares which can be highly impactful. I am a
          fun-loving, goal-oriented, optimistic personality.
        </p>
        <p className="text-lg md:text-xl text-gray-600 mt-5">
          A firm believer of Ideas + Technology = Success.
        </p>
        <p className="text-lg md:text-xl text-gray-600 mt-5">
          I love exploring newer technologies and developing software solutions
          and quick hacks. In my free time, I work on my logic building skills
          and enhancing my competitive programming skills. I always have this 1
          % done attitude, The more I learn, the more I want to learn.
        </p>
      </div>
      <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
        <Image
          alt="Lee Robinson"
          height={176}
          width={176}
          src=""
          className="rounded-full filter grayscale"
        />
      </div>
    </section>
  );
};

export default Hero;
