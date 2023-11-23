import { eq } from "drizzle-orm"
import { For, Suspense } from "solid-js"
import { SolidMarkdown } from "solid-markdown"
import { RouteDataFuncArgs, Title, useRouteData } from "solid-start"
import { createServerData$ } from "solid-start/server"
import db, { post } from "~/db"

export const routeData = ({ params }: RouteDataFuncArgs) => {
	const query = params.name.replaceAll("_", " ")

	return createServerData$(
		async ([, query]) => {
			return db
				.select({
					name: post.name,
					content: post.content,
					creationDate: post.createdAt,
				})
				.from(post)
				.where(eq(post.isPublic, true))
				// @ts-ignore
				.where(eq(post.name, query))
		},

		{
			key: () => ["name", query]
		}
	)
}

export default function Post() {
	const Post = useRouteData<typeof routeData>()

	return (
		<main class="main justify-center">
			<Suspense fallback={<></>}>
				<For each={Post()}>
					{(posts) => (
						<div>
							<Title>{posts.name}</Title>
							<h2>{posts.name}</h2>

							<SolidMarkdown children={posts.content} />
							<p class="opacity-60">
								Posted: {posts.creationDate.toLocaleString()}
							</p>
						</div>
					)}
				</For>
			</Suspense>
		</main>
	)
}
