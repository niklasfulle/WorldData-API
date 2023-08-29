import React from "react";
import Link from "next/link";
import { ThemeToggle } from "@/navigation/ThemeToggle";
import { buttonVariants } from "@/ui/Button";
import SignInButton from "@/auth/SignInButton";
import MobileMenu from "@/navigation/MobileMenu";
import { getSession } from "next-auth/react";
import { headers } from "next/headers";
import UserProfile from "@/auth/UserProfile";

const Navbar = async () => {
  const session = await getSession({
    req: {
      headers: Object.fromEntries(headers().entries()),
    },
  });

  return (
    <div className="backdrop-blur-sm bg-white/75 dark:bg-slate-800/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <div className="flex flex-row justify-center  items-center">
          <Link href="/" aria-label="Link to the home page">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              width="28.000000pt"
              height="28.000000pt"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
              className="dark:fill-white mr-3"
            >
              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M2335 5059 c-591 -61 -1107 -299 -1524 -704 -217 -211 -368 -417 -496 -680 -123 -252 -194 -477 -237 -750 -31 -199 -31 -531 0 -730 86 -549 321 -1016 711 -1406 317 -316 681 -530 1096 -644 802 -220 1637 -43 2273 483 197 163 407 404 543 622 126 203 245 494 302 735 75 318 86 671 31 1000 -72 431 -272 859 -556 1190 -420 490 -979 794 -1608 875 -117 15 -426 21 -535 9z m498 -318 c7 -7 13 -55 15 -117 4 -97 6 -106 28 -121 37 -24 48 -81 29 -152 -30 -116 -18 -189 60 -356 55 -119 96 -179 133 -194 16 -7 34 -23 40 -37 26 -56 55 -14 106 154 24 76 50 149 58 161 9 12 68 57 131 100 144 97 189 131 254 194 l51 50 79 -56 c280 -198 511 -454 668 -741 36 -65 37 -69 19 -79 -10 -6 -62 -52 -114 -102 -109 -106 -118 -111 -188 -121 -29 -4 -55 -11 -58 -16 -4 -6 3 -22 14 -37 34 -46 63 -112 60 -134 -3 -20 -9 -22 -74 -22 -92 0 -106 -12 -124 -104 -12 -64 -11 -72 7 -107 11 -21 31 -47 45 -57 l27 -20 78 37 c94 45 108 57 140 121 48 96 76 112 155 88 60 -17 126 -53 153 -83 16 -18 17 -25 6 -61 -7 -23 -10 -43 -7 -46 3 -3 27 8 53 25 l48 31 7 -27 c10 -38 27 -206 22 -211 -12 -12 -75 33 -101 71 -68 101 -167 119 -398 72 -161 -33 -190 -54 -308 -219 -77 -110 -117 -199 -117 -265 1 -193 113 -405 225 -426 21 -4 95 -2 164 4 128 11 208 6 249 -16 25 -14 26 -22 11 -75 -9 -33 -6 -45 26 -116 19 -43 36 -89 37 -103 2 -29 -70 -167 -152 -290 -219 -327 -506 -577 -865 -753 -174 -86 -339 -143 -515 -179 -135 -27 -341 -52 -364 -43 -22 9 -31 118 -12 154 8 17 63 75 122 129 59 54 175 180 258 279 83 99 183 212 222 250 95 94 105 110 152 255 73 225 73 272 1 308 -37 18 -148 49 -275 77 -11 2 -77 60 -147 128 -121 118 -130 125 -219 160 -116 47 -237 77 -308 79 -42 1 -66 -5 -104 -25 -84 -46 -124 -37 -163 35 -21 39 -37 55 -69 69 l-42 17 -4 76 c-2 54 -8 81 -20 92 -16 16 -19 15 -54 -12 -135 -107 -153 -102 -184 49 -23 116 15 157 155 165 110 6 142 -9 183 -82 48 -84 82 -76 82 20 0 53 17 88 79 168 25 32 64 93 86 135 27 51 51 83 73 96 18 11 63 42 100 68 37 27 120 75 185 108 97 48 128 59 168 59 57 0 61 10 30 81 -10 24 -35 88 -56 143 -21 54 -61 133 -89 175 -28 42 -69 115 -90 163 -47 108 -59 119 -82 81 -54 -87 -83 -93 -112 -24 -23 57 -69 95 -133 112 -57 15 -97 6 -103 -24 -33 -158 -33 -152 9 -266 15 -43 15 -46 -4 -72 -13 -17 -21 -44 -21 -66 0 -69 -9 -84 -44 -81 -30 3 -31 4 -36 65 -3 34 -10 67 -17 74 -6 6 -35 15 -64 20 -33 5 -75 23 -118 50 -36 23 -77 49 -90 57 -23 14 -23 17 -16 95 8 94 15 111 63 152 59 51 71 54 116 39 36 -13 43 -13 78 6 21 11 45 20 52 20 7 0 19 6 25 14 9 11 6 20 -14 41 -30 34 -31 58 -5 110 24 47 25 86 4 148 -22 64 -63 107 -103 107 -17 0 -67 -18 -111 -40 -44 -22 -85 -40 -92 -40 -6 0 -22 10 -34 21 l-23 21 -69 -21 c-98 -29 -261 -27 -402 5 -23 5 -21 8 30 40 30 19 107 60 170 93 102 52 153 74 292 127 73 27 269 73 375 88 59 9 122 17 138 20 65 10 456 -1 468 -13z m-2100 -1045 c32 -69 85 -127 151 -165 63 -35 133 -112 172 -189 25 -48 29 -72 35 -176 11 -200 43 -302 133 -421 29 -38 91 -129 138 -201 47 -72 90 -134 96 -138 11 -7 18 12 24 63 5 40 21 34 50 -17 38 -67 94 -130 137 -151 20 -10 72 -26 116 -36 93 -20 105 -25 165 -75 25 -20 83 -57 130 -81 46 -24 103 -62 127 -85 37 -35 43 -46 43 -82 0 -23 -11 -76 -25 -118 -37 -112 -34 -127 41 -275 53 -105 75 -137 116 -171 58 -50 88 -102 88 -155 0 -21 -9 -92 -19 -158 -29 -177 -51 -353 -51 -405 0 -25 -7 -100 -17 -168 -20 -143 -3 -134 -188 -102 -389 67 -741 230 -1053 488 -367 304 -642 765 -736 1234 -109 546 -24 1071 252 1555 26 46 48 83 49 83 1 0 13 -24 26 -54z" />
              </g>
            </svg>
          </Link>
          <Link
            href="/"
            className={buttonVariants({ variant: "link" })}
            aria-label="Link to the home page"
          >
            WorldData API
          </Link>
        </div>
        <div className="md:hidden gap-4 flex flex-row">
          <ThemeToggle id="themeToggleMobile" />
          <MobileMenu />
        </div>
        <div className="hidden md:flex gap-4 items-center">
          <ThemeToggle id="themeToggle" />
          <Link
            href="/documentation"
            className={buttonVariants({ variant: "ghost" })}
            aria-label="Link to the documentation page"
          >
            Documentation
          </Link>
          <Link
            href="/blogposts"
            className={buttonVariants({ variant: "ghost" })}
            aria-label="Link to the world-data page"
          >
            Blogposts
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
              <UserProfile session={session} />
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
