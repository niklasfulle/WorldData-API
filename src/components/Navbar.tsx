import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { buttonVariants } from "@/ui/Button";
import SignInButton from "@/components/SignInButton";
import SignOutButton from "@/components/SignOutButton";
import MobileMenu from "./MobileMenu";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link href="/" className={buttonVariants({ variant: "link" })}>
          World Data API
        </Link>

        <div className="md:hidden gap-4 flex flex-row">
          <ThemeToggle />
          <MobileMenu />
        </div>

        <div className="hidden md:flex gap-4">
          <ThemeToggle />
          <Link href="/documentation" className={buttonVariants({ variant: "ghost" })}>
            Docs
          </Link>
          <Link href="/world-data" className={buttonVariants({ variant: "ghost" })}>
            Data
          </Link>
          {session ? (
            <>
              <Link className={buttonVariants({ variant: "ghost" })} href="/dashboard">
                Dashboard
              </Link>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
