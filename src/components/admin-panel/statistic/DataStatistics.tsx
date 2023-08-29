"use client";
import LargeHeading from "@/components/ui/LargeHeading";
import LineChart from "@/components/ui/LineChart";
import React, { FC, useState } from "react";

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

interface DataStatisticsProps {}

const DataStatistics: FC<DataStatisticsProps> = ({}) => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Data added",
        data: UserData.map((data) => data.userGain),
        borderWidth: 2,
      },
    ],
  });

  return (
    <>
      <div className="dark:bg-slate-900 w-full h-full rounded-sm flex flex-col xl:flex-row gap-4">
        <div className="w-full xl:w-9/12 dark:bg-slate-800 bg-white/75 rounded-md h-fit relativ p-2 ">
          <LargeHeading className="flex flex-row justify-center w-full mt-4">
            Data Statistic
          </LargeHeading>
          <div className="h-auto w-full mb-6 dark:border-slate-700 border-2 mt-12 rounded-md">
            <LineChart chartData={userData} />
          </div>
        </div>
        <div className="w-full xl:w-3/12 dark:bg-slate-800 bg-white/75 h-full xl:h-fit rounded-md relativ flex flex-col gap-2">
          <h1 className="flex flex-row justify-center w-full mt-6 text-2xl font-medium">
            Data Count
          </h1>
          <ul className="flex flex-col items-start px-10 my-6 gap-4">
            <li className="flex flex-row justify-between w-full">
              Continents:<span>7</span>
            </li>
            <li className="flex flex-row justify-between w-full">
              Oceans:<span>7</span>
            </li>
            <li className="flex flex-row justify-between w-full">
              Seas:<span>7</span>
            </li>
            <li className="flex flex-row justify-between w-full">
              Countires:<span>7</span>
            </li>
            <li className="flex flex-row justify-between w-full">
              Cities:<span>7</span>
            </li>
            <li className="flex flex-row justify-between w-full">
              Mountains:<span>7</span>
            </li>
            <li className="flex flex-row justify-between w-full">
              Lakes:<span>7</span>
            </li>
            <li className="flex flex-row justify-between w-full">
              Rivers:<span>7</span>
            </li>
            <li className="flex flex-row justify-between w-full">
              Islands:<span>7</span>
            </li>
            <li className="flex flex-row justify-between w-full">
              Currencies:<span>7</span>
            </li>
            <li className="flex flex-row justify-between w-full">
              Solar System:<span>7</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DataStatistics;
