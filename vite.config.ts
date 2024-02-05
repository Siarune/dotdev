import vercel from "solid-start-vercel"
import solid from "solid-start/vite"
import UnoCSS from "unocss/vite"
import { defineConfig } from "vite"

export default defineConfig(() => {

	return {
		plugins: [
			solid({
				ssr: true,
				adapter: vercel({
					prerender: { expiration: 60 }
				})
			}),
			UnoCSS()
		],
		build: {
			commonjsOptions: {
				strictRequires: false
			}
		}
	}
})
