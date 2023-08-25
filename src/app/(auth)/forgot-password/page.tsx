import React from "react";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import CookieConsent from "@/components/banner/CookieConsent";
import { buttonVariants } from "@/components/ui/Button";
import Icons from "@/components/ui/Icons";
import LargeHeading from "@/components/ui/LargeHeading";
import Link from "next/link";

const page = () => {
  return (
    <div className="inset-0 mx-auto container flex flex-col mt-12 min-h-[90vh] h-auto">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-lg">
        <div className="flex flex-col items-center gap-6 text-center">
          <LargeHeading size={"sm"}>Reset your password</LargeHeading>
          <ForgotPasswordForm />
          <Link
            className={buttonVariants({
              variant: "ghost",
              className: "w-fit -mt-4",
            })}
            href="/"
            aria-label="Back to the home page"
          >
            <Icons.ChevronLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </div>
        <CookieConsent />
      </div>
    </div>
  );
};

export default page;
