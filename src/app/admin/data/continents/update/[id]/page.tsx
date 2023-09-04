import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import { mongoDb } from "@/lib/db/mogodb";
import ContinentsForm from "@/components/admin/data/forms/ContinentsForm";
import { continentCreateSchema } from "@/lib/db/schema/continent.schema";
import UpdateSection from "@/components/admin/data/UpdateSection";
import ContinentsSideInfo from "@/components/admin/data/sideinfo/ContinentsSieInfo";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

const CitiesUpdatePage = async ({ params: { id } }: Props) => {
  const Continent = mongoDb.Continent;

  const continent = await Continent.findOne({ id: parseInt(id) });

  if (!continent) return notFound();

  const continents = await Continent.find().sort({ id: -1 }).limit(10);

  let continentsArray: Array<any> = [];
  continents.map((continent) => {
    continentsArray.push(continentCreateSchema.parse(continent));
  });

  const continentData = continentCreateSchema.parse(continent);

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="continents" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <UpdateSection
          title="Update Continent"
          subtitle="Last created Continents"
          form={
            <ContinentsForm buttonTitle="Update" continent={continentData} />
          }
          infoSide={<ContinentsSideInfo data={continentsArray} />}
        />
      </div>
    </div>
  );
};

export default CitiesUpdatePage;
