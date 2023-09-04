import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import UpdateSection from "@/data/UpdateSection";
import { mongoDb } from "@/lib/db/mogodb";
import OceansForm from "@/components/admin/data/forms/OceansForm";
import OceansSideInfo from "@/components/admin/data/sideinfo/OceansSideInfo";
import { oceanCreateSchema } from "@/lib/db/schema/ocean.schema";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

const CitiesUpdatePage = async ({ params: { id } }: Props) => {
  const Ocean = mongoDb.Ocean;

  const ocean = await Ocean.findOne({ id: parseInt(id) });

  if (!ocean) return notFound();

  const oceans = await Ocean.find().sort({ id: -1 }).limit(10);

  let oceansArray: Array<any> = [];
  oceans.map((ocean) => {
    oceansArray.push(oceanCreateSchema.parse(ocean));
  });

  const oceanData = oceanCreateSchema.parse(ocean);

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="cities" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <UpdateSection
          title="Update Ocean"
          subtitle="Last created Oceans"
          form={<OceansForm buttonTitle="Update" ocean={oceanData} />}
          infoSide={<OceansSideInfo data={oceansArray} />}
        />
      </div>
    </div>
  );
};

export default CitiesUpdatePage;
