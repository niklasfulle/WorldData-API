import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import ViewSection from "@/data/ViewSection";
import { mongoDb } from "@/lib/db/mogodb";
import { oceanCreateSchema } from "@/lib/db/schema/ocean.schema";
import OceansTable from "@/components/admin/data/table/OceansTable";

const OceansPage = async () => {
  const Ocean = mongoDb.Ocean;

  const oceans = await Ocean.find();

  let oceansArray: Array<any> = [];
  oceans.map((ocean) => {
    oceansArray.push(oceanCreateSchema.parse(ocean));
  });

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="oceans" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <ViewSection
          title="View Oceans"
          table={<OceansTable data={oceansArray} />}
        />
      </div>
    </div>
  );
};

export default OceansPage;
