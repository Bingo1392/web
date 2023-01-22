import { useEffect, useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Anchor,
  Group,
  Burger,
  MediaQuery,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import DrawerMenu from "@/components/DrawerMenu";

const mainLinks = [
  {
    link: "/",
    label: "Welcome",
  },
  // {
  //   link: "/cv",
  //   label: "CV",
  // },
  {
    link: "/contact",
    label: "contact",
  },
];

const useStyles = createStyles((theme) => ({
  header: {
    borderBottom: "none",
    backgroundColor: "transparent",
    padding: "0px !important",
    display: "flex",
    justifyContent: "space-between",
    backdropFilter: "blur(10px)",
  },

  inner: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.fn.largerThan("sm")]: {
      justifyContent: "center",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  links: {
    paddingTop: 16,
    [theme.fn.largerThan("md")]: {
      paddingTop: 36,
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  mainLinks: {
    marginRight: -theme.spacing.sm,
  },

  mainLink: {
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    padding: `7px ${theme.spacing.sm}px`,
    fontWeight: 700,
    borderBottom: "2px solid transparent",
    transition: "border-color 100ms ease, color 100ms ease",

    "&:hover": {
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  mainLinkActive: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottomColor:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 5 : 6],
  },

  link: {
    textDecoration: "none",
  },
}));

export default function HeaderNavigation() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("/");
  const router = useRouter();

  useEffect(() => {
    const currentPath = router.pathname;
    console.log("currentPath", currentPath);
    setActive(currentPath);
  }, [router.pathname, setActive]);

  const mainItems = mainLinks.map((item, index) => (
    <Link
      href={item.link}
      key={item.label}
      className={cx(classes.mainLink, {
        [classes.mainLinkActive]: item.link === active,
      })}
    >
      {item.label}
    </Link>
  ));

  return (
    <Header height={{ base: 50, md: 70 }} p="md" className={classes.header}>
      <DrawerMenu opened={opened} setOpened={toggle} mainLinks={mainLinks} />
      <Container className={classes.inner}>
        <div className={classes.links}>
          <Group spacing={0} position="right" className={classes.mainLinks}>
            {mainItems}
          </Group>
        </div>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
        </MediaQuery>
      </Container>
    </Header>
  );
}
