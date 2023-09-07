import React from "react";
import Sidebar from "@/navigation/SideBar/SideBar";
import ViewSection from "@/data/ViewSection";
import { mongoDb } from "@/lib/db/mogodb";
import { celestialBodieCreateSchema } from "@/lib/db/schema/celestialBodie.schema";
import CelestialBodiesTable from "@/components/admin/data/table/CelestialBodiesTable";

const CelestialBodiesViewPage = async () => {
  const CelestialBodie = mongoDb.CelestialBodie;

  const celestialBodies = await CelestialBodie.find();

  let celestialBodiesArray: Array<any> = [];
  celestialBodies.map((celestialBodie) => {
    celestialBodiesArray.push(celestialBodieCreateSchema.parse(celestialBodie));
  });

  return (
    <div className="mx-auto flex max-w-full">
      <Sidebar page="solar-system" />
      <div className="container h-auto min-h-screen gap-6 p-0 dark:text-white">
        <ViewSection
          title="View Celestial Bodies"
          table={<CelestialBodiesTable data={celestialBodiesArray} />}
        />
      </div>
    </div>
  );
};

export default CelestialBodiesViewPage;
