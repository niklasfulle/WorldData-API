"use client";
import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import { useSearchParams } from "next/navigation";
import ViewSection from "@/data/ViewSection";
import CreateSection from "@/data/CreateSection";
import UpdateSection from "@/data/UpdateSection";
import MountainsForm from "@/data/forms/MountainsForm";

const MountainsPage = () => {
  const searchParams = useSearchParams();

  const action = searchParams?.get("action");

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="mountains" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        {action === "view" && <ViewSection />}
        {action === "create" && (
          <CreateSection
            title="Create Mountain"
            form={<MountainsForm buttonTitle="Create" />}
          />
        )}
        {action === "update" && (
          <UpdateSection
            title="Update Mountain"
            form={<MountainsForm buttonTitle="Update" />}
          />
        )}
      </div>
    </div>
  );
};

export default MountainsPage;
