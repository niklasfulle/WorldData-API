import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import ViewSection from "@/data/ViewSection";
import { mongoDb } from "@/lib/db/mogodb";
import RiversTable from "@/components/admin/data/table/RiversTable";
import { riverCreateSchema } from "@/lib/db/schema/river.schema";

const RiversViewPage = async () => {
  const River = mongoDb.River;

  const rivers = await River.find();

  let riversArray: Array<any> = [];
  rivers.map((river) => {
    riversArray.push(riverCreateSchema.parse(river));
  });

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="rivers" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <ViewSection
          title="View Rivers"
          table={<RiversTable data={riversArray} />}
        />
      </div>
    </div>
  );
};

export default RiversViewPage;
