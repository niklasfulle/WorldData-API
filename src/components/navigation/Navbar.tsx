import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { ThemeToggle } from "@/navigation/ThemeToggle";
import { buttonVariants } from "@/ui/Button";
import SignInButton from "@/auth/SignInButton";
import SignOutButton from "@/auth/SignOutButton";
import MobileMenu from "@/navigation/MobileMenu";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <div className="flex flex-row justify-center  items-center">
          <Link href="/" aria-label="Link to the home page">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              width="28.000000pt"
              height="28.000000pt"
              viewBox="0 0 128.000000 128.000000"
              preserveAspectRatio="xMidYMid meet"
              className="dark:fill-white mr-2"
            >
              <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M520 1255 c-181 -33 -356 -167 -439 -336 -90 -182 -90 -377 0 -558 59 -119 161 -221 280 -280 181 -90 377 -90 558 0 153 76 277 225 327 394 24 82 24 248 0 330 -68 230 -264 410 -491 450 -97 17 -138 17 -235 0z m190 -94 c0 -17 5 -33 11 -37 6 -4 8 -20 5 -40 -7 -35 12 -94 41 -126 24 -26 31 -23 44 22 9 29 26 50 66 80 30 22 58 40 63 40 17 0 122 -104 156 -154 l34 -50 -32 -33 c-18 -18 -38 -33 -45 -33 -16 0 -16 -5 -3 -31 9 -16 7 -19 -13 -19 -26 0 -41 -28 -30 -56 8 -23 33 -16 64 17 23 25 34 30 54 25 14 -4 30 -17 34 -29 5 -12 12 -20 17 -17 5 3 10 -5 12 -17 4 -29 -9 -29 -34 -2 -16 17 -25 20 -64 14 -59 -9 -75 -18 -105 -63 -56 -82 -7 -193 74 -167 31 9 61 -3 61 -26 0 -11 4 -29 10 -39 13 -25 -49 -119 -124 -188 -83 -76 -236 -142 -326 -142 -42 0 -20 44 70 140 65 69 92 105 100 137 16 56 10 68 -42 81 -25 7 -56 24 -73 42 -37 39 -115 64 -150 48 -22 -10 -28 -8 -50 16 -14 15 -23 31 -20 36 9 15 -15 22 -31 9 -20 -16 -37 1 -32 32 2 19 10 25 36 27 23 2 38 -2 47 -14 12 -17 13 -16 20 5 20 62 94 134 163 155 12 4 22 10 22 14 0 8 -69 144 -76 152 -3 2 -9 -2 -13 -9 -7 -11 -13 -9 -30 8 -11 11 -27 21 -35 21 -16 0 -27 -36 -20 -65 3 -11 1 -32 -5 -45 -9 -23 -10 -24 -16 -5 -4 11 -21 27 -38 35 -53 25 -47 85 10 92 23 3 27 9 30 44 4 48 -17 75 -45 58 -22 -13 -162 -18 -162 -6 0 12 113 63 175 78 28 7 83 13 123 13 l72 1 0 -29z m-437 -380 c5 -39 18 -71 48 -118 27 -41 45 -60 49 -52 6 8 11 5 19 -9 6 -11 27 -26 47 -32 20 -7 57 -26 81 -43 43 -29 45 -31 39 -69 -5 -28 -1 -49 14 -78 11 -22 24 -40 29 -40 5 0 11 -7 14 -15 6 -14 -18 -223 -26 -231 -10 -10 -118 21 -187 53 -55 26 -94 55 -146 107 -168 168 -210 399 -113 615 l29 63 48 -48 c43 -43 49 -56 55 -103z" />
              </g>
            </svg>
          </Link>
          <Link
            href="/"
            className={buttonVariants({ variant: "link" })}
            aria-label="Link to the home page"
          >
            World Data API
          </Link>
        </div>

        <div className="md:hidden gap-4 flex flex-row">
          <ThemeToggle id="themeToggleMobile" />
          <MobileMenu />
        </div>
        <div className="hidden md:flex gap-4">
          <ThemeToggle id="themeToggle" />
          <Link
            href="/documentation"
            className={buttonVariants({ variant: "ghost" })}
            aria-label="Link to the documentation page"
          >
            Docs
          </Link>
          <Link
            href="/world-data"
            className={buttonVariants({ variant: "ghost" })}
            aria-label="Link to the world-data page"
          >
            Data
          </Link>
          <Link
            href="/blogposts"
            className={buttonVariants({ variant: "ghost" })}
            aria-label="Link to the world-data page"
          >
            Blog
          </Link>
          {session ? (
            <>
              <Link
                className={buttonVariants({ variant: "ghost" })}
                href="/dashboard"
                aria-label="Link to the dashboard page"
              >
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
