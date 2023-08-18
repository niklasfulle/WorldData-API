import { shortToast } from "@/helpers/shorter-function";
import { signIn } from "next-auth/react";
import { Dispatch, FormEvent, SetStateAction } from "react";

type SetIsLoading = Dispatch<SetStateAction<{
  provider: string;
  isLoading: boolean;
}>>;

type SetError = Dispatch<SetStateAction<string>>;

type SetEmail = Dispatch<SetStateAction<string>>;

// handles the login with google
export const loginWithGoogle = async (setIsLoading: SetIsLoading) => {
  setIsLoading({ provider: "google", isLoading: true });

  try {
    await signIn("google");
  } catch (error) {
    shortToast("Error", "There was an error logging in with Google.", "error");
  } finally {
    setIsLoading({ provider: "", isLoading: false });
  }
};

// handles the login with github
export const loginWithGithub = async (setIsLoading: SetIsLoading) => {
  setIsLoading({ provider: "github", isLoading: true });

  try {
    await signIn("github");
  } catch (error) {
    shortToast("Error", "There was an error logging in with Github.", "error");
  } finally {
    setIsLoading({ provider: "", isLoading: false });
  }
};

// handles the login with credentials
export const loginWithCredentials = async (e: FormEvent, setIsLoading: SetIsLoading, setEmail: SetEmail, setError: SetError) => {
  e.preventDefault();
  setIsLoading({ provider: "credentials", isLoading: true });

  try {
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

    const email = target.email.value;
    const password = target.password.value;

    const res = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    if (res?.error) {
      setEmail(email);
      if (typeof res.error === "string" && res.error.charAt(0) === "[") {
        const error: any = JSON.parse(res.error);
        setError(error[0].message);
      } else {
        setError(res.error);
      }
    } else {
      setError("");
      window.location.href = "/";
    }
  } catch (error) {
    shortToast("Error", "There was an error logging in.", "error");
  }
  setIsLoading({ provider: "", isLoading: false });
};

// handles the registration with credentials
export const registerWithCredentials = async (e: FormEvent, setIsLoading: SetIsLoading, setError: SetError) => {
  e.preventDefault();
  setIsLoading({ provider: "credentials", isLoading: true });

  try {
    const target = e.target as typeof e.target & {
      username: { value: string };
      email: { value: string };
      password: { value: string };
      passwordConfirm: { value: string };
    };

    const username = target.username.value;
    const email = target.email.value;
    const password = target.password.value;
    const passwordConfirm = target.passwordConfirm.value;

    if (password !== passwordConfirm) {
      setError("Passwords do not match");
      setIsLoading({ provider: "", isLoading: false });
      return;
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    if (!res.ok) {
      res.text().then((text) => {
        const error: any = JSON.parse(text);
        if (error.error) {
          setError(error.error[0].message);
        } else if (error.message) {
          setError(error.message);
        } else {
          setError(error.message);
        }
      });
    } else {
      setError("");
      shortToast("Success", "You have successfully registered - Check your email to confirm", "success");
    }
  } catch (error) {
    shortToast("Error", "There was an error registering", "error");
  } finally {
    setIsLoading({ provider: "", isLoading: false });
  }
};

// handles the resend of the confirmation email
export const resendConfirmationEmail = async (setIsLoading: SetIsLoading, setError: SetError, email: string) => {
  setIsLoading({ provider: "email", isLoading: true });

  try {
    const res = await fetch("/api/auth/send-confirm-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    if (!res.ok) {
      res.text().then((text) => {
        const error: any = JSON.parse(text);
        if (error.error) {
          setError(error.error[0].message);
        } else if (error.message) {
          setError(error.message);
        } else {
          setError(error.message);
        }
      });
    } else {
      setError("");
      shortToast("Success", "Check your email to confirm.", "success");
    }
  } catch (error) {
    shortToast("Error", "There was an error with sending the confirm email.", "error");
  }
  setIsLoading({ provider: "", isLoading: false });
};