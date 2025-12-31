import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GDPRPopup from "./components/GDPRPopup";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rox - Fitness & Performance Apps",
  description: "Your complete fitness and performance ecosystem. RoxSIM, RoxCycle, OxyROX, RoxElevate, and RoxPT - five powerful apps designed to elevate your training.",
  keywords: "fitness apps, performance apps, HYROX, training, cycle tracking, breathing exercises, motivation, workout, race, competition",
  openGraph: {
    title: "Rox - Fitness & Performance Apps",
    description: "Your complete fitness and performance ecosystem. Five powerful apps designed to elevate your training.",
    type: "website",
    locale: "en_GB",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://roxpt-marketing.vercel.app',
    images: [
      {
        url: '/images/home.png',
        width: 1200,
        height: 630,
        alt: 'Rox - Fitness & Performance Apps',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rox - Fitness & Performance Apps',
    description: 'Your complete fitness and performance ecosystem',
    images: ['/images/home.png'],
    creator: '@Rox',
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
