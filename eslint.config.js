import js from '@eslint/js';
import * as tsparser from '@typescript-eslint/parser';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import jsdoc from 'eslint-plugin-jsdoc';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser: tsparser,
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  js.configs.recommended,
  prettier,
  {
    plugins: {
      jsdoc
    },
    rules: {
      'jsdoc/require-jsdoc': 'error',
      'jsdoc/require-description': 'warn'
    },
    ignores: [
      '**/.next/**',
      '**/node_modules/**',
      '**/build/**',
      '**/dist/**',
      '**/coverage/**'
    ]
  }
];
