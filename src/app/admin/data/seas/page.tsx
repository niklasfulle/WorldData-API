"use client";
import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import { useSearchParams } from "next/navigation";
import ViewSection from "@/data/ViewSection";
import CreateSection from "@/data/CreateSection";
import UpdateSection from "@/data/UpdateSection";
import SeasForm from "@/data/forms/SeasForm";

const SeasPage = () => {
  const searchParams = useSearchParams();

  const action = searchParams?.get("action");

  return (
    <div className="max-w-full mx-auto flex">
      <Sidebar page="seas" />
      <div className="container p-0 gap-6 min-h-screen h-auto dark:text-white">
        {action === "view" && <ViewSection />}
        {action === "create" && (
          <CreateSection title="Create City" form={<SeasForm buttonTitle="Create" />} />
        )}
        {action === "update" && (
          <UpdateSection title="Update City" form={<SeasForm buttonTitle="Update" />} />
        )}
      </div>
    </div>
  );
};

export default SeasPage;
