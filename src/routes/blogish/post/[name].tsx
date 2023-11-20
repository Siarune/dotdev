import { eq } from "drizzle-orm"
import { For, Suspense } from "solid-js"
import { SolidMarkdown } from "solid-markdown"
import { RouteDataFuncArgs, useRouteData } from "solid-start"
import { createServerData$ } from "solid-start/server"
import db, { post } from "~/db"

export const routeData = ({ params }: RouteDataFuncArgs) => {
	const query = params.name.replaceAll("%20", " ")

	return createServerData$(
		async ([, query], { request }) => {
			return db
				.select({
					name: post.name,
					content: post.content
				})
				.from(post)
				.where(eq(post.isPublic, true))
				.where(eq(post.name, query))
		},

		{
			key: () => ["name", query]
		}
	)
}

export default function Post() {
	const Post = useRouteData<typeof routeData>()
	// console.log(Post)

	return (
		<main>
			<Suspense fallback={<></>}>
				<For each={Post()}>
					{(posts) => (
						<div>
							<h2>{posts.name}</h2>

							<SolidMarkdown children={posts.content} />
						</div>
					)}
				</For>
			</Suspense>
		</main>
	)
}
