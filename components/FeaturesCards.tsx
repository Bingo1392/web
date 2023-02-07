import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
} from "@mantine/core";
import { IconYinYang, IconShieldCheck, IconTie } from "@tabler/icons";

const mockdata = [
  {
    title: "User Experience",
    description:
      "I achieve the perfect user experience by combining the " +
      "responsiveness of the environment and adapting the " +
      "content to the size of the client device.",
    icon: IconYinYang,
  },
  {
    title: "Security",
    description:
      "I use the latest technologies and patterns in " +
      "development to achieve maximum security for your data.",
    icon: IconShieldCheck,
  },
  {
    title: "Professional approach",
    description:
      "Firstly I do a detailed analysis of the problem " +
      "than I propose an ideal solution. ",
    icon: IconTie,
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}));

export default function FeaturesCards() {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      p="xl"
    >
      <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text size="sm" color="dimmed" mt="sm" align={"justify"}>
        {feature.description}
      </Text>
    </Card>
  ));
  return (
    <Container size="lg" py="xl">
      <Group position="center">
        <Badge variant="filled" size="lg">
          What I do
        </Badge>
      </Group>

      <Title order={2} className={classes.title} align="center" mt="sm">
        Web apps with modern and secure technologies.
      </Title>

      <Text
        color="dimmed"
        className={classes.description}
        align="center"
        mt="md"
      >
        I specialize in JavaScript development. I mainly create applications
        using React and Next.js, which provides the benefits of both backend and
        frontend development.
      </Text>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
