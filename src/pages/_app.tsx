import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import NanoNavbar from "~/components/NanoNavbar";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <NanoNavbar />
          <Component {...pageProps} />
        </NextThemesProvider>
      </NextUIProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
