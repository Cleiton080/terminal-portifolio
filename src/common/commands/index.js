import About from "./about";
import Help from "./help";
import Version from "./version";

export default [
  [/help/gi, () => <Help />],
  [/version/gi, () => <Version />],
  [/about/gi, () => <About />],
];
