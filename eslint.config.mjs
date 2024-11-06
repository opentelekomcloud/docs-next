import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
  },
  {
    ignores: [".docusaurus/*"],  // Add ignore patterns her
  },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat["jsx-runtime"],
];