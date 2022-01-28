import type { NextPage } from 'next';

import Container from '../components/Container';
import { Hero, About, Skills, Projects, Contact } from '../components/sections';

const Home: NextPage = () => {
  return (
    <Container>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Container>
  );
};

export default Home;
