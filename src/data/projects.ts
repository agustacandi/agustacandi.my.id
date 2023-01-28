type Project = {
  url: string;
  img_url: string;
  title: string;
  description: string;
};

const projects: Project[] = [
  {
    url: "/projects/twibbon-generator",
    img_url: "/assets/images/marsha.jpg",
    title: "Twibbon Generator",
    description: "A simple Twibbon generator for Twitter profile picture.",
  },
  {
    url: "/projects/reposin",
    img_url: "/assets/images/marsha.jpg",
    title: "Point of Sale - Reposin",
    description: "POS Desktop Based Application",
  },
  {
    url: "/projects/epasys",
    img_url: "/assets/images/marsha.jpg",
    title: "Epasys",
    description: "Mobile and Web Based Application",
  },
];

export default projects;
