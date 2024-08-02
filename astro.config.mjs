import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: 'https://windickated.github.io',
  integrations: [svelte()],
  output: "server",
  adapter: vercel()
});