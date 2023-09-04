import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import ViewSection from "@/data/ViewSection";
import { mongoDb } from "@/lib/db/mogodb";
import { currencyCreateSchema } from "@/lib/db/schema/currency.schema";
import CurrenciesTable from "@/components/admin/data/table/CurrenciesTable";

const CurrenciesViewPage = async () => {
  const Currency = mongoDb.Currency;

  const currencies = await Currency.find();

  let currenciesArray: Array<any> = [];
  currencies.map((currency) => {
    currenciesArray.push(currencyCreateSchema.parse(currency));
  });

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="currencies" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <ViewSection
          title="View Currencies"
          table={<CurrenciesTable data={currenciesArray} />}
        />
      </div>
    </div>
  );
};

export default CurrenciesViewPage;
