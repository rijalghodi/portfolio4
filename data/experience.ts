export type Experience = {
  position: string;
  company: string;
  companyLink?: string;
  experienceCategory: string;
  startDate: string;
  endDate: string;
  logo?: string;
  shortDesc: string;
  tasks?: string[];
};

export const experiences: Experience[] = [
  {
    position: 'Tech Leader',
    company: 'Studio Inovasi Indonesia',
    experienceCategory: 'Full Time',
    startDate: 'Mar 2022',
    endDate: 'Now',
    logo: '/companies/paperstudio.png',
    shortDesc: 'AI Assistant for academic papers.',
    tasks: [
      'Conceptualize the vision of products, design, and tech stacks',
      'managed team progress with 95% accuracy',
      'Gained 200 early adopters',
    ],
  },
  {
    position: 'Front End Developer',
    company: 'PT. Optima Media Teknologi',
    companyLink: 'https://dev.optimap.id',
    experienceCategory: 'Full Time',
    startDate: 'Dec 2022',
    endDate: 'Mar 2023',
    logo: '/companies/optimap.svg',
    shortDesc:
      'IT consulting, specializing in Geographical Information System expertise.',
    tasks: [
      'Focused on building user interfaces that aligned with design specifications and promoted project goals',
      'Developed 5 applications, ranging from simple to complex designs, for a diverse client base spanning the education and mining industries.',
    ],
  },
];
