"use client";
import React from "react";
import CookieConsent from "@/components/banner/CookieConsent";
import Sidebar from "@/components/navigation/SideBar/SideBar";
import { useSearchParams } from "next/navigation";
import ViewSection from "./ViewSection";
import CreateSection from "./CreateSection";
import UpdateSection from "./UpdateSection";

const page = async () => {
  const searchParams = useSearchParams();

  const action = searchParams?.get("action");

  return (
    <div className="max-w-full mx-auto flex">
      <Sidebar page="seas" />
      <div className="container p-0 gap-6 min-h-screen h-auto dark:text-white">
        {action === "view" && <ViewSection />}
        {action === "create" && <CreateSection />}
        {action === "update" && <UpdateSection />}
      </div>
      <CookieConsent />
    </div>
  );
};

export default page;
