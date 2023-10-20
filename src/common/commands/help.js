import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ListItemSecondaryAction } from "@mui/material";

export default function Help() {
  const listStyle = {
    margin: 0,
    padding: 0,
  };

  const commands = [
    {
      title: "Basics",
      content: [
        {
          title: "version",
          caption: "Display the terminal's current version.",
        },
        {
          title: "help",
          caption: "List available commands and their descriptions.",
        },
      ],
    },
    {
      title: "Career",
      content: [
        {
          title: "about",
          caption: "Learn more about my background and expertise.",
        },
        {
          title: "skills",
          caption: "Discover a brief overview of my skills and qualifications.",
        },
        {
          title: "experiences",
          caption: "Explore some of my key experiences in the IT field.",
        },
        {
          title: "projects",
          caption: "View the projects I've worked on.",
        },
      ],
    },
    {
      title: "Contact",
      content: [
        {
          title: "linkedin",
          caption: "Open my LinkedIn profile in your browser for networking.",
        },
      ],
    },
  ];

  return (
    <>
      <Typography>Welcome to Cleiton's Portfolio Terminal</Typography>
      <Typography>Commands can be classified as follows:</Typography>

      {commands.map(({ title, content }) => (
        <>
          <Typography>{title}</Typography>
          <List style={listStyle}>
            {content.map((body) => (
              <ListItem>
                <ListItemText primary={body.title} />
                <ListItemSecondaryAction>
                  <Typography>{body.caption}</Typography>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </>
      ))}
    </>
  );
}
