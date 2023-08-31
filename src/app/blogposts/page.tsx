import React from "react";
import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";

const page = async () => {
  return (
    <div className="container mx-auto mt-12 max-w-7xl ">
      <div className="flex h-auto min-h-screen flex-col items-center gap-6">
        <LargeHeading>Blogposts</LargeHeading>
        <Paragraph>News, Updates and some more</Paragraph>
      </div>
    </div>
  );
};

export default page;
