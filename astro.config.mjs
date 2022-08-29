import deno from '@astrojs/deno';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: process.env.BASE,
  integrations: [tailwind({ config: { applyBaseStyles: false } })],
  output: "server",
  adapter: deno(),
});
