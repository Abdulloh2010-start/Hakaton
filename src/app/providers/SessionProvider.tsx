"use client";
import { SessionProvider, SessionProviderProps } from "next-auth/react";
import { ReactNode } from "react";

interface NextAuthProviderProps {
  children: ReactNode;
  session?: SessionProviderProps["session"];
}

export default function NextAuthProvider({ children, session }: NextAuthProviderProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}