import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  Image,
} from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandFacebook,
} from "@tabler/icons";

const FooterData: FooterLinksProps = {
  data: [
    {
      title: "About",
      links: [
        {
          label: "Features",
          link: "#",
        },
        {
          label: "Pricing",
          link: "#",
        },
        {
          label: "Support",
          link: "#",
        },
        {
          label: "Forums",
          link: "#",
        },
      ],
    },
    {
      title: "Project",
      links: [
        {
          label: "Contribute",
          link: "#",
        },
        {
          label: "Media assets",
          link: "#",
        },
        {
          label: "Changelog",
          link: "#",
        },
        {
          label: "Releases",
          link: "#",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          label: "Join Discord",
          link: "#",
        },
        {
          label: "Follow on Twitter",
          link: "#",
        },
        {
          label: "Email newsletter",
          link: "#",
        },
        {
          label: "GitHub discussions",
          link: "#",
        },
      ],
    },
  ],
};

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 40,
    paddingTop: theme.spacing.xl * 2,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: 60,

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    maxWidth: 200,
    marginTop: theme.spacing.lg,
    textAlign: "justify",
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },

  logoWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export default function FooterLinks() {
  const { classes } = useStyles();
  const data = FooterData.data;

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logoWrapper}>
          <Image src={"/logo.svg"} className={classes.logo} />
          <Text size="xs" color="dimmed" className={classes.description}>
            Be smart not hasty
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2023 Jan Žitník. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon
            size="lg"
            onClick={() => {
              window.open("https://www.linkedin.com/in/jan-zitnik/", "_ blank");
            }}
          >
            <IconBrandLinkedin size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            onClick={() => {
              window.open("https://www.instagram.com/bingo1392/", "_ blank");
            }}
          >
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            onClick={() => {
              window.open("https://www.facebook.com/bingo1392/", "_ blank");
            }}
          >
            <IconBrandFacebook size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
