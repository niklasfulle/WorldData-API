"use client";
import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import { useSearchParams } from "next/navigation";
import CreateSection from "@/data/CreateSection";
import ViewSection from "@/data/ViewSection";
import UpdateSection from "@/data/UpdateSection";
import CurrenciesForm from "@/data/forms/CurrenciesForm";

const CurrenciesPage = () => {
  const searchParams = useSearchParams();

  const action = searchParams?.get("action");

  return (
    <div className="max-w-full mx-auto flex">
      <Sidebar page="currencies" />
      <div className="container p-0 gap-6 min-h-screen h-auto dark:text-white">
        {action === "view" && <ViewSection />}
        {action === "create" && (
          <CreateSection title="Create City" form={<CurrenciesForm buttonTitle="Create" />} />
        )}
        {action === "update" && (
          <UpdateSection title="Update City" form={<CurrenciesForm buttonTitle="Update" />} />
        )}
      </div>
    </div>
  );
};

export default CurrenciesPage;
