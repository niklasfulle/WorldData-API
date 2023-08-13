import ApiDashboard from "@/components/api/ApiDashboard";
import RequestApiKey from "@/components/api/RequestApiKey";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Wordldata API - Dashboard",
  description: "Free & Open Source API for Wordldata",
};

const page = async () => {
  const user = await getServerSession(authOptions);
  if (!user) return notFound();

  const apiKey = await db.apiKey.findFirst({
    where: { userId: user.user.id, enabled: true },
  });

  return (
    <div className="max-w-7xl mx-auto mt-16 h-screen">
      {apiKey ? <ApiDashboard /> : <RequestApiKey />}
    </div>
  );
};

export default page;
