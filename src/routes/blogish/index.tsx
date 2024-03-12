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
		.limit(500)
}, "posts")

export const route = {
	load: () => getPosts()
}

export default function Blogish() {
	// const Post = useRouteData<typeof routeData>()
	const Posts = createAsync(() => getPosts());

	return (
		<main class={"main"}>
			<h1 class="mt5rem">Blog-ish</h1>
			<h2>A blog, but for everything!</h2>

			<Suspense>
				<ul class="md:max-w-33vw max-h-fit mt5vh p0 list-none text-center">
					{Posts() && Posts()!.map(post =>
						<A href={`./post/${post.name.replaceAll(" ", "_")}`}>
							<li>
								{post.name}
							</li>
						</A>
					)}
				</ul>
			</Suspense>
		</main>
	)
}
