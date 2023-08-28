import React from "react";
import CookieConsent from "@/components/banner/CookieConsent";
import Sidebar from "@/components/navigation/SideBar/SideBar";

const page = async () => {
  return (
    <div className="max-w-full mx-auto flex">
      <Sidebar page="countires" />
      <div className="container  flex flex-col items-center gap-6 min-h-screen h-auto rounded-md"></div>
      <CookieConsent />
    </div>
  );
};

export default page;
