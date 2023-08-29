import React, { FC } from "react";
import { Textarea } from "@/ui/Textarea";
import Icons from "@/ui/Icons";

interface FormTextareaProps {
  id: string;
  title: string;
  value: string;
  infoText: string;
}

const FormTextarea: FC<FormTextareaProps> = ({ id, title, value, infoText }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900 text-left pl-2 dark:text-white"
      >
        {title}
      </label>
      <div className="mt-1">
        <Textarea
          id={id}
          name={id}
          required
          defaultValue={value}
          className="ease-in transition-all block w-full rounded-md border-0 px-l py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 sm:text-sm sm:leading-6 dark:focus:ring-offset-slate-700"
        ></Textarea>
      </div>
      <div className="flex flex-row items-center mt-4 p-4 rounded-md text-center bg-orange-400/30 border-orange-400/50 border-2">
        <Icons.Info className="h-8 w-8 mr-3" />
        <span>{infoText}</span>
      </div>
    </div>
  );
};

export default FormTextarea;
