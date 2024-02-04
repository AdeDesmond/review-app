"use client";

import { Button } from "@/components/ui/button";
import { ShieldAlertIcon } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    toast.error("please check your spellings");
  }, [error]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col gap-y-4">
      <ShieldAlertIcon className="text-rose-500 h-6 w-6" />
      <h2 className="text-rose-300 font-semibold text-xl">
        Word not properly written or defined, please check your spellings!
      </h2>
      <Button
        variant="destructive"
        size="sm"
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
