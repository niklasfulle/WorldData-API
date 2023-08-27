import React from "react";
import Icons from "@/ui/Icons";
import { buttonVariants } from "@/ui/Button";
import LargeHeading from "@/ui/LargeHeading";
import Link from "next/link";
import CookieConsent from "@/components/banner/CookieConsent";
import ChangePasswordForm from "@/components/auth/ChangePassword";
import { getSession } from "next-auth/react";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

const page = async () => {
  const session = await getSession({
    req: {
      headers: Object.fromEntries(headers().entries()),
    },
  });

  if (session?.user.provider !== "credentials") {
    notFound();
  }

  return (
    <div className="inset-0 mx-auto container flex flex-col mt-12 min-h-[90vh] h-auto mb-20">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-lg">
        <div className="flex flex-col items-center gap-6 text-center">
          <LargeHeading size={"sm"}>Change your password</LargeHeading>
          <ChangePasswordForm user={session!.user} />
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
