import { useTranslation } from "react-i18next";

export const METADATA = {
  title: "My website | JG.Kang",
  description: "I build modern UI.",
  // siteUrl: "https://ayushsingh.net/",
  siteUrl: "https://jgkang.net/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    // name: "Works",
    name: "",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    // name: "Contact",
    name: "",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop things",
  "I develop modern frontend apps",
  "I design dynamic user experience",
  "I design and develop motion",
];

export const EMAIL = "jeonggeun.kang@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/jeonggeun-kang-645511304/",
  github: "https://github.com/KangJeonggeun/",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

//I need to try with react functiional components. This means that I need to modify the funtion
//which returngs the value of these data. This should be not super complicated.
//I just need to get the proper data and modify it in the function which
//returns the <>/...
export const PROJECTS: IProject[] = [
  {
    name: "Math Bulldog",
    image: "/projects/figgen.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Pixel perfect HTML/Tailwind for Figma Auto layout designs.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://www.figma.com/community/plugin/1065278044402066626",
    tech: ["typescript", "figma", "tailwind"],
  },
  {
    name: "TUM, Student Assistant",
    image: "/projects/figgen.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Pixel perfect HTML/Tailwind for Figma Auto layout designs.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://www.figma.com/community/plugin/1065278044402066626",
    tech: ["typescript", "figma", "tailwind"],
  },
  {
    name: "SOOA design",
    image: "/projects/figgen.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Pixel perfect HTML/Tailwind for Figma Auto layout designs.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://www.figma.com/community/plugin/1065278044402066626",
    tech: ["typescript", "figma", "tailwind"],
  },
  {
    name: "Python Tutor",
    image: "/projects/figgen.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Pixel perfect HTML/Tailwind for Figma Auto layout designs.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://www.figma.com/community/plugin/1065278044402066626",
    tech: ["typescript", "figma", "tailwind"],
  },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    // "redux",
    "next",
    // "angular",
    "gsap",
    "tailwind",
    // "sass",
    "svg",
    "html",
    "css",
  ],
  // userInterface: ["figma", "sketch", "illustrator", "photoshop"],
  userInterface: ["illustrator"],
  // other: ["git", "webpack", "gulp", "lightroom", "aftereffects"],
  other: ["git"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2025",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "M.Sc. Mathematics, TUM",
    size: ItemSize.SMALL,
    subtitle:
      "Finished master's degree in TUM with focus on Algebraic Geometry",
    image: "/timeline/tum_logo.svg",
    slideImage: "/timeline/tum_master.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Student Assistat for an AI module",
    size: ItemSize.SMALL,
    subtitle:
      "Student assistant in TUM. My responsibilities were to create visualizations of mathematcal conceps and reasearch course contents.",
    image: "/timeline/tum_logo.svg",
    slideImage: "/timeline/tum_hiwi.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Python Tutor",
    size: ItemSize.SMALL,
    subtitle: "I worked as Python tutor and taught more than 40 students.",
    image: "/timeline/python_logo.svg",
    slideImage: "/timeline/python_tutor.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "SOOA Design",
    size: ItemSize.SMALL,
    subtitle: "I worked as a logo designer.",
    image: "/timeline/sooa_logo.svg",
    slideImage: "/timeline/sooa.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "B.Sc Mathematics",
    size: ItemSize.SMALL,
    subtitle:
      "HUFS, South Korea. Earned Bachelor degree with 1st position in graduation exam.",
    image: "/timeline/hufs_logo.svg",
    slideImage: "/timeline/hufs.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Udergraduate Assistant",
    size: ItemSize.SMALL,
    subtitle: "HUFS, South Korea. Udergraduate assistant in Prof.Shin's lab.",
    image: "/timeline/hufs_logo.svg",
    slideImage: "/timeline/undergraduate.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Math Teacher",
    size: ItemSize.SMALL,
    subtitle:
      "Hansol Private Academy. South Korea. Worked as a math instructor.",
    image: "/timeline/hansol_logo.svg",
    slideImage: "/timeline/math_teacher.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
