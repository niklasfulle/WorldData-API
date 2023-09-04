import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import ViewSection from "@/data/ViewSection";
import { mongoDb } from "@/lib/db/mogodb";
import { lakeCreateSchema } from "@/lib/db/schema/lake.schema";
import LakesTable from "@/components/admin/data/table/LakesTable";

const LakesViewPage = async () => {
  const Lake = mongoDb.Lake;

  const lakes = await Lake.find();

  let lakesArray: Array<any> = [];
  lakes.map((lake) => {
    lakes.push(lakeCreateSchema.parse(lake));
  });

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="lakes" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <ViewSection
          title="View Lakes"
          table={<LakesTable data={lakesArray} />}
        />
      </div>
    </div>
  );
};

export default LakesViewPage;
