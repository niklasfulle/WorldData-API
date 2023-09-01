import React, { FC } from "react";
import { Textarea } from "@/ui/Textarea";
import Icons from "@/ui/Icons";

interface FormTextareaProps {
  id: string;
  title: string;
  value: string;
  infoText: string;
}

const FormTextarea: FC<FormTextareaProps> = ({
  id,
  title,
  value,
  infoText,
}) => {
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
          defaultValue={value}
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

export default FormTextarea;
