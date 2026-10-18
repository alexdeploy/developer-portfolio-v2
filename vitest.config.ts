import { defineConfig } from 'vitest/config'
import { defineVitestProject } from '@nuxt/test-utils/config'

export default defineConfig({
  test: {
    projects: [
      // Plain unit tests (utils, schema): fast, no Nuxt runtime.
      {
        test: {
          name: 'unit',
          environment: 'node',
          include: ['test/*.test.ts'],
        },
      },
      // Component and page tests: run inside a Nuxt environment, so auto-imports,
      // components and the router resolve exactly as in the app.
      await defineVitestProject({
        test: {
          name: 'nuxt',
          environment: 'nuxt',
          include: ['test/nuxt/**/*.test.ts'],
        },
      }),
    ],
  },
})
