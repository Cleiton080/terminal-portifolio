import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";

export default function Skills() {
  const skills = [
    {
      title: 'Programming Languages',
      description: 'Javascript, Python, Ruby, PHP, Bash',
    },
    {
      title: 'Front-end Technologies',
      description: 'Html5, Css3, ReactJs, React Native, nextjs',
    },
    {
      title: 'Back-end Technologies',
      description: 'Node, Nestjs, Express, Adonisjs, Ruby on Rails',
    },
    {
      title: 'Databases',
      description: 'MySql, Postgres, Sqlite, Mongodb, Redis, DynamoDb',
    },
    {
      title: 'DevOps',
      description: 'Docker, Terraform, ELK, Github Actions, Gitlab ci',
    },
    {
      title: 'Cloud',
      description: 'AWS, GCP',
    },
  ];

  return (
    <>
      <List>
        {skills.map((skill, index) => (
          <ListItem key={index}>
            <ListItemText primary={skill.title} />
            <ListItemSecondaryAction>
              <Typography>{skill.description}</Typography>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <Typography>
        Feel free to ask for more details or explore my portfolio to see how
        these skills, including soft skills, have been applied in my projects
        and experiences.
      </Typography>
    </>
  );
}
