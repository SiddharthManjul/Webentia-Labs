/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import Navbar from "../components/navbar";

export const metadata: Metadata = {
  title: "Webentia Labs",
  description: "Built by Siddharth Manjul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
