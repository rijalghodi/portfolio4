export type Menu = {
  title: string;
  link: string;
  openInNewTab?: boolean;
};

export const menus: Menu[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Project",
    link: "/projects",
  },
  {
    title: "Article",
    link: "/articles",
  },
  {
    title: "Github",
    link: "https://github.com/rijalghodi",
    openInNewTab: true,
  },
];
