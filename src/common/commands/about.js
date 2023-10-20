import { Typography } from "@mui/material";

export default function About() {
  const paragraphs = [
    "Greetings! I am Cleiton, and I'm currently completing my Computer Science degree at Unifacs. Additionally, I am a certified technician in Systems Development from SENAI. Throughout my academic journey, I have accumulated a wealth of experiences that have greatly influenced my professional path. I am deeply passionate about technology and am committed to expanding my knowledge in software development and cloud infrastructure.",
    "In my current role at a software house, I am exposed to a diverse range of programming languages and exciting challenges. This opportunity allows me to continue honing my skills and expertise in the ever-evolving field of technology.",
    "As I progress in my professional journey, I am driven by a deep passion for technology and a strong determination to push the boundaries of what I can achieve. I firmly believe in the power of continuous learning and seize every opportunity to contribute to innovative solutions. I am excited about the future of technology and the possibilities it holds.",
  ];

  return paragraphs.map((paragraph) => (
    <Typography marginBottom={3}>
      {paragraph}
    </Typography>
  ));
}
