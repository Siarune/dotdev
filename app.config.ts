import { defineConfig } from "@solidjs/start/config";
import UnoCSS from "unocss/vite";
import devtoolsPlugin from "solid-devtools/vite";

export default defineConfig({
	ssr: true,
	server: {
		preset: "vercel"
	},
	vite: {
		plugins: [
			UnoCSS(),
			devtoolsPlugin({
				autoname: true
			})
		]
	}
});
