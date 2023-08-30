"use client";
import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import { useSearchParams } from "next/navigation";
import ViewSection from "@/data/ViewSection";
import CreateSection from "@/data/CreateSection";
import UpdateSection from "@/data/UpdateSection";
import LakesForm from "@/data/forms/LakesForm";

const LakesPage = () => {
  const searchParams = useSearchParams();

  const action = searchParams?.get("action");

  return (
    <div className="max-w-full mx-auto flex">
      <Sidebar page="lakes" />
      <div className="container p-0 gap-6 min-h-screen h-auto dark:text-white">
        {action === "view" && <ViewSection />}
        {action === "create" && (
          <CreateSection title="Create City" form={<LakesForm buttonTitle="Create" />} />
        )}
        {action === "update" && (
          <UpdateSection title="Update City" form={<LakesForm buttonTitle="Update" />} />
        )}
      </div>
    </div>
  );
};

export default LakesPage;
