import { cn } from "@/lib/utils";
import { Asterisk } from "lucide-react";
import React from "react";
type Props = {
  children: React.ReactNode;
  className?: string;
};
export function StarHeading(props: Props) {
  return (
    <h2 className={cn("font-medium text-xl sm:text-2xl flex items-center gap-2", props.className)}>
      <Asterisk className="animate-spin [animation-duration:5000ms]" size={36} />
      {props.children}
    </h2>
  );
}
