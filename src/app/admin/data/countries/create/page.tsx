import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import CreateSection from "@/data/CreateSection";
import { mongoDb } from "@/lib/db/mogodb";
import CountriesForm from "@/components/admin/data/forms/CountriesForm";
import { countryCreateSchema } from "@/lib/db/schema/country.schema";
import CountriesSideInfo from "@/components/admin/data/sideinfo/CountriesSideInfo";

const CitiesCreatePage = async () => {
  const Country = mongoDb.Country;

  const countries = await Country.find().sort({ id: -1 }).limit(10);

  let countriesArray: Array<any> = [];
  countries.map((country) => {
    countriesArray.push(countryCreateSchema.parse(country));
  });

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="countries" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <CreateSection
          title="Create Country"
          subtitle="Last created Countires"
          form={<CountriesForm buttonTitle="Create" />}
          infoSide={<CountriesSideInfo data={countriesArray} />}
        />
      </div>
    </div>
  );
};

export default CitiesCreatePage;
