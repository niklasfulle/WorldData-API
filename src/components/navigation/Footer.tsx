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
    <div className="relativ bottom-0 left-0 right-0 border-t border-slate-300 bg-white/75 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/75 dark:text-white">
      <div className="flex flex-col px-8 py-4 md:px-20">
        <div className="mb-2 grid w-full grid-flow-col grid-rows-2 gap-4 text-center lg:grid-rows-1">
          <div className="m-1 flex flex-col justify-start dark:text-white">
            <h1 className="text mb-1.5 text-base">WorldData API</h1>
            <Link
              href="/documentation"
              className="mb-1 text-sm active:text-slate-500 dark:active:text-slate-400"
            >
              Documentation
            </Link>
            <Link
              href="/blogposts"
              className="mb-1 text-sm active:text-slate-500 dark:active:text-slate-400"
            >
              Blogposts
            </Link>
          </div>
          <div className="m-1 flex flex-col justify-start dark:text-white">
            <h1 className="text mb-1.5 text-base">For User</h1>
            {session ? (
              <Link
                href="/dashboard"
                className="mb-1 text-sm active:text-slate-500 dark:active:text-slate-400"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/register"
                  className="mb-1 text-sm active:text-slate-500 dark:active:text-slate-400"
                >
                  Sign Up
                </Link>
                <Link
                  href="/login"
                  className="mb-1 text-sm active:text-slate-500 dark:active:text-slate-400"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>
          <div className="m-1 flex flex-col items-center dark:text-white">
            <h1 className="text mb-1.5 text-base">Theme</h1>
            <ThemeToggleFooter />
          </div>
          <div className="flexflex-col m-1 justify-center dark:text-white">
            <h1 className="text mb-1.5 text-base">Extern</h1>
            <div className="m-1 flex flex-row justify-center dark:text-white ">
              <Link
                href="https://twitter.com/"
                className="mb-1 flex flex-col items-center p-2 text-sm active:text-slate-500 dark:active:text-slate-400"
              >
                <Icons.Twitter className="mb-1" />
                Twitter
              </Link>
              <Link
                href="https://github.com/niklasfulle/WorldData-API#readme"
                className="mb-1 flex flex-col items-center p-2 text-sm active:text-slate-500 dark:active:text-slate-400"
              >
                <Icons.Github className="mb-1" />
                Github
              </Link>
            </div>
          </div>
        </div>
        <hr className="mb-3 mt-0 w-full dark:text-white lg:mt-4"></hr>
        <div className="mt-0 flex flex-row justify-between px-4">
          <div className="w-44 md:w-96">
            <p className="font-sm font-semibold dark:text-white">
              {"Copyright © "}
              {new Date().getFullYear() + " "}
              {"WorldData API."}
            </p>
          </div>
          <div className="flex w-52 flex-col items-end justify-end md:w-96 md:flex-row">
            <Link
              href="/info/terms"
              className="mb-1 text-sm active:text-slate-500 dark:active:text-slate-400 md:mr-4"
            >
              Terms
            </Link>
            <Link
              href="/info/privacy"
              className="mb-1 text-sm active:text-slate-500 dark:active:text-slate-400 md:mr-4"
            >
              Privacy
            </Link>
            <Link
              href="/info/security"
              className="mb-1 text-sm active:text-slate-500 dark:active:text-slate-400 md:mr-4"
            >
              Security
            </Link>
            <Link
              href="/info/cookies"
              className="mb-1 text-sm active:text-slate-500 dark:active:text-slate-400"
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
