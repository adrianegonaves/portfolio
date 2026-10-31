export const siteConfig = {
  name: "Adriane Almeida Gonçalves",
  email: "adrianegonaves@gmail.com",
  linkedIn: "https://www.linkedin.com/in/adrianegonaves/",
  github: "https://github.com/adrianegonaves",
  location: "Santarém, Portugal",
  role: "Frontend Developer · Software Engineer · Full Stack Developer",
  nameFirst: "Adriane",
  nameLast: "Gonçalves",
} as const;

export type ProjectLink = {
  id: string;
  techs: string[];
  demoUrl?: string;
  repoUrl?: string;
};

export const projects: ProjectLink[] = [
  {
    id: "project2",
    techs: ["Python", "TensorFlow", "Keras", "CNN"],
    repoUrl: siteConfig.github,
  },
];
