import {
  createStyles,
  Text,
  Title,
  TextInput,
  Button,
  Image,
  Container,
} from "@mantine/core";
import image from "../public/profile.png";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing.xl * 2,
    borderRadius: theme.radius.md,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[2],
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column-reverse",
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: "40%",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  body: {
    paddingRight: theme.spacing.xl * 4,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: "flex",
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: "100%",
    flex: "1",
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

export default function Profile() {
  const { classes } = useStyles();
  return (
    <Container>
      <div className={classes.wrapper}>
        <div className={classes.body}>
          <Title className={classes.title}>Jan Žitník</Title>
          <Text weight={500} size="lg" mb={5}>
            Co-founder & Software developer
          </Text>
          <Text size="sm" color="dimmed" align={"justify"}>
            Software developer with more than 8 years of experience in web
            application development. I have experience both in expanding and
            maintaining long-standing large applications, as well as in the
            delivery of new solutions. I focus on ease of use and a friendly
            user experience.
          </Text>
        </div>
        <Image src={image.src} className={classes.image} />
      </div>
    </Container>
  );
}
