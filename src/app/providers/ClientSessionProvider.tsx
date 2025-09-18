"use client";

import { SessionProvider, SessionProviderProps } from "next-auth/react";
import { ReactNode } from "react";

interface ClientSessionProviderProps {
  children: ReactNode;
  session?: SessionProviderProps["session"];
}

export default function ClientSessionProvider({ children, session }: ClientSessionProviderProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};