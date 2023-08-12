import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import { FC } from "react";

const page: FC = ({}) => {
  return (
    <div className="container max-w-7xl mx-auto mt-12 h-screen">
      <div className="flex flex-col items-center gap-6">
        <LargeHeading>Blogposts</LargeHeading>
        <Paragraph>News, Updates and some more</Paragraph>
      </div>
    </div>
  );
};

export default page;
