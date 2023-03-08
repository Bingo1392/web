import {
  Card,
  Text,
  Group,
  createStyles,
  Image,
  Badge,
  ActionIcon,
} from "@mantine/core";
import { Project } from "@/lib/config";
import { IconExternalLink } from "@tabler/icons";

const useStyles = createStyles((theme, _params, getRef) => {
  const image = getRef("image");

  return {
    title: {
      color: theme.white,
      marginBottom: 5,
    },

    bodyText: {
      color: theme.colors.dark[2],
      marginLeft: 7,
    },

    type: {
      color: theme.colors.dark[2],
    },

    image: {
      objectPosition: "right bottom",
    },

    section: {
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
      }`,
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      paddingBottom: theme.spacing.md,
    },

    label: {
      textTransform: "uppercase",
      fontSize: theme.fontSizes.xs,
      fontWeight: 700,
    },
  };
});

interface ImageCardProps {
  projectData: Project;
}

export function ProjectCard({ projectData }: ImageCardProps) {
  const { classes, theme } = useStyles();

  return (
    <Card withBorder p="lg" radius="md">
      <Card.Section>
        <Image
          src={`/projects/${projectData.thumbnail}`}
          alt={`${projectData.name} image`}
          height={240}
          style={{
            objectPosition: "top",
          }}
        />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Group>
            <Text fz="lg" fw={500}>
              {projectData.name}
            </Text>
            {projectData.web ? (
              <ActionIcon
                color="dark"
                size="xs"
                variant="transparent"
                onClick={() => {
                  window.open(projectData.web, "_ blank");
                }}
              >
                <IconExternalLink />
              </ActionIcon>
            ) : (
              <></>
            )}
          </Group>
          <Badge variant={"dot"}>
            {projectData.from} - {projectData.to || "present"}
          </Badge>
        </Group>
        <Text fz={"xs"}>{projectData.systemType}</Text>
        <Text fz="sm" mt="xs">
          {projectData.projectDescription}
        </Text>
        <Text mt="md" className={classes.label} c="dimmed">
          {projectData.role}
        </Text>
        <Text fz="sm" mt="xs">
          {projectData.positionDescription}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={7} mt={"lg"}>
          {projectData.technologies.map((technology) => (
            <Badge key={technology} radius={"xs"} size={"sm"}>
              {technology}
            </Badge>
          ))}
        </Group>
      </Card.Section>
    </Card>
  );
}
