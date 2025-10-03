import { defineConfig } from 'eslint/config';
import nextPlugin from 'eslint-config-next';

export default defineConfig([
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ...nextPlugin,
    rules: {
      ...nextPlugin.rules,
      // Add custom rules here if needed
    }
  }
]);