import docker from "./images/docker.svg";
import eslint from "./images/eslint.svg";
import mobx from "./images/mobx.svg";
import nest from "./images/nest.svg";
import next from "./images/next.svg";
import nginx from "./images/nginx.svg";
import phaser from "./images/phaser.svg";
import react from "./images/react.svg";
import sass from "./images/sass.svg";
import styledComponents from "./images/styled-components.svg";
import three from "./images/three.svg";
import typescript from "./images/typescript.svg";
import vite from "./images/vite.svg";
import webpack from "./images/webpack.svg";

const TECHNOLOGIES_CONFIG = {
  docker: {
    name: "Docker",
    icon: docker,
  },
  eslint: {
    name: "ESlint",
    icon: eslint,
  },
  mobx: {
    name: "MobX",
    icon: mobx,
  },
  nest: {
    name: "Nest JS",
    icon: nest,
  },
  next: {
    name: "Next JS",
    icon: next,
  },
  nginx: {
    name: "NGINX",
    icon: nginx,
  },
  phaser: {
    name: "Phaser JS",
    icon: phaser,
  },
  react: {
    name: "React JS",
    icon: react,
  },
  sass: {
    name: "Sass",
    icon: sass,
  },
  styledComponents: {
    name: "Styled components",
    icon: styledComponents,
  },
  three: {
    name: "Three JS",
    icon: three,
  },
  typescript: {
    name: "TypeScript",
    icon: typescript,
  },
  vite: {
    name: "Vite",
    icon: vite,
  },
  webpack: {
    name: "Webpack",
    icon: webpack,
  },
};

type TechnologyType = keyof typeof TECHNOLOGIES_CONFIG;

const TECHNOLOGIES_ARRAY: TechnologyType[] = [
  "typescript",
  "react",
  "mobx",
  "webpack",
  "vite",
  "next",
  "nest",
  "three",
  "phaser",
  "sass",
  "styledComponents",
  "nginx",
  "docker",
  "eslint",
];

const TECHNOLOGIES = TECHNOLOGIES_ARRAY.map(
  (technology) => TECHNOLOGIES_CONFIG[technology]
);

export { TECHNOLOGIES_CONFIG, TECHNOLOGIES_ARRAY, TECHNOLOGIES };

export type { TechnologyType };
