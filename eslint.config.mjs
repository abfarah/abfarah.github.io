import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import perfectionist from 'eslint-plugin-perfectionist';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  {
    plugins: {
      perfectionist,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error', // or "error"
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'no-undef': 'error',
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'natural',
        },
      ],
      'perfectionist/sort-interfaces': ['error'],

      'perfectionist/sort-jsx-props': [
        'error',
        {
          customGroups: [
            {
              elementNamePattern: ['key', 'ref'],
              groupName: 'reserved',
            },
          ],
          groups: ['reserved'],
          type: 'natural',
        },
      ],
      'perfectionist/sort-objects': [
        'error',
        {
          type: 'natural',
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'tailwindcss/no-custom-classname': 'off',
      'unicorn/prevent-abbreviations': 'off',
    },
  },
  {
    files: ['**/*.{jsx,tsx}'],
    rules: {
      'no-console': 'warn',
    },
  },
]);

export default eslintConfig;
