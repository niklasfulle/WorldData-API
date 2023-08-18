import CookieConsent from "@/components/banner/CookieConsent";
import { ro } from "date-fns/locale";
import { notFound } from "next/navigation";

interface Props {
  params: {
    key: string;
  };
}

const page = ({ params: { key } }: Props) => {
  if (!key) {
    notFound();
  }

  return (
    <div className="inset-0 mx-auto container flex flex-col mt-12 min-h-[90vh] h-auto">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-lg">
        {key}
        <CookieConsent />
      </div>
    </div>
  );
};

export default page;
