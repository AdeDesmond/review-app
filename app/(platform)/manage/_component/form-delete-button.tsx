"use client";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";
import React from "react";

export const DeleteFormButton = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} variant="destructive" size="sm">
      {children}
    </Button>
  );
};
