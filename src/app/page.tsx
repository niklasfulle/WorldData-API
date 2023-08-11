import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";
import { Metadata } from "next";
import ThreeScene from "@/components/threejs/ThreeScene";

export const metadata: Metadata = {
  title: "Wordldata API - Home",
  description: "Free & Open Source API for Wordldata",
};

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl mx-auto w-full h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <LargeHeading size="lg" className="three-d text-black dark:text-light-gold z-50">
            Data of the world.
          </LargeHeading>
          <Paragraph className="max-w-xl lg:text-left z-50">
            Get the latest data of the world in JSON format. Data about countries, states, cities,
            and more. All the data is free and open source. You can get the API key from{" "}
            <Link
              href="/login"
              className="underline underline-offset-2 text-black dark:text-light-gold"
              aria-label="Link to the login page"
            >
              API Key
            </Link>
            .
          </Paragraph>
          <div className="relative w-full max-w-xl lg:max-w-3xl lg:left-1/2 lg:absolute sm:-mt-24 -mt-24 -ml-12 lg:ml-10">
            <ThreeScene />
          </div>
        </div>
      </div>
    </div>
  );
}
