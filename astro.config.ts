// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import { presetWebFonts, presetWind4 } from "unocss";

// https://astro.build/config
export default defineConfig({
	site: "https://rune.nz",
	integrations: [
		mdx(),
		sitemap(),
		UnoCSS({
			injectReset: true,
			// presets: [
			//   presetWind4(),
			//   presetWebFonts({
			//     fonts: {
			//       cursive: {
			//         name: "Italianno",
			//         weights: ["400"],
			//         italic: false,
			//       },
			//     },
			//   }),
			// ],
		}),
	],
	markdown: {
		shikiConfig: {
			theme: "catppuccin-mocha",
			wrap: true,
		},
	},
});
