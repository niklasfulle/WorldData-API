import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import "simplebar-react/dist/simplebar.min.css";
import DataTabs from "@/docs/DataTabs";
import { FC } from "react";
import CookieConsent from "@/components/banner/CookieConsent";

const page: FC = ({}) => {
  return (
    <div className="container max-w-7xl mx-auto mt-12">
      <div className="flex flex-col items-center gap-6 min-h-[90vh] h-auto">
        <LargeHeading>The data we use</LargeHeading>
        <Paragraph>From countries, cities, mountains, lakes to currencies</Paragraph>
        <DataTabs />
        <CookieConsent />
      </div>
    </div>
  );
};

export default page;
