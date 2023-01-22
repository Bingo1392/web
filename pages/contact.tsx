import { Container, createStyles, Group } from "@mantine/core";
import Contacts from "@/components/Contacts";
import EventTimeline from "@/components/EventTimeline";
import FooterLinks from "@/components/FooterLinks";

const useStyles = createStyles((theme) => ({
  container: {
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl,
  },

  contactGroup: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
}));

function Contact() {
  const { classes } = useStyles();
  return (
    <>
      <Container size={"md"} className={classes.container}>
        <Group className={classes.contactGroup} grow>
          <Contacts />
          <EventTimeline />
        </Group>
      </Container>
      <div>
        <FooterLinks />
      </div>
    </>
  );
}

export default Contact;
