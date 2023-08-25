"use client";
import React, { useState } from "react";
import { Button } from "@/ui/Button";
import { Input } from "@/ui/Input";
import Link from "next/link";
import { sendForgotPasswordEmail } from "@/lib/auth/auth-functions";

const ForgotPasswordForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8 bg-white dark:bg-slate-600 rounded-lg items-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center items-center">
        <h2 className="mt-0 text-center text-2xl font-semibold leading-6 tracking-tight text-gray-900 dark:text-white">
          Enter your E-Mail
        </h2>
      </div>
      <p id="errors" className="sm:max-w-[14rem] text-center mt-2 text-[#ff0000] font-bold">
        {error}
      </p>
      <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          onSubmit={(e) => sendForgotPasswordEmail(e, setIsLoading, setError)}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900 text-left pl-2 dark:text-white"
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
                className="ease-in transition-all block w-full rounded-md border-0 px-l py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 sm:text-sm sm:leading-6 dark:focus:ring-offset-slate-700"
              />
            </div>
          </div>

          <div>
            <Button
              isLoading={isLoading}
              disabled={isLoading}
              type="submit"
              className="ease-in transition-all flex w-full justify-center rounded-md bg-indigo-600 dark:bg-sky-400 hover:bg-indigo-500 dark:hover:bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white dark:text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-sky-400 disabled:pointer-events-none dark:focus:ring-offset-slate-700"
            >
              Send E-Mail
            </Button>
          </div>
        </form>
        <p className="text-center text-sm text-gray-500 dark:text-white mt-1">
          Not a member?
          <Link
            href="/register"
            className="text-sm text-indigo-600 hover:text-indigo-500 dark:text-sky-400 dark:hover:text-sky-500"
          >
            {" "}
            Sign Up
          </Link>
        </p>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-6 bg-gray-500 border-0 dark:bg-gray-900" />
          <span className="absolute px-3 text-sm text-gray-500 dark:text-white -translate-x-1/2 bg-white left-1/2 c dark:bg-slate-600">
            Info
          </span>
        </div>
        <div className="w-64 dark:text-white text-justify text-sm">
          You will receive an email with a link to reset your password. If you don&apos;t receive an
          email, please check your spam folder.
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
