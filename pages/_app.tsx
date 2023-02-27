import { Center, Loader, MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import "dayjs/locale/en-gb";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events]);

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
      {loading ? (
        <Center w="100vw" h="100vh">
          <Loader variant={"bars"} />
        </Center>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </MantineProvider>
  );
}
