import { FC } from "react";
import Icons from "@/ui/Icons";
import { shortToast } from "@/helpers/shorter-function";
import copyToClipboard from "@/helpers/copyToClipboard";

interface CopyIconProps {
  copyText: string;
}

const CopyIcon: FC<CopyIconProps> = ({ copyText }) => {
  return (
    <Icons.Copy
      aria-label="Copy code to clipboard"
      className="h-6 w-6 dark:text-white absolute right-0 top-0 hover:cursor-pointer hover:dark:text-gray-400"
      onClick={() => {
        copyToClipboard(copyText);
        shortToast("Copied", "API key copied to clipboard.", "success");
      }}
    />
  );
};

export default CopyIcon;
