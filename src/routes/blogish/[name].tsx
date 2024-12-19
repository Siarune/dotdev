import { eq } from "drizzle-orm"
import { For, Suspense } from "solid-js"
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

// export const route = {
// 	load: () => getPost(useParams()),
// }

export default function Post() {
	const Post = createAsync(() => getPost(useParams()))
	return (
		<main class="main justify-center">
			<Suspense fallback={<></>}>
				<For each={Post()}>
					{(post) => (
						<>
							<title>{post.name}</title>
							<h2 class="text-2xl">{post.name}</h2>

							<SolidMarkdown class="m4 text-xl">
								{post.content}
							</SolidMarkdown>

							<p class="opacity-60 text-lg">
								Posted: {post.creationDate!.toLocaleString()}
							</p>
						</>
					)}
				</For>
			</Suspense>
		</main>
	)
}
