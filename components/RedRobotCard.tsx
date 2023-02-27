import { createStyles, Card, Overlay, Button, Text } from "@mantine/core";
import rrPeople from "@/public/rr-people.jpg";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  card: {
    height: 240,
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
    <Card radius="md" className={classes.card}>
      <Image
        alt="Red Robot crew image"
        src={rrPeople}
        fill
        quality={100}
        style={{
          objectFit: "cover",
          objectPosition: "right 15% bottom calc(90%)",
        }}
      />
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
