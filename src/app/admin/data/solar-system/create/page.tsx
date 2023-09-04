import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import CreateSection from "@/data/CreateSection";
import { mongoDb } from "@/lib/db/mogodb";
import CelestialBodieForm from "@/components/admin/data/forms/CelestialBodieForm";
import CelestialBodiesSideInfo from "@/components/admin/data/sideinfo/CelestialBodiesSideInfo";
import { celestialBodieCreateSchema } from "@/lib/db/schema/celestialBodie.schema";

const CelestialBodiesCreatePage = async () => {
  const CelestialBodie = mongoDb.CelestialBodie;

  const celestialBodies = await CelestialBodie.find()
    .sort({ id: -1 })
    .limit(10);

  let celestialBodiesArray: Array<any> = [];
  celestialBodies.map((celestialBodie) => {
    celestialBodiesArray.push(celestialBodieCreateSchema.parse(celestialBodie));
  });

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="solar system" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <CreateSection
          title="Create Celestial Bodie"
          subtitle="Last created Celestial Bodies"
          form={<CelestialBodieForm buttonTitle="Create" />}
          infoSide={<CelestialBodiesSideInfo data={celestialBodiesArray} />}
        />
      </div>
    </div>
  );
};

export default CelestialBodiesCreatePage;