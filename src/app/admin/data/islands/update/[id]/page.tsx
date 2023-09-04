import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import UpdateSection from "@/data/UpdateSection";
import { mongoDb } from "@/lib/db/mogodb";
import { notFound } from "next/navigation";
import IslandsForm from "@/components/admin/data/forms/IslandsForm";
import IslandsSideInfo from "@/components/admin/data/sideinfo/IslandsSideInfo";
import { islandCreateSchema } from "@/lib/db/schema/island.schema";

type Props = {
  params: {
    id: string;
  };
};

const IslandsUpdatePage = async ({ params: { id } }: Props) => {
  const Island = mongoDb.Island;

  const island = await Island.findOne({ id: parseInt(id) });

  if (!island) return notFound();

  const islands = await Island.find().sort({ id: -1 }).limit(10);

  let islandsArray: Array<any> = [];
  islands.map((island) => {
    islandsArray.push(islandCreateSchema.parse(island));
  });

  const islandData = islandCreateSchema.parse(island);

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="islands" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <UpdateSection
          title="Update Island"
          subtitle="Last created Islands"
          form={<IslandsForm buttonTitle="Update" island={islandData} />}
          infoSide={<IslandsSideInfo data={islandsArray} />}
        />
      </div>
    </div>
  );
};

export default IslandsUpdatePage;
