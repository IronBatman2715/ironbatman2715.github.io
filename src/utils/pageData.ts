type PageData = {
  name: string;
  subURL: string;
};

const pages: PageData[] = [
  {
    name: "Home",
    subURL: "",
  },
  {
    name: "D&D",
    subURL: "dnd",
  },
  {
    name: "References",
    subURL: "references",
  },
];

export type { PageData };
export { pages };
export default pages;
