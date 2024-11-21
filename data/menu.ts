export type Menu = {
  title: string;
  link: string;
  openInNewTab?: boolean;
};

export const menus: Menu[] = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Project',
    link: '/project',
  },
  {
    title: 'Article',
    link: '/blog',
  },
  {
    title: 'Github',
    link: 'https://github.com/rijalghodi',
    openInNewTab: true,
  },
];
