import type { NextPage } from 'next';

import Container from '../components/Container';
import { About, Contact, Hero, Projects, Skills } from '../components/sections';

const Home: NextPage = () => {
  return (
    <Container title="Raghvendra Singh">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Container>
  );
};

export default Home;
