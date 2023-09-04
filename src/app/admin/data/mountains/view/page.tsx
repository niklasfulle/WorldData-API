import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import ViewSection from "@/data/ViewSection";
import { mongoDb } from "@/lib/db/mogodb";
import { mountainCreateSchema } from "@/lib/db/schema/mountain.schema";
import MountainsTable from "@/components/admin/data/table/MountainsTable";

const MountainsViewPage = async () => {
  const Mountain = mongoDb.Mountain;

  const mountains = await Mountain.find();

  let mountainsArray: Array<any> = [];
  mountains.map((mountain) => {
    mountainsArray.push(mountainCreateSchema.parse(mountain));
  });

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="mountains" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <ViewSection
          title="View Mountains"
          table={<MountainsTable data={mountainsArray} />}
        />
      </div>
    </div>
  );
};

export default MountainsViewPage;
