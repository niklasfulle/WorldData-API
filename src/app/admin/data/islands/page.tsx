"use client";
import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import { useSearchParams } from "next/navigation";
import CreateSection from "@/data/CreateSection";
import ViewSection from "@/data/ViewSection";
import UpdateSection from "@/data/UpdateSection";
import IslandsForm from "@/data/forms/IslandsForm";

const getView = (action: string | null | undefined) => {
  switch (action) {
    case "view":
      return <ViewSection title="View Islands" table={<></>} />;
    case "create":
      return (
        <CreateSection
          title="Create Island"
          subtitle="Last created Islands"
          form={<IslandsForm buttonTitle="Create" />}
          infoSide={<></>}
        />
      );
    case "update":
      return (
        <UpdateSection
          title="Update Island"
          subtitle="Last created Islands"
          form={<IslandsForm buttonTitle="Update" />}
          infoSide={<></>}
        />
      );
    default:
      return null;
  }
};

const IslandsPage = () => {
  const action = useSearchParams()?.get("action");

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="islands" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        {getView(action)}
      </div>
    </div>
  );
};

export default IslandsPage;
