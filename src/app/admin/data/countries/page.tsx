"use client";
import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import { useSearchParams } from "next/navigation";
import CreateSection from "@/data/CreateSection";
import ViewSection from "@/data/ViewSection";
import UpdateSection from "@/data/UpdateSection";
import CountriesForm from "@/data/forms/CountriesForm";

const getView = (action: string | null | undefined) => {
  switch (action) {
    case "view":
      return <ViewSection title="View Countires" table={<></>} />;
    case "create":
      return (
        <CreateSection
          title="Create Country"
          subtitle="Last created Countires"
          form={<CountriesForm buttonTitle="Create" />}
          infoSide={<></>}
        />
      );
    case "update":
      return (
        <UpdateSection
          title="Update Country"
          subtitle="Last created Countires"
          form={<CountriesForm buttonTitle="Update" />}
          infoSide={<></>}
        />
      );
    default:
      return null;
  }
};

const CountriesPage = () => {
  const action = useSearchParams()?.get("action");
  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="countries" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        {getView(action)}
      </div>
    </div>
  );
};

export default CountriesPage;
