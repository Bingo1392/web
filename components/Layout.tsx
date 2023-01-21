import { ReactNode, useState } from "react";
import { AppShell } from "@mantine/core";
import HeaderNavigation from "../components/HeaderNavigation";

export default function Layout({ children }: { children: ReactNode }) {
  const [opened, setOpened] = useState(false);
  return (
    <AppShell header={<HeaderNavigation />} padding={0}>
      {children}
    </AppShell>
  );
}
