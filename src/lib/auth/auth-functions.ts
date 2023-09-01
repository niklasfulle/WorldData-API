import { shortToast } from "@/lib/helpers/shorter-function";
import { signIn } from "next-auth/react";
import { Dispatch, FormEvent, SetStateAction } from "react";

// TODO Check for unhandels errors

type SetIsLoading = Dispatch<SetStateAction<{
  provider: string;
  isLoading: boolean;
}>>;

type SetIsLoading2 = Dispatch<SetStateAction<boolean>>

type SetError = Dispatch<SetStateAction<string>>;

type SetEmail = Dispatch<SetStateAction<string>>;

type User = {
  name: string;
  email: string;
  image: string;
  role: string;
};

// handles the login with google
export const loginWithGoogle = async (setIsLoading: SetIsLoading) => {
  setIsLoading({ provider: "google", isLoading: true });

  try {
    await signIn("google")
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
    await signIn("github")
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

export const sendForgotPasswordEmail = async (e: FormEvent, setIsLoading: SetIsLoading2, setError: SetError) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const target = e.target as typeof e.target & {
      email: { value: string };
    };

    const email = target.email.value;

    const res = await fetch("/api/auth/forgot-password", {
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
          if (error.error[0].message === "Invalid email") {
            setError("Invalid email");
          }
        } else if (error.message) {
          if (error.message === "No user found" || error.message === "Wrong Provider") {
            shortToast("Success", "Check your email to reset your password.", "success");
          } else if (error.message === "Too many requests") {
            shortToast("Error", "Too many requests. Please try again later.", "error");
          }
          setError("");
        } else {
          setError(error.message);
        }
      });
    } else {
      setError("");
      shortToast("Success", "Check your email to reset your password.", "success");
    }
  } catch (error) {
    setError("");
    shortToast("Error", "There was an error with sending the forgot password email.", "error");
  }
  setIsLoading(false);
};

export const resetPassword = async (e: FormEvent, setIsLoading: SetIsLoading2, setError: SetError, token: string) => {
  e.preventDefault();
  setIsLoading(true);
  try {
    const target = e.target as typeof e.target & {
      password: { value: string };
      passwordConfirm: { value: string };
    };

    const password = target.password.value;
    const passwordConfirm = target.passwordConfirm.value;

    if (password !== passwordConfirm) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    const res = await fetch("/api/auth/new-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
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
    }

    setError("");
    shortToast("Success", "You have successfully reset your password.", "success");

  } catch (error) {
    setError("");
    shortToast("Error", "There was an error with reseting the password.", "error");
  }
  setIsLoading(false);
}

export const changePassword = async (e: FormEvent, setIsLoading: SetIsLoading2, setError: SetError, user: User) => {
  e.preventDefault();
  setIsLoading(true);
  try {
    const target = e.target as typeof e.target & {
      oldPassword: { value: string };
      newPassword: { value: string };
      newPasswordConfirm: { value: string };
    };

    const oldPassword = target.oldPassword.value;
    const newPassword = target.newPassword.value;
    const newPasswordConfirm = target.newPasswordConfirm.value;

    if (newPassword !== newPasswordConfirm) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    const res = await fetch("/api/auth/change-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        oldPassword,
        newPassword,
        email: user.email,
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
    }

    setError("");
    shortToast("Success", "You have successfully change your password.", "success");

  } catch (error) {
    setError("");
    shortToast("Error", "There was an error with changing the password.", "error");
  }
  setIsLoading(false);
}