import { defineConfig } from 'bumpp'

export default defineConfig({
  recursive: true,
  all: true,
  commit: 'release: v%s',
  push: false,
})
