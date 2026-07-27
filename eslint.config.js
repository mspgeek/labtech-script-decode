import eslint from '@eslint/js'
import { defineConfig } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier'

export default defineConfig(
  eslint.configs.recommended,
  eslintConfigPrettier,
  {
    // source files only, generated output excluded so a full-repo run stays fast
    ignores: ['**/dist/', '**/build/', '**/node_modules/', '**/coverage/', '**/*.min.{js,mjs,cjs}', '**/*.bundle.js'],
  },
  {
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      curly: ['error', 'all'],
      'no-nested-ternary': 'error',
      // none of this `;(expr).method()`. semi: 'never' rules out trailing
      // `;`, semi-style: 'last' rules out leading `;`. together they force a
      // restructure (extract temp, fix the underlying cast, etc.) rather than
      // letting a defender semi slip in
      semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
      'semi-style': ['error', 'last'],
      'no-extra-semi': 'error',
    },
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      globals: {
        module: 'writable',
        require: 'readonly',
        exports: 'writable',
        __dirname: 'readonly',
        __filename: 'readonly',
        process: 'readonly',
      },
    },
  },
  {
    files: ['src/**/*.{js,cjs,mjs}', '**/scripts/**/*.{js,mjs,cjs}', 'docs/**/*.js', '*.config.js'],
    languageOptions: {
      globals: {
        process: 'readonly',
        console: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        // node 22+ web globals, eslint doesn't infer this from package.json engines
        URLSearchParams: 'readonly',
        URL: 'readonly',
        fetch: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        // base64/text codecs used by the decode pipeline, global in node and browsers
        atob: 'readonly',
        btoa: 'readonly',
        TextEncoder: 'readonly',
        TextDecoder: 'readonly',
      },
    },
  },
)
