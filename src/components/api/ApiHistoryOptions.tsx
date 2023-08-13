"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/DropdownMenu";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { Button } from "@/ui/Button";
import { toast } from "@/ui/Toast";
import { clearHistory } from "@/helpers/api-key";

interface ApiHistoryOptionsProps {
  apiKeyKey: string;
}

const ApiHistoryOptions: FC<ApiHistoryOptionsProps> = ({ apiKeyKey }) => {
  const router = useRouter();
  const [isClearingHistory, setIsClearingHistory] = useState<boolean>(false);

  const clearingHistory = async () => {
    setIsClearingHistory(true);
    try {
      await clearHistory();
      router.refresh();
      toast({
        title: "History cleared",
        message: "History cleared successfully",
        type: "success",
      });
    } catch (error) {
      toast({
        title: "Error clearing your history",
        message: "Please try again later.",
        type: "error",
      });
    } finally {
      setIsClearingHistory(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled={isClearingHistory} asChild>
        <Button variant="ghost" className="flex gap-2 items-center">
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
