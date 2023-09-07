"use client";
import React, { FC, useState } from "react";
import { Button } from "@/ui/Button";
import Icons from "@/ui/Icons";
import { Input } from "@/ui/Input";
import PasswordStrength from "./PasswordStrength";
import { changePassword } from "@/lib/auth/auth-functions";

type User = {
  name: string;
  email: string;
  image: string;
  role: string;
};

interface ChangePasswordFormProps {
  user: User;
}

const ChangePasswordForm: FC<ChangePasswordFormProps> = ({
  user,
}: ChangePasswordFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState<string>("");
  const [strength, setStrength] = useState<number>(0);
  const [showOldPassword, setShowOldPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showNewPasswordConfimation, setShowNewPasswordConfimation] =
    useState<boolean>(false);

  const handleChange = (password: string) => {
    setPassword(password);

    if (document.getElementById("passwordStrengh")) {
      // @ts-ignore
      const strengh = document.getElementById("passwordStrengh")?.value;
      setStrength(strengh || 0);
    }
  };

  return (
    <div className="flex min-h-full flex-col items-center justify-center rounded-lg bg-white px-6 py-6 dark:bg-slate-600 lg:px-8">
      <div className="flex flex-col items-center justify-center sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-0 text-center text-2xl font-semibold leading-6 tracking-tight text-gray-900 dark:text-white">
          Change password
        </h2>
      </div>

      <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          onSubmit={(e) => changePassword(e, setIsLoading, user)}
        >
          <div>
            <label
              htmlFor="oldPassword"
              className="block pl-2 text-left text-sm font-medium leading-6 text-gray-900 dark:text-white"
            >
              Old Password
            </label>
            <div className="relative mt-1">
              <Input
                id="oldPassword"
                name="oldPassword"
                type={showOldPassword ? "text" : "password"}
                required
                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700 sm:text-sm sm:leading-6"
              />
              <div className="absolute inset-y-0 right-0 flex items-center px-2">
                {showOldPassword ? (
                  <Icons.EyeOff
                    className="h-5 w-5 cursor-pointer rounded text-sm dark:text-white"
                    onClick={() => setShowOldPassword(false)}
                  />
                ) : (
                  <Icons.Eye
                    className="h-5 w-5 cursor-pointer rounded text-sm dark:text-white"
                    onClick={() => setShowOldPassword(true)}
                  />
                )}
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="newPassword"
              className="block pl-2 text-left text-sm font-medium leading-6 text-gray-900 dark:text-white"
            >
              New Password
            </label>
            <div className="relative mt-1">
              <Input
                id="newPassword"
                name="newPassword"
                type={showNewPassword ? "text" : "password"}
                required
                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700 sm:text-sm sm:leading-6"
                onChange={(e) => handleChange(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center px-2">
                {showNewPassword ? (
                  <Icons.EyeOff
                    className="h-5 w-5 cursor-pointer rounded text-sm dark:text-white"
                    onClick={() => setShowNewPassword(false)}
                  />
                ) : (
                  <Icons.Eye
                    className="h-5 w-5 cursor-pointer rounded text-sm dark:text-white"
                    onClick={() => setShowNewPassword(true)}
                  />
                )}
              </div>
            </div>
            <PasswordStrength password={password} />
          </div>
          <div>
            <label
              htmlFor="newPasswordConfirm"
              className="block pl-2 text-left text-sm font-medium leading-6 text-gray-900 dark:text-white"
            >
              Password confirmation
            </label>
            <div className="relative mt-1">
              <Input
                id="newPasswordConfirm"
                name="newPasswordConfirm"
                type={showNewPasswordConfimation ? "text" : "password"}
                required
                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700 sm:text-sm sm:leading-6"
              />
              <div className="absolute inset-y-0 right-0 flex items-center px-2">
                {showNewPasswordConfimation ? (
                  <Icons.EyeOff
                    className="h-5 w-5 cursor-pointer rounded text-sm dark:text-white"
                    onClick={() => setShowNewPasswordConfimation(false)}
                  />
                ) : (
                  <Icons.Eye
                    className="h-5 w-5 cursor-pointer rounded text-sm dark:text-white"
                    onClick={() => setShowNewPasswordConfimation(true)}
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
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm transition-all ease-in hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-sky-400 dark:text-black dark:hover:bg-sky-500 dark:focus:ring-sky-500 dark:focus:ring-offset-slate-700"
            >
              Set new password
            </Button>
          </div>
        </form>
        <div className="inline-flex w-full items-center justify-center">
          <hr className="my-6 h-px w-64 border-0 bg-gray-500 dark:bg-gray-900" />
          <span className="c absolute left-1/2 -translate-x-1/2 bg-white px-3 text-sm text-gray-500 dark:bg-slate-600 dark:text-white">
            Info
          </span>
        </div>
        <div className="w-64 text-justify text-sm dark:text-white">
          You will overwrite your old password with this new one. Make sure to
          remember it.
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
