import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import ViewSection from "@/data/ViewSection";
import { mongoDb } from "@/lib/db/mogodb";
import CountriesTable from "@/components/admin/data/table/CountriesTable";
import { countryCreateSchema } from "@/lib/db/schema/country.schema";

const CountriesViewPage = async () => {
  const Country = mongoDb.Country;

  const countries = await Country.find();

  let countriesArray: Array<any> = [];
  countries.map((country) => {
    countriesArray.push(countryCreateSchema.parse(country));
  });

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="countries" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <ViewSection
          title="View Countries"
          table={<CountriesTable data={countriesArray} />}
        />
      </div>
    </div>
  );
};

export default CountriesViewPage;
