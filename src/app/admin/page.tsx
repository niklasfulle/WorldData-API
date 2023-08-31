import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";

const page = async () => {
  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="admin" />
      <div className="container flex h-auto min-h-screen flex-col items-center gap-6 rounded-md border border-blue-500/30 dark:text-white md:border-orange-500/30 lg:border-red-500/30 xl:border-green-500/30"></div>
    </div>
  );
};

export default page;
