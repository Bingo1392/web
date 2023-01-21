import { ReactNode, useState } from "react";
import { AppShell, useMantineTheme } from "@mantine/core";
import HeaderNavigation from "../components/HeaderNavigation";

var mainLinks = [
  {
    link: "#",
    label: "Welcome",
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
