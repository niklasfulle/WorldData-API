import LargeHeading from "@/ui/LargeHeading";
import { FC } from "react";

const page: FC = ({}) => {
  return (
    <div className="container max-w-7xl mx-auto mt-12 min-h-screen h-auto">
      <div className="flex flex-col items-center gap-6">
        <LargeHeading>Terms</LargeHeading>
      </div>
    </div>
  );
};

export default page;
