"use client";
import React, { FC, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/DropdownMenu";
import { createApiKey, revokeApiKey } from "@/lib/helpers/api-key";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/ui/Button";
import { shortToast } from "@/lib/helpers/shorter-function";

interface ApiKeyOptionsProps {
  apiKeyKey: string;
}

const ApiKeyOptions: FC<ApiKeyOptionsProps> = ({ apiKeyKey }) => {
  const router = useRouter();
  const [isCreatingNew, setIsCreatingNew] = useState<boolean>(false);
  const [isRevoking, setIsRevoking] = useState<boolean>(false);

  const createNewApiKey = async () => {
    setIsCreatingNew(true);
    try {
      await revokeApiKey();
      await createApiKey();
      router.refresh();
      shortToast(
        "New API key created",
        "New API key created successfully.",
        "success",
        3000
      );
    } catch (error) {
      shortToast(
        "Error creating new API key",
        "Please try again later.",
        "error",
        5000
      );
    } finally {
      setIsCreatingNew(false);
    }
  };

  const revokeCurrentApiKey = async () => {
    setIsRevoking(true);
    try {
      await revokeApiKey();
      router.refresh();
    } catch (error) {
      shortToast(
        "Error revoking your API key",
        "Please try again later.",
        "error",
        5000
      );
    } finally {
      setIsRevoking(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled={isCreatingNew || isRevoking} asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2"
          id="ApiKeyOptions"
        >
          <p>
            {isCreatingNew
              ? "Creating new key"
              : isRevoking
              ? "Revoking key"
              : "Options"}
          </p>
          {isCreatingNew || isRevoking ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : null}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="hover:cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(apiKeyKey);
            shortToast(
              "Copied",
              "API key copied to clipboard.",
              "success",
              3000
            );
          }}
        >
          Copy
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="hover:cursor-pointer"
          onClick={createNewApiKey}
        >
          Create new key
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="hover:cursor-pointer"
          onClick={revokeCurrentApiKey}
        >
          Revoke key
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ApiKeyOptions;
