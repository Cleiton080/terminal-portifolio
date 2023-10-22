import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import me from "../assets/images/me.png";

export default function About() {
  const specializationList = [
    "* Web Application Development",
    "* Software Architecture",
    "* Continuous Integration and Continuous Delivery (CI/CD)",
    "* Collaboration in Multidisciplinary Teams",
  ];

  return (
    <Grid container spacing={2} direction="row" flexWrap="nowrap">
      <Grid item md={4}>
        <img src={me} alt="A ascii photo of myself" width="100%"/>
      </Grid>
      <Grid item md={7}>
        <Box>
          <Typography gutterBottom>
            Hello, I'm Cleiton, a software developer passionate about
            translating lines of code into innovative solutions, and currently,
            I'm exploring the exciting world of DevOps. With over 4 years of
            experience in the technology industry, I've tackled challenging
            projects that have allowed me to grow and evolve continuously.
          </Typography>
          <Typography gutterBottom>
            My professional journey has been marked by an unwavering pursuit of
            excellence in software development. My main areas of expertise
            include:
          </Typography>
          <List>
            {specializationList.map((specialization) => (
              <ListItem>
                <ListItemText primary={specialization} />
              </ListItem>
            ))}
          </List>
          <Typography gutterBottom>
            My approach to software development is based on problem-solving and
            a constant quest for improvement. I believe that technology has the
            power to positively impact people's lives, and I'm committed to
            creating solutions that are not only functional but also intuitive
            and enjoyable to use.
          </Typography>
          <Typography gutterBottom>
            I believe that the success of any project depends not only on the
            code but also on how people work together.
          </Typography>
          <Typography gutterBottom>
            I'm always eager to stay updated on the latest industry trends and
            take on new challenges.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
