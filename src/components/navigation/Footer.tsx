import React from "react";
import Link from "next/link";
import Icons from "@/ui/Icons";
import { ThemeToggleFooter } from "@/navigation/ThemeToggleFooter";
import { getSession } from "next-auth/react";
import { headers } from "next/headers";

const Footer = async () => {
  const session = await getSession({
    req: {
      headers: Object.fromEntries(headers().entries()),
    },
  });

  return (
    <div className="backdrop-blur-sm bg-white/75 dark:bg-slate-800/75 dark:text-white border-t border-slate-300 dark:border-slate-700 shadow-sm bottom-0 left-0 right-0">
      <div className="flex flex-col py-4 md:px-20 px-8">
        <div className="grid grid-flow-col gap-4 lg:grid-rows-1 grid-rows-2 w-full text-center mb-2">
          <div className="m-1 flex justify-start flex-col dark:text-white">
            <h1 className="text-base mb-1.5 text">WorldData API</h1>
            <Link
              href="/documentation"
              className="text-sm mb-1 active:text-slate-500 dark:active:text-slate-400"
            >
              Documentation
            </Link>
            <Link
              href="/blogposts"
              className="text-sm mb-1 active:text-slate-500 dark:active:text-slate-400"
            >
              Blogposts
            </Link>
          </div>
          <div className="m-1 flex justify-start flex-col dark:text-white">
            <h1 className="text-base mb-1.5 text">For User</h1>
            {session ? (
              <Link
                href="/dashboard"
                className="text-sm mb-1 active:text-slate-500 dark:active:text-slate-400"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/register"
                  className="text-sm mb-1 active:text-slate-500 dark:active:text-slate-400"
                >
                  Sign Up
                </Link>
                <Link
                  href="/login"
                  className="text-sm mb-1 active:text-slate-500 dark:active:text-slate-400"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>
          <div className="m-1 flex items-center flex-col dark:text-white">
            <h1 className="text-base mb-1.5 text">Theme</h1>
            <ThemeToggleFooter />
          </div>
          <div className="m-1 flexflex-col dark:text-white justify-center">
            <h1 className="text-base mb-1.5 text">Extern</h1>
            <div className="m-1 flex justify-center flex-row dark:text-white ">
              <Link
                href="https://twitter.com/"
                className="text-sm mb-1 flex flex-col items-center p-2 active:text-slate-500 dark:active:text-slate-400"
              >
                <Icons.Twitter className="mb-1" />
                Twitter
              </Link>
              <Link
                href="https://github.com/niklasfulle/WorldData-API#readme"
                className="text-sm mb-1 flex flex-col items-center p-2 active:text-slate-500 dark:active:text-slate-400"
              >
                <Icons.Github className="mb-1" />
                Github
              </Link>
            </div>
          </div>
        </div>
        <hr className="dark:text-white w-full mb-3 mt-0 lg:mt-4"></hr>
        <div className="flex flex-row justify-between mt-0 px-4">
          <div className="w-44 md:w-96">
            <p className="font-sm dark:text-white font-semibold">
              {"Copyright © "}
              {new Date().getFullYear() + " "}
              {"WorldData API."}
            </p>
          </div>
          <div className="flex flex-col md:flex-row w-52 md:w-96 justify-end items-end">
            <Link
              href="/info/terms"
              className="text-sm mb-1 md:mr-4 active:text-slate-500 dark:active:text-slate-400"
            >
              Terms
            </Link>
            <Link
              href="/info/privacy"
              className="text-sm mb-1 md:mr-4 active:text-slate-500 dark:active:text-slate-400"
            >
              Privacy
            </Link>
            <Link
              href="/info/security"
              className="text-sm mb-1 md:mr-4 active:text-slate-500 dark:active:text-slate-400"
            >
              Security
            </Link>
            <Link
              href="/info/cookies"
              className="text-sm mb-1 active:text-slate-500 dark:active:text-slate-400"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
