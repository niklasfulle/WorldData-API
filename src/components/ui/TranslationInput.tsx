import React, { FC } from "react";
import { Input } from "@/ui/Input";

interface TranslationInputProps {
  id: string;
  value: string;
  onBlur: any;
}

const TranslationInput: FC<TranslationInputProps> = ({ id, value, onBlur }) => {
  return (
    <Input
      key={id}
      id={id}
      name={id}
      placeholder={id}
      type="text"
      defaultValue={value}
      required
      onBlur={onBlur}
      className="px-l block w-[45%] rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700 sm:text-sm sm:leading-6"
    />
  );
};

export default TranslationInput;
