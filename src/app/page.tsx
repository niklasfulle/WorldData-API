"use client";
import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import Link from "next/link";
import ThreeScene from "@/three/ThreeScene";
import CookieConsent from "@/components/banner/CookieConsent";
import { useState } from "react";
import { Skeleton } from "@mui/material";

export default function Home() {
  const [threeIsLoaded, setThreeIsLoaded] = useState(false);

  return (
    <div className="relative flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl mx-auto w-full h-screen">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <LargeHeading size="lg" className="rainbow-text three-d z-10">
            Data of the world.
          </LargeHeading>
          <Paragraph className="max-w-xl lg:text-left z-10 px-3 text-justify md:text-center">
            Get the latest data of the world in JSON format. Data about countries, states, cities,
            and more. All the data is free and open source. You can get the API key from{" "}
            <Link
              href="/login"
              className="underline underline-offset-2 text-indigo-600 dark:text-sky-400"
              aria-label="Link to the login page"
            >
              API Key
            </Link>
            .
          </Paragraph>
          <div className="relative w-full max-w-xl lg:max-w-3xl lg:left-1/2 lg:absolute -mt-20 md:-mt-24 lg:-ml-12 mx-auto flex flex-col items-center">
            {!threeIsLoaded ? (
              <Skeleton
                variant="rectangular"
                animation="wave"
                height={400}
                className="mt-16 md:mt-0 bg-slate-300/20 dark:bg-slate-700/20 rounded-3xl w-64 h-64 md:w-96 md:h-96"
              />
            ) : null}
            <ThreeScene setLoading={setThreeIsLoaded} />
          </div>
          <CookieConsent />
        </div>
      </div>
    </div>
  );
}
