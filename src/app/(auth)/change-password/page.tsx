import React from "react";
import Icons from "@/ui/Icons";
import { buttonVariants } from "@/ui/Button";
import LargeHeading from "@/ui/LargeHeading";
import Link from "next/link";
import ChangePasswordForm from "@/auth/ChangePassword";
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
    <div className="container inset-0 mx-auto mb-20 mt-12 flex h-auto min-h-[90vh] flex-col">
      <div className="mx-auto flex w-full max-w-lg flex-col justify-center space-y-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <LargeHeading size={"sm"}>Change your password</LargeHeading>
          <ChangePasswordForm user={session!.user} />
          <Link
            className={buttonVariants({
              variant: "ghost",
              className: "-mt-4 w-fit",
            })}
            href="/"
            aria-label="Back to the home page"
          >
            <Icons.ChevronLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
