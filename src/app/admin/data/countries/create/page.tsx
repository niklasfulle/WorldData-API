import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import CreateSection from "@/data/CreateSection";
import { mongoDb } from "@/lib/db/mogodb";
import CountriesForm from "@/components/admin/data/forms/CountriesForm";
import { countryCreateSchema } from "@/lib/db/schema/country.schema";
import CountriesSideInfo from "@/components/admin/data/sideinfo/CountriesSideInfo";
import { formatDistance } from "date-fns";

const CitiesCreatePage = async () => {
  const Country = mongoDb.Country;

  const countries = await Country.find().sort({ createdAt: -1 }).limit(5);

  let countriesArray: Array<any> = [];
  countries.map((country) => {
    countriesArray.push({
      ...countryCreateSchema.parse(country),
      createdAt: formatDistance(new Date(country.createdAt), new Date()),
    });
  });

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="countries" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <CreateSection
          title="Create Country"
          subtitle="Last created Countires"
          form={<CountriesForm buttonTitle="Create" action="create" />}
          infoSide={<CountriesSideInfo data={countriesArray} />}
        />
      </div>
    </div>
  );
};

export default CitiesCreatePage;
