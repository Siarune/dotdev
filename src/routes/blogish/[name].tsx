import { eq } from "drizzle-orm"
import { Suspense } from "solid-js"
import { SolidMarkdown } from "solid-markdown"
import db, { posts } from "~/db"
import { query, createAsync, useParams } from "@solidjs/router"

const getPost = query(async (params) => {
	"use server"
	const query = params.name?.replaceAll("_", " ")
	return db
		.select({
			id: posts.id,
			name: posts.name,
			content: posts.content,
			creationDate: posts.createdAt,
		})
		.from(posts)
		.where(eq(posts.name, query))
}, "post")

export const route = {
	load: () => getPost(useParams()),
}

export default function Post() {
	const Post = createAsync(() => getPost(useParams()))
	return (
		<main class="main justify-center">
			<Suspense fallback={<></>}>
				{Post() &&
					Post()!.map((posts) => (
						<>
							<title>{posts.name}</title>
							<h2 class="text-2xl">{posts.name}</h2>

							<SolidMarkdown
								class="m4 text-xl"
								children={posts.content}
							/>

							<p class="opacity-60 text-lg">
								Posted: {posts.creationDate!.toLocaleString()}
							</p>
						</>
					))}
			</Suspense>
		</main>
	)
}
