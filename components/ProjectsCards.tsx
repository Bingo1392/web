import {
  Text,
  Title,
  Container,
  SimpleGrid,
  createStyles,
} from "@mantine/core";
import { Project } from "@/lib/config";
import { ProjectCard } from "@/components/ProjectCard";

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
    <ProjectCard key={project.id} projectData={project} />
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
        cols={2}
        spacing={theme.spacing.xl}
        breakpoints={[{ maxWidth: 900, cols: 1, spacing: "xl" }]}
      >
        {cards}
      </SimpleGrid>
    </div>
  );
}
