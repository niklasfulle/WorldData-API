"use client";
import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import { useSearchParams } from "next/navigation";
import ViewSection from "@/data/ViewSection";
import CreateSection from "@/data/CreateSection";
import UpdateSection from "@/data/UpdateSection";
import MountainsForm from "@/data/forms/MountainsForm";

const getView = (action: string | null | undefined) => {
  switch (action) {
    case "view":
      return <ViewSection title="View Mountains" />;
    case "create":
      return (
        <CreateSection
          title="Create Mountain"
          subtitle="Last created Mountains"
          form={<MountainsForm buttonTitle="Create" />}
          infoSide={<></>}
        />
      );
    case "update":
      return (
        <UpdateSection
          title="Update Mountain"
          subtitle="Last created Mountains"
          form={<MountainsForm buttonTitle="Update" />}
          infoSide={<></>}
        />
      );
    default:
      return null;
  }
};

const MountainsPage = () => {
  const action = useSearchParams()?.get("action");

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="mountains" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        {getView(action)}
      </div>
    </div>
  );
};

export default MountainsPage;
