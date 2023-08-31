import React, { FC, useEffect, useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

interface FormMultyTimezonesInputProps {
  id: string;
  title: string;
  timezones: Timezone[];
  setTimezones: any;
}

type Timezone = {
  zone_name: string;
  gmt_offset: string;
  gmt_offset_name: string;
  abbreviation: string;
  tz_name: string;
};

const FormMultyTimezonesInput: FC<FormMultyTimezonesInputProps> = ({
  title,
  timezones,
  setTimezones,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const addTimezone = () => {
    setIsLoading(true);

    const zone_name = document.getElementById(
      "zone_name_submit"
    ) as HTMLInputElement;
    const gmt_offset = document.getElementById(
      "gmt_offset_submit"
    ) as HTMLInputElement;
    const gmt_offset_name = document.getElementById(
      "gmt_offset_name_submit"
    ) as HTMLInputElement;
    const abbreviation = document.getElementById(
      "abbreviation_submit"
    ) as HTMLInputElement;
    const tz_name = document.getElementById(
      "tz_name_submit"
    ) as HTMLInputElement;

    if (
      zone_name.value == "" ||
      gmt_offset.value == "" ||
      gmt_offset_name.value == "" ||
      abbreviation.value == "" ||
      tz_name.value == ""
    ) {
      setError("Please fill all fields");
      setIsLoading(false);
      router.refresh();
    } else {
      const newTimezone = {
        zone_name: zone_name.value,
        gmt_offset: gmt_offset.value,
        gmt_offset_name: gmt_offset_name.value,
        abbreviation: abbreviation.value,
        tz_name: tz_name.value,
      };

      timezones.push(newTimezone);

      setTimezones(timezones);

      zone_name.value = "";
      gmt_offset.value = "";
      gmt_offset_name.value = "";
      abbreviation.value = "";
      tz_name.value = "";

      setError("");
      setIsLoading(false);
      router.refresh();
    }
  };

  useEffect(() => {}, [timezones]);

  return (
    <div className="mb-2.5">
      <span className="block pl-2 text-left text-sm font-medium leading-6 text-gray-900 dark:text-white">
        {title}
      </span>
      <div className="mt-0.5 rounded-md border border-white ">
        <div className="flex h-fit max-h-[16.7rem] flex-row flex-wrap justify-between gap-3 overflow-auto whitespace-nowrap py-3">
          {timezones.length !== 0 ? (
            <>
              {timezones.map((timezone, index1) =>
                Object.entries(timezone).map((item, index2) => (
                  <>
                    <Input
                      key={index1 + "_" + index2}
                      id={item[0] + "_" + index1}
                      name={item[0] + "_" + index1}
                      type="text"
                      defaultValue={item[1]}
                      required
                      className="px-l mx-3 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700 sm:text-sm sm:leading-6"
                    />
                    {index2 == 4 && index1 != timezones.length - 1 && (
                      <hr className="mx-1.5 h-0.5 w-full dark:bg-white" />
                    )}
                  </>
                ))
              )}
            </>
          ) : (
            <span className="w-full text-center">Empty</span>
          )}
        </div>

        <div className="flex h-fit w-full flex-col items-center justify-center gap-3 border-t p-3">
          <span className="block text-sm text-gray-900 dark:text-white">
            Add new timezone
          </span>
          <p
            id="errors"
            className="text-center font-bold text-red-600 sm:max-w-[14rem]"
          >
            {error}
          </p>

          <Input
            id="zone_name_submit"
            name="zone_name"
            placeholder="Zone Name"
            type="text"
            defaultValue=""
            required
            className="px-l block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700 sm:text-sm sm:leading-6"
          />
          <Input
            id="gmt_offset_submit"
            name="gmt_offset"
            placeholder="GMT Offset"
            type="text"
            defaultValue=""
            required
            className="px-l block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700 sm:text-sm sm:leading-6"
          />
          <Input
            id="gmt_offset_name_submit"
            name="gmt_offset_name"
            placeholder="GMT Offset Name"
            type="text"
            defaultValue=""
            required
            className="px-l block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700 sm:text-sm sm:leading-6"
          />
          <Input
            id="abbreviation_submit"
            name="abbreviation"
            placeholder="Abbreviation"
            type="text"
            defaultValue=""
            required
            className="px-l block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700 sm:text-sm sm:leading-6"
          />
          <Input
            id="tz_name_submit"
            name="tz_name"
            placeholder="TZ Name"
            type="text"
            defaultValue=""
            required
            className="px-l block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 transition-all ease-in placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 dark:focus:ring-offset-slate-700 sm:text-sm sm:leading-6"
          />

          <Button
            isLoading={isLoading}
            disabled={isLoading}
            type="button"
            className="flex w-48 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm transition-all ease-in hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-sky-400 dark:text-black dark:hover:bg-sky-500 dark:focus:ring-sky-500 dark:focus:ring-offset-slate-700"
            onClick={() => addTimezone()}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormMultyTimezonesInput;
