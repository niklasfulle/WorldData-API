import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import CreateSection from "@/data/CreateSection";
import { mongoDb } from "@/lib/db/mogodb";
import { oceanCreateSchema } from "@/lib/db/schema/ocean.schema";
import OceansForm from "@/components/admin/data/forms/OceansForm";
import OceansSideInfo from "@/components/admin/data/sideinfo/OceansSideInfo";
import { formatDistance } from "date-fns";

const OceansCreatePage = async () => {
  const Ocean = mongoDb.Ocean;

  const oceans = await Ocean.find().sort({ createdAt: -1 }).limit(5);

  let oceansArray: Array<any> = [];
  oceans.map((ocean) => {
    oceansArray.push({
      ...oceanCreateSchema.parse(ocean),
      createdAt: formatDistance(new Date(ocean.createdAt), new Date()),
    });
  });

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="oceans" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <CreateSection
          title="Create Ocean"
          subtitle="Last created Oceans"
          form={<OceansForm buttonTitle="Create" action="create" />}
          infoSide={<OceansSideInfo data={oceansArray} />}
        />
      </div>
    </div>
  );
};

export default OceansCreatePage;
