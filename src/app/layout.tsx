import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/ui/Navbar";
import Providers from "@/components/auth/SessionProvider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: "Notes App",
  description: "A notes app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} bg-white dark:bg-[#202124]`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
