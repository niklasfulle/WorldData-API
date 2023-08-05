import { FC } from "react";
import { Metadata } from "next";
import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import DocsTabs from "@/components/DocsTabs";
import "simplebar-react/dist/simplebar.min.css";

export const metadata: Metadata = {
  title: "Wordldata API - Documentation",
  description: "Free & Open Source API for Wordldata",
};

const page: FC = ({}) => {
  return (
    <div className="container max-w-7xl mx-auto mt-12">
      <div className="flex flex-col items-center gap-6">
        <LargeHeading>Making a Request</LargeHeading>
        <Paragraph>How to use the API</Paragraph>
        <DocsTabs />
      </div>
    </div>
  );
};

export default page;
