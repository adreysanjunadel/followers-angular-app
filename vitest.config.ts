import { defineConfig } from 'vitest/config';
import angular from '@analogjs/vite-plugin-angular'; // Common for Vitest + Angular

export default defineConfig({
  plugins: [angular()],
  test: {
    globals: true, // Allows 'describe', 'it', 'expect' without imports
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'], // This replaces the initialization part
    include: ['**/*.spec.ts'],
  },
});
