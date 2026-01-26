import { defineConfig } from "@solidjs/start/config"
import { withSolidBase } from "@kobalte/solidbase/config"
import UnoCSS from "unocss/vite"

export default defineConfig(withSolidBase({
	vite: {
		plugins: [UnoCSS()],
	},
	server: {
		preset: "vercel",
		prerender: {
			routes: ["/"],
			// crawlLinks: true
		},
	}
},
	{
		title: "Rune.nz"
	}
))
