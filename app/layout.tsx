import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CursorBackground from "@/components/CursorBackground";
import PortfolioChatbot from "@/components/chatbot/PortfolioChatbot";

import "./globals.css";
import GoToTop from "@/components/GoToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tayyaba Sadaqat",
  description: "Software Engineer, Developer and Creative Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        {children}

        <GoToTop />
        <CursorBackground />
        <PortfolioChatbot />
      </body>
    </html>
  );
}