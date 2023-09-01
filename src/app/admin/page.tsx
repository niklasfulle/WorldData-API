import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";

const page = async () => {
  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="admin" />
      <div className="container flex h-fit min-h-[90vh] flex-col items-center gap-6 rounded-md bg-white/75 p-2 shadow-md backdrop-blur-md dark:bg-slate-800 dark:text-white"></div>
    </div>
  );
};

export default page;
