import { LibraryFormats, defineConfig } from "vite"
import dts from "vite-plugin-dts"

export default defineConfig(() => {
  return {
    build: {
      lib: {
        entry: {
          index: "src/index",
        },
        formats: ["es"] satisfies LibraryFormats[],
      },
    },
    plugins: [dts({ rollupTypes: true })],
  }
})
