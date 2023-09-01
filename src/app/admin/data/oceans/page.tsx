"use client";
import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import { useSearchParams } from "next/navigation";
import ViewSection from "@/data/ViewSection";
import CreateSection from "@/data/CreateSection";
import UpdateSection from "@/data/UpdateSection";
import OceansForm from "@/data/forms/OceansForm";

const getView = (action: string | null | undefined) => {
  switch (action) {
    case "view":
      return <ViewSection title="View Oceans" />;
    case "create":
      return (
        <CreateSection
          title="Create Ocean"
          subtitle="Last created Oceans"
          form={<OceansForm buttonTitle="Create" />}
          infoSide={<></>}
        />
      );
    case "update":
      return (
        <UpdateSection
          title="Update Ocean"
          subtitle="Last created Oceans"
          form={<OceansForm buttonTitle="Update" />}
          infoSide={<></>}
        />
      );
    default:
      return null;
  }
};

const OceansPage = () => {
  const action = useSearchParams()?.get("action");

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="oceans" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        {getView(action)}
      </div>
    </div>
  );
};

export default OceansPage;
