import { useRouter } from "next/router";
import { FooterGroupsLinks } from "@/components/FooterLinks";
import {
  createStyles,
  Drawer,
  Stack,
  Button,
  ActionIcon,
  Group,
} from "@mantine/core";
import { IconX } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  header: {
    padding: theme.spacing.lg,
  },

  links: {
    paddingTop: theme.spacing.xl,
  },

  footer: {
    padding: theme.spacing.lg,
    textAlign: "center",
    paddingBottom: theme.spacing.xl * 2,
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
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        styles={(theme) => ({
          header: {
            display: "none",
          },
        })}
      >
        <Stack h={"100vh"}>
          <Group className={classes.header} position={"right"}>
            <ActionIcon
              onClick={() => {
                setOpened(false);
              }}
            >
              <IconX size={18} />
            </ActionIcon>
          </Group>
          <Stack h={"100%"} justify={"space-between"}>
            <Stack spacing={0} className={classes.links}>
              {links}
            </Stack>
            <Stack
              className={classes.footer}
              justify={"center"}
              align={"center"}
            >
              <FooterGroupsLinks />
            </Stack>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
}
