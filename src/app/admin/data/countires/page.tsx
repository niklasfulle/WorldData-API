"use client";
import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import { useSearchParams } from "next/navigation";
import CreateSection from "@/data/CreateSection";
import ViewSection from "@/data/ViewSection";
import UpdateSection from "@/data/UpdateSection";
import CountriesForm from "@/data/forms/CountriesForm";

const CountriesPage = () => {
  const searchParams = useSearchParams();

  const action = searchParams?.get("action");

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="countries" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        {action === "view" && <ViewSection />}
        {action === "create" && (
          <CreateSection
            title="Create Country"
            subtitle="Last created Countires"
            form={<CountriesForm buttonTitle="Create" />}
          />
        )}
        {action === "update" && (
          <UpdateSection
            title="Update Country"
            subtitle="Last created Countires"
            form={<CountriesForm buttonTitle="Update" />}
          />
        )}
      </div>
    </div>
  );
};

export default CountriesPage;
