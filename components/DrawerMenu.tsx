import { useRouter } from "next/router";
import { FooterGroupsLinks } from "@/components/FooterLinks";
import { Navbar, createStyles, Drawer, Stack, Button } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  navbar: {
    justifyContent: "space-between",
  },

  footer: {
    margin: theme.spacing.lg,
    textAlign: "center",
  },
}));

export default function DrawerMenu({
  opened,
  setOpened,
  mainLinks,
}: {
  opened: boolean;
  setOpened: (newState: boolean) => void;
  mainLinks: { link: string; label: string }[];
}) {
  const router = useRouter();
  const { classes } = useStyles();
  const links = mainLinks.map((link) => {
    return (
      <Button
        key={link.link}
        onClick={() => {
          router.push(link.link);
          setOpened(false);
        }}
        variant="subtle"
        color="gray"
        radius="xs"
        size={"md"}
        uppercase
      >
        {link.label}
      </Button>
    );
  });

  return (
    <>
      <Drawer opened={opened} onClose={() => setOpened(false)}>
        <Navbar className={classes.navbar}>
          <Navbar.Section>
            <Stack spacing={0}>{links}</Stack>
          </Navbar.Section>
          <Navbar.Section className={classes.footer}>
            <Stack justify={"center"} align={"center"}>
              <FooterGroupsLinks />
            </Stack>
          </Navbar.Section>
        </Navbar>
      </Drawer>
    </>
  );
}
