"use client";
import React from "react";
import { Button } from "@/ui/Button";
import Paragraph from "@/ui/Paragraph";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col gap-4 items-center h-screen pt-32">
      <Paragraph>Something went wrong while loading this page.</Paragraph>
      <Button
        size="lg"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
}
