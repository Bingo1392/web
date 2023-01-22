import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  Image,
  Button,
} from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandGithub,
} from "@tabler/icons";
import Link from "next/link";
import { useRouter } from "next/router";

const FooterData: FooterLinksProps = {
  data: [
    {
      title: "Work together",
      links: [
        {
          label: "Red Robot s.r.o.",
          link: "https://www.redrobot.cz",
          type: "external",
        },
        {
          label: "Contact",
          link: "/contact",
          type: "internal",
        },
      ],
    },
    {
      title: "Resume",
      links: [
        {
          label: "CV_Zitnik.docx (draft)",
          link: "CV_Zitnik.docx",
          type: "download",
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
    textDecoration: "none",
    cursor: "pointer",

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
    links: {
      label: string;
      link: string;
      type: "internal" | "external" | "download";
    }[];
  }[];
}

export default function FooterLinks() {
  const { classes } = useStyles();
  const data = FooterData.data;
  const router = useRouter();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        onClick={() => {
          if (link.type === "external") {
            window.open(link.link, "_ blank");
          } else if (link.type === "internal") {
            router.push(link.link);
          } else {
            window.open(link.link);
          }
        }}
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
          <ActionIcon
            size="lg"
            onClick={() => {
              window.open("https://github.com/Bingo1392", "_ blank");
            }}
          >
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
