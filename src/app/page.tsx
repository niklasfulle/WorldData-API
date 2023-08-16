import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import Link from "next/link";
import ThreeScene from "@/three/ThreeScene";
import CookieConsent from "@/components/banner/CookieConsent";

export default function Home() {
  return (
    <div className="relative flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl mx-auto w-full h-screen">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <LargeHeading size="lg" className="rainbow-text three-d z-50">
            Data of the world.
          </LargeHeading>
          <Paragraph className="max-w-xl lg:text-left z-50">
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
          <div className="relative w-full max-w-xl lg:max-w-3xl lg:left-1/2 lg:absolute -mt-24 lg:-ml-12">
            <ThreeScene />
          </div>
          <CookieConsent />
        </div>
      </div>
    </div>
  );
}
