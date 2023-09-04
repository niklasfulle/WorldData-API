import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import UpdateSection from "@/data/UpdateSection";
import { mongoDb } from "@/lib/db/mogodb";
import { countryCreateSchema } from "@/lib/db/schema/country.schema";
import CountriesForm from "@/components/admin/data/forms/CountriesForm";
import CountriesSideInfo from "@/components/admin/data/sideinfo/CountriesSideInfo";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

const CountriesUpdatePage = async ({ params: { id } }: Props) => {
  const Country = mongoDb.Country;

  const country = await Country.findOne({ id: parseInt(id) });

  if (!country) return notFound();

  const countries = await Country.find().sort({ id: -1 }).limit(10);

  let countriesArray: Array<any> = [];
  countries.map((country) => {
    countriesArray.push(countryCreateSchema.parse(country));
  });

  const countryData = countryCreateSchema.parse(country);

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="countires" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <UpdateSection
          title="Update Country"
          subtitle="Last created Countires"
          form={<CountriesForm buttonTitle="Update" country={countryData} />}
          infoSide={<CountriesSideInfo data={countriesArray} />}
        />
      </div>
    </div>
  );
};

export default CountriesUpdatePage;
