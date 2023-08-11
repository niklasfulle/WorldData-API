import { authOptions } from "@/lib/auth";
import { Typography } from "@mui/material";
import { getServerSession } from "next-auth";

const Footer = async () => {
  const session = await getServerSession(authOptions);

  return (
    <footer className="backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 bottom-0 left-0 right-0 h-20 border-t border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <Typography variant="body2" className="dark:text-white">
          {"Copyright © "}
          Worlddata API {" " + new Date().getFullYear()}
          {"."}
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
