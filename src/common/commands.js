import Help from "../pages/Help";
import Version from "../pages/Version";
import About from "../pages/About";

export default [
  [/help/gi, () => <Help />],
  [/version/gi, () => <Version />],
  [/about/gi, () => <About />],
];
