import Icons from "@/components/Icons";
import { buttonVariants } from "@/components/ui/Button";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import UserAuthForm from "@/components/UserAuthForm";
import Link from "next/link";

const page = () => {
  return (
    <div className="inset-0 mx-auto container flex h-screen flex-col pt-32">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-lg">
        <div className="flex flex-col items-center gap-6 text-center">
          <Link
            className={buttonVariants({
              variant: "ghost",
              className: "w-fit",
            })}
            href="/"
            aria-label="Back to the home page"
          >
            <Icons.ChevronLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>

          <LargeHeading>Welcome back!</LargeHeading>
          <Paragraph>Please sign in using your Google account.</Paragraph>
        </div>
        <UserAuthForm />
      </div>
    </div>
  );
};

export default page;
