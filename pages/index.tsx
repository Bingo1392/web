import Profile from "@/components/Profile";
import { createStyles, Container, Title, Text, Button } from "@mantine/core";
import Hero from "@/components/Hero";
import FeaturesCards from "@/components/FeaturesCards";

const useStyles = createStyles((theme) => ({
  hero: {},

  profile: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing.md,
    marginTop: theme.spacing.xl,
  },
}));

function About() {
  const { classes } = useStyles();
  return (
    <>
      <div className={classes.hero}>
        <Hero />
      </div>
      <div className={classes.profile}>
        <Profile />
      </div>
      <div>
        <FeaturesCards />
      </div>
    </>
  );
}

export default About;
