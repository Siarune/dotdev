import solid from "solid-start/vite"
import {defineConfig} from "vite"
import vercel from "solid-start-vercel"
import UnoCSS from "unocss/vite"

export default defineConfig(() => {

	return {
		plugins: [
			solid({
				ssr: true,
				adapter: vercel({
					prerender: { expiration: 5*60 }
				})
			}),
			UnoCSS()
		],
	}
})