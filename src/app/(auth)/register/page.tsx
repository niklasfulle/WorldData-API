import Icons from "@/ui/Icons";
import { buttonVariants } from "@/ui/Button";
import LargeHeading from "@/ui/LargeHeading";
import Link from "next/link";
import CookieConsent from "@/components/banner/CookieConsent";
import SignUpForm from "@/auth/SignUpForm";

const page = () => {
  return (
    <div className="inset-0 mx-auto container flex flex-col mt-12 min-h-screen h-auto mb-20">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-lg">
        <div className="flex flex-col items-center gap-6 text-center">
          <LargeHeading>Welcome</LargeHeading>
          <SignUpForm />
          <Link
            className={buttonVariants({
              variant: "ghost",
              className: "w-fit -mt-4",
            })}
            href="/"
            aria-label="Back to the home page"
          >
            <Icons.ChevronLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </div>

        <CookieConsent />
      </div>
    </div>
  );
};

export default page;
