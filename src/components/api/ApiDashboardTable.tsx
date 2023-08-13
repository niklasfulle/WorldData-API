import { db } from "@/lib/prisma";
import { ApiKey } from "@prisma/client";
import { formatDistance } from "date-fns";
import { FC, use, useEffect, useState } from "react";

interface ApiDashboardTableProps {
  activeApiKey: ApiKey;
}

const ApiDashboardTable: FC<ApiDashboardTableProps> = async ({ activeApiKey }) => {
  return <div>ApiDashboardTable</div>;
};

export default ApiDashboardTable;
