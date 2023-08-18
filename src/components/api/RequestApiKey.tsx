"use client";
import { createApiKey } from "@/helpers/api-key";
import { useState } from "react";
import { Button } from "@/ui/Button";
import { Input } from "@/ui/Input";
import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import CopyButton from "@/api/CopyButton";
import { shortToast } from "@/helpers/shorter-function";

const RequestApiKey = ({}) => {
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [apiKey, setApiKey] = useState<string | null>(null);

  async function createNewApiKey(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsCreating(true);

    try {
      const generatedApiKey = await createApiKey();
      setApiKey(generatedApiKey);
    } catch (err) {
      if (err instanceof Error) {
        shortToast("Error", err.message, "error");

        return;
      }

      shortToast("Error", "Something went wrong", "error");
    } finally {
      setIsCreating(false);
    }
  }

  return (
    <div className="container md:max-w-3xl min-h-[90vh] h-auto">
      <div className="flex flex-col gap-6 items-center">
        <LargeHeading className="text-center">Request your API key</LargeHeading>
        <Paragraph>You haven&apos;t requested an API key yet.</Paragraph>
      </div>
      <form onSubmit={createNewApiKey} className="mt-16 sm:flex sm:items-center px-12" action="#">
        <label htmlFor="api-key" className="sr-only">
          Your API key
        </label>
        <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
          {/* Show a copy icon if API key was generated successfully */}
          {apiKey ? (
            <CopyButton
              className="absolute inset-y-0 right-0 animate-in fade-in duration-300"
              valueToCopy={apiKey}
              type="button"
            />
          ) : null}
          <Input
            readOnly
            value={apiKey ?? ""}
            placeholder="Request an API key to display it here"
            className=""
            id="api-key"
          />
        </div>
        <div className="mt-6 flex justify-center sm:mt-0 sm:ml-4 sm:flex-shrink-0">
          <Button disabled={!!apiKey} isLoading={isCreating}>
            Request key
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RequestApiKey;
