import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import CreateSection from "@/data/CreateSection";
import { mongoDb } from "@/lib/db/mogodb";
import { seaCreateSchema } from "@/lib/db/schema/sea.schema";
import SeasForm from "@/components/admin/data/forms/SeasForm";
import SeasSideInfo from "@/components/admin/data/sideinfo/SeasSideInfo";
import { formatDistance } from "date-fns";

const SeasCreatePage = async () => {
  const Sea = mongoDb.Sea;

  const seas = await Sea.find().sort({ createdAt: -1 }).limit(5);

  let seasArray: Array<any> = [];
  seas.map((sea) => {
    seasArray.push({
      ...seaCreateSchema.parse(sea),
      createdAt: formatDistance(new Date(sea.createdAt), new Date()),
    });
  });

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="seas" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <CreateSection
          title="Create Sea"
          subtitle="Last created Seas"
          form={<SeasForm buttonTitle="Create" action="create" />}
          infoSide={<SeasSideInfo data={seasArray} />}
        />
      </div>
    </div>
  );
};

export default SeasCreatePage;
