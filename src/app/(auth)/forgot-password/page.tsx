import CookieConsent from "@/components/banner/CookieConsent";

const page = () => {
  return (
    <div className="inset-0 mx-auto container flex flex-col mt-12 min-h-screen h-auto">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-lg">
        <CookieConsent />
      </div>
    </div>
  );
};

export default page;
