import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import ViewSection from "@/data/ViewSection";
import { mongoDb } from "@/lib/db/mogodb";
import { seaCreateSchema } from "@/lib/db/schema/sea.schema";
import SeasTable from "@/components/admin/data/table/SeasTable";

const SeasViewPage = async () => {
  const Sea = mongoDb.Sea;

  const seas = await Sea.find();

  let seasArray: Array<any> = [];
  seas.map((sea) => {
    seasArray.push(seaCreateSchema.parse(sea));
  });

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="seas" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <ViewSection title="View Seas" table={<SeasTable data={seasArray} />} />
      </div>
    </div>
  );
};

export default SeasViewPage;
