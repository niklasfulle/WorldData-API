import React from "react";
import { Metadata } from "next";
import { Sidebar } from "lucide-react";

export const metadata: Metadata = {
  title: "Wordldata API - Admin Panel",
  description: "Free API for Wordldata",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="p-4">{children}</section>;
}
