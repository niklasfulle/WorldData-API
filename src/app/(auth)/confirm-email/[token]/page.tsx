import React from "react";
import { db } from "@/lib/db/prisma";
import { notFound } from "next/navigation";

interface Props {
  params: {
    token: string;
  };
}

const page = async ({ params: { token } }: Props) => {
  if (!token) notFound();

  // check if key is valid
  const confirmEmail = await db.confirmEmail.findUnique({
    where: {
      token,
    },
  });

  if (!confirmEmail) notFound();

  // check if key is expired
  // @ts-ignore
  let expires = false;
  if (confirmEmail.expires < new Date()) {
    // delete key
    await db.confirmEmail.delete({
      where: {
        token,
      },
    });
    expires = true;
  }

  // check if key is confirmed
  let confimed = false;
  if (confirmEmail.token === token) {
    await db.user.update({
      where: {
        id: confirmEmail.userId,
      },
      data: {
        emailVerified: true,
      },
    });

    confimed = true;

    // delete key

    await db.confirmEmail.delete({
      where: {
        token,
      },
    });
  }

  return (
    <div className="container inset-0 mx-auto mt-12 flex h-auto min-h-[90vh] flex-col">
      <div className="mx-auto flex w-full max-w-lg flex-col justify-center space-y-6 text-white">
        {expires ? (
          <div className="flex flex-col items-center justify-center space-y-6">
            <h1 className="text-4xl font-bold">Expired</h1>
            <p className="text-lg">
              This link has expired. Please request a new one.
            </p>
          </div>
        ) : null}
        {confimed ? (
          <div className="flex flex-col items-center justify-center space-y-6">
            <h1 className="text-4xl font-bold">Confirmed</h1>
            <p className="text-lg">
              Your email has been confirmed. You can now login.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default page;
