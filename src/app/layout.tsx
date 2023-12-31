import React from "react";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Providers from "@/components/Providers";
import Navbar from "@/navigation/Navbar";
import { Toaster } from "@/ui/Toast";
import { Metadata } from "next";
import Footer from "@/navigation/Footer";
import CookieConsent from "@/components/banner/CookieConsent";

export const metadata: Metadata = {
  title: "Wordldata API - Home",
  description: "Free API for Wordldata",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        " light:bg-white text-slate-900 antialiased dark:bg-slate-900",
        inter.className
      )}
    >
      <head>
        <meta name="application-name" content="Worlddata API" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Worlddata API" />
        <meta
          name="description"
          content="Worlddata API is a free API for getting data about countries, cities, states, and more."
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://worlddataapi.com" />
        <meta name="twitter:title" content="Wordldata API" />
        <meta
          name="twitter:description"
          content="Worlddata API is a free API for getting data about countries, cities, states, and more."
        />
        <meta
          name="twitter:image"
          content="https://worlddataapi.com/favicon.ico"
        />
        <meta name="twitter:creator" content="@DavidWShadow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Worlddata API" />
        <meta
          property="og:description"
          content="Worlddata API is a free API for getting data about countries, cities, states, and more."
        />
        <meta property="og:site_name" content="Worlddata API" />
        <meta property="og:url" content="https://worlddataapi.com" />
        <meta
          property="og:image"
          content="https://yourdomain.com/favicon.ico"
        />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
      </head>
      <body className="min-h-screen bg-slate-300 antialiased dark:bg-slate-900">
        <Providers>
          <Navbar />
          {children}
          <Toaster position="bottom-right" />
          <CookieConsent />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
