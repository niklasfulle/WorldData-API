import React, { FC } from "react";
import { Input } from "./Input";

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

const FormTimezoneInput: FC<FormTimezoneInputProps> = ({ title, timezone }) => {
  const values = Object.entries(timezone);
  return (
    <div className="mb-2.5">
      <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white text-left pl-2">
        {title}
      </label>
      <div className="mt-0.5 flex flex-row flex-wrap justify-between gap-3 p-3 border border-white rounded-md ">
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
              className="w-full ease-in transition-all block rounded-md border-0 px-l py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 sm:text-sm sm:leading-6 dark:focus:ring-offset-slate-700"
            />
          ))
        ) : (
          <>
            <Input
              id="zone_name"
              name="zone_name"
              placeholder="Zone Name"
              type="text"
              defaultValue=""
              required
              className="w-full ease-in transition-all block rounded-md border-0 px-l py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 sm:text-sm sm:leading-6 dark:focus:ring-offset-slate-700"
            />
            <Input
              id="gmt_offset"
              name="gmt_offset"
              placeholder="GMT Offset"
              type="text"
              defaultValue=""
              required
              className="w-full ease-in transition-all block rounded-md border-0 px-l py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 sm:text-sm sm:leading-6 dark:focus:ring-offset-slate-700"
            />
            <Input
              id="gmt_offset_name"
              name="gmt_offset_name"
              placeholder="GMT Offset Name"
              type="text"
              defaultValue=""
              required
              className="w-full ease-in transition-all block rounded-md border-0 px-l py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 sm:text-sm sm:leading-6 dark:focus:ring-offset-slate-700"
            />
            <Input
              id="abbreviation"
              name="abbreviation"
              placeholder="Abbreviation"
              type="text"
              defaultValue=""
              required
              className="w-full ease-in transition-all block rounded-md border-0 px-l py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 sm:text-sm sm:leading-6 dark:focus:ring-offset-slate-700"
            />
            <Input
              id="tz_name"
              name="tz_name"
              placeholder="TZ Name"
              type="text"
              defaultValue=""
              required
              className="w-full ease-in transition-all block rounded-md border-0 px-l py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 sm:text-sm sm:leading-6 dark:focus:ring-offset-slate-700"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default FormTimezoneInput;
