"use client";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { Button } from "../ui/Button";
import { toast } from "../ui/Toast";
import Icons from "../ui/Icons";
import Link from "next/link";
import { Input } from "../ui/Input";

const SignInForm = ({}) => {
  const [isLoadingCredentials, setIsLoadingCredentials] = useState<boolean>(false);
  const [isLoadingGoogle, setIsLoadingGoogle] = useState<boolean>(false);
  const [isLoadingGithub, setIsLoadingGithub] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordConfimation, setShowPasswordConfimation] = useState<boolean>(false);

  const loginWithGoogle = async () => {
    setIsLoadingGoogle(true);

    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "Error",
        message: "There was an error logging in with Google",
        type: "error",
      });
    } finally {
      setIsLoadingGoogle(false);
    }
  };

  const loginWithGithub = async () => {
    setIsLoadingGithub(true);

    try {
      await signIn("github");
    } catch (error) {
      toast({
        title: "Error",
        message: "There was an error logging in with Github",
        type: "error",
      });
    } finally {
      setIsLoadingGithub(false);
    }
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      setIsLoadingCredentials(true);
      const target = e.target as typeof e.target & {
        username: { value: string };
        email: { value: string };
        password: { value: string };
        passwordConfirm: { value: string };
      };

      const username = target.username.value;
      const email = target.email.value;
      const password = target.password.value;
      const passwordConfirm = target.passwordConfirm.value;

      if (password !== passwordConfirm) {
        toast({
          title: "Error",
          message: "Passwords do not match",
          type: "error",
        });
        return;
      }

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      toast({
        title: "Success",
        message: "You have successfully registered",
        type: "success",
      });
    } catch (error) {
      toast({
        title: "Error",
        message: "There was an error registering",
        type: "error",
      });
    }

    setIsLoadingCredentials(false);
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8 bg-white dark:bg-slate-600 rounded-lg">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center items-center">
        <h2 className="mt-0 text-center text-2xl font-semibold leading-6 tracking-tight text-gray-900 dark:text-white">
          Sign Up
        </h2>
      </div>
      <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
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
                className="ease-in transition-all block w-full rounded-md border-0 pl-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 sm:text-sm sm:leading-6 dark:focus:ring-offset-slate-700"
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
                className="ease-in transition-all block w-full rounded-md border-0 pl-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 sm:text-sm sm:leading-6 dark:focus:ring-offset-slate-700"
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
              isLoading={isLoadingCredentials}
              disabled={isLoadingCredentials}
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
          <hr className="w-64 h-px my-6 bg-gray-500 border-0 dark:bg-gray-900" />
          <span className="absolute px-3 text-sm text-gray-500 dark:text-white -translate-x-1/2 bg-white left-1/2 c dark:bg-slate-600">
            Or continue with
          </span>
        </div>
        <div className="flex justify-center space-x-4">
          <Button
            isLoading={isLoadingGoogle}
            type="button"
            className="max-w-sm w-full dark:bg-white ease-in transition-all"
            onClick={loginWithGoogle}
            disabled={isLoadingGoogle}
          >
            {isLoadingGoogle ? null : (
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
            isLoading={isLoadingGithub}
            type="button"
            className="max-w-sm w-full dark:bg-white ease-in transition-all"
            onClick={loginWithGithub}
            disabled={isLoadingGithub}
          >
            {isLoadingGithub ? null : <Icons.Github className="mr-2 h-4 w-4" />}
            Github
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
