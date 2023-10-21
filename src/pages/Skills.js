import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";

export default function Skills() {
  const hardSkills = [
    {
      title: "Infrastructure as Code (IaC)",
      content: [
        "HashiCorp Certified: Terraform Associate (003)",
        "Uncomplicating Terraform",
      ],
    },
    {
      title: "Terraform",
      content: [
        "HashiCorp Certified: Terraform Associate (003)",
        "Uncomplicating Terraform",
      ],
    },
    {
      title: "AWS",
      content: [
        "AWS Certified Cloud Practitioner",
        "Passed LinkedIn skills assessment",
      ],
    },
    {
      title: "Docker",
      content: ["Certificate of Achievement: DESCOMPLICANDO DOCKER"],
    },
    {
      title: "Ruby on Rails",
      content: ["Passed LinkedIn skills assessment"],
    },
    {
      title: "PHP",
      content: ["Passed LinkedIn skills assessment"],
    },
    {
      title: "Git",
      content: ["Passed LinkedIn skills assessment"],
    },
    {
      title: "MySQL",
      content: ["Passed LinkedIn skills assessment"],
    },
    {
      title: "JavaScript",
      content: ["Passed LinkedIn skills assessment"],
    },
    {
      title: "React.js",
      content: ["Passed LinkedIn skills assessment"],
    },
    {
      title: "Python",
      content: ["Passed LinkedIn skills assessment"],
    },
  ];

  const softSkills = [
    "Problem Solving",
    "Teamwork",
    "Communication",
    "Adaptability",
    "Critical Thinking",
  ];

  const languages = ["Portuguese (Native)", "English (Advanced)"];

  return (
    <>
      <Typography>Hard Skills and Certifications</Typography>
      <List>
        {hardSkills.map((skill) => (
          <ListItem>
            <ListItemText primary={skill.title} />
            {/* {skill.content.map((item) => (
              <Typography>{item}</Typography>
            ))} */}
          </ListItem>
        ))}
      </List>
      <Typography>Soft Skills</Typography>
      <List>
        {softSkills.map((skill) => (
          <ListItem>
            <ListItemText primary={skill} />
          </ListItem>
        ))}
      </List>
      <Typography>Languages</Typography>
      <List>
        {languages.map((language) => (
          <ListItem>
            <ListItemText primary={language} />
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
