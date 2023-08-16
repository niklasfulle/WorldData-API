import { db } from "@/lib/prisma";
import { formatDistance } from "date-fns";
import { notFound } from "next/navigation";
import ApiKeyOptions from "@/api/ApiKeyOptions";
import { Input } from "@/ui/Input";
import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import Table from "@/ui/Table";
import ApiHistoryOptions from "@/api/ApiHistoryOptions";
import { getSession } from "next-auth/react";
import { headers } from "next/headers";
import { useEffect } from "react";

const ApiDashboard = async ({}) => {
  const session = await getSession({
    req: {
      headers: Object.fromEntries(headers().entries()),
    },
  });

  if (!session) return notFound();

  const user = await db.user.findUnique({
    where: { email: session?.user?.email! },
  });

  if (!user) return notFound();

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
    <div className="container flex flex-col gap-6 min-h-screen h-auto mb-12">
      <LargeHeading>Welcome back, {user.name}</LargeHeading>
      <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center ">
        <Paragraph className="ml-2 mt-1">Your API key:</Paragraph>
        <Input className="md:w-[22rem] w-52" readOnly value={activeApiKey.key} />
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
