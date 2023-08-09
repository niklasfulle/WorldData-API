import { FC } from "react";
import Icons from "./Icons";
import { toast } from "./ui/Toast";

interface CopyIconProps {
  copyText: string;
}

const CopyIcon: FC<CopyIconProps> = ({ copyText }) => {
  return (
    <Icons.Copy
      aria-label="Copy code to clipboard"
      className="h-6 w-6 dark:text-white absolute right-0 top-0 hover:cursor-pointer hover:dark:text-gray-400"
      onClick={() => {
        navigator.clipboard.writeText(copyText);

        toast({
          title: "Copied",
          message: "Code copied to clipboard",
          type: "success",
        });
      }}
    />
  );
};

export default CopyIcon;
