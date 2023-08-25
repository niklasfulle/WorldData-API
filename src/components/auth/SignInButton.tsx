"use client";
import React from "react";
import { buttonVariants } from "@/ui/Button";
import Link from "next/link";

const SignInButton = () => {
  return (
    <Link href="/login" className={buttonVariants()}>
      {" "}
      Sign In{" "}
    </Link>
  );
};

export default SignInButton;
