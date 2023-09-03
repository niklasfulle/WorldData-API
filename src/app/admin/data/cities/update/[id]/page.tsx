import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import UpdateSection from "@/data/UpdateSection";
import CitiesForm from "@/data/forms/CitiesForm";
import { mongoDb } from "@/lib/db/mogodb";
import { cityCreateSchema } from "@/lib/db/schema/city.schema";
import CitiesSideInfo from "@/components/admin/data/sideinfo/CitiesSideInfo";

type Props = {
  params: {
    id: string;
  };
};

const CitiesPage = async ({ params: { id } }: Props) => {
  const City = mongoDb.City;

  const cities = await City.find().sort({ id: -1 }).limit(10);

  let citiesArray: Array<any> = [];
  cities.map((city) => {
    citiesArray.push(cityCreateSchema.parse(city));
  });

  const city = await City.findOne({ id: parseInt(id) });

  const cityData = cityCreateSchema.parse(city);

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="cities" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <UpdateSection
          title="Update City"
          subtitle="Last created Cities"
          form={<CitiesForm buttonTitle="Update" city={cityData} />}
          infoSide={<CitiesSideInfo data={citiesArray} />}
        />
      </div>
    </div>
  );
};

export default CitiesPage;
