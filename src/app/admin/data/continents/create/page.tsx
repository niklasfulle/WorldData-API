import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import CreateSection from "@/data/CreateSection";
import { mongoDb } from "@/lib/db/mogodb";
import ContinentsForm from "@/components/admin/data/forms/ContinentsForm";
import { continentCreateSchema } from "@/lib/db/schema/continent.schema";
import ContinentsSideInfo from "@/components/admin/data/sideinfo/ContinentsSieInfo";
import { formatDistance } from "date-fns";

const ContinentsCreatePage = async () => {
  const Continent = mongoDb.Continent;

  const continents = await Continent.find().sort({ createdAt: -1 }).limit(5);

  let continentsArray: Array<any> = [];

  continents.map((continent) => {
    continentsArray.push({
      ...continentCreateSchema.parse(continent),
      createdAt: formatDistance(new Date(continent.createdAt), new Date()),
    });
  });

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="continents" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <CreateSection
          title="Create Continent"
          subtitle="Last created Continents"
          form={<ContinentsForm buttonTitle="Create" action="create" />}
          infoSide={<ContinentsSideInfo data={continentsArray} />}
        />
      </div>
    </div>
  );
};

export default ContinentsCreatePage;
