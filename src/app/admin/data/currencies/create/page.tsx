import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import CreateSection from "@/data/CreateSection";
import { mongoDb } from "@/lib/db/mogodb";
import CountriesForm from "@/components/admin/data/forms/CountriesForm";
import { countryCreateSchema } from "@/lib/db/schema/country.schema";
import CountriesSideInfo from "@/components/admin/data/sideinfo/CountriesSideInfo";
import CurrenciesForm from "@/components/admin/data/forms/CurrenciesForm";
import { currencyCreateSchema } from "@/lib/db/schema/currency.schema";

const CitiesCreatePage = async () => {
  const Currency = mongoDb.Currency;

  const currencies = await Currency.find().sort({ id: -1 }).limit(10);

  let currenciesArray: Array<any> = [];
  currencies.map((currency) => {
    currenciesArray.push(currencyCreateSchema.parse(currency));
  });

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="currencies" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <CreateSection
          title="Create Currency"
          subtitle="Last created Currencies"
          form={<CurrenciesForm buttonTitle="Create" />}
          infoSide={<CountriesSideInfo data={currenciesArray} />}
        />
      </div>
    </div>
  );
};

export default CitiesCreatePage;
