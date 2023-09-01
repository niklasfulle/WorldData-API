import React, { FC } from "react";
import { db } from "@/lib/db/prisma";
import { formatDistance } from "date-fns";
import { notFound } from "next/navigation";
import ApiKeyOptions from "@/api/ApiKeyOptions";
import { Input } from "@/ui/Input";
import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import ApiHistoryOptions from "@/api/ApiHistoryOptions";
import { User } from "@prisma/client";
import ApiHistoryTable from "./ApiHistoryTable";

interface ApiDashboardProps {
  user: User;
}

const ApiDashboard: FC<ApiDashboardProps> = async ({ user }) => {
  const apiKeys = await db.apiKey.findMany({
    where: { userId: user.id },
  });

  const activeApiKey = apiKeys.find((key) => key.enabled);

  if (!activeApiKey) return notFound();

  const userRequests = await db.apiRequest.findMany({
    where: {
      apiKeyId: {
        in: apiKeys.map((key) => key.id),
      },
    },
  });

  const serializableRequests = userRequests.map((req) => ({
    ...req,
    timestamp: formatDistance(new Date(req.timestamp), new Date()),
  }));

  return (
    <div className="container mb-12 flex h-auto min-h-[90vh] flex-col gap-6">
      <LargeHeading>Welcome back, {user.name}</LargeHeading>
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start ">
        <Paragraph className="ml-2 mt-1">Your API key:</Paragraph>
        <label htmlFor="api-key" className="sr-only">
          Your API key
        </label>
        <Input
          id="api-key"
          className="w-52 shadow-md backdrop-blur-md md:w-[22rem]"
          readOnly
          value={activeApiKey.key}
        />
        <ApiKeyOptions apiKeyKey={activeApiKey.key} />
      </div>
      <div className="-mb-4 flex flex-row items-center justify-between px-2">
        <Paragraph className="-mb-2 text-center md:text-left">
          Your API history:
        </Paragraph>
        <ApiHistoryOptions apiKeyKey={activeApiKey.key} />
      </div>
      <div>
        <ApiHistoryTable userRequests={serializableRequests} />
      </div>
    </div>
  );
};

export default ApiDashboard;
