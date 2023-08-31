"use client";
import React, { FC, useState } from "react";
import { Icons } from "@/ui/Icons";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/DropdownMenu";
import { shortToast } from "@/helpers/shorter-function";

interface UserProfileProps {
  session?: any;
}

const MobileMenu: FC<UserProfileProps> = ({ session }: UserProfileProps) => {
  const { user } = session || {};

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const signUserOut = async () => {
    try {
      setIsLoading(true);
      await signOut();
    } catch (error) {
      shortToast("Error signing out", "Please try again later.", "error");
    }
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild onClick={() => setOpen((prev) => !prev)}>
        <Button variant="ghost" size="sm" id="mobileMenu">
          <Icons.Menu className="rotate-0 scale-100 transition-all dark:hover:text-slate-100" />
          <span className="sr-only">Mobile Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup onClick={() => setOpen(false)}>
          <DropdownMenuItem asChild className="hover:cursor-pointer">
            {session ? (
              <Link
                href="/dashboard"
                className="flex w-full items-center gap-1.5"
                aria-label="Link to the dashboard page"
              >
                <Icons.LayoutDashboard className="mr-2 h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            ) : (
              <Link
                href="/login"
                className="flex w-full items-center gap-1.5"
                aria-label="Link to the login page"
              >
                <Icons.LayoutDashboard className="mr-2 h-5 w-5" />
                <span>Sign in</span>
              </Link>
            )}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild className="hover:cursor-pointer">
            <Link
              href="/documentation"
              className="flex w-full items-center gap-1.5"
              aria-label="Link to the documentation page"
            >
              <Icons.Book className="mr-2 h-5 w-5" />
              <span>Documentation</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild className="hover:cursor-pointer">
            <Link
              href="/blogposts"
              className="flex w-full items-center gap-1.5"
              aria-label="Link to the world-data page"
            >
              <Icons.Newspaper className="mr-2 h-5 w-5" />
              <span>Blogposts</span>
            </Link>
          </DropdownMenuItem>
          {user && user.role === "admin" ? (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-1.5 hover:cursor-pointer">
                <Link
                  href="/admin"
                  className="flex w-full items-center gap-1.5"
                  aria-label="Link to the world-data page"
                >
                  <Icons.Lock className="mr-2 h-5 w-5" />
                  <span>Admin Panel</span>
                </Link>
              </DropdownMenuItem>
            </>
          ) : null}
          {user && user.provider === "credentials" ? (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-1.5 hover:cursor-pointer">
                <Link
                  href="/change-password"
                  className="flex w-full items-center gap-1.5"
                  aria-label="Link to the world-data page"
                >
                  <Icons.KeyRound className="mr-2 h-5 w-5" />
                  <span>Change password</span>
                </Link>
              </DropdownMenuItem>
            </>
          ) : null}
          {user ? (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={signUserOut}
                className="gap-1.5 hover:cursor-pointer"
              >
                <Icons.LogOut className="mr-2 h-5 w-5" />
                <span>{isLoading ? "Signing out" : "Sign out"}</span>
                {isLoading ? (
                  <Icons.Loader2 className="h-4 w-4 animate-spin" />
                ) : null}
              </DropdownMenuItem>
            </>
          ) : null}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileMenu;
