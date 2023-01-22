import { createStyles, Card, Overlay, Button, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    height: 240,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  content: {
    position: "absolute",
    padding: theme.spacing.xl,
    zIndex: 1,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },

  action: {
    position: "absolute",
    bottom: theme.spacing.xl,
    right: theme.spacing.xl,
  },

  title: {
    color: theme.white,
    marginBottom: theme.spacing.xs / 2,
  },

  description: {
    color: theme.white,
    maxWidth: 220,
  },
}));

export function RedRobotCard() {
  const { classes, cx, theme } = useStyles();

  return (
    <Card
      radius="md"
      style={{ backgroundImage: "url(rr-people.jpg)" }}
      className={classes.card}
    >
      <div className={classes.content}>
        <Text size="lg" weight={700} className={classes.title}>
          Red Robot s.r.o.
        </Text>

        <Text size="sm" className={classes.description}>
          We simplify life through software
        </Text>

        <Button
          className={classes.action}
          variant="white"
          color="dark"
          component="a"
          size="xs"
          onClick={() => {
            window.open("https://www.redrobot.cz", "_ blank");
          }}
        >
          Let&apos;s work together = Go to Red Robot
        </Button>
      </div>
    </Card>
  );
}
