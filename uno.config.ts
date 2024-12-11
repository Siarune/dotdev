// uno.config.ts
import { defineConfig } from "unocss"
import { presetOnu } from "@onu-ui/preset"

export default defineConfig({
	presets: [
		presetOnu({
			preflights: false,
		}),
	],
})
