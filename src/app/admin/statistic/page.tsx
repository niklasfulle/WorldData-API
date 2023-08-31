"use client";
import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import { useSearchParams } from "next/navigation";
import APIStatistics from "./APIStatistics";
import DataStatistics from "./DataStatistics";
import UserStatistics from "./UserStatistics";

const StatisticPage = () => {
  const searchParams = useSearchParams();

  const action = searchParams?.get("data");

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="statistic" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        {action === "api" && <APIStatistics />}
        {action === "user" && <UserStatistics />}
        {action === "data" && <DataStatistics />}
      </div>
    </div>
  );
};

export default StatisticPage;
