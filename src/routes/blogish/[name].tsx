import { eq } from "drizzle-orm"
import { Suspense } from "solid-js"
import { SolidMarkdown } from "solid-markdown"
import db, { post } from "~/db"
import { cache, createAsync, useParams } from "@solidjs/router";

const getPost = cache(async (params) => {
	"use server";
	const query = params.name?.replaceAll("_", " ")
	return db
		.select({
			id: post.id,
			name: post.name,
			content: post.content,
			creationDate: post.createdAt
		})
		.from(post)
		.where(
			eq(post.isPublic, true)
			&& eq(post.name, query))
}, "post")

export const route = {
	load: () => getPost(useParams())
}

export default function Post() {
	const Post = createAsync(() => getPost(useParams()))
	return (
		<main class="main justify-center">
			<Suspense fallback={<></>}>
				{Post() && Post()!.map(post =>
					<>
						<title>{post.name}</title>
						<h2 class="text-2xl">{post.name}</h2>

						<SolidMarkdown class="m4 text-xl" children={post.content}/>

						<p class="opacity-60 text-lg">
							Posted: {post.creationDate!.toLocaleString()}
						</p>
					</>
				)}
			</Suspense>
		</main>
	)
}
