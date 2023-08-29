"use client";
import React from "react";
import CookieConsent from "@/components/banner/CookieConsent";
import Sidebar from "@/navigation/SideBar/SideBar";
import { useSearchParams } from "next/navigation";
import APIStatistics from "./APIStatistics";
import DataStatistics from "./DataStatistics";
import UserStatistics from "./UserStatistics";

const StatisticPage = () => {
  const searchParams = useSearchParams();

  const action = searchParams?.get("data");

  return (
    <div className="max-w-full mx-auto flex">
      <Sidebar page="statistic" />
      <div className="container p-0 gap-6 min-h-screen h-auto dark:text-white">
        {action === "api" && <APIStatistics />}
        {action === "user" && <UserStatistics />}
        {action === "data" && <DataStatistics />}
      </div>
      <CookieConsent />
    </div>
  );
};

export default StatisticPage;
