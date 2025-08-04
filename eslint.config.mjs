import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    // Custom overrides
    rules: {
      "@typescript-eslint/no-require-imports": "off", // allow require()
      "@typescript-eslint/no-unused-vars": "warn", // optional: change to 'off' if needed
    },
  },
];

export default eslintConfig;
