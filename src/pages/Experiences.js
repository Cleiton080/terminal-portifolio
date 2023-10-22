import {
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { transformAsciiImage } from "../common/utils";
import exhibition from "../assets/ascii/exhibition";
import abitat from "../assets/ascii/abitat";
import campusMaker from "../assets/ascii/campusMaker";
import areopagus from "../assets/ascii/areopagus";
import peie from "../assets/ascii/peie";

export default function Experiences() {
  const experiences = [
    {
      title: "Scientific and Technological Exhibition (2018)",
      description:
        "I had the privilege of being part of the team that secured first place in this competition. My role was focused on developing the web components of our project, contributing to our success.",
      image: transformAsciiImage(exhibition, 1),
    },
    {
      title: "Construtech Abitat (2020)",
      description:
        "I played a pivotal role in the creation of a platform designed to streamline building operations, increase efficiency, and reduce costs.",
      image: transformAsciiImage(abitat, 1),
    },
    {
      title: "Campus Maker (2021)",
      description:
        "I took the lead in developing a web dashboard for a factory, showcasing the performance of production lines. We utilized data collected by Raspberry Pi devices integrated into the production lines to create this informative tool.",
      image: transformAsciiImage(campusMaker, 1),
    },
    {
      title: "Areopagus (2021)",
      description:
        "I'm currently working as a full-stack developer at a software house, where I've been actively involved in cloud infrastructure and DevOps as well. This journey has exposed me to a wide array of programming languages, technologies, and various business domains.",
      image: transformAsciiImage(areopagus, 1),
    },
    {
      title: "Platform Engineering Immersive Experience (2023)",
      description:
        "In August, I participated in the PEIE event in São Paulo, an initiative organized by Jeferson and the LinuxTips team. My role was in a team that developed an infrastructure application to facilitate vertical and horizontal scaling, incorporating features like monitoring, logging, backup, security, and infrastructure management. Our objective was to apply industry best practices in infrastructure, leveraging concepts such as Infrastructure as Code (IaC), containerization, clustering, cloud infrastructure, DevOps, DevSecOps, observability, platform engineering, GitFlow, and GitOps.",
      image: transformAsciiImage(peie, 1),
    },
  ];

  return (
    <>
      <Typography gutterBottom>
        Over the years, I've had some exciting experiences in the tech and
        development world, including:
      </Typography>

      {experiences.map((experience) => (
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          useFlexGap
          flexWrap="nowrap"
          paddingBottom={2}
        >
          {experience.image}
          <List>
            <ListItem>
              <ListItemText
                primary={<Typography gutterBottom>{experience.title}</Typography>}
                secondary={<Typography>{experience.description}</Typography>}
              ></ListItemText>
            </ListItem>
          </List>
        </Stack>
      ))}
    </>
  );
}
