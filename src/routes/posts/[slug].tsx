import { createAsync, query, useParams } from "@solidjs/router"
import Processor from "asciidoctor"
const processor = Processor()
import { Suspense, SuspenseList } from "solid-js"
import { posts } from "~/data/posts"

const getPostContent = query(async (filename: string) => {
	"use server"
	const content = processor
		.loadFile("public/content/" + filename)
		.getContent()!
	return content
}, "content")

export default function BlogPost() {
	const meta = posts.find((posts) => posts.slug === useParams().slug!)
	const content = createAsync(() => getPostContent(meta!.filename))

	return (
		<main class="main justify-center">
			<Suspense>
				<title>{meta?.slug}</title>

				<h1>{meta?.slug}</h1>
				<p>Published: {meta?.published}</p>
				<Suspense>
					<div innerHTML={content} />
				</Suspense>
			</Suspense>
		</main>
	)
}
