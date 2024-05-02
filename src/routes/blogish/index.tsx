import { desc, eq } from "drizzle-orm"
import { Suspense } from "solid-js"
import db, { post } from "~/db"
import { cache, createAsync, A } from "@solidjs/router";

const getPosts = cache(async () => {
	"use server";
	return db
		.select({
			id: post.id,
			name: post.name
		})
		.from(post)
		.where(eq(post.isPublic, true))
		.orderBy(desc(post.id))
		.limit(50)
}, "posts")

export const route = {
	load: () => getPosts()
}

export default function Blogish() {
	const Posts = createAsync(() => getPosts());
	return (
		<main class="main">
			<title>Blog-ish</title>
			<h1 class="mt5rem mb text-5xl">Blog-ish</h1>
			<h2 class="text-4xl text-center">A blog, but for everything!</h2>

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
