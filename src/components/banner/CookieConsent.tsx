"use client";
import React, { useEffect, useState } from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";
import { Button, buttonVariants } from "@/ui/Button";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
    if (!hasCookie("localConsent")) {
      const html = document.querySelector("html");
      if (html) {
        html.style.overflow = "hidden";
      }
    } else {
      const sessionExpiry = new Date(Date.now() + 60 * 60 * 24 * 30 * 1000);
      setCookie("localConsent", "true", {
        expires: sessionExpiry,
      });
    }
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    const sessionExpiry = new Date(Date.now() + 60 * 60 * 24 * 30 * 1000);
    setCookie("localConsent", "true", {
      expires: sessionExpiry,
    });
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = "auto";
    }
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-slate-100 bg-opacity-30">
      <div className="fixed bottom-0 left-0 right-0 flex flex-col px-4 py-4 bg-slate-100 dark:bg-slate-700 dark:text-white sm:flex-row sm:items-center sm:justify-between sm:px-20 sm:py-8">
        <span className="px-4 mb-3 text-base text-justify dark:text-white sm:mb-0 sm:mr-16 sm:px-0 sm:text-left sm:text-sm">
          This website uses cookies to improve user experience. By using our
          website you consent to all cookies in accordance with our Cookie
          Policy. To learn more about cookies, click on
          <Link
            href="/info/cookies"
            className="text-[#4c4ddb] dark:text-[#25bbee]"
          >
            {" "}
            Cookies
          </Link>
          .
        </span>
        <Button
          className={buttonVariants({ variant: "cookie" })}
          onClick={() => acceptCookie()}
        >
          Accept
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;
