import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import UpdateSection from "@/data/UpdateSection";
import { mongoDb } from "@/lib/db/mogodb";
import { notFound } from "next/navigation";
import { riverCreateSchema } from "@/lib/db/schema/river.schema";
import RiversForm from "@/components/admin/data/forms/RiversForm";
import RiversSideInfo from "@/components/admin/data/sideinfo/RiversSideInfo";
import { formatDistance } from "date-fns";

type Props = {
  params: {
    id: string;
  };
};

const RiversUpdatePage = async ({ params: { id } }: Props) => {
  const River = mongoDb.River;

  const river = await River.findOne({ id: parseInt(id) });

  if (!river) return notFound();

  const rivers = await River.find().sort({ id: -1 }).limit(5);

  let riversArray: Array<any> = [];
  rivers.map((river) => {
    riversArray.push({
      ...riverCreateSchema.parse(river),
      createdAt: formatDistance(new Date(river.createdAt), new Date()),
    });
  });

  const riverData = riverCreateSchema.parse(river);

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="rivers" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <UpdateSection
          title="Update River"
          subtitle="Last created Rivers"
          form={<RiversForm buttonTitle="Update" river={riverData} />}
          infoSide={<RiversSideInfo data={riversArray} />}
        />
      </div>
    </div>
  );
};

export default RiversUpdatePage;
