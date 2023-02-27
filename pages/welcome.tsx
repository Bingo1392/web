import Profile from "@/components/Profile";
import { createStyles } from "@mantine/core";
import Hero from "@/components/Hero";
import FeaturesCards from "@/components/FeaturesCards";
import FooterLinks from "@/components/FooterLinks";
import PersonalInterests from "@/components/PersonalInterests";

const useStyles = createStyles((theme) => ({
  profile: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing.md,
    marginTop: theme.spacing.xl,
  },

  services: {
    marginTop: theme.spacing.xl,
  },
}));

function Welcome() {
  const { classes } = useStyles();
  return (
    <>
      <div>
        <Hero />
      </div>
      <div className={classes.profile}>
        <Profile />
      </div>
      <div className={classes.services}>
        <FeaturesCards />
      </div>
      <div>
        <PersonalInterests />
      </div>
      <div>
        <FooterLinks />
      </div>
    </>
  );
}

export default Welcome;
