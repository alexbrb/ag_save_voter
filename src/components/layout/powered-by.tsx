import React from "react";
import { cn } from "../../lib/utils";

interface PoweredByProps {
  className?: string;
}

export function PoweredBy({ className }: PoweredByProps) {
  return (
    <div className={cn("text-sm text-muted-foreground", className)}>
      Powered by{" "}
      <a
        href="https://syment.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-primary hover:underline"
      >
        Syment
      </a>
    </div>
  );
}