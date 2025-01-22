import { defineConfig } from "@solidjs/start/config"
import UnoCSS from "unocss/vite"
import devtools from "solid-devtools/vite"
// import oxlintPlugin from "vite-plugin-oxlint"

export default defineConfig({
	vite: {
		plugins: [
			devtools({
				autoname: true,
			}),
			UnoCSS(),
			// oxlintPlugin(),
		],
	},
	server: {
		preset: "vercel",
		prerender: {
			routes: ["/"],
			// crawlLinks: true
		},
	},
})
