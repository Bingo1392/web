import {
  createStyles,
  ThemeIcon,
  Text,
  Box,
  Stack,
  Title,
} from "@mantine/core";
import { IconPhone, IconMapPin, IconAt } from "@tabler/icons";
import { RedRobotCard } from "@/components/RedRobotCard";

type ContactIconVariant = "white" | "gradient";

interface ContactIconStyles {
  variant: ContactIconVariant;
}

const useStyles = createStyles((theme, { variant }: ContactIconStyles) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    color: theme.white,
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage:
      variant === "gradient"
        ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
            theme.colors[theme.primaryColor][6]
          } 100%)`
        : "none",
    backgroundColor: "transparent",
  },

  title: {
    color:
      variant === "gradient"
        ? theme.colors.gray[6]
        : theme.colors[theme.primaryColor][0],
  },

  description: {
    color: variant === "gradient" ? theme.black : theme.white,
  },
}));

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
  variant?: ContactIconVariant;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  variant = "gradient",
  className,
  ...others
}: ContactIconProps) {
  const { classes, cx } = useStyles({ variant });
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      {variant === "gradient" ? (
        <ThemeIcon size={40} radius="md" className={classes.icon}>
          <Icon size={24} />
        </ThemeIcon>
      ) : (
        <Box mr="md">
          <Icon size={24} />
        </Box>
      )}

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

interface ContactIconsListProps {
  data?: ContactIconProps[];
  variant?: ContactIconVariant;
}

const MOCKDATA = [
  { title: "Personal email", description: "mail@janzitnik.com", icon: IconAt },
  { title: "Phone", description: "+420 773 124 643", icon: IconPhone },
  { title: "Office", description: "Karlín, 186 00 Praha 8", icon: IconMapPin },
];

export function ContactIconsList({
  data = MOCKDATA,
  variant,
}: ContactIconsListProps) {
  const items = data.map((item, index) => (
    <ContactIcon key={index} variant={variant} {...item} />
  ));
  return <Stack>{items}</Stack>;
}

const useContactsStyles = createStyles((theme) => ({
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

  rrContainer: {
    marginBottom: theme.spacing.xl,
  },
}));

export default function Contacts() {
  const { classes } = useContactsStyles();

  return (
    <div className={classes.wrapper}>
      <Title order={4} align={"center"}>
        Best way to work with me
      </Title>
      <Text
        color="dimmed"
        className={classes.description}
        align="justify"
        mt="md"
      >
        I am a co-founder of Red Robot s.r.o., and together with colleagues, we
        deliver software services to our customers. If you are interested in
        establishing cooperation, contact our company through official channels.
        For other purposes contact me directly.
      </Text>
      <div className={classes.rrContainer}>
        <RedRobotCard />
      </div>
      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          backgroundImage: `linear-gradient(135deg, ${theme.colors.dark[6]} 0%, ${theme.colors.dark[4]} 100%)`,
        })}
      >
        <ContactIconsList variant="white" />
      </Box>
    </div>
  );
}
