import React, { FC, useState } from "react";
import { Textarea } from "@/ui/Textarea";
import Icons from "@/ui/Icons";
import { shortToast } from "@/lib/helpers/shorter-function";

interface FormCountiresTextareaProps {
  id: string;
  title: string;
  value: string;
  infoText: string;
  setDisabled: any;
}

const formatValue = (value: any) => {
  let string = "";

  for (let i = 0; i < value.length; i++) {
    if (i === value.length - 1) {
      string += value[i].name;
    } else string += value[i].name + ",";
  }

  return string;
};

const FormCountiresTextarea: FC<FormCountiresTextareaProps> = ({
  id,
  title,
  value,
  infoText,
  setDisabled,
}) => {
  const checkInput = (e: any) => {
    // check if regex matches
    const regex = /^(([a-zA-Z]+(,))*[a-zA-Z]+)*$/;

    if (!regex.test(e.target.value)) {
      setDisabled(true);
      shortToast("Error", "The countries list is not correct.", "error", 5000);
    } else {
      setDisabled(false);
    }
  };

  return (
    <div className="mb-2.5">
      <label
        htmlFor={id}
        className="block pl-2 text-left text-sm font-medium leading-6 text-gray-900 dark:text-white"
      >
        {title}
      </label>
      <div className="mt-0.5">
        <Textarea
          id={id}
          name={id}
          required
          defaultValue={formatValue(value)}
          onBlur={(e) => checkInput(e)}
          className="px-l block w-full rounded-md border-0 py-1.5 text-sm leading-6 text-gray-900 ring-1 ring-inset ring-gray-500 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:ring-white dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700"
        ></Textarea>
      </div>
      <div className="mt-4 flex flex-row items-center rounded-md border-2 border-orange-400/50 bg-orange-400/30 p-4 text-center">
        <Icons.Info className="mr-3 h-8 w-8" />
        <span>{infoText}</span>
      </div>
    </div>
  );
};

export default FormCountiresTextarea;
