import { Typography } from "@mui/material";

export default function Welcome() {
  const paragraphs = [
    "Welcome to my portifolio!",
    "For a short summary of all commands, run `help`.",
  ];

  return (
    <>
      {paragraphs.map((paragraph) => (
        <Typography marginBottom={3}>{paragraph}</Typography>
      ))}
    </>
  );
}
