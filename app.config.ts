import { defineConfig } from "@solidjs/start/config"
import UnoCSS from "unocss/vite"
import devtools from "solid-devtools/vite"
import { Asciidox } from "./plugin/Asciidox"

export default defineConfig({
	// extensions: ["adoc"],
	vite: {
		plugins: [
			devtools({
				autoname: true,
			}),
			UnoCSS(),
			Asciidox(),
		],
	},
	server: {
		preset: "vercel",
		prerender: {
			routes: ["/"],
			crawlLinks: true,
		},
	},
})
