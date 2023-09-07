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
    shortToast("Error", "There was an error logging in with Google.", "error", 5000);
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
    shortToast("Error", "There was an error logging in with Github.", "error", 5000);
  } finally {
    setIsLoading({ provider: "", isLoading: false });
  }
};

// handles the login with credentials
export const loginWithCredentials = async (e: FormEvent, setIsLoading: SetIsLoading, setError: SetError, setEmail: SetEmail) => {
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

        shortToast("Error", error[0].message, "error", 5000);
        setError(error[0].message);
      } else {
        shortToast("Error", res.error, "error", 5000);
        setError(res.error);
      }
    } else {
      window.location.href = "/";
    }
  } catch (error) {
    shortToast("Error", "There was an error logging in.", "error", 5000);
  }
  setIsLoading({ provider: "", isLoading: false });
};

// handles the registration with credentials
export const registerWithCredentials = async (e: FormEvent, setIsLoading: SetIsLoading) => {
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
      shortToast("Error", "Passwords do not match", "error", 5000);
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
          shortToast("Error", error.error[0].message, "error", 5000);
        } else if (error.message) {
          shortToast("Error", error.message, "error", 5000);
        } else {
          shortToast("Error", error.message, "error", 5000);
        }
      });
    } else {
      shortToast("Success", "You have successfully registered - Check your email to confirm", "success", 3000);
    }
  } catch (error) {
    shortToast("Error", "There was an error registering", "error", 5000);
  } finally {
    setIsLoading({ provider: "", isLoading: false });
  }
};

// handles the resend of the confirmation email
export const resendConfirmationEmail = async (setIsLoading: SetIsLoading, email: string) => {
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
          shortToast("Error", error.error[0].message, "error", 5000);
        } else if (error.message) {
          shortToast("Error", error.message, "error", 5000);
        } else {
          shortToast("Error", error.message, "error", 5000);
        }
      });
    } else {
      shortToast("Success", "Check your email to confirm.", "success", 3000);
    }
  } catch (error) {
    shortToast("Error", "There was an error with sending the confirm email.", "error", 5000);
  }
  setIsLoading({ provider: "", isLoading: false });
};

export const sendForgotPasswordEmail = async (e: FormEvent, setIsLoading: SetIsLoading2) => {
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
            shortToast("Error", "Invalid email", "error", 5000);
          }
        } else if (error.message) {
          if (error.message === "No user found" || error.message === "Wrong Provider") {
            shortToast("Success", "Check your email to reset your password.", "success", 3000);
          } else if (error.message === "Too many requests") {
            shortToast("Error", "Too many requests. Please try again later.", "error", 5000);
          }
        } else {
          shortToast("Error", error.message, "error", 5000);
        }
      });
    } else {
      shortToast("Success", "Check your email to reset your password.", "success", 3000);
    }
  } catch (error) {
    shortToast("Error", "There was an error with sending the forgot password email.", "error", 5000);
  }
  setIsLoading(false);
};

export const resetPassword = async (e: FormEvent, setIsLoading: SetIsLoading2, token: string) => {
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
      shortToast("Error", "Passwords do not match", "error", 5000);
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
          shortToast("Error", error.error[0].message, "error", 5000);
        } else if (error.message) {
          shortToast("Error", error.message, "error", 5000);
        } else {
          shortToast("Error", error.message, "error", 5000);
        }
      });
    }

    shortToast("Success", "You have successfully reset your password.", "success", 3000);
  } catch (error) {
    shortToast("Error", "There was an error with reseting the password.", "error", 5000);
  }
  setIsLoading(false);
}

export const changePassword = async (e: FormEvent, setIsLoading: SetIsLoading2, user: User) => {
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
      shortToast("Error", "Passwords do not match", "error", 5000);
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
          shortToast("Error", error.error[0].message, "error", 5000);
        } else if (error.message) {
          shortToast("Error", error.message, "error", 5000);
        } else {
          shortToast("Error", error.message, "error", 5000);
        }
      });
    }

    shortToast("Success", "You have successfully change your password.", "success", 3000);
  } catch (error) {
    shortToast("Error", "There was an error with changing the password.", "error", 5000);
  }
  setIsLoading(false);
}