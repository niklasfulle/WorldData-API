import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import { mongoDb } from "@/lib/db/mogodb";
import UpdateSection from "@/components/admin/data/UpdateSection";
import { seaCreateSchema } from "@/lib/db/schema/sea.schema";
import SeasForm from "@/components/admin/data/forms/SeasForm";
import SeasSideInfo from "@/components/admin/data/sideinfo/SeasSideInfo";
import { notFound } from "next/navigation";
import { formatDistance } from "date-fns";

type Props = {
  params: {
    id: string;
  };
};

const SeasUpdatePage = async ({ params: { id } }: Props) => {
  const Sea = mongoDb.Sea;

  const sea = await Sea.findOne({ id: parseInt(id) });

  if (!sea) return notFound();

  const seas = await Sea.find().sort({ updatedAt: -1 }).limit(5);

  let seasArray: Array<any> = [];
  seas.map((sea) => {
    seasArray.push({
      ...seaCreateSchema.parse(sea),
      createdAt: formatDistance(new Date(sea.updatedAt), new Date()),
    });
  });

  const seaData = seaCreateSchema.parse(sea);

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="seas" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <UpdateSection
          title="Update Sea"
          subtitle="Last updated Seas"
          form={
            <SeasForm
              buttonTitle="Update"
              id={id}
              action="update"
              sea={seaData}
            />
          }
          infoSide={<SeasSideInfo data={seasArray} />}
        />
      </div>
    </div>
  );
};

export default SeasUpdatePage;
