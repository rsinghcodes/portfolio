import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { SiHackerrank } from 'react-icons/si';

export const email = 'raghvendrrsingh@gmail.com';

export const socials = [
  { link: 'https://github.com/rsinghcodes', icon: <FiGithub size={20} /> },

  {
    link: 'https://twitter.com/raghvendrrsingh',
    icon: <FiTwitter size={20} />,
  },
  {
    link: 'https://linkedin.com/in/raghvendrrsingh',
    icon: <FiLinkedin size={20} />,
  },
  {
    link: 'https://hackerrank.com/rsinghcodes',
    icon: <SiHackerrank size={20} />,
  },
];

export const skills = [
  { name: 'HTML5', src: '/icons/html-5.png', width: 24, height: 24 },
  { name: 'CSS3', src: '/icons/css-3.png', width: 24, height: 24 },
  { name: 'JavaScript', src: '/icons/javascript.png', width: 24, height: 24 },
  { name: 'TypeScript', src: '/icons/typescript.png', width: 24, height: 24 },
  { name: 'ReactJS', src: '/icons/reactjs.png', width: 24, height: 22 },
  { name: 'Redux', src: '/icons/redux.png', width: 24, height: 24 },
  { name: 'Next.js', src: '/icons/nextjs.png', width: 24, height: 24 },
  {
    name: 'Tailwind CSS',
    src: '/icons/tailwind-css.png',
    width: 24,
    height: 14,
  },
  { name: 'Node.js', src: '/icons/node-js.png', width: 24, height: 24 },
  { name: 'GraphQL', src: '/icons/graphql.png', width: 24, height: 24 },
  { name: 'Expressjs', src: '/icons/expressjs.png', width: 24, height: 14 },
  { name: 'MongoDB', src: '/icons/mongodb.png', width: 24, height: 24 },
  { name: 'Git', src: '/icons/git.png', width: 24, height: 24 },
  { name: 'Python', src: '/icons/python.png', width: 24, height: 24 },
  { name: 'MySQL', src: '/icons/mysql.png', width: 24, height: 24 },
];

export const projects = [
  {
    name: 'ReadList',
    description:
      'ReadList is a blog web application where people can share writings, content and their ideas online. This app allows readers to read, like, comment and share on social handles.',
    techs: ['ReactJS', 'ChakraUI', 'GraphQL', 'MongoDB'],
    code: 'https://github.com/rsinghcodes/ReadList',
    live: 'https://readlistapp.netlify.app/',
  },
  {
    name: 'MyMart',
    description:
      ' An online mini-mart store where the user can do shopping of daily essentials and grocery. Stripe payment gateway as an online payment option and Google Sign-In Authentication workflow.',
    techs: ['ReactJS', 'Redux', 'MUI', 'Firebase'],
    code: 'https://github.com/rsinghcodes/mymart',
    live: 'https://mymartstore.netlify.app/',
  },
  {
    name: 'Bulletin Board',
    description:
      'An app to write anything on the board like reading list, brainstorming ideas, upcoming appointments, to-do lists, and many more creative things.',
    techs: ['ReactJS', 'ChakraUI'],
    code: 'https://github.com/rsinghcodes/Bulletin-Board',
    live: 'https://boardbulletin.netlify.app/',
  },
  {
    name: 'Github Profiles',
    description:
      'This app gets the profile of a github user using their github username. Displays user name, user bio, number of following, number of followers, number of repositories, etc.',
    techs: ['ReactJS', 'CSS3'],
    code: 'https://github.com/rsinghcodes/github-profiles',
    live: 'https://profilesgithub.netlify.app/',
  },
  {
    name: 'Word Scramble Game',
    description: 'Guess the correct word from the given scrambled word.',
    techs: ['HTML5', 'CSS3', 'JavaScript'],
    code: 'https://github.com/rsinghcodes/Word-Scramble-Game',
    live: 'https://scrambleword.netlify.app/',
  },
  {
    name: 'E-Cure',
    description:
      'An online web-based appointment system through which patients can fix an online appointment with the doctor.',
    techs: ['TypeScript', 'React', 'Redux', 'Expressjs', 'Node.js', 'MongoDB'],
    code: 'https://github.com/rsinghcodes/E-cure',
  },
];
