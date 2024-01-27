"use client";

import { useState } from "react";
import { CheckCheck, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  value?: string;
};

export const CopyButton = ({ value }: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = () => {
    if (!value) return;
    setIsCopied(true);
    navigator.clipboard.writeText(value);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const Icon = isCopied ? CheckCheck : Copy;
  return (
    <Button
      onClick={onCopy}
      disabled={!value || isCopied}
      variant={"ghost"}
      size={"sm"}
    >
      <Icon className="h-4 w-4" />
    </Button>
  );
};
