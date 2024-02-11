import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextjs Portfolio",
  description: "Generated with Love, by Ahmed Sadek",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen h-screen bg-gradient-to-b from-blue-50 to-red-100`}>
        <section>
          <Navbar />
        </section>
        <section>
          {children}
        </section>
      </body>
    </html>
  );
}
