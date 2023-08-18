"use client";
import { useState } from "react";
import { Button } from "../ui/Button";
import Icons from "../ui/Icons";
import Link from "next/link";
import { Input } from "../ui/Input";
import PasswordStrength from "./PasswordStrength";
import {
  loginWithGithub,
  loginWithGoogle,
  registerWithCredentials,
} from "@/lib/auth/auth-functions";

const SignInForm = ({}) => {
  const [isLoading, setIsLoading] = useState({ provider: "", isLoading: false });
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
          Sign Up
        </h2>
      </div>
      <p id="errors" className="sm:max-w-[14rem] text-center mt-2 text-red-600 font-bold">
        {error}
      </p>
      <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          onSubmit={(e) => registerWithCredentials(e, setIsLoading, setError)}
        >
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900 text-left pl-2 dark:text-white"
            >
              Username
            </label>
            <div className="mt-1">
              <Input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="ease-in transition-all block w-full rounded-md border-0 px-l py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 sm:text-sm sm:leading-6 dark:focus:ring-offset-slate-700"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900 text-left pl-2 dark:text-white"
            >
              Email
            </label>
            <div className="mt-1">
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="ease-in transition-all block w-full rounded-md border-0 pl-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 sm:text-sm sm:leading-6 dark:focus:ring-offset-slate-700"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900 text-left pl-2 dark:text-white"
            >
              Password
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
              isLoading={isLoading.provider == "credentials" && isLoading.isLoading}
              disabled={
                strength < 4 || (isLoading.provider == "credentials" && isLoading.isLoading)
              }
              type="submit"
              className="ease-in transition-all flex w-full justify-center rounded-md bg-indigo-600 dark:bg-sky-400 hover:bg-indigo-500 dark:hover:bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white dark:text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-sky-500 disabled:pointer-events-none dark:focus:ring-offset-slate-700"
            >
              Sign Up
            </Button>
          </div>
        </form>
        <p className="text-center text-sm text-gray-500 dark:text-white mt-1">
          You have already an account?{" "}
          <Link
            href="/login"
            className="text-sm text-indigo-600 hover:text-indigo-500 dark:text-sky-400 dark:hover:text-sky-500"
          >
            {" "}
            Sign In
          </Link>
        </p>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-6 bg-gray-500 border-0 dark:bg-gray-300" />
          <span className="absolute px-3 text-sm text-gray-500 dark:text-white -translate-x-1/2 bg-white left-1/2 c dark:bg-slate-600">
            Or continue with
          </span>
        </div>
        <div className="flex justify-center space-x-4">
          <Button
            isLoading={isLoading.provider == "google" && isLoading.isLoading}
            type="button"
            className="max-w-sm w-full dark:bg-white ease-in transition-all"
            onClick={() => loginWithGoogle(setIsLoading)}
            disabled={isLoading.provider == "google" && isLoading.isLoading}
          >
            {isLoading.provider == "google" && isLoading.isLoading ? null : (
              <svg
                className="mr-2 h-4 w-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
            )}
            Google
          </Button>
          <Button
            isLoading={isLoading.provider == "github" && isLoading.isLoading}
            type="button"
            className="max-w-sm w-full dark:bg-white ease-in transition-all"
            onClick={() => loginWithGithub(setIsLoading)}
            disabled={isLoading.provider == "github" && isLoading.isLoading}
          >
            {isLoading.provider == "github" && isLoading.isLoading ? null : (
              <Icons.Github className="mr-2 h-4 w-4" />
            )}
            Github
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
