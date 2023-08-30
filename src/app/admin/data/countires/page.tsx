"use client";
import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import { useSearchParams } from "next/navigation";
import CreateSection from "@/data/CreateSection";
import ViewSection from "@/data/ViewSection";
import UpdateSection from "@/data/UpdateSection";
import CountriesForm from "@/data/forms/CountriesForm";

const country = {
  id: 14,
  name: "Australia",
  iso3: "AUS",
  iso2: "AU",
  numeric_code: "036",
  phone_code: "61",
  capital: "Canberra",
  currency: "AUD",
  currency_name: "Australian dollar",
  currency_symbol: "$",
  tld: ".au",
  native: "Australia",
  region: "Oceania",
  subregion: "Australia and New Zealand",
  timezones: [
    {
      zoneName: "Antarctica/Macquarie",
      gmtOffset: 39600,
      gmtOffsetName: "UTC+11:00",
      abbreviation: "MIST",
      tzName: "Macquarie Island Station Time",
    },
    {
      zoneName: "Australia/Adelaide",
      gmtOffset: 37800,
      gmtOffsetName: "UTC+10:30",
      abbreviation: "ACDT",
      tzName: "Australian Central Daylight Saving Time",
    },
    {
      zoneName: "Australia/Brisbane",
      gmtOffset: 36000,
      gmtOffsetName: "UTC+10:00",
      abbreviation: "AEST",
      tzName: "Australian Eastern Standard Time",
    },
    {
      zoneName: "Australia/Broken_Hill",
      gmtOffset: 37800,
      gmtOffsetName: "UTC+10:30",
      abbreviation: "ACDT",
      tzName: "Australian Central Daylight Saving Time",
    },
    {
      zoneName: "Australia/Currie",
      gmtOffset: 39600,
      gmtOffsetName: "UTC+11:00",
      abbreviation: "AEDT",
      tzName: "Australian Eastern Daylight Saving Time",
    },
    {
      zoneName: "Australia/Darwin",
      gmtOffset: 34200,
      gmtOffsetName: "UTC+09:30",
      abbreviation: "ACST",
      tzName: "Australian Central Standard Time",
    },
    {
      zoneName: "Australia/Eucla",
      gmtOffset: 31500,
      gmtOffsetName: "UTC+08:45",
      abbreviation: "ACWST",
      tzName: "Australian Central Western Standard Time (Unofficial)",
    },
    {
      zoneName: "Australia/Hobart",
      gmtOffset: 39600,
      gmtOffsetName: "UTC+11:00",
      abbreviation: "AEDT",
      tzName: "Australian Eastern Daylight Saving Time",
    },
    {
      zoneName: "Australia/Lindeman",
      gmtOffset: 36000,
      gmtOffsetName: "UTC+10:00",
      abbreviation: "AEST",
      tzName: "Australian Eastern Standard Time",
    },
    {
      zoneName: "Australia/Lord_Howe",
      gmtOffset: 39600,
      gmtOffsetName: "UTC+11:00",
      abbreviation: "LHST",
      tzName: "Lord Howe Summer Time",
    },
    {
      zoneName: "Australia/Melbourne",
      gmtOffset: 39600,
      gmtOffsetName: "UTC+11:00",
      abbreviation: "AEDT",
      tzName: "Australian Eastern Daylight Saving Time",
    },
    {
      zoneName: "Australia/Perth",
      gmtOffset: 28800,
      gmtOffsetName: "UTC+08:00",
      abbreviation: "AWST",
      tzName: "Australian Western Standard Time",
    },
    {
      zoneName: "Australia/Sydney",
      gmtOffset: 39600,
      gmtOffsetName: "UTC+11:00",
      abbreviation: "AEDT",
      tzName: "Australian Eastern Daylight Saving Time",
    },
  ],
  translations: {
    kr: "호주",
    "pt-BR": "Austrália",
    pt: "Austrália",
    nl: "Australië",
    hr: "Australija",
    fa: "استرالیا",
    de: "Australien",
    es: "Australia",
    fr: "Australie",
    ja: "オーストラリア",
    it: "Australia",
    cn: "澳大利亚",
    tr: "Avustralya",
  },
  latitude: "-27.00000000",
  longitude: "133.00000000",
  emoji: "🇦🇺",
  emojiU: "U+1F1E6 U+1F1FA",
};

const CountriesPage = () => {
  const searchParams = useSearchParams();

  const action = searchParams?.get("action");

  return (
    <div className="max-w-full mx-auto flex">
      <Sidebar page="countries" />
      <div className="container p-0 gap-6 min-h-screen h-auto dark:text-white">
        {action === "view" && <ViewSection />}
        {action === "create" && (
          <CreateSection title="Create Country" form={<CountriesForm buttonTitle="Create" />} />
        )}
        {action === "update" && (
          <UpdateSection
            title="Update Country"
            form={<CountriesForm buttonTitle="Update" country={country} />}
          />
        )}
      </div>
    </div>
  );
};

export default CountriesPage;
