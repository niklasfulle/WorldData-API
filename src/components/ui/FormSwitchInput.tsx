import React, { FC, useEffect } from "react";
import { Switch } from "@mui/material";

interface FormSwitchInputProps {
  id: string;
  title: string;
  value: string;
  checked: boolean;
  setChecked: any;
}

const FormSwitchInput: FC<FormSwitchInputProps> = ({
  id,
  title,
  value,
  checked,
  setChecked,
}) => {
  useEffect(() => {
    if (value || value === "true") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [value, setChecked]);

  return (
    <div className="mb-2.5">
      <label
        htmlFor={id}
        className="block pl-2 text-left text-sm font-medium leading-6 text-gray-900 dark:text-white"
      >
        {title}
      </label>
      <div className="p-3gap-3 mt-0.5 flex w-full flex-row items-center justify-around rounded-md border border-white p-3 px-12 ">
        <span className="text-sm ">False</span>
        <Switch
          id={id}
          onClick={() => setChecked(!checked)}
          checked={checked}
          inputProps={{ "aria-label": "Switch A" }}
        />
        <span className="text-sm ">True</span>
      </div>
    </div>
  );
};

export default FormSwitchInput;
