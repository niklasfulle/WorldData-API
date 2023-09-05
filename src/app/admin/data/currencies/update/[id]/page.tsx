import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import UpdateSection from "@/data/UpdateSection";
import { mongoDb } from "@/lib/db/mogodb";
import { notFound } from "next/navigation";
import CurrenciesForm from "@/components/admin/data/forms/CurrenciesForm";
import CurrenciesSideInfo from "@/components/admin/data/sideinfo/CurrenciesSideInfo";
import { currencyCreateSchema } from "@/lib/db/schema/currency.schema";
import { formatDistance } from "date-fns";

type Props = {
  params: {
    id: string;
  };
};

const CountriesUpdatePage = async ({ params: { id } }: Props) => {
  const Currency = mongoDb.Currency;

  const currency = await Currency.findOne({ id: parseInt(id) });

  if (!currency) return notFound();

  const currencies = await Currency.find().sort({ updatedAt: -1 }).limit(5);

  let currenciesArray: Array<any> = [];
  currencies.map((currency) => {
    currenciesArray.push({
      ...currencyCreateSchema.parse(currency),
      createdAt: formatDistance(new Date(currency.updatedAt), new Date()),
    });
  });

  const currencyData = currencyCreateSchema.parse(currency);

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="currencies" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <UpdateSection
          title="Update Currency"
          subtitle="Last updated Currencies"
          form={
            <CurrenciesForm
              buttonTitle="Update"
              id={id}
              action="update"
              currency={currencyData}
            />
          }
          infoSide={<CurrenciesSideInfo data={currenciesArray} />}
        />
      </div>
    </div>
  );
};

export default CountriesUpdatePage;
