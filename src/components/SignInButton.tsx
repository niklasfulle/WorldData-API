"use client";
import { FC, useState } from "react";
import { Button } from "@/ui/Button";
import { signIn } from "next-auth/react";
import { toast } from "@/components/ui/Toast";

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "Error signing in",
        message: "Pleas try again later",
        type: "error",
      });
    }
    setIsLoading(false);
  };

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      {" "}
      Sign in
    </Button>
  );
};

export default SignInButton;
