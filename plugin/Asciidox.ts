import type { Plugin } from "vite"
import { resolve, join } from "node:path"
import { readdirSync, statSync, writeFileSync } from "node:fs"
import Processor from "asciidoctor"
const processor = Processor()

export const Asciidox = (_options?: { src?: string; dst?: string }): Plugin => {
	return {
		name: "asciidox",
		async buildStart() {
			compileAdoc()
		},
		configureServer(server) {
			server.watcher.on("change", (filepath) => {
				if (
					filepath.includes("/content") ||
					filepath.includes("/src/routes/posts")
				) {
					compileAdoc()
				}
			})
		},
	}
}

const compileAdoc = () => {
	const src = resolve("public/content")
	const dst = resolve("src/data/posts.json")
	const files = readdirSync(src)

	const blogPosts = files
		.filter(
			(file) =>
				statSync(join(src, file)).isFile() && file.endsWith(".adoc"),
		)
		.map((file) => {
			const data = processor.loadFile(join(src, file))

			return {
				slug: data.getAttribute("docname"),
				filename: data.getAttribute("docfile"),
				title: data.getTitle(),
				tags: data.getAttribute("tags"),
				published: data.getAttribute("docdate"),
			}
		})

	writeFileSync(dst, JSON.stringify(blogPosts, null, 2), "utf-8")
}
