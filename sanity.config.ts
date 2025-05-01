import { codeInput } from "@sanity/code-input";
import { defineConfig } from "sanity";
import { latexInput } from "sanity-plugin-latex-input";
import { structureTool } from "sanity/structure";
import { env } from "./lib/env";
import { schemas } from "./sanity/schemas";

export const sanityConfig = defineConfig({
  name: "default",
  title: "Portfolio",

  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION,

  basePath: "/sanity",

  plugins: [structureTool(), codeInput(), latexInput()],

  schema: {
    types: schemas,
  },
});
