import React, { FC } from "react";
import Icons from "@/ui/Icons";
import { buttonVariants } from "@/ui/Button";
import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wordldata API - Page not found",
  description: "Free & Open Source API for Wordldata",
};

const PageNotFound: FC = () => {
  return (
    <section className="container mx-auto flex h-screen max-w-7xl flex-col items-center gap-6 pt-32 text-center">
      <LargeHeading>Site not found...</LargeHeading>
      <Paragraph>The site you&apos;re searching for does not exist.</Paragraph>
      <Link
        className={buttonVariants({
          variant: "ghost",
          className: "w-fit",
        })}
        href="/"
        aria-label="Back to the home page"
      >
        <Icons.ChevronLeft className="mr-2 h-4 w-4" />
        Back to home
      </Link>
    </section>
  );
};

export default PageNotFound;
