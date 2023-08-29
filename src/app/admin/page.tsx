import React from "react";
import CookieConsent from "@/components/banner/CookieConsent";
import Sidebar from "@/components/navigation/SideBar/SideBar";

const page = async () => {
  return (
    <div className="max-w-full mx-auto flex">
      <Sidebar page="admin" />
      <div className="container flex flex-col items-center gap-6 min-h-screen h-auto rounded-md md:bg-orange-500 lg:bg-red-500 xl:bg-green-500 bg-blue-600"></div>
      <CookieConsent />
    </div>
  );
};

export default page;
