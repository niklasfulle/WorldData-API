import { FC } from "react";
import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import DocsTabs from "@/docs/DocsTabs";
import "simplebar-react/dist/simplebar.min.css";

const page: FC = ({}) => {
  return (
    <div className="container max-w-7xl mx-auto mt-12">
      <div className="flex flex-col items-center gap-6 min-h-screen h-auto">
        <LargeHeading>Making a Request</LargeHeading>
        <Paragraph>How to use the API</Paragraph>
        <DocsTabs />
      </div>
    </div>
  );
};

export default page;
