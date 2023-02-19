import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      precompress: true,
    }),
    alias: {
      "@/*": "src/*",
    },
    paths: {
      // base: process.argv.includes("dev") ? "" : "/your-repo-name",
    },
  },
};

export default config;
