import React, { FC, useEffect, useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

interface FormMultyTimezonesInputProps {
  id: string;
  title: string;
  timezones: Timezone[];
}

type Timezone = {
  zoneName: string;
  gmtOffset: string;
  gmtOffsetName: string;
  abbreviation: string;
  tzName: string;
};

const FormMultyTimezonesInput: FC<FormMultyTimezonesInputProps> = ({ title, timezones }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const addTimezone = () => {
    setIsLoading(true);

    const zone_name = document.getElementById("zone_name_submit") as HTMLInputElement;
    const gmt_offset = document.getElementById("gmt_offset_submit") as HTMLInputElement;
    const gmt_offset_name = document.getElementById("gmt_offset_name_submit") as HTMLInputElement;
    const abbreviation = document.getElementById("abbreviation_submit") as HTMLInputElement;
    const tz_name = document.getElementById("tz_name_submit") as HTMLInputElement;

    const newTimezone = {
      zoneName: zone_name.value,
      gmtOffset: gmt_offset.value,
      gmtOffsetName: gmt_offset_name.value,
      abbreviation: abbreviation.value,
      tzName: tz_name.value,
    };

    timezones.push(newTimezone);

    zone_name.value = "";
    gmt_offset.value = "";
    gmt_offset_name.value = "";
    abbreviation.value = "";
    tz_name.value = "";

    setIsLoading(false);
    router.refresh();
    console.log(timezones);
  };

  let timezone;
  useEffect(() => {
    if (timezones.length !== 0) {
      timezone = timezones[0];
    } else {
      timezone = {};
    }
  }, [timezones]);

  return (
    <div className="mb-2.5">
      <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white text-left pl-2">
        {title}
      </label>
      <div className="mt-0.5 border border-white rounded-md ">
        <div className="flex flex-row flex-wrap justify-between gap-3 py-3 h-fit max-h-[16.7rem] overflow-auto whitespace-nowrap">
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
                      className="mx-3 w-full ease-in transition-all block rounded-md border-0 px-l py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 sm:text-sm sm:leading-6 dark:focus:ring-offset-slate-700"
                    />
                    {index2 == 4 && index1 != timezones.length - 1 && (
                      <hr className="dark:bg-white w-full h-0.5 mx-1.5" />
                    )}
                  </>
                ))
              )}
            </>
          ) : (
            <span className="w-full text-center">Empty</span>
          )}
        </div>

        <div className="w-full h-fit flex flex-col justify-center items-center border-t gap-3 p-3">
          <Input
            id="zone_name_submit"
            name="zone_name"
            placeholder="Zone Name"
            type="text"
            defaultValue=""
            required
            className="w-full ease-in transition-all block rounded-md border-0 px-l py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 sm:text-sm sm:leading-6 dark:focus:ring-offset-slate-700"
          />
          <Input
            id="gmt_offset_submit"
            name="gmt_offset"
            placeholder="GMT Offset"
            type="text"
            defaultValue=""
            required
            className="w-full ease-in transition-all block rounded-md border-0 px-l py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 sm:text-sm sm:leading-6 dark:focus:ring-offset-slate-700"
          />
          <Input
            id="gmt_offset_name_submit"
            name="gmt_offset_name"
            placeholder="GMT Offset Name"
            type="text"
            defaultValue=""
            required
            className="w-full ease-in transition-all block rounded-md border-0 px-l py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 sm:text-sm sm:leading-6 dark:focus:ring-offset-slate-700"
          />
          <Input
            id="abbreviation_submit"
            name="abbreviation"
            placeholder="Abbreviation"
            type="text"
            defaultValue=""
            required
            className="w-full ease-in transition-all block rounded-md border-0 px-l py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 sm:text-sm sm:leading-6 dark:focus:ring-offset-slate-700"
          />
          <Input
            id="tz_name_submit"
            name="tz_name"
            placeholder="TZ Name"
            type="text"
            defaultValue=""
            required
            className="w-full ease-in transition-all block rounded-md border-0 px-l py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 dark:focus:ring-sky-400 sm:text-sm sm:leading-6 dark:focus:ring-offset-slate-700"
          />

          <Button
            isLoading={isLoading}
            disabled={isLoading}
            type="button"
            className="w-48 ease-in transition-all flex justify-center rounded-md bg-indigo-600 dark:bg-sky-400 hover:bg-indigo-500 dark:hover:bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white dark:text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-sky-500 disabled:pointer-events-none dark:focus:ring-offset-slate-700"
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
