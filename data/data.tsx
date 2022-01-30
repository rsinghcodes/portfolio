import { FiCode, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export const email = 'email@gmail.com';

export const socials = [
  { link: 'https://github.com/', icon: <FiGithub size={20} /> },
  { link: 'https://hackerrank.com/', icon: <FiCode size={20} /> },
  { link: 'https://twitter.com/', icon: <FiTwitter size={20} /> },
  { link: 'https://linkedin.com/in/', icon: <FiLinkedin size={20} /> },
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
    code: 'https://github.com/',
    live: 'https://twitter.com/',
  },
  {
    name: 'MyMart',
    description:
      ' An online mini-mart store where the user can do shopping of daily essentials and grocery. Stripe payment gateway as an online payment option and Google Sign-In Authentication workflow.',
    techs: ['ReactJS', 'Redux', 'M-UI', 'Firebase'],
    code: 'https://github.com/',
    live: 'https://github.com/',
  },
  {
    name: 'Bulletin Board',
    description:
      'An app to write anything on the board like reading list, brainstorming ideas, upcoming appointments, to-do lists, and many more creative things.',
    techs: ['ReactJS', 'ChakraUI'],
    code: 'https://github.com/',
    live: 'https://github.com/',
  },
];
