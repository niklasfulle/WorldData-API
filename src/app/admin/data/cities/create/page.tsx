import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import CreateSection from "@/data/CreateSection";
import CitiesForm from "@/data/forms/CitiesForm";
import { mongoDb } from "@/lib/db/mogodb";
import { cityCreateSchema } from "@/lib/db/schema/city.schema";
import CitiesSideInfo from "@/components/admin/data/sideinfo/CitiesSideInfo";

const CitiesPage = async () => {
  const City = mongoDb.City;

  const cities = await City.find().sort({ id: -1 }).limit(10);

  let citiesArray: Array<any> = [];
  cities.map((city) => {
    citiesArray.push(cityCreateSchema.parse(city));
  });

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="cities" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <CreateSection
          title="Create City"
          subtitle="Last created Cities"
          form={<CitiesForm buttonTitle="Create" />}
          infoSide={<CitiesSideInfo data={citiesArray} />}
        />
      </div>
    </div>
  );
};

export default CitiesPage;
