import { TechStack } from '@/types';

export const techStacks: TechStack[] = [
  // Frontend
  {
    category: 'Frontend & Design',
    techs: [
      {
        name: 'NextJS',
        level: 'advance',
        color: 'dark',
        image: '/tech-stacks/next.png',
        link: 'https://nextjs.org/',
      },
      {
        name: 'NuxtJS',
        level: 'intermediete',
        color: 'green',
        image: '/tech-stacks/nuxt.png',
        link: 'https://nuxt.com/',
      },
      {
        name: 'Mantine UI',
        level: 'advance',
        color: 'blue',
        image: '/tech-stacks/mantine.png',
        link: 'https://mantine.dev/',
      },
      {
        name: 'Figma',
        level: 'advance',
        color: 'blue',
        image: '/tech-stacks/figma.png',
        link: 'https://figma.com/',
      },
    ],
  },
  // Backend
  {
    category: 'Backend & Database',
    techs: [
      {
        name: 'NestJS',
        level: 'advance',
        color: 'red',
        image: '/tech-stacks/nest.png',
        link: 'https://nestjs.com/',
      },
      {
        name: 'PostgreSQL',
        level: 'advance',
        color: 'teal',
        image: '/tech-stacks/postgre.png',
        link: 'https://www.postgresql.org/',
      },
      {
        name: 'Golang',
        level: 'advance',
        color: 'blue',
        image: '/tech-stacks/go.png',
        link: 'https://go.dev/',
      },
    ],
  },
  // Others
  {
    category: 'Machine Learning',
    techs: [
      {
        name: 'LangChain',
        level: 'advance',
        color: 'green',
        image: '/tech-stacks/langchain.png',
        link: 'https://www.langchain.com/',
      },
      {
        name: 'HuggingFace',
        level: 'advance',
        color: 'yellow',
        image: '/tech-stacks/huggingface.png',
        link: 'https://huggingface.co/',
      },
      {
        name: 'Tensorflow',
        level: 'advance',
        color: 'blue',
        image: '/tech-stacks/tensor.png',
        link: 'https://www.tensorflow.org/',
      },
      {
        name: 'Scikit Learn',
        level: 'advance',
        color: 'blue',
        image: '/tech-stacks/scikit.png',
        link: 'https://scikit.org',
      },
    ],
  },
  {
    category: 'Devops',
    techs: [
      {
        name: 'Docker',
        level: 'advance',
        color: 'blue',
        image: '/tech-stacks/docker.png',
        link: 'https://www.docker.com/',
      },
    ],
  },
];
