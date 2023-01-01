import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
    }),
    alias: {
      "@": "src",
    },
    paths: {
      // base: process.env.NODE_ENV === "production" ? "/your-repo-here" : "",
    },
  },
};

export default config;
