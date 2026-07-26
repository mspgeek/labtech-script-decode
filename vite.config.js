import {defineConfig} from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      formats: ['es', 'cjs'],
      fileName: (format) => format === 'es' ? 'labtech-script-decode.js' : 'labtech-script-decode.cjs',
    },
    sourcemap: true,
    rollupOptions: {
      external: ['pako', 'xml2js', 'ajv'],
    },
  },
});
