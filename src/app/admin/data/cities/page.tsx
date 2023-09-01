"use client";
import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import { useSearchParams } from "next/navigation";
import CreateSection from "@/data/CreateSection";
import ViewSection from "@/data/ViewSection";
import UpdateSection from "@/data/UpdateSection";
import CitiesForm from "@/data/forms/CitiesForm";

const getView = (action: string | null | undefined) => {
  switch (action) {
    case "view":
      return <ViewSection title="View Cities" />;
    case "create":
      return (
        <CreateSection
          title="Create City"
          subtitle="Last created Cities"
          form={<CitiesForm buttonTitle="Create" />}
          infoSide={<></>}
        />
      );
    case "update":
      return (
        <UpdateSection
          title="Update City"
          subtitle="Last created Cities"
          form={<CitiesForm buttonTitle="Update" />}
          infoSide={<></>}
        />
      );
    default:
      return null;
  }
};

const CitiesPage = () => {
  const action = useSearchParams()?.get("action");

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="cities" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        {getView(action)}
      </div>
    </div>
  );
};

export default CitiesPage;
