import React from "react";
import CookieConsent from "@/components/banner/CookieConsent";
import Sidebar from "@/components/navigation/SideBar/SideBar";

const page = async () => {
  return (
    <div className="max-w-full mx-auto flex">
      <Sidebar page="admin" />
      <div className="container flex flex-col items-center gap-6 min-h-screen h-auto rounded-md dark:text-white border-1 md:border-orange-500/30 lg:border-red-500/30 xl:border-green-500/30 border-blue-500/30"></div>
      <CookieConsent />
    </div>
  );
};

export default page;
