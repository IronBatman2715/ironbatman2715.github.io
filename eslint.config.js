import prettier from "eslint-config-prettier";
import eslint from "@eslint/js";
import { includeIgnoreFile } from "@eslint/compat";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import { fileURLToPath } from "node:url";
import tsEslint from "typescript-eslint";
const gitignorePath = fileURLToPath(new URL("./.gitignore", import.meta.url));

export default tsEslint.config(
  includeIgnoreFile(gitignorePath),
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  ...svelte.configs["flat/recommended"],
  prettier,
  ...svelte.configs["flat/prettier"],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.svelte"],

    languageOptions: {
      parserOptions: {
        parser: tsEslint.parser,
      },
    },
  },
  {
    rules: {
      "no-undef": "off", // https://typescript-eslint.io/linting/troubleshooting/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
    },
  }
);
