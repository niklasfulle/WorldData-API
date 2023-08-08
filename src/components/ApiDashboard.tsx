import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { formatDistance } from "date-fns";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import ApiKeyOptions from "./ApiKeyOptions";
import { Input } from "@/ui/Input";
import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import Table from "@/ui/Table";
import ApiHistoryOptions from "./ApiHistoryOptions";

const ApiDashboard = async ({}) => {
  const user = await getServerSession(authOptions);
  if (!user) return notFound();

  const apiKeys = await db.apiKey.findMany({
    where: { userId: user.user.id },
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
    <div className="container flex flex-col gap-6">
      <LargeHeading>Welcome back, {user.user.name}</LargeHeading>
      <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center">
        <Paragraph>Your API key:</Paragraph>
        <Input className="w-fit" readOnly value={activeApiKey.key} />
        <ApiKeyOptions apiKeyKey={activeApiKey.key} />
      </div>

      <div className="flex flex-row justify-between -mb-4 px-2 items-center">
        <Paragraph className="text-center md:text-left -mb-2">Your API history:</Paragraph>
        <ApiHistoryOptions apiKeyKey={activeApiKey.key} />
      </div>

      <Table userRequests={serializableRequests} />
    </div>
  );
};

export default ApiDashboard;