import { cn } from "@/lib/utils";
import React from "react";
import { IconClover } from "../ui/icon-clover";
type Props = {
  children: React.ReactNode;
  className?: string;
};
export function StarHeading(props: Props) {
  return (
    <h2 className={cn("font-medium text-xl sm:text-2xl flex items-center gap-4", props.className)}>
      <IconClover size={28} className="animate-spin [animation-duration:5000ms]" />
      {props.children}
    </h2>
  );
}
