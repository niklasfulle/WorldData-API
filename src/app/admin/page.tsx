import React from "react";
import CookieConsent from "@/components/banner/CookieConsent";
import Sidebar from "@/components/navigation/SideBar/SideBar";

const page = async () => {
  return (
    <div className="container max-w-7xl mx-auto mt-12 ">
      <div className="flex flex-col items-center gap-6 min-h-screen h-auto">
        <Sidebar />
        <CookieConsent />
      </div>
    </div>
  );
};

export default page;
