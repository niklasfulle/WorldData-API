import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import "simplebar-react/dist/simplebar.min.css";
import DataTabs from "@/docs/DataTabs";
import { FC } from "react";

const page: FC = ({}) => {
  return (
    <div className="container max-w-7xl mx-auto mt-12">
      <div className="flex flex-col items-center gap-6 min-h-screen h-auto">
        <LargeHeading>The data we use</LargeHeading>
        <Paragraph>From countries, cities, mountains, lakes to currencies</Paragraph>
        <DataTabs />
      </div>
    </div>
  );
};

export default page;
