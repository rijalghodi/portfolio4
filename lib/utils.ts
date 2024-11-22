import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchArticles(
  page: number,
  perPage: number,
  tag?: string,
  category?: string,
) {
  const response = await fetch(
    `/api/articles?page=${page}&per_page=${perPage}&tag=${tag}&category=${category}`,
  );

  if (!response.ok) {
    throw new Error('Error fetching articles');
  }

  return response.json();
}
