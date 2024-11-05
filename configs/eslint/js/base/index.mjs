import globals from 'globals'
import pluginJs from '@eslint/js'
import PrettierRecommended from 'eslint-plugin-prettier/recommended'
import PrettierConfig from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  PrettierRecommended,
  PrettierConfig,
]