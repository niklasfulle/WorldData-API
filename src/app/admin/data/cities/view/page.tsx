import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import ViewSection from "@/data/ViewSection";
import { mongoDb } from "@/lib/db/mogodb";
import { cityCreateSchema } from "@/lib/db/schema/city.schema";
import CitiesTable from "@/components/admin/data/table/CitiesTable";

const CitiesPage = async () => {
  const City = mongoDb.City;

  const cities = await City.find();

  let citiesArray: Array<any> = [];
  cities.map((city) => {
    citiesArray.push(cityCreateSchema.parse(city));
  });

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="cities" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <ViewSection
          title="View Cities"
          table={<CitiesTable data={citiesArray} />}
        />
      </div>
    </div>
  );
};

export default CitiesPage;
