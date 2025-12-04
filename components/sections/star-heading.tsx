import { cn } from "@/lib/utils";

import { IconClover } from "../ui/icon-clover";
type Props = {
  title: string;
  description?: string;
  className?: string;
};
export function StarHeading(props: Props) {
  return (
    <header className={cn("flex flex-col gap-4", props.className)}>
      <h2 className={cn("font-medium text-xl sm:text-2xl inline-flex items-center gap-4")}>
        <IconClover size={28} className="animate-spin [animation-duration:5000ms]" />
        {props.title}
      </h2>
      {props.description && <p className="text-base sm:text-lg">{props.description}</p>}
    </header>
  );
}
