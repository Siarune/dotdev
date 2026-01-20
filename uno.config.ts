// uno.config.ts
import { defineConfig, presetWind4 } from "unocss"

export default defineConfig({
	presets: [
		presetWind4({
			preflights: {
				reset: true,
			},
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
