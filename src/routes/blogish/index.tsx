import { desc, eq } from "drizzle-orm"
import { For, Suspense } from "solid-js"
import { A, Head, Title, useRouteData } from "solid-start"
import { createServerData$ } from "solid-start/server/server"
import db, { post } from "~/db"

export function routeData() {
	return createServerData$(() =>
		db
			.select({
				id: post.id,
				name: post.name
			})
			.from(post)
			.where(eq(post.isPublic, true))
			.orderBy(desc(post.id))
			.limit(500)
	)
}

export default function Blogish() {
	const Post = useRouteData<typeof routeData>()

	return (
		<main class={"main"}>
			<Head>
				<Title>Blog-ish</Title>
			</Head>

			<h1 class="mt5rem">Blog-ish</h1>
			<h2>A blog, but for everything!</h2>

			<Suspense>
				<ul class="md:max-w-33vw max-h-fit mt5vh p0 list-none text-center">
					<For each={Post()}>
						{(post) => (
							<A class="decoration-none m0 color-txt" href={`./post/${post.name.replaceAll(" ", "_")}`}>
								<li class="p8 text-3xl text-center hover:bg-fgd transition-1000">
									{post.name}
								</li>
							</A>
						)}
					</For>
				</ul>
			</Suspense>
		</main>
	)
}
