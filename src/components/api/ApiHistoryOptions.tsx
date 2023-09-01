"use client";
import React, { FC, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/DropdownMenu";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/ui/Button";
import { clearHistory } from "@/lib/helpers/api-key";
import { shortToast } from "@/lib/helpers/shorter-function";

interface ApiHistoryOptionsProps {
  apiKeyKey: string;
}

const ApiHistoryOptions: FC<ApiHistoryOptionsProps> = () => {
  const router = useRouter();
  const [isClearingHistory, setIsClearingHistory] = useState<boolean>(false);

  const clearingHistory = async () => {
    setIsClearingHistory(true);
    try {
      await clearHistory();
      router.refresh();
      shortToast("History cleared", "History cleared successfully.", "success");
    } catch (error) {
      shortToast(
        "Error clearing your history",
        "Please try again later.",
        "error"
      );
    } finally {
      setIsClearingHistory(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled={isClearingHistory} asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2"
          id="ApiHistoryOptions"
        >
          <p>{isClearingHistory ? "Clearing the history" : "Options"}</p>
          {isClearingHistory ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : null}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="text-red-600 hover:cursor-pointer"
          onClick={clearingHistory}
        >
          Clearing history
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ApiHistoryOptions;
