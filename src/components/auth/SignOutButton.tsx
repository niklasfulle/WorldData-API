"use client";
import React, { useState } from "react";
import { Button } from "@/ui/Button";
import { signOut } from "next-auth/react";
import { shortToast } from "@/helpers/shorter-function";

const SignOutButton = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signUserOut = async () => {
    setIsLoading(true);

    try {
      await signOut();
    } catch (error) {
      shortToast("Error", "There was an error logging in with Google", "error");
    }
    setIsLoading(false);
  };

  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      {" "}
      Sign out
    </Button>
  );
};

export default SignOutButton;
