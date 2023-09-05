import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import CreateSection from "@/data/CreateSection";
import { mongoDb } from "@/lib/db/mogodb";
import CurrenciesForm from "@/components/admin/data/forms/CurrenciesForm";
import { currencyCreateSchema } from "@/lib/db/schema/currency.schema";
import { formatDistance } from "date-fns";
import CurrenciesSideInfo from "@/components/admin/data/sideinfo/CurrenciesSideInfo";

const CitiesCreatePage = async () => {
  const Currency = mongoDb.Currency;

  const currencies = await Currency.find().sort({ createdAt: -1 }).limit(5);

  let currenciesArray: Array<any> = [];
  currencies.map((currency) => {
    currenciesArray.push({
      ...currencyCreateSchema.parse(currency),
      createdAt: formatDistance(new Date(currency.createdAt), new Date()),
    });
  });

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="currencies" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <CreateSection
          title="Create Currency"
          subtitle="Last created Currencies"
          form={<CurrenciesForm buttonTitle="Create" action="create" />}
          infoSide={<CurrenciesSideInfo data={currenciesArray} />}
        />
      </div>
    </div>
  );
};

export default CitiesCreatePage;
