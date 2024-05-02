import { A, cache, createAsync } from "@solidjs/router";
import db, { post } from "~/db";
import { desc } from "drizzle-orm";
import { Suspense } from "solid-js";

const getPosts = cache(async () => {
	"use server";
	return db
		.select({
			id: post.id,
			name: post.name
		})
		.from(post)
		.orderBy(desc(post.id))
		.limit(50)
}, "posts")

export const route = {
	load: () => getPosts()
}

export default function EditIndex() {
	const Posts = createAsync(() => getPosts());
	return (
		<main class="main">
			<title>Edit a Post</title>
			<Suspense>
				<ul class="md:max-w-33vw max-h-fit mt5vh p0 list-none text-center">
					{Posts() && Posts()!.map(post =>
						<A class="decoration-none m0 color-txt" href={`./${post.name.replaceAll(" ", "_")}`}>
							<li class="p8 text-3xl text-center hover:bg-fgd transition-1000">
								{post.name}
							</li>
						</A>
					)}
				</ul>
			</Suspense>
		</main>
	)
}
