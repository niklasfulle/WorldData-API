"use client";
import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import { useSearchParams } from "next/navigation";
import ViewSection from "@/data/ViewSection";
import CreateSection from "@/data/CreateSection";
import UpdateSection from "@/data/UpdateSection";
import OceansForm from "@/data/forms/OceansForm";

const OceansPage = () => {
  const searchParams = useSearchParams();

  const action = searchParams?.get("action");

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="oceans" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        {action === "view" && <ViewSection />}
        {action === "create" && (
          <CreateSection
            title="Create Ocean"
            form={<OceansForm buttonTitle="Create" />}
          />
        )}
        {action === "update" && (
          <UpdateSection
            title="Update Ocean"
            form={<OceansForm buttonTitle="Update" />}
          />
        )}
      </div>
    </div>
  );
};

export default OceansPage;
