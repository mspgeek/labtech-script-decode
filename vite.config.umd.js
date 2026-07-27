import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [nodePolyfills({ include: ['events', 'stream', 'string_decoder', 'timers', 'buffer'] })],
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/index.js',
      name: 'labtech_script',
      formats: ['umd'],
      fileName: () => 'labtech-script-decode.umd.js',
    },
    sourcemap: true,
  },
})
