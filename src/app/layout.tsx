import type { Metadata } from "next";
import { Roboto  } from "next/font/google";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import "./globals.css";

const geistRoboto = Roboto({
  variable: "--font-geist-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextGen",
  description: "Web Site da NextGen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistRoboto.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
