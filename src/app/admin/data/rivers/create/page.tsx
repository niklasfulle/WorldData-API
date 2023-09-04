import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import CreateSection from "@/data/CreateSection";
import { mongoDb } from "@/lib/db/mogodb";
import RiversForm from "@/components/admin/data/forms/RiversForm";
import RiversSideInfo from "@/components/admin/data/sideinfo/RiversSideInfo";
import { riverCreateSchema } from "@/lib/db/schema/river.schema";
import { formatDistance } from "date-fns";

const RiversCreatePage = async () => {
  const River = mongoDb.River;

  const rivers = await River.find().sort({ id: -1 }).limit(5);

  let riversArray: Array<any> = [];
  rivers.map((river) => {
    riversArray.push({
      ...riverCreateSchema.parse(river),
      createdAt: formatDistance(new Date(river.createdAt), new Date()),
    });
  });

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="rivers" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <CreateSection
          title="Create River"
          subtitle="Last created Rivers"
          form={<RiversForm buttonTitle="Create" />}
          infoSide={<RiversSideInfo data={riversArray} />}
        />
      </div>
    </div>
  );
};

export default RiversCreatePage;
