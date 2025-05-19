import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "bg-background flex min-h-[40px] w-full rounded-xl px-3 py-1.5 text-base",
          "outline-none ring-0 ring-offset-0 placeholder:text-muted-foreground/80",
          "border border-border focus-visible:border-primary",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
