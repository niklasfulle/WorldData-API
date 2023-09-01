"use client";
import React, { useState } from "react";
import { createApiKey } from "@/lib/helpers/api-key";
import { Button } from "@/ui/Button";
import { Input } from "@/ui/Input";
import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import CopyButton from "@/api/CopyButton";
import { shortToast } from "@/lib/helpers/shorter-function";

const RequestApiKey = () => {
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
    <div className="container h-auto min-h-[90vh] md:max-w-3xl">
      <div className="flex flex-col items-center gap-6">
        <LargeHeading className="text-center">
          Request your API key
        </LargeHeading>
        <Paragraph>You haven&apos;t requested an API key yet.</Paragraph>
      </div>
      <form
        onSubmit={createNewApiKey}
        className="mt-16 px-12 sm:flex sm:items-center"
        action="#"
      >
        <label htmlFor="api-key" className="sr-only">
          Your API key
        </label>
        <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
          {/* Show a copy icon if API key was generated successfully */}
          {apiKey ? (
            <CopyButton
              className="absolute inset-y-0 right-0 duration-300 animate-in fade-in "
              valueToCopy={apiKey}
              type="button"
            />
          ) : null}
          <Input
            readOnly
            value={apiKey ?? ""}
            placeholder="Request an API key to display it here"
            className="shadow-md backdrop-blur-md"
            id="api-key"
          />
        </div>
        <div className="mt-6 flex justify-center sm:ml-4 sm:mt-0 sm:flex-shrink-0">
          <Button
            disabled={!!apiKey}
            isLoading={isCreating}
            className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-md backdrop-blur-md transition-all ease-in hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-sky-400 dark:text-black dark:hover:bg-sky-500 dark:focus:ring-sky-500 dark:focus:ring-offset-slate-700"
          >
            Request key
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RequestApiKey;
