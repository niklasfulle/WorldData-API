import React, { FC, useEffect } from "react";
import TranslationInput from "./TranslationInput";
import { getAsHTMLInputElement } from "@/lib/helpers/shorter-function";
import { useRouter } from "next/navigation";

interface FormTranslationsInputInput {
  id: string;
  title: string;
  translations: Translations;
  setTranslations: any;
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

const inputList = [
  { id: "kr" },
  { id: "pt-BR" },
  { id: "pt" },
  { id: "nl" },
  { id: "hr" },
  { id: "fa" },
  { id: "de" },
  { id: "es" },
  { id: "fr" },
  { id: "ja" },
  { id: "it" },
  { id: "cn" },
  { id: "tr" },
];

const FormTranslationsInput: FC<FormTranslationsInputInput> = ({
  title,
  translations,
  setTranslations,
}) => {
  const router = useRouter();
  const values = Object.entries(translations);

  const createTranslations = () => {
    translations = {
      kr: getAsHTMLInputElement("kr").value,
      "pt-BR": getAsHTMLInputElement("pt-BR").value,
      pt: getAsHTMLInputElement("pt").value,
      nl: getAsHTMLInputElement("nl").value,
      hr: getAsHTMLInputElement("hr").value,
      fa: getAsHTMLInputElement("fa").value,
      de: getAsHTMLInputElement("de").value,
      es: getAsHTMLInputElement("es").value,
      fr: getAsHTMLInputElement("fr").value,
      ja: getAsHTMLInputElement("ja").value,
      it: getAsHTMLInputElement("it").value,
      cn: getAsHTMLInputElement("cn").value,
      tr: getAsHTMLInputElement("tr").value,
    };

    setTranslations(translations);
  };

  return (
    <div className="mb-2.5">
      <span className="block pl-2 text-left text-sm font-medium leading-6 text-gray-900 dark:text-white">
        {title}
      </span>
      <div className="mt-0.5 flex flex-row flex-wrap justify-between gap-3 rounded-md border border-gray-500 p-3 dark:border-white ">
        {values.length > 0 ? (
          values.map((item) => (
            <TranslationInput
              key={item[0]}
              id={item[0]}
              value={item[1]}
              onBlur={() => createTranslations()}
            />
          ))
        ) : (
          <>
            {inputList.map((item) => (
              <TranslationInput
                key={item.id}
                id={item.id}
                value=""
                onBlur={() => createTranslations()}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default FormTranslationsInput;
