"use client";
import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import { useSearchParams } from "next/navigation";
import CreateSection from "@/data/CreateSection";
import ViewSection from "@/data/ViewSection";
import UpdateSection from "@/data/UpdateSection";
import CurrenciesForm from "@/data/forms/CurrenciesForm";

const getView = (action: string | null | undefined) => {
  switch (action) {
    case "view":
      return <ViewSection title="View Currencies" />;
    case "create":
      return (
        <CreateSection
          title="Create Currency"
          subtitle="Last created Currencies"
          form={<CurrenciesForm buttonTitle="Create" />}
          infoSide={<></>}
        />
      );
    case "update":
      return (
        <UpdateSection
          title="Update Currency"
          subtitle="Last created Currencies"
          form={<CurrenciesForm buttonTitle="Update" />}
          infoSide={<></>}
        />
      );
    default:
      return null;
  }
};

const CurrenciesPage = () => {
  const action = useSearchParams()?.get("action");

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="currencies" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        {getView(action)}
      </div>
    </div>
  );
};

export default CurrenciesPage;
