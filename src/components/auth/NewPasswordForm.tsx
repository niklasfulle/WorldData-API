"use client";
import React, { FC, useState } from "react";
import { Button } from "@/ui/Button";
import Icons from "@/ui/Icons";
import { Input } from "@/ui/Input";
import PasswordStrength from "./PasswordStrength";
import { resetPassword } from "@/lib/auth/auth-functions";

interface Props {
  token: string;
}

const NewPasswordForm: FC<Props> = ({ token }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState<string>("");
  const [strength, setStrength] = useState<number>(0);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordConfimation, setShowPasswordConfimation] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleChange = (password: string) => {
    setPassword(password);

    if (document.getElementById("passwordStrengh")) {
      // @ts-ignore
      const strengh = document.getElementById("passwordStrengh")?.value;
      setStrength(strengh || 0);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8 bg-white dark:bg-slate-600 rounded-lg items-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center items-center">
        <h2 className="mt-0 text-center text-2xl font-semibold leading-6 tracking-tight text-gray-900 dark:text-white">
          Set new password
        </h2>
      </div>
      <p id="errors" className="sm:max-w-[14rem] text-center mt-2 text-red-600 font-bold">
        {error}
      </p>
      <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          onSubmit={(e) => resetPassword(e, setIsLoading, setError, token)}
        >
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900 text-left pl-2 dark:text-white"
            >
              New Password
            </label>
            <div className="mt-1 relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="ease-in transition-all block w-full rounded-md border-0 pl-3 pr-8 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 sm:text-sm sm:leading-6 dark:focus:ring-offset-slate-700"
                onChange={(e) => handleChange(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center px-2">
                {showPassword ? (
                  <Icons.EyeOff
                    className="rounded text-sm cursor-pointer h-5 w-5 dark:text-white"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <Icons.Eye
                    className="rounded text-sm cursor-pointer h-5 w-5 dark:text-white"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
            </div>
            <PasswordStrength password={password} />
          </div>
          <div>
            <label
              htmlFor="passwordConfirm"
              className="block text-sm font-medium leading-6 text-gray-900 text-left pl-2 dark:text-white"
            >
              Password confirmation
            </label>
            <div className="mt-1 relative">
              <Input
                id="passwordConfirm"
                name="passwordConfirm"
                type={showPasswordConfimation ? "text" : "password"}
                required
                className="ease-in transition-all block w-full rounded-md border-0 pl-3 pr-8 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 sm:text-sm sm:leading-6 dark:focus:ring-offset-slate-700"
              />
              <div className="absolute inset-y-0 right-0 flex items-center px-2">
                {showPasswordConfimation ? (
                  <Icons.EyeOff
                    className="rounded text-sm cursor-pointer h-5 w-5 dark:text-white"
                    onClick={() => setShowPasswordConfimation(false)}
                  />
                ) : (
                  <Icons.Eye
                    className="rounded text-sm cursor-pointer h-5 w-5 dark:text-white"
                    onClick={() => setShowPasswordConfimation(true)}
                  />
                )}
              </div>
            </div>
          </div>
          <div>
            <Button
              isLoading={isLoading}
              disabled={strength < 4 || isLoading}
              type="submit"
              className="ease-in transition-all flex w-full justify-center rounded-md bg-indigo-600 dark:bg-sky-400 hover:bg-indigo-500 dark:hover:bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white dark:text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-sky-500 disabled:pointer-events-none dark:focus:ring-offset-slate-700"
            >
              Set new password
            </Button>
          </div>
        </form>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-6 bg-gray-500 border-0 dark:bg-gray-900" />
          <span className="absolute px-3 text-sm text-gray-500 dark:text-white -translate-x-1/2 bg-white left-1/2 c dark:bg-slate-600">
            Info
          </span>
        </div>
        <div className="w-64 dark:text-white text-justify text-sm">
          You will overwrite your old password with this new one. Make sure to remember it.
        </div>
      </div>
    </div>
  );
};

export default NewPasswordForm;
