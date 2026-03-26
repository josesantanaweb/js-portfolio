import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Jose Santana",
  description: "Portfolio - Jose Santana",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: ["Portfolio", "Jose Santana", "Developer", "Software Engineer", "Web Developer", "Frontend Developer", "Backend Developer", "Full Stack Developer"],
  authors: [{ name: "Jose Santana", url: "https://josesantana.com" }],
  creator: "Jose Santana",
  publisher: "Jose Santana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">{children}</body>
    </html>
  );
}
