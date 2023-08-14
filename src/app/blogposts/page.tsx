import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import { FC } from "react";
import CookieConsent from "@/components/banner/CookieConsent";

const page: FC = ({}) => {
  return (
    <div className="container max-w-7xl mx-auto mt-12 ">
      <div className="flex flex-col items-center gap-6 min-h-screen h-auto">
        <LargeHeading>Blogposts</LargeHeading>
        <Paragraph>News, Updates and some more</Paragraph>
        <CookieConsent />
      </div>
    </div>
  );
};

export default page;
