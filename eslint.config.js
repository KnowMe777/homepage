// eslint.config.js
import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals'; // ✅ import globals list
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig([
  js.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        ...globals.browser, // ✅ enables document, window, etc.
        ...globals.es2021,
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],

      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
        },
      ],
    },
  },
]);
