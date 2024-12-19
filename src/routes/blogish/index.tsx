import { desc } from "drizzle-orm"
import { For, Suspense } from "solid-js"
import db, { posts } from "~/db"
import { createAsync, A, query } from "@solidjs/router"

const getPosts = query(async () => {
	"use server"
	return db
		.select({
			id: posts.id,
			name: posts.name,
		})
		.from(posts)
		.orderBy(desc(posts.id))
		.limit(50)
}, "posts")

// export const route = {
// 	load: () => getPosts()
// }

export default function Blogish() {
	const Posts = createAsync(() => getPosts())
	return (
		<main class="main">
			<title>Blog-ish</title>
			<h1 class="mt5rem mb text-5xl">Blog-ish</h1>
			<h2 class="text-4xl text-center">A blog, but for everything!</h2>

			<Suspense>
				<ul class="md:max-w-33vw max-h-fit mt5vh p0 list-none text-center">
					<For each={Posts()}>
						{(posts) => (
							<A
								class="decoration-none m0 color-txt"
								href={`./${posts.name.replaceAll(" ", "_")}`}
							>
								<li class="p8 text-3xl text-center hover:bg-fgd transition-1000">
									{posts.name}
								</li>
							</A>
						)}
					</For>
				</ul>
			</Suspense>
		</main>
	)
}
