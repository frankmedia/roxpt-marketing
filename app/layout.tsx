import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GDPRPopup from "./components/GDPRPopup";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RoxPT - Built for HYROX. Tuned for You.",
  description: "Your personalized HYROX training programme. Professional training programs designed for athletes of all levels.",
  keywords: "HYROX, training, fitness, workout, personal trainer, race, competition",
  openGraph: {
    title: "RoxPT - Built for HYROX. Tuned for You.",
    description: "Your personalized HYROX training programme",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
        <GDPRPopup />
      </body>
    </html>
  );
}
