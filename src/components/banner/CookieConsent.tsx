"use client";
import { useEffect, useState } from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";
import { Button, buttonVariants } from "@/ui/Button";
import { useScrollBlock } from "@/helpers/useScrollBlock";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true);
  //const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
    //if (!hasCookie("localConsent")) blockScroll();
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
    //allowScroll();
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-slate-100 bg-opacity-30 z-50">
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-20 py-8 bg-slate-100 dark:bg-slate-700 dark:text-white">
        <span className="text-dark text-base mr-16">
          This website uses cookies to improve user experience. By using our website you consent to
          all cookies in accordance with our Cookie Policy. To learn more about cookies, click on
          <Link href="/info/cookies" className="text-[#4c4ddb] dark:text-[#25bbee]">
            {" "}
            Cookies
          </Link>
          .
        </span>
        <Button className={buttonVariants({ variant: "cookie" })} onClick={() => acceptCookie()}>
          Accept
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;
