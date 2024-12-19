import { A, query, createAsync } from "@solidjs/router"
import db, { posts } from "~/db"
import { desc } from "drizzle-orm"
import { For, Suspense } from "solid-js"

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

export const route = {
	load: () => getPosts(),
}

export default function EditIndex() {
	const Posts = createAsync(() => getPosts())
	return (
		<main class="main">
			<title>Edit a Post</title>
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
