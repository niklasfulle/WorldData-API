import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import ViewSection from "@/data/ViewSection";
import { mongoDb } from "@/lib/db/mogodb";
import { continentCreateSchema } from "@/lib/db/schema/continent.schema";
import ContinentsTable from "@/components/admin/data/table/ContinentsTable";

const ContinentsViewPage = async () => {
  const Continent = mongoDb.Continent;

  const continents = await Continent.find();

  let continentsArray: Array<any> = [];
  continents.map((continent) => {
    continentsArray.push(continentCreateSchema.parse(continent));
  });

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="continents" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <ViewSection
          title="View Continents"
          table={<ContinentsTable data={continentsArray} />}
        />
      </div>
    </div>
  );
};

export default ContinentsViewPage;
