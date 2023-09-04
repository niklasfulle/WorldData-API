import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import ViewSection from "@/data/ViewSection";
import { mongoDb } from "@/lib/db/mogodb";
import { islandCreateSchema } from "@/lib/db/schema/island.schema";
import IslandsTable from "@/components/admin/data/table/IslandTable";

const IslandsViewPage = async () => {
  const Island = mongoDb.Island;

  const islands = await Island.find();

  let islandsArray: Array<any> = [];
  islands.map((island) => {
    islandsArray.push(islandCreateSchema.parse(island));
  });

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="islands" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <ViewSection
          title="View Islands"
          table={<IslandsTable data={islandsArray} />}
        />
      </div>
    </div>
  );
};

export default IslandsViewPage;
