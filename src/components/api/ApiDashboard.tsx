import React, { FC } from "react";
import { db } from "@/lib/db/prisma";
import { formatDistance } from "date-fns";
import { notFound } from "next/navigation";
import ApiKeyOptions from "@/api/ApiKeyOptions";
import { Input } from "@/ui/Input";
import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import Table from "@/ui/Table";
import ApiHistoryOptions from "@/api/ApiHistoryOptions";
import { User } from "@prisma/client";

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
    <div className="container flex flex-col gap-6 min-h-[90vh] h-auto mb-12">
      <LargeHeading>Welcome back, {user.name}</LargeHeading>
      <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center ">
        <Paragraph className="ml-2 mt-1">Your API key:</Paragraph>
        <label htmlFor="api-key" className="sr-only">
          Your API key
        </label>
        <Input id="api-key" className="md:w-[22rem] w-52" readOnly value={activeApiKey.key} />
        <ApiKeyOptions apiKeyKey={activeApiKey.key} />
      </div>
      <div className="flex flex-row justify-between -mb-4 px-2 items-center">
        <Paragraph className="text-center md:text-left -mb-2">Your API history:</Paragraph>
        <ApiHistoryOptions apiKeyKey={activeApiKey.key} />
      </div>
      <div>
        <Table userRequests={serializableRequests} />
      </div>
    </div>
  );
};

export default ApiDashboard;
