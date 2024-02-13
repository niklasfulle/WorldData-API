/*import React, { FC } from "react";
import Icons from "@/ui/Icons";
import { shortToast } from "@/lib/helpers/shorter-function";
import copyToClipboard from "@/lib/helpers/copyToClipboard";

interface CopyIconProps {
  copyText: string;
}

const CopyIcon: FC<CopyIconProps> = ({ copyText }) => {
  return (
    <Icons.Copy
      aria-label="Copy code to clipboard"
      className="absolute right-0 top-0 h-6 w-6 hover:cursor-pointer dark:text-white hover:dark:text-gray-400"
      onClick={() => {
        copyToClipboard(copyText);
        shortToast("Copied", "API key copied to clipboard.", "success");
      }}
    />
  );
};

export default CopyIcon;*/
