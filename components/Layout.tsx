import { ReactNode, useState } from "react";
import {
  AppShell,
  Header,
  Footer,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import HeaderNavigation from "../components/HeaderNavigation";

var mainLinks = [
  {
    link: "#",
    label: "About me",
  },
  {
    link: "#",
    label: "CV",
  },
  {
    link: "#",
    label: "contact",
  },
];

export default function Layout({ children }: { children: ReactNode }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell header={<HeaderNavigation mainLinks={mainLinks} />} padding={0}>
      {children}
    </AppShell>
  );
}
