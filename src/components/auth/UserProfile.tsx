"use client";
import React, { FC, MouseEvent, useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import Icons from "../ui/Icons";
import { signOut } from "next-auth/react";
import { shortToast } from "@/helpers/shorter-function";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "next/link";

interface UserProfileProps {
  session: any;
}

const UserProfile: FC<UserProfileProps> = ({ session }: UserProfileProps) => {
  const { user } = session;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [prefersDarkMode, setPrefersDarkMode] = useState<boolean>(false);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const signUserOut = async () => {
    setIsLoading(true);

    try {
      await signOut();
    } catch (error) {
      shortToast("Error", "There was an error logging in with Google", "error");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "system") {
      setPrefersDarkMode(true);
    } else {
      setPrefersDarkMode(localStorage.getItem("theme") === "dark" ? true : false);
    }
  }, [open]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
          <Tooltip title="Account">
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              className="bg-none"
            >
              {user.image ? (
                <Image
                  src={user.image}
                  alt=""
                  width={100}
                  height={100}
                  priority={true}
                  className="h-10 w-10 rounded-full drop-shadow-sm hover:drop-shadow-xl hover:cursor-pointer"
                />
              ) : (
                <Icons.UserCircle2 className="dark:text-white h-10 w-10 drop-shadow-sm stroke-1 text-black" />
              )}
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <div className="h-auto flex flex-col gap-1 items-center p-4 -mt-2 dark:bg-slate-800 bg-slate-100 w-60">
            {user.image ? (
              <Image
                src={user.image}
                alt=""
                width={100}
                height={100}
                priority={false}
                className="h-32 w-32 rounded-full drop-shadow-sm mb-3 mt-1"
              />
            ) : (
              <Icons.UserCircle2 className="dark:text-white h-32 w-32 drop-shadow-sm stroke-1 mt-1" />
            )}
            <span> {user.name}</span>
            <span> {user.email}</span>
            {user.provider !== "credentials" ? (
              <>{user.provider === "google" ? <span>Google</span> : <span>GitHub</span>}</>
            ) : (
              <span>Email</span>
            )}
          </div>
          <Divider className="dark:bg-white bg-black" />
          <div className="dark:bg-slate-800 bg-slate-100 py-2 -mb-2">
            {user.provider === "credentials" ? (
              <Link href="/change-password" className="w-full">
                <MenuItem className=" hover:bg-slate-50  dark:hover:bg-slate-700 -ml-1">
                  <Icons.KeyRound className="mr-3 w-5 h-5" />
                  Change password
                </MenuItem>
              </Link>
            ) : null}
            {user.role === "admin" ? (
              <Link href="/admin" className="w-full">
                <MenuItem className=" hover:bg-slate-50  dark:hover:bg-slate-700 -ml-1">
                  <Icons.Lock className="mr-3 w-5 h-5" />
                  Admin Panel
                </MenuItem>
              </Link>
            ) : null}
            <MenuItem
              onClick={signUserOut}
              disabled={isLoading}
              className=" hover:bg-slate-50  dark:hover:bg-slate-700 -ml-1"
            >
              {isLoading ? (
                <Icons.Loader2 className="mr-3 w-5 h-5 animate-spin" />
              ) : (
                <Icons.LogOut className="mr-3 w-5 h-5" />
              )}
              Logout
            </MenuItem>
          </div>
        </Menu>
      </ThemeProvider>
    </>
  );
};

export default UserProfile;
