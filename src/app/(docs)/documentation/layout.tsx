import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wordldata API - Documentation",
  description: "Free API for Wordldata",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="pt-20">{children}</section>;
}
