import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import CreateSection from "@/data/CreateSection";
import { mongoDb } from "@/lib/db/mogodb";
import LakesForm from "@/components/admin/data/forms/LakesForm";
import LakesSideInfo from "@/components/admin/data/sideinfo/LakesSideInfo";
import { lakeCreateSchema } from "@/lib/db/schema/lake.schema";

const LakesCreatePage = async () => {
  const Lake = mongoDb.Lake;

  const lakes = await Lake.find().sort({ id: -1 }).limit(10);

  let lakesArray: Array<any> = [];
  lakes.map((lake) => {
    lakesArray.push(lakeCreateSchema.parse(lake));
  });

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="lakes" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <CreateSection
          title="Create Lake"
          subtitle="Last created Lakes"
          form={<LakesForm buttonTitle="Create" />}
          infoSide={<LakesSideInfo data={lakesArray} />}
        />
      </div>
    </div>
  );
};

export default LakesCreatePage;
