import devtools from "solid-devtools/vite";
import {defineConfig} from "@solidjs/start/config";
import UnoCSS from "unocss/vite";

export default defineConfig({
  vite: {
    plugins: [UnoCSS(), devtools({ autoname: true})]
  },
	server: {
	  preset: "vercel",
		prerender: {
		  routes: ["/"],
		  // crawlLinks: true
		}
	}
});
