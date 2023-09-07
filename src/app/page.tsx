"use client";
import React from "react";
import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import Link from "next/link";
import Skeleton from "@mui/material/Skeleton";
import dynamic from "next/dynamic";
import { Toaster } from "@/components/ui/Toast";

const ThreeScene = dynamic(() => import("@/three/ThreeScene"), {
  loading: () => (
    <Skeleton
      variant="rectangular"
      animation="wave"
      height={400}
      className="mt-16 h-64 w-64 rounded-3xl bg-slate-300/20 dark:bg-slate-700/20 md:mt-0 md:h-96 md:w-96"
    />
  ),
});

export default function Home() {
  return (
    <div className="relative flex items-center justify-center overflow-x-hidden">
      <div className="container mx-auto h-screen w-full max-w-7xl pt-32">
        <div className="flex h-full flex-col items-center justify-start gap-6 lg:items-start lg:justify-center">
          <LargeHeading size="lg" className="rainbow-text three-d z-10">
            Data of the world.
          </LargeHeading>
          <Paragraph className="z-10 max-w-xl px-3 text-justify md:text-center lg:text-left">
            Get the latest data from around the world in JSON format. Data about
            countries, states, cities, and more. All the data is free and
            open-source. You can get the API key from{" "}
            <Link
              href="/login"
              className="text-indigo-600 underline underline-offset-2 dark:text-sky-400"
              aria-label="Link to the login page"
            >
              API Key
            </Link>
            .
          </Paragraph>
          <div className="relative mx-auto -mt-20 flex w-full max-w-xl flex-col items-center md:-mt-24 lg:absolute lg:left-1/2 lg:-ml-12 lg:max-w-3xl">
            <ThreeScene />
          </div>
        </div>
      </div>
    </div>
  );
}
