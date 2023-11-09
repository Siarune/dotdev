// uno.config.ts
import { defineConfig } from "unocss"

export default defineConfig({
	shortcuts: {
		'main': 'flex w-screen flex-col items-center justify-center m0 p0 min-h-screen max-h-fit',
		'banner': 'flex flex-col bg-black color-white border-rounded-10px decoration-none p4',
		'card': 'flex flex-col bg-black color-white border-rounded-10px decoration-none sm:w-90 w-fit p1em pt2em pb2em mb0 w-full'
	}
})
