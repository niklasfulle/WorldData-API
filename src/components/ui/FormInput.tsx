import { Input } from "@/ui/Input";
import React, { FC } from "react";

interface FormInputProps {
  id: string;
  title: string;
  value: string;
}

const FormInput: FC<FormInputProps> = ({ id, title, value }) => {
  return (
    <div className="mb-2.5">
      <label
        htmlFor={id}
        className="block pl-2 text-left text-sm font-medium leading-6 text-gray-900 dark:text-white"
      >
        {title}
      </label>
      <div className="mt-0.5">
        <Input
          id={id}
          name={id}
          autoComplete="off"
          type="text"
          defaultValue={value}
          required
          className="px-l block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default FormInput;
