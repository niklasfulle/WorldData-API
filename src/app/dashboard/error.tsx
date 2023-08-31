"use client";
import React from "react";
import { Button } from "@/ui/Button";
import Paragraph from "@/ui/Paragraph";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex h-screen flex-col items-center gap-4 pt-32">
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
