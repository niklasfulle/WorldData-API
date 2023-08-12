import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Icons from "./Icons";

const Footer = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="footer backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 dark:text-white border-t border-slate-300 dark:border-slate-700 shadow-sm">
      <div className="sb__footer section__padding flex flex-col py-4 px-20">
        <div className="sb__footer-links flex justify-between items-start flex-wrap flex-row w-full text-center mb-8">
          <div className="sb__footer-links-div w-36 m-1 flex justify-start flex-col text-white">
            <h4 className="text-md mb-1.5 text">For Business</h4>
            <Link href="" className="text-sm mb-1">
              Employer
            </Link>
            <Link href="" className="text-sm mb-1">
              <p>Health Plan</p>
            </Link>
            <Link href="" className="text-sm mb-1">
              <p>Individual</p>
            </Link>
          </div>
          <div className="sb__footer-links-div w-36 m-1 flex justify-start flex-col text-white">
            <h4 className="text-md mb-1.5 text">Resources</h4>
            <Link href="" className="text-sm mb-1">
              <p>Resource center</p>
            </Link>
            <Link href="" className="text-sm mb-1">
              <p>Testemonials</p>
            </Link>
            <Link href="" className="text-sm mb-1">
              <p>STV</p>
            </Link>
          </div>
          <div className="sb__footer-links-div w-36 m-1 flex justify-start flex-col text-white">
            <h4 className="text-md mb-1.5 text">Partners</h4>
            <Link href="" className="text-sm mb-1">
              <p>Swing Tech</p>
            </Link>
          </div>
          <div className="sb__footer-links-div w-36 m-1 flex justify-start flex-col text-white">
            <h4 className="text-md mb-1.5 text">Company</h4>
            <Link href="" className="text-sm mb-1">
              <p>About</p>
            </Link>
            <Link href="" className="text-sm mb-1">
              <p>Press</p>
            </Link>
            <Link href="" className="text-sm mb-1">
              <p>Career</p>
            </Link>
            <Link href="" className="text-sm mb-1">
              <p>Contact</p>
            </Link>
          </div>
          <div className="sb__footer-links-div w-56 m-1 flexflex-col text-white justify-center">
            <h4 className="text-md mb-1.5 text">Coming soon on</h4>
            <div className="socialmedia flex flex-row justify-between">
              <Link href="" className="text-sm mb-1 flex flex-col items-center p-2">
                <Icons.Twitter />
                Twitter
              </Link>
              <Link href="" className="text-sm mb-1 flex flex-col items-center p-2">
                <Icons.Instagram />
                Instagram
              </Link>
              <Link href="" className="text-sm mb-1 flex flex-col items-center p-2">
                <Icons.Github />
                Github
              </Link>
            </div>
          </div>
        </div>
        <hr className="text-white w-full"></hr>
        <div className="sb__footer-below flex flex-row justify-between mt-0">
          <div className="sb__footer-copyright">
            <p className="font-sm text-white font-semibold">
              {"Copyright © "}
              Worlddata API {" " + new Date().getFullYear()}
              {"."}
            </p>
          </div>
          <div className="sb_footer-below-links flex flex-row w-96 justify-between">
            <Link href="" className="text-sm mb-1">
              Terms & Conditions
            </Link>
            <Link href="" className="text-sm mb-1">
              Privacy
            </Link>
            <Link href="" className="text-sm mb-1">
              Security
            </Link>
            <Link href="" className="text-sm mb-1">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
