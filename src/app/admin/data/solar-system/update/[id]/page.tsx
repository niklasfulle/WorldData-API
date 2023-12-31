import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import { mongoDb } from "@/lib/db/mogodb";
import UpdateSection from "@/components/admin/data/UpdateSection";
import { celestialBodieCreateSchema } from "@/lib/db/schema/celestialBodie.schema";
import CelestialBodieForm from "@/components/admin/data/forms/CelestialBodieForm";
import CelestialBodiesSideInfo from "@/components/admin/data/sideinfo/CelestialBodiesSideInfo";
import { notFound } from "next/navigation";
import { formatDistance } from "date-fns";

type Props = {
  params: {
    id: string;
  };
};

const CelestialBodiesUpdatePage = async ({ params: { id } }: Props) => {
  const CelestialBodie = mongoDb.CelestialBodie;

  const celestialBodie = await CelestialBodie.findOne({ id: parseInt(id) });

  if (!celestialBodie) return notFound();

  const celestialBodies = await CelestialBodie.find()
    .sort({ updatedAt: -1 })
    .limit(5);

  let celestialBodiesArray: Array<any> = [];
  celestialBodies.map((celestialBodie) => {
    celestialBodiesArray.push({
      ...celestialBodieCreateSchema.parse(celestialBodie),
      createdAt: formatDistance(new Date(celestialBodie.updatedAt), new Date()),
    });
  });

  const celestialBodieData = celestialBodieCreateSchema.parse(celestialBodie);

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="solar-system" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <UpdateSection
          title="Update Celestial Bodie"
          subtitle="Last updated Celestial Bodies"
          form={
            <CelestialBodieForm
              buttonTitle="Update"
              id={id}
              action="update"
              celestialBodie={celestialBodieData}
            />
          }
          infoSide={<CelestialBodiesSideInfo data={celestialBodiesArray} />}
        />
      </div>
    </div>
  );
};

export default CelestialBodiesUpdatePage;
