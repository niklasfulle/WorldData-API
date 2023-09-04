import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import CreateSection from "@/data/CreateSection";
import { mongoDb } from "@/lib/db/mogodb";
import MountainsForm from "@/components/admin/data/forms/MountainsForm";
import { mountainCreateSchema } from "@/lib/db/schema/mountain.schema";
import MountainsSideInfo from "@/components/admin/data/sideinfo/MountainsSideInfo";

const MountainsCreatePage = async () => {
  const Mountain = mongoDb.Mountain;

  const mountains = await Mountain.find().sort({ id: -1 }).limit(10);

  let mountainsArray: Array<any> = [];
  mountains.map((mountain) => {
    mountainsArray.push(mountainCreateSchema.parse(mountain));
  });

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="mountains" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <CreateSection
          title="Create Mountain"
          subtitle="Last created Mountains"
          form={<MountainsForm buttonTitle="Create" />}
          infoSide={<MountainsSideInfo data={mountainsArray} />}
        />
      </div>
    </div>
  );
};

export default MountainsCreatePage;
