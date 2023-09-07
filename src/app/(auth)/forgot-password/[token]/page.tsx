import React from "react";
import NewPasswordForm from "@/auth/NewPasswordForm";
import { buttonVariants } from "@/ui/Button";
import Icons from "@/ui/Icons";
import LargeHeading from "@/ui/LargeHeading";
import { db } from "@/lib/db/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: {
    token: string;
  };
}

const page = async ({ params: { token } }: Props) => {
  if (!token) notFound();

  const forgotPassword = await db.forgotPassword.findUnique({
    where: {
      token,
    },
  });

  if (!forgotPassword) notFound();

  let expires = false;
  if (forgotPassword.expires < new Date()) {
    // delete key
    await db.forgotPassword.delete({
      where: {
        token,
      },
    });
    expires = true;
  }

  return (
    <div className="container inset-0 mx-auto mt-12 flex h-auto min-h-[90vh] flex-col">
      <div className="mx-auto flex w-full max-w-lg flex-col justify-center space-y-6">
        {expires ? (
          <div className="flex flex-col items-center gap-6 text-center">
            <LargeHeading size={"sm"}>Expired</LargeHeading>
            <p className="text-lg">
              This link has expired. Please request a new one.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6 text-center">
            <LargeHeading size={"sm"}>Set new Password</LargeHeading>
            <NewPasswordForm token={token} />
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
        )}
      </div>
    </div>
  );
};

export default page;
