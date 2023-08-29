import React from "react";
import CookieConsent from "@/components/banner/CookieConsent";
import Sidebar from "@/components/navigation/SideBar/SideBar";

const page = async () => {
  return (
    <div className="max-w-full mx-auto flex">
      <Sidebar page="oceans" />
      <div className="container flex flex-col items-center gap-6 min-h-screen h-auto rounded-md dark:text-white border-2 md:border-orange-500/70 lg:border-red-500/70 xl:border-green-500/70 border-blue-500/70"></div>
      <CookieConsent />
    </div>
  );
};

export default page;
