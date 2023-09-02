import { Input } from "@/components/ui/Input";
import React, { FC } from "react";

interface FormTimezoneInputProps {
  id: string;
  title: string;
  timezone: Timezone;
}

type Timezone = {
  zone_name: string;
  gmt_offset: string;
  gmt_offset_name: string;
  abbreviation: string;
  tz_name: string;
};

const inputList = [
  { id: "zone_name", name: "zone_name", placeholder: "Zone Name" },
  {
    id: "gmt_offset",
    name: "gmt_offset",
    placeholder: "GMT Offset",
  },
  {
    id: "gmt_offset_name",
    name: "gmt_offset_name",
    placeholder: "GMT Offset Name",
  },
  {
    id: "abbreviation",
    name: "abbreviation",
    placeholder: "Abbreviation",
  },
  { id: "tz_name", name: "tz_name", placeholder: "TZ Name" },
];

const FormTimezoneInput: FC<FormTimezoneInputProps> = ({ title, timezone }) => {
  const values = Object.entries(timezone);
  return (
    <div className="mb-2.5">
      <span className="block pl-2 text-left text-sm font-medium leading-6 text-gray-900 dark:text-white">
        {title}
      </span>
      <div className="mt-0.5 flex flex-row flex-wrap justify-between gap-3 rounded-md border border-gray-500 p-3 dark:border-white ">
        {values.length > 0 ? (
          values.map((item, index) => (
            <Input
              key={index}
              id={item[0]}
              name={item[0]}
              placeholder={item[0]}
              type="text"
              defaultValue={item[1]}
              required
              className="px-l block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-500 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:ring-white dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700 sm:text-sm sm:leading-6"
            />
          ))
        ) : (
          <>
            {inputList.map((item) => (
              <Input
                key={item.id}
                id={item.id}
                name={item.name}
                placeholder={item.placeholder}
                type="text"
                defaultValue=""
                className="px-l block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-500 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:ring-white dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700 sm:text-sm sm:leading-6"
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default FormTimezoneInput;
