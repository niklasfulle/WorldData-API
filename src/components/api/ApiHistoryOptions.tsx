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
import { clearHistory } from "@/helpers/api-key";
import { shortToast } from "@/helpers/shorter-function";

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
      shortToast("Error clearing your history", "Please try again later.", "error");
    } finally {
      setIsClearingHistory(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled={isClearingHistory} asChild>
        <Button variant="ghost" className="flex gap-2 items-center" id="ApiHistoryOptions">
          <p>{isClearingHistory ? "Clearing the history" : "Options"}</p>
          {isClearingHistory ? <Loader2 className="animate-spin h-4 w-4" /> : null}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="hover:cursor-pointer text-red-600" onClick={clearingHistory}>
          Clearing history
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ApiHistoryOptions;
