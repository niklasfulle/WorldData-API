import CookieConsent from "@/components/banner/CookieConsent";
import { ro } from "date-fns/locale";
import { notFound } from "next/navigation";

interface Props {
  params: {
    token: string;
  };
}

const page = ({ params: { token } }: Props) => {
  if (!token) {
    notFound();
  }

  return (
    <div className="inset-0 mx-auto container flex flex-col mt-12 min-h-[90vh] h-auto">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-lg text-white">
        {token}
        <CookieConsent />
      </div>
    </div>
  );
};

export default page;
