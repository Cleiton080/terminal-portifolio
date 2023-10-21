import Help from "../pages/Help";
import Version from "../pages/Version";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Experiences from "../pages/Experiences";
import Projects from "../pages/Projects";
import { redirectTo } from "./utils";
import { socials } from "./constants";

const commands = [
  [/clear/gi, () => {}],
  [/help/gi, () => <Help />],
  [/version/gi, () => <Version />],
  [/about/gi, () => <About />],
  [/skills/gi, () => <Skills />],
  [/experiences/gi, () => <Experiences />],
  [/projects/gi, () => <Projects />],
  [/linkedin/gi, () => redirectTo(socials.linkedin, { target: "_blank" })],
];

export default commands;
