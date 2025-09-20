"use client";

import { SessionProvider, SessionProviderProps } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface ClientSessionProviderProps {
  children: ReactNode;
  session?: SessionProviderProps["session"];
}

export default function ClientSessionProvider({ children, session }: ClientSessionProviderProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
};