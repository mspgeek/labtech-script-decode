import { defineConfig, configDefaults } from 'vitest/config'

export default defineConfig({
  test: {
    // suites live in test/ next to their fixtures, not colocated
    include: ['test/**/*.test.js'],
    // SKIP_LIVE_TESTS=1 excludes live integration tests (set by .husky/pre-push)
    exclude:
      process.env.SKIP_LIVE_TESTS === '1' ? [...configDefaults.exclude, '**/*.live.test.js'] : configDefaults.exclude,
  },
})
