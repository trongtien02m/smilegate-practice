import { fileURLToPath } from 'node:url';
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    test: {
      setupFiles: './tests/unit/setup.ts',
      environment: 'jsdom',
      include: ['src/**/*.{test,spec}.{ts,tsx,js,jsx}', 'tests/**/*.test.ts'],
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      coverage: {
        provider: 'v8',
        clean: false,
        reporter: ['text', 'json', 'html'],
        reportsDirectory: './tests/unit/coverage',
        include: ['src/**/*.vue', 'src/**/*.ts'],
        exclude: ['node_modules/', '**/*.d.ts'],
      },
    },
  }),
);
