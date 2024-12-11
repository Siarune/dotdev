// uno.config.ts
import { defineConfig } from "unocss"
import { presetOnu } from "@onu-ui/preset"

export default defineConfig({
	presets: [
		presetOnu({
			preflights: false,
		}),
	],
	shortcuts: {
		main: "flex flex-1 flex-col items-center m0 p0 color-txt",
	},
	theme: {
		colors: {
			bgd: "#11111b",
			fgd: "#1e1e2e",
			acc: "#6C757D",
			txt: "#cdd6f4",
			hlt: "#E9ECEF",
		},
	},
})
