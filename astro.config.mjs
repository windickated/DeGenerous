import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";

import vercelServerless from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://windickated.github.io',
  integrations: [svelte()],
  output: "server",
  adapter: vercelServerless()
});