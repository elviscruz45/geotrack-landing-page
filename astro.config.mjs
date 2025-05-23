import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import db from "@astrojs/db";
import vercel from "@astrojs/vercel/serverless";
// import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  // integrations: [tailwind(), react(), db()],
  integrations: [tailwind(), react()],

  output: "server",
  // adapter: netlify(),
  adapter: vercel(),
});
