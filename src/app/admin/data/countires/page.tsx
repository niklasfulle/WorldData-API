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
    <div className="max-w-full mx-auto flex">
      <Sidebar page="countries" />
      <div className="container p-0 gap-6 min-h-screen h-auto dark:text-white">
        {action === "view" && <ViewSection />}
        {action === "create" && (
          <CreateSection title="Create Country" form={<CountriesForm buttonTitle="Create" />} />
        )}
        {action === "update" && (
          <UpdateSection title="Update Country" form={<CountriesForm buttonTitle="Update" />} />
        )}
      </div>
    </div>
  );
};

export default CountriesPage;
