import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
    }),
    alias: {
      $lib: "src/lib",
      "@": "src",
    },
    paths: {
      // base: process.env.NODE_ENV === "production" ? "/your-repo-here" : "",
    },
    prerender: {
      default: true,
    },
  },
};

export default config;
