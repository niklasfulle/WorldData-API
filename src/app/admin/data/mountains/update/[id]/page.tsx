import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import UpdateSection from "@/data/UpdateSection";
import { mongoDb } from "@/lib/db/mogodb";
import MountainsForm from "@/components/admin/data/forms/MountainsForm";
import MountainsSideInfo from "@/components/admin/data/sideinfo/MountainsSideInfo";
import { mountainCreateSchema } from "@/lib/db/schema/mountain.schema";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

const MountainsUpdatePage = async ({ params: { id } }: Props) => {
  const Mountain = mongoDb.Mountain;

  const mountain = await Mountain.findOne({ id: parseInt(id) });

  if (!mountain) return notFound();

  const mountains = await Mountain.find().sort({ id: -1 }).limit(10);

  let mountainsArray: Array<any> = [];
  mountains.map((mountain) => {
    mountainsArray.push(mountainCreateSchema.parse(mountain));
  });

  const mountainData = mountainCreateSchema.parse(mountain);

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="mountains" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <UpdateSection
          title="Update Mountain"
          subtitle="Last created Mountains"
          form={<MountainsForm buttonTitle="Update" mountain={mountainData} />}
          infoSide={<MountainsSideInfo data={mountainsArray} />}
        />
      </div>
    </div>
  );
};

export default MountainsUpdatePage;
