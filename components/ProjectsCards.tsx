import {
  Text,
  Title,
  Container,
  SimpleGrid,
  createStyles,
} from "@mantine/core";
import { Project } from "@/lib/config";
import { ImageCard } from "@/components/ImageCard";

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
      textAlign: "left",
    },
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      textAlign: "left",
    },
  },
}));

interface ProjectsCardsProps {
  projects?: Project[];
}

export function ProjectsCards({ projects }: ProjectsCardsProps) {
  const { classes, theme } = useStyles();
  const cards = projects?.map((project, index) => (
    <ImageCard
      key={project.id}
      thumbnail={project.thumbnail}
      name={project.name}
      systemType={project.systemType}
    />
  ));

  return (
    <div>
      <Container>
        <Title className={classes.title}>Look what i did</Title>
      </Container>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          Some projects I made in work others are personal.
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={3}
        spacing={theme.spacing.lg}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: "xl" },
          { maxWidth: 755, cols: 1, spacing: "xl" },
        ]}
      >
        {cards}
      </SimpleGrid>
    </div>
  );
}
