import { IconEye, IconMessageCircle } from "@tabler/icons";
import { Card, Text, Group, Center, createStyles } from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => {
  const image = getRef("image");

  return {
    card: {
      position: "relative",
      height: 240,
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],

      [`&:hover .${image}`]: {
        transform: "scale(1.03)",
      },
    },

    image: {
      ref: image,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: "cover",
      transition: "transform 500ms ease",
    },

    overlay: {
      position: "absolute",
      top: "20%",
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage:
        "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)",
    },

    content: {
      height: "100%",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      zIndex: 1,
    },

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
  };
});

interface ImageCardProps {
  name: string;
  systemType: string;
  thumbnail: string;
}

export function ImageCard({ name, systemType, thumbnail }: ImageCardProps) {
  const { classes, theme } = useStyles();

  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      href={"#"}
      target="_blank"
    >
      <div
        className={classes.image}
        style={{ backgroundImage: `url(projects/${thumbnail})` }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} weight={500}>
            {name}
          </Text>

          <Group position="apart" spacing="xs">
            <Text size="sm" className={classes.type}>
              {systemType}
            </Text>
          </Group>
        </div>
      </div>
    </Card>
  );
}
