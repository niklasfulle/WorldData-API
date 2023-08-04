import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Wordldata API - Dashboard",
  description: "Free & Open Source API for Wordldata",
};

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return <div>page</div>;
};

export default page;
