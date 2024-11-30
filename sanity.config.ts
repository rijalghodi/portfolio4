import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { codeInput } from '@sanity/code-input';
import { latexInput } from 'sanity-plugin-latex-input';
import { schemas } from './sanity/schemas';
import { env } from './lib/env';

export const sanityConfig = defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION,

  basePath: '/admin',

  plugins: [structureTool(), codeInput(), latexInput()],

  schema: {
    types: schemas,
  },
});
