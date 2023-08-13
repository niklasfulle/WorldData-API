import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Icons from "@/ui/Icons";
import { ThemeToggleFooter } from "@/navigation/ThemeToggleFooter";

const Footer = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 dark:text-white border-t border-slate-300 dark:border-slate-700 shadow-sm bottom-0 left-0 right-0">
      <div className="flex flex-col py-4 md:px-20 px-8">
        <div className="grid grid-flow-col gap-4 lg:grid-rows-1 grid-rows-2 w-full text-center mb-2">
          <div className="m-1 flex justify-start flex-col dark:text-white">
            <h4 className="text-md mb-1.5 text">Worlddata API</h4>
            <Link href="/documentation" className="text-sm mb-1">
              Documentation
            </Link>
            <Link href="/world-data" className="text-sm mb-1">
              World Data
            </Link>
            <Link href="/blogposts" className="text-sm mb-1">
              Blogposts
            </Link>
          </div>
          <div className=" m-1 flex justify-start flex-col dark:text-white">
            <h4 className="text-md mb-1.5 text">For User</h4>
            {session ? (
              <Link href="/dashboard" className="text-sm mb-1">
                Dashboard
              </Link>
            ) : (
              <>
                <Link href="/register" className="text-sm mb-1">
                  Sign Up
                </Link>
                <Link href="/login" className="text-sm mb-1">
                  Sign In
                </Link>
              </>
            )}
          </div>
          <div className="m-1 flex items-center flex-col dark:text-white">
            <h4 className="text-md mb-1.5 text">Theme</h4>
            <ThemeToggleFooter />
          </div>
          <div className="m-1 flexflex-col dark:text-white justify-center">
            <h4 className="text-md mb-1.5 text">Extern</h4>
            <div className="m-1 flex justify-center flex-row dark:text-white">
              {/*<Link href="" className="text-sm mb-1 flex flex-col items-center p-2">
                <Icons.Twitter className="mb-1" />
                Twitter
              </Link>
              <Link href="" className="text-sm mb-1 flex flex-col items-center p-2">
                <Icons.Instagram className="mb-1" />
                Instagram
            </Link>*/}
              <Link
                href="https://github.com/niklasfulle/WorldData-API#readme"
                className="text-sm mb-1 flex flex-col items-center p-2"
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
              Worlddata API {" " + new Date().getFullYear()}
              {"."}
            </p>
          </div>
          <div className="flex flex-col md:flex-row w-52 md:w-96 justify-end items-end">
            <Link href="/info/terms" className="text-sm mb-1 md:mr-4 ">
              Terms
            </Link>
            <Link href="/info/privacy" className="text-sm mb-1 md:mr-4">
              Privacy
            </Link>
            <Link href="/info/security" className="text-sm mb-1 md:mr-4">
              Security
            </Link>
            <Link href="/info/cookies" className="text-sm mb-1">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
