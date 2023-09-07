"use client";
import React, { useState } from "react";
import { Button } from "@/ui/Button";
import { Input } from "@/ui/Input";
import Link from "next/link";
import { sendForgotPasswordEmail } from "@/lib/auth/auth-functions";

const ForgotPasswordForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="flex min-h-full flex-col items-center justify-center rounded-lg bg-white px-6 py-6 dark:bg-slate-600 lg:px-8">
      <div className="flex flex-col items-center justify-center sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-0 text-center text-2xl font-semibold leading-6 tracking-tight text-gray-900 dark:text-white">
          Enter your E-Mail
        </h2>
      </div>
      <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          onSubmit={(e) => sendForgotPasswordEmail(e, setIsLoading)}
        >
          <div>
            <label
              htmlFor="email"
              className="block pl-2 text-left text-sm font-medium leading-6 text-gray-900 dark:text-white"
            >
              E-Mail
            </label>
            <div className="mt-1">
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="px-l block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <Button
              isLoading={isLoading}
              disabled={isLoading}
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm transition-all ease-in hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-sky-400 dark:text-black dark:hover:bg-sky-500 dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700"
            >
              Send E-Mail
            </Button>
          </div>
        </form>
        <p className="mt-1 text-center text-sm text-gray-500 dark:text-white">
          Not a member?
          <Link
            href="/register"
            className="text-sm text-indigo-600 hover:text-indigo-500 dark:text-sky-400 dark:hover:text-sky-500"
          >
            {" "}
            Sign Up
          </Link>
        </p>
        <div className="inline-flex w-full items-center justify-center">
          <hr className="my-6 h-px w-64 border-0 bg-gray-500 dark:bg-gray-900" />
          <span className="c absolute left-1/2 -translate-x-1/2 bg-white px-3 text-sm text-gray-500 dark:bg-slate-600 dark:text-white">
            Info
          </span>
        </div>
        <div className="w-64 text-justify text-sm dark:text-white">
          You will receive an email with a link to reset your password. If you
          don&apos;t receive an email, please check your spam folder.
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
