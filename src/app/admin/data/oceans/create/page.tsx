import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import CreateSection from "@/data/CreateSection";
import { mongoDb } from "@/lib/db/mogodb";
import { oceanCreateSchema } from "@/lib/db/schema/ocean.schema";
import OceansForm from "@/components/admin/data/forms/OceansForm";
import OceansSideInfo from "@/components/admin/data/sideinfo/OceansSideInfo";

const OceansPage = async () => {
  const Ocean = mongoDb.Ocean;

  const oceans = await Ocean.find().sort({ id: -1 }).limit(10);

  let oceansArray: Array<any> = [];
  oceans.map((ocean) => {
    oceansArray.push(oceanCreateSchema.parse(ocean));
  });

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="oceans" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <CreateSection
          title="Create Ocean"
          subtitle="Last created Oceans"
          form={<OceansForm buttonTitle="Create" />}
          infoSide={<OceansSideInfo data={oceansArray} />}
        />
      </div>
    </div>
  );
};

export default OceansPage;
