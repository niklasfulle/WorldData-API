import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import CreateSection from "@/data/CreateSection";
import { mongoDb } from "@/lib/db/mogodb";
import IslandsForm from "@/components/admin/data/forms/IslandsForm";
import IslandsSideInfo from "@/components/admin/data/sideinfo/IslandsSideInfo";
import { islandCreateSchema } from "@/lib/db/schema/island.schema";
import { formatDistance } from "date-fns";

const IslandsCreatePage = async () => {
  const Island = mongoDb.Island;

  const islands = await Island.find().sort({ id: -1 }).limit(5);

  let islandsArray: Array<any> = [];
  islands.map((island) => {
    islandsArray.push({
      ...islandCreateSchema.parse(island),
      createdAt: formatDistance(new Date(island.createdAt), new Date()),
    });
  });

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="islands" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <CreateSection
          title="Create Island"
          subtitle="Last created Islands"
          form={<IslandsForm buttonTitle="Create" />}
          infoSide={<IslandsSideInfo data={islandsArray} />}
        />
      </div>
    </div>
  );
};

export default IslandsCreatePage;
