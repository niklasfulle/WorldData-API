import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wordldata API - Security",
  description: "Free API for Wordldata",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="pt-20">{children}</section>;
}
