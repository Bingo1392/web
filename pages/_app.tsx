import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import "dayjs/locale/en-gb";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
        primaryColor: "red",
        globalStyles: (theme) => ({
          body: {
            backgroundColor:
              theme.colorScheme === "dark" ? theme.black : theme.white,
          },
        }),
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}
