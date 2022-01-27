import type { NextPage } from 'next';

import Container from '../components/Container';
import { Hero, About, Skills } from '../components/sections';

const Home: NextPage = () => {
  return (
    <Container>
      <Hero />
      <About />
      <Skills />
    </Container>
  );
};

export default Home;
