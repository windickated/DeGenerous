import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import svelte from "@astrojs/svelte";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://windickated.github.io',
  integrations: [svelte()],
  output: "server",
  adapter: vercel()
});