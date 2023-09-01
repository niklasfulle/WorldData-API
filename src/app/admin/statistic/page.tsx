"use client";
import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import { useSearchParams } from "next/navigation";
import APIStatistics from "./APIStatistics";
import DataStatistics from "./DataStatistics";
import UserStatistics from "./UserStatistics";

const getView = (action: string | null | undefined) => {
  switch (action) {
    case "api":
      return <APIStatistics />;
    case "user":
      return <UserStatistics />;
    case "data":
      return <DataStatistics />;
    default:
      return null;
  }
};

const StatisticPage = () => {
  const action = useSearchParams()?.get("data");

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="statistic" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        {getView(action)}
      </div>
    </div>
  );
};

export default StatisticPage;
