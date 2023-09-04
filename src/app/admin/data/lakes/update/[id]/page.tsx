import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import UpdateSection from "@/data/UpdateSection";
import { mongoDb } from "@/lib/db/mogodb";
import { notFound } from "next/navigation";
import { lakeCreateSchema } from "@/lib/db/schema/lake.schema";
import LakesForm from "@/components/admin/data/forms/LakesForm";
import LakesSideInfo from "@/components/admin/data/sideinfo/LakesSideInfo";

type Props = {
  params: {
    id: string;
  };
};

const LakesUpdatePage = async ({ params: { id } }: Props) => {
  const Lake = mongoDb.Lake;

  const lake = await Lake.findOne({ id: parseInt(id) });

  if (!lake) return notFound();

  const lakes = await Lake.find().sort({ id: -1 }).limit(10);

  let lakesArray: Array<any> = [];
  lakes.map((lake) => {
    lakesArray.push(lakeCreateSchema.parse(lake));
  });

  const lakeData = lakeCreateSchema.parse(lake);

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="lakes" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <UpdateSection
          title="Update Lake"
          subtitle="Last created Lakes"
          form={<LakesForm buttonTitle="Update" lake={lakeData} />}
          infoSide={<LakesSideInfo data={lakesArray} />}
        />
      </div>
    </div>
  );
};

export default LakesUpdatePage;
