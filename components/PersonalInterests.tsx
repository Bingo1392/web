import {
  Image,
  Text,
  Container,
  ThemeIcon,
  Title,
  SimpleGrid,
  createStyles,
} from "@mantine/core";

const config = {
  data: [
    {
      image: "personalInterests/dnd-logo.png",
      title: "Game master",
      description:
        "I love games like Dungeons & Dragons. " +
        "My biggest waste of free time is my own world created for these purposes.",
    },
    {
      image: "personalInterests/gaming.png",
      title: "PC gamer",
      description:
        "I like to play online competitive and cooperative games with my friends",
    },
    {
      image: "personalInterests/coding.png",
      title: "Coder",
      description: "It is best if you enjoy your work. Just like me.",
    },
    {
      image: "personalInterests/money.png",
      title: "Co-founder and investor",
      description:
        "Everyone has to provide for themselves in old age. " +
        "It is best to invest while you have plenty of energy.",
    },
  ],
};

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: 80,
    paddingBottom: 50,
  },

  item: {
    display: "flex",
  },

  itemIcon: {
    padding: theme.spacing.xs,
    marginRight: theme.spacing.md,
  },

  itemTitle: {
    marginBottom: theme.spacing.xs / 2,
  },

  supTitle: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: 800,
    fontSize: theme.fontSizes.sm,
    color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
      .color,
    letterSpacing: 0.5,
  },

  title: {
    lineHeight: 1,
    textAlign: "center",
    marginTop: theme.spacing.xl,
  },

  description: {
    textAlign: "center",
    marginTop: theme.spacing.xs,
  },

  highlight: {
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    padding: 5,
    paddingTop: 0,
    borderRadius: theme.radius.sm,
    display: "inline-block",
    color: theme.colorScheme === "dark" ? theme.white : "inherit",
  },
}));

interface FeatureImage {
  image: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

interface FeaturesImagesProps {
  supTitle: React.ReactNode;
  description: React.ReactNode;
  data: FeatureImage[];
}

export default function PersonalInterests() {
  const { classes } = useStyles();
  const { data } = config;

  const items = data.map((item) => (
    <div className={classes.item} key={item.image}>
      <ThemeIcon
        variant="light"
        className={classes.itemIcon}
        size={60}
        radius="md"
      >
        <Image src={item.image} />
      </ThemeIcon>

      <div>
        <Text weight={700} size="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text color="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <Container size={700} className={classes.wrapper}>
      <Text className={classes.supTitle}>Personal Interests</Text>

      <Title className={classes.title} order={2}>
        Life is <span className={classes.highlight}>not</span> only about work.
      </Title>

      <Container size={660} p={0}>
        <Text color="dimmed" className={classes.description}>
          Like everyone I do other things besides work. You can describe me as:
        </Text>
      </Container>

      <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
        style={{ marginTop: 30 }}
      >
        {items}
      </SimpleGrid>
    </Container>
  );
}
