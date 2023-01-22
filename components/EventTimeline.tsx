import { Timeline, Text, Group, ActionIcon, createStyles } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons";
import FormattedDate from "@/components/FormattedDate";

const data = [
  {
    id: 18,
    title: "Workshop s liborem Vákou",
    description: "Real estate investments in Czech Republic with Libor Váka.",
    date: "2023-01-17",
  },
  {
    id: 17,
    title: "ReactiveConf 2019",
    description: "Two day frontend focused event from ReactiveConf team.",
    link: "https://2019.reactiveconf.com/",
    date: "2019-10-30",
  },
  {
    id: 16,
    title:
      "2019 #4 Build a fullstack GraphQL app with Prisma, Apollo and React",
    description: "PragueJS",
    date: "2019-04-30",
  },
  {
    id: 15,
    title:
      "2019 #3 WebAssembly - binary format for executables used by web pages",
    description: "PragueJS",
    date: "2019-03-26",
  },
  {
    id: 14,
    title: "2019 #2 GraphQL or REST? Design the best possible API for your app",
    description: "PragueJS",
    date: "2019-02-28",
  },
  {
    id: 13,
    title: "2019 #1 Build desktop apps with Electron",
    description: "PragueJS",
    date: "2019-01-29",
  },
  {
    id: 12,
    title: "Webdev — Testing — p.2 (integration testing, Cypress)",
    description: "Avocode",
    link: "https://www.facebook.com/events/1897721920345774/",
    date: "2018-11-21",
  },
  {
    id: 11,
    title: "Webdev — Testing — p.1 (unit testing, best practices)",
    description: "Avocode",
    link: "https://www.facebook.com/events/1917812591679644/",
    date: "2018-11-14",
  },
  {
    id: 10,
    title: "ReactiveConf 2018",
    description: "Two day frontend focused event from ReactiveConf team.",
    link: "https://www.facebook.com/events/forum-karl%C3%ADn/reactiveconf-2018/596101854100883/",
    date: "2018-10-29",
  },
  {
    id: 9,
    title: "Webdev — Naučte se React.js — p.7 — sexy Redux!",
    description: "Avocode",
    link: "https://www.facebook.com/events/679718525554196/",
    date: "2017-06-15",
  },
  {
    id: 8,
    title: "Webdev — Naučte se React.js — p.6 — na Redux!",
    description: "Avocode",
    link: "https://www.facebook.com/events/134130697146344/",
    date: "2017-06-01",
  },
  {
    id: 7,
    title: "Webdev — Naučte se React.js — p.5 — na Redux!",
    description: "Avocode",
    link: "https://www.facebook.com/events/405903596459767/",
    date: "2017-05-11",
  },
  {
    id: 6,
    title: "Petr Ferschmann - REST API je mrtvé, ať žije GraphQL a Relay",
    description: "Fakulta inforačních technologií ČVUT",
    link: "https://www.facebook.com/events/281751188903132/",
    date: "2017-05-02",
  },
  {
    id: 5,
    title: "Vývoj software v praxi",
    description: "Katedra počítačů FEL ČVUT",
    date: "2017-04-21",
  },
  {
    id: 4,
    title: "Webdev — Naučte se React.js — p.4",
    description: "Avocode",
    link: "https://www.facebook.com/events/339042433160645/",
    date: "2017-04-06",
  },
  {
    id: 3,
    title: "Webdev — Naučte se React.js — p.3",
    description: "Avocode",
    link: "https://www.facebook.com/events/1562279730471307/",
    date: "2017-03-16",
  },
  {
    id: 2,
    title: "Webdev — Naučte se React.js — p.2",
    description: "Avocode",
    link: "https://www.facebook.com/events/1432069566804537/",
    date: "2017-03-02",
  },
  {
    id: 1,
    title: "Webdev - Úvod do Reactu",
    description: "Avocode",
    link: "https://www.facebook.com/events/187391461667152/",
    date: "2016-11-10",
  },
];

const useStyles = createStyles((theme) => ({
  description: {
    marginBottom: theme.spacing.xl,
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

  wrapper: {
    marginBottom: theme.spacing.xl,
    [theme.fn.smallerThan("sm")]: {
      maxWidth: "none",
    },
  },
}));

export default function EventTimeline() {
  const { classes } = useStyles();

  const items = data.map((item) => {
    return (
      <Timeline.Item
        title={
          item.link ? (
            <Group>
              <div>{item.title}</div>
              <ActionIcon
                color="dark"
                size="xs"
                variant="transparent"
                onClick={() => {
                  window.open(item.link, "_ blank");
                }}
              >
                <IconExternalLink />
              </ActionIcon>
            </Group>
          ) : (
            <div>{item.title}</div>
          )
        }
        key={item.id}
      >
        <Text color="dimmed" size="sm">
          {item.description}
        </Text>
        <Text size="xs" mt={4}>
          <FormattedDate date={item.date} />
        </Text>
      </Timeline.Item>
    );
  });

  return (
    <div className={classes.wrapper}>
      <Text
        color="dimmed"
        className={classes.description}
        align="center"
        mt="md"
      >
        Every once in a while, you’ll see a Golbat that’s missing some fangs.
        This happens when hunger drives it to try biting a Steel-type Pokémon.
      </Text>
      <Timeline color="red" reverseActive bulletSize={14} lineWidth={2}>
        {items}
      </Timeline>
    </div>
  );
}
