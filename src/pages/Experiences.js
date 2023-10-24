import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import exhibition from "../assets/images/exhibition.png";
import abitat from "../assets/images/abitat.png";
import campusMaker from "../assets/images/campusMaker.png";
import areopagus from "../assets/images/areopagus.png";
import peie from "../assets/images/peie.png";

export default function Experiences() {
  const experiences = [
    {
      title: "Scientific and Technological Exhibition (2018)",
      description:
        "I had the privilege of being part of the team that secured first place in this competition. My role was focused on developing the web components of our project, contributing to our success.",
      image: exhibition,
      alt: "Me before the exhibition",
    },
    {
      title: "Construtech Abitat (2020)",
      description:
        "I played a pivotal role in the creation of a platform designed to streamline building operations, increase efficiency, and reduce costs.",
      image: abitat,
      alt: "A photo of myself at the office",
    },
    {
      title: "Campus Maker (2021)",
      description:
        "I took the lead in developing a web dashboard for a factory, showcasing the performance of production lines. We utilized data collected by Raspberry Pi devices integrated into the production lines to create this informative tool.",
      image: campusMaker,
      alt: "Me with my cowarkers at the office",
    },
    {
      title: "Areopagus (2021)",
      description:
        "I'm currently working as a full-stack developer at a software house, where I've been actively involved in cloud infrastructure and DevOps as well. This journey has exposed me to a wide array of programming languages, technologies, and various business domains.",
      image: areopagus,
      alt: "A photo of myself working at areopagus",
    },
    {
      title: "Platform Engineering Immersive Experience (2023)",
      description:
        "In August, I participated in the PEIE event in São Paulo, an initiative organized by Jeferson and the LinuxTips team. My role was in a team that developed an infrastructure application to facilitate vertical and horizontal scaling, incorporating features like monitoring, logging, backup, security, and infrastructure management. Our objective was to apply industry best practices in infrastructure, leveraging concepts such as Infrastructure as Code (IaC), containerization, clustering, cloud infrastructure, DevOps, DevSecOps, observability, platform engineering, GitFlow, and GitOps.",
      image: peie,
      alt: "A photo of myself participating at the event",
    },
  ];

  return (
    <>
      <Typography gutterBottom>
        Over the years, I've had some exciting experiences in the tech and
        development world, including:
      </Typography>

      {experiences.map((experience) => (
        <Grid container spacing={2} direction="row" flexWrap="nowrap">
          <Grid item md={4}>
            <img src={experience.image} alt={experience.alt} width="100%" />
          </Grid>
          <Grid item md={7}>
            <List>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography gutterBottom>{experience.title}</Typography>
                  }
                  secondary={<Typography>{experience.description}</Typography>}
                ></ListItemText>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      ))}
    </>
  );
}
