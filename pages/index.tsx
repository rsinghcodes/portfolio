import type { NextPage } from "next";
import Container from "../components/Container";

const Home: NextPage = () => {
  return (
    <Container>
      <section className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col pr-8">
          <h2 className="font-mono text-slate-600 dark:text-cyan-300 mb-7">
            Hi, my name is
          </h2>
          <h1 className="font-bold text-4xl sm:text-5xl md:text-7xl tracking-tight text-slate-900 dark:text-white">
            Raghvendra Singh.
          </h1>
          <h1 className="font-bold text-4xl md:text-7xl tracking-tight mt-2.5 text-slate-700 dark:text-slate-300">
            I build things for the web.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mt-5">
            I'm a final year undergraduate student pursuing B.S in IT from
            Career Point University, Kota. I'm a passionate Developer with a
            knack of learning something new everyday, working to better
            understand how to make scalable Softwares which can be highly
            impactful. I am a fun-loving, goal-oriented, optimistic personality.
          </p>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mt-5">
            A firm believer of Ideas + Technology = Success.
          </p>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mt-5">
            I love exploring newer technologies and developing software
            solutions and quick hacks. In my free time, I work on my logic
            building skills and enhancing my competitive programming skills. I
            always have this 1 % done attitude, The more I learn, the more I
            want to learn.
          </p>
        </div>
      </section>
    </Container>
  );
};

export default Home;
