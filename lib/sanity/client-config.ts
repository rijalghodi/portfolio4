import { ClientConfig } from "next-sanity";

import { env } from "@/lib/env";

export const clientConfig: ClientConfig = {
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
};
