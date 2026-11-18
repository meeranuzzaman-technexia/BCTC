import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge class names the Tailwind way (accepts arrays, objects, conditionals). */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
