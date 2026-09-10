export type ProjectVisualMode = "raw" | "figma";

export type Project = {
  title: string;
  company: string;
  year: string;
  href: string;
  image: string;
  background: string;
  foreground: "light" | "dark";
  imageMode?: ProjectVisualMode;
  visualWidth?: number;
  visualHeight?: number;
};

export const projects: Project[] = [
  {
    title: "Manage & Analytics Frameworks",
    company: "Amazon",
    year: "2026",
    href: "/work/manage-framework",
    image: "/project-images/homepage/manage-d26e28bb.png",
    imageMode: "figma",
    visualWidth: 400,
    visualHeight: 334,
    background: "#f5f3f0",
    foreground: "dark",
  },
  {
    title: "Multichannel Selling",
    company: "Amazon",
    year: "2025",
    href: "/work/multichannel-selling",
    image: "/project-images/homepage/multichannel-1fc6fdc8.png",
    imageMode: "figma",
    visualWidth: 401,
    visualHeight: 334.334,
    background: "#f55700",
    foreground: "light",
  },
  {
    title: "Promotions",
    company: "PayByPhone",
    year: "2022",
    href: "/work/promotions",
    image: "/project-images/homepage/promotions-3e8c6e40.png",
    imageMode: "figma",
    visualWidth: 436,
    visualHeight: 333,
    background: "#288f47",
    foreground: "light",
  },
  {
    title: "Premier Bays",
    company: "PayByPhone",
    year: "2020",
    href: "/work/premier-bays",
    image: "/project-images/homepage/premier-bays-3c929901.png",
    imageMode: "figma",
    visualWidth: 460,
    visualHeight: 333.333,
    background: "#dff1e3",
    foreground: "dark",
  },
  {
    title: "Developer Center",
    company: "Mobify (Salesforce)",
    year: "2019",
    href: "/work/developer-center",
    image: "/project-images/homepage/developer-center-80fcfad1.png",
    imageMode: "figma",
    visualWidth: 420,
    visualHeight: 350,
    background: "#edf0f6",
    foreground: "dark",
  },
  {
    title: "FIFA Ultimate Team 18 Companion App",
    company: "Electronic Arts",
    year: "2017",
    href: "/work/fut18",
    image: "/project-images/homepage/fut18-28224193.png",
    imageMode: "figma",
    visualWidth: 384,
    visualHeight: 365,
    background: "#111363",
    foreground: "light",
  },
];
