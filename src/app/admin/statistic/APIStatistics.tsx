"use client";
import React, { FC, useState } from "react";
import LargeHeading from "@/ui/LargeHeading";
import dynamic from "next/dynamic";

const LineChart = dynamic(() => import("@/ui/LineChart"), {
  loading: () => <p>Loading...</p>,
});

export const UserData = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
  {
    id: 6,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 7,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 8,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 9,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 10,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];

interface APIStatisticsProps {}

const APIStatistics: FC<APIStatisticsProps> = () => {
  const [userData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "API Calls",
        data: UserData.map((data) => data.userGain),
        borderWidth: 2,
      },
    ],
  });

  return (
    <>
      <div className="flex h-full w-full flex-col gap-4 rounded-sm dark:bg-slate-900 xl:flex-row">
        <div className="relativ h-fit w-full rounded-md bg-white/75 p-2 dark:bg-slate-800 xl:w-9/12 ">
          <LargeHeading className="mt-4 flex w-full flex-row justify-center">
            API Statistic
          </LargeHeading>
          <div className="mb-6 mt-12 h-auto w-full rounded-md border-2 dark:border-slate-700">
            <LineChart chartData={userData} />
          </div>
        </div>
        <div className="relativ flex h-full w-full flex-col gap-2 rounded-md bg-white/75 dark:bg-slate-800 xl:h-fit xl:w-3/12">
          <h1 className="mt-6 flex w-full flex-row justify-center text-2xl font-medium">
            Calls by Month
          </h1>
          <ul className="my-6 flex flex-col items-start gap-4 px-24 xl:px-10">
            <li className="flex w-full flex-row justify-between">
              January:<span>7</span>
            </li>
            <li className="flex w-full flex-row justify-between">
              February:<span>7</span>
            </li>
            <li className="flex w-full flex-row justify-between">
              March:<span>7</span>
            </li>
            <li className="flex w-full flex-row justify-between">
              April:<span>7</span>
            </li>
            <li className="flex w-full flex-row justify-between">
              May:<span>7</span>
            </li>
            <li className="flex w-full flex-row justify-between">
              June:<span>7</span>
            </li>
            <li className="flex w-full flex-row justify-between">
              July:<span>7</span>
            </li>
            <li className="flex w-full flex-row justify-between">
              August:<span>7</span>
            </li>
            <li className="flex w-full flex-row justify-between">
              October:<span>7</span>
            </li>
            <li className="flex w-full flex-row justify-between">
              November:<span>7</span>
            </li>
            <li className="flex w-full flex-row justify-between">
              December:<span>7</span>
            </li>
          </ul>
          <h1 className="mb-4 mt-4 flex w-full flex-row justify-center text-2xl font-medium">
            Calls by Month
          </h1>
          <ul className="my-6 flex flex-col items-start gap-4 px-10">
            <li className="flex w-full flex-row justify-between">
              Continents:<span>7</span>
            </li>
            <li className="flex w-full flex-row justify-between">
              Oceans:<span>7</span>
            </li>
            <li className="flex w-full flex-row justify-between">
              Seas:<span>7</span>
            </li>
            <li className="flex w-full flex-row justify-between">
              Countires:<span>7</span>
            </li>
            <li className="flex w-full flex-row justify-between">
              Cities:<span>7</span>
            </li>
            <li className="flex w-full flex-row justify-between">
              Mountains:<span>7</span>
            </li>
            <li className="flex w-full flex-row justify-between">
              Lakes:<span>7</span>
            </li>
            <li className="flex w-full flex-row justify-between">
              Rivers:<span>7</span>
            </li>
            <li className="flex w-full flex-row justify-between">
              Islands:<span>7</span>
            </li>
            <li className="flex w-full flex-row justify-between">
              Currencies:<span>7</span>
            </li>
            <li className="flex w-full flex-row justify-between">
              Solar System:<span>7</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default APIStatistics;
