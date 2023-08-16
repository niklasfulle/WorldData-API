import ApiDashboard from "@/api/ApiDashboard";
import RequestApiKey from "@/api/RequestApiKey";
import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";
import CookieConsent from "@/components/banner/CookieConsent";
import { getSession } from "next-auth/react";
import { headers } from "next/headers";

const page = async () => {
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

  const apiKey = await db.apiKey.findFirst({
    where: { userId: user.id, enabled: true },
  });

  return (
    <div className="max-w-7xl mx-auto mt-12">
      {apiKey ? <ApiDashboard /> : <RequestApiKey />}
      <CookieConsent />
    </div>
  );
};

export default page;
