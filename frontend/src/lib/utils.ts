import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseUrlPath(pathArray: string[]): {
  slug: string;
  sub?: string;
} {
  if (!Array.isArray(pathArray) || pathArray.length === 0) {
    throw new Error("Input must be a non-empty array of strings");
  }

  const result: { slug: string; sub?: string } = {
    slug: pathArray[0] as string,
  };

  if (pathArray.length === 2) {
    result.sub = pathArray[1];
  }

  return result;
}
