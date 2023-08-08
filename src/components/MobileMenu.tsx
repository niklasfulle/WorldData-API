"use client";
import { Icons } from "@/components/Icons";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import { toast } from "@/ui/Toast";

const MobileMenu = () => {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const signUserOut = async () => {
    try {
      setIsLoading(true);
      await signOut();
    } catch (error) {
      toast({
        title: "Error signing out",
        message: "Please try again later.",
        type: "error",
      });
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
              <Link href="/dashboard" className="w-full flex items-center gap-1.5">
                <Icons.LayoutDashboard className="mr-2 h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            ) : (
              <Link href="/login" className="flex w-full items-center gap-1.5">
                <Icons.LayoutDashboard className="mr-2 h-5 w-5" />
                <span>Sign in</span>
              </Link>
            )}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild className="hover:cursor-pointer">
            <Link href="/documentation" className="w-full flex items-center gap-1.5">
              <Icons.Book className="mr-2 h-5 w-5" />
              <span>Docs</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild className="hover:cursor-pointer">
            <Link href="/world-data" className="w-full flex items-center gap-1.5">
              <Icons.Database className="mr-2 h-5 w-5" />
              <span>Data</span>
            </Link>
          </DropdownMenuItem>
          {session ? (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={signUserOut} className="gap-1.5 hover:cursor-pointer">
                <Icons.User className="mr-2 h-5 w-5" />
                <span>{isLoading ? "Signing out" : "Sign out"}</span>
                {isLoading ? <Icons.Loader2 className="animate-spin h-4 w-4" /> : null}
              </DropdownMenuItem>
            </>
          ) : null}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileMenu;
