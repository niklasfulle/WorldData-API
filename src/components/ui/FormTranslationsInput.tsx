import React, { FC } from "react";
import { Input } from "./Input";

interface FormTranslationsInputInput {
  id: string;
  title: string;
  translations: Translations;
}

type Translations = {
  kr: string;
  "pt-BR": string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  cn: string;
  tr: string;
};

const FormTranslationsInput: FC<FormTranslationsInputInput> = ({
  title,
  translations,
}) => {
  const values = Object.entries(translations);

  return (
    <div className="mb-2.5">
      <span className="block pl-2 text-left text-sm font-medium leading-6 text-gray-900 dark:text-white">
        {title}
      </span>
      <div className="mt-0.5 flex flex-row flex-wrap justify-between gap-3 rounded-md border border-white p-3 ">
        {values.length > 0 ? (
          values.map((item) => (
            <Input
              key={item[0]}
              id={item[0]}
              name={item[0]}
              placeholder={item[0]}
              type="text"
              defaultValue={item[1]}
              required
              className="px-l block w-[45%] rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700 sm:text-sm sm:leading-6"
            />
          ))
        ) : (
          <>
            <Input
              id="kr"
              name="kr"
              placeholder="kr"
              type="text"
              defaultValue=""
              required
              className="px-l block w-[45%] rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700 sm:text-sm sm:leading-6"
            />
            <Input
              id="pt-BR"
              name="pt-BR"
              placeholder="pt-BR"
              type="text"
              defaultValue=""
              required
              className="px-l block w-[45%] rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700 sm:text-sm sm:leading-6"
            />
            <Input
              id="pt"
              name="pt"
              placeholder="pt"
              type="text"
              defaultValue=""
              required
              className="px-l block w-[45%] rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700 sm:text-sm sm:leading-6"
            />
            <Input
              id="nl"
              name="nl"
              placeholder="nl"
              type="text"
              defaultValue=""
              required
              className="px-l block w-[45%] rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700 sm:text-sm sm:leading-6"
            />
            <Input
              id="hr"
              name="hr"
              placeholder="hr"
              type="text"
              defaultValue=""
              required
              className="px-l block w-[45%] rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700 sm:text-sm sm:leading-6"
            />
            <Input
              id="fa"
              name="fa"
              placeholder="fa"
              type="text"
              defaultValue=""
              required
              className="px-l block w-[45%] rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700 sm:text-sm sm:leading-6"
            />
            <Input
              id="de"
              name="de"
              placeholder="de"
              type="text"
              defaultValue=""
              required
              className="px-l block w-[45%] rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700 sm:text-sm sm:leading-6"
            />
            <Input
              id="es"
              name="es"
              placeholder="es"
              type="text"
              defaultValue=""
              required
              className="px-l block w-[45%] rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700 sm:text-sm sm:leading-6"
            />
            <Input
              id="fr"
              name="fr"
              placeholder="fr"
              type="text"
              defaultValue=""
              required
              className="px-l block w-[45%] rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700 sm:text-sm sm:leading-6"
            />
            <Input
              id="ja"
              name="ja"
              placeholder="ja"
              type="text"
              defaultValue=""
              required
              className="px-l block w-[45%] rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700 sm:text-sm sm:leading-6"
            />
            <Input
              id="it"
              name="it"
              placeholder="it"
              type="text"
              defaultValue=""
              required
              className="px-l block w-[45%] rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700 sm:text-sm sm:leading-6"
            />
            <Input
              id="cn"
              name="cn"
              placeholder="cn"
              type="text"
              defaultValue=""
              required
              className="px-l block w-[45%] rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700 sm:text-sm sm:leading-6"
            />
            <Input
              id="tr"
              name="tr"
              placeholder="tr"
              type="text"
              defaultValue=""
              required
              className="px-l block w-[45%] rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700 sm:text-sm sm:leading-6"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default FormTranslationsInput;
