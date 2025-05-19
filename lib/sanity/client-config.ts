import { env } from "@/lib/env";
import { ClientConfig } from "next-sanity";

export const clientConfig: ClientConfig = {
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
};
