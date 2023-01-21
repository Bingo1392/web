import { createStyles, Container, Title, Text, Button } from "@mantine/core";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  root: {
    height: "calc(100vh - 50px)",
    backgroundImage: "url(background.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "right 15% bottom calc(90%);",
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 3,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  content: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 530,
    fontSize: 48,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: 500,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
  },

  control: {
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 22,
    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
    maxWidth: "280px",
  },
}));

function Hero() {
  const { classes } = useStyles();
  const router = useRouter();
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "red", to: "yellow" }}
              >
                thorough developer
              </Text>{" "}
              with focus on detail
            </Title>

            <Text className={classes.description} mt={30}>
              Let&apos;s build a path to your business together!
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: "red", to: "yellow" }}
              size="xl"
              radius={"lg"}
              className={classes.control}
              mt={40}
              onClick={() => {
                router.push("https://www.linkedin.com/in/jan-zitnik/");
              }}
            >
              Get in touch
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
