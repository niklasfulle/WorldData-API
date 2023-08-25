import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wordldata API - Confirm Email",
  description: "Free API for Wordldata",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="pt-20">{children}</section>;
}
