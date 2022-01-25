import type { NextPage } from "next";
import { Head, Nav } from "../components";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <Nav />
      <main
        id="skip"
        className="flex flex-col justify-center w-full max-w-7xl p-6 mx-auto bg-white"
      >
        <Hero />
      </main>
    </>
  );
};

export default Home;
