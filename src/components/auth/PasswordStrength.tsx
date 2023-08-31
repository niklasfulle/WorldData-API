"use client";
import React, { FC, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface PasswordStrengthProps {
  password: string;
}

const PasswordStrength: FC<PasswordStrengthProps> = ({
  password,
}: PasswordStrengthProps) => {
  const [validate, setValidate] = useState({
    hasLow: false,
    hasCap: false,
    hasNumber: false,
    hasSymbol: false,
    has8digit: false,
    has15digit: false,
  });

  const strength = Object.values(validate).reduce(
    (a, item) => a + (item ? 1 : 0),
    0
  );

  const feedback = {
    1: "Password is to weak!",
    2: "It's still weak! ",
    3: "You almost there!",
    4: "Not bad!",
    5: "Great, but you can do better!",
    6: "Perfect now your password is strong",
  }[strength];

  const validatePassword = (password: string) => {
    if (password.match(/\d+/g)) {
      setValidate((o) => ({ ...o, hasNumber: true }));
    } else {
      setValidate((o) => ({ ...o, hasNumber: false }));
    }

    if (password.match(/[A-Z]+/g)) {
      setValidate((o) => ({ ...o, hasCap: true }));
    } else {
      setValidate((o) => ({ ...o, hasCap: false }));
    }

    if (password.match(/[a-z]+/g)) {
      setValidate((o) => ({ ...o, hasLow: true }));
    } else {
      setValidate((o) => ({ ...o, hasLow: false }));
    }

    if (password.match(/[!@#$%^&*(),.?":{}|<>\][~]/g)) {
      setValidate((o) => ({ ...o, hasSymbol: true }));
    } else {
      setValidate((o) => ({ ...o, hasSymbol: false }));
    }

    if (password.length > 7) {
      setValidate((o) => ({ ...o, has8digit: true }));
    } else {
      setValidate((o) => ({ ...o, has8digit: false }));
    }

    if (password.length > 15) {
      setValidate((o) => ({ ...o, has15digit: true }));
    } else {
      setValidate((o) => ({ ...o, has15digit: false }));
    }
  };

  useEffect(() => {
    validatePassword(password);
  }, [password]);
  return (
    <>
      {strength > 0 && (
        <div className="mb-1 block px-3">
          <div>
            <progress
              className={cn(`strength-${strength}`, "h-2 w-full rounded-full")}
              value={strength}
              max="6"
              id="passwordStrengh"
            ></progress>
          </div>
          <p
            className={cn(
              `strength-${strength}`,
              "max-w-[14rem] px-1 font-bold"
            )}
          >
            {feedback}
          </p>
        </div>
      )}
    </>
  );
};

export default PasswordStrength;
