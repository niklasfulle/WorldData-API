"use client";
import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";
import { ButtonHTMLAttributes, FC } from "react";
import { Button } from "@/ui/Button";
import { shortToast } from "@/helpers/shorter-function";

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  valueToCopy: string;
}

const CopyButton: FC<CopyButtonProps> = ({ valueToCopy, className, ...props }) => {
  return (
    <Button
      {...props}
      type="button"
      onClick={() => {
        // TODO: Add support for Safari
        navigator.clipboard.writeText(valueToCopy);
        shortToast("Copied", "API key copied to clipboard.", "success");
      }}
      variant="ghost"
      className={cn("", className)}
    >
      <Copy className="h-5 w-5" />
    </Button>
  );
};

export default CopyButton;
