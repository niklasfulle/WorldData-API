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
    <div className="mx-auto flex max-w-full">
      <Sidebar page="lakes" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        {action === "view" && <ViewSection />}
        {action === "create" && (
          <CreateSection
            title="Create Lake"
            subtitle="Last created Lakes"
            form={<LakesForm buttonTitle="Create" />}
          />
        )}
        {action === "update" && (
          <UpdateSection
            title="Update Lake"
            subtitle="Last created Lakes"
            form={<LakesForm buttonTitle="Update" />}
          />
        )}
      </div>
    </div>
  );
};

export default LakesPage;
