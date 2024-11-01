/// <reference types="vitest/config" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		globals: true,
		dir: 'src',
		coverage: {
			include: ['src'],
		},
	},
})
