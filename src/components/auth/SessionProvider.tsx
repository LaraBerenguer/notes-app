"use client";

import { SessionProvider } from "next-auth/react";
import { StoreProvider } from "@/store/StoreProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <StoreProvider>{children}</StoreProvider>
    </SessionProvider>
  );
};
