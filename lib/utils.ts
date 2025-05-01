import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function dateToMMYYYY(date: string) {
  const options = { month: "short", year: "numeric" };
  return new Intl.DateTimeFormat("en-US", options as any).format(new Date(date));
}
