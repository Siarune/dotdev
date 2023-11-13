import { RouteDataFuncArgs, useRouteData } from "solid-start"
import { For, Suspense } from "solid-js"
import db from "~/db"
import { post } from "~/db/schema"
import { eq } from "drizzle-orm"
import { createRouteData } from "solid-start"
import { SolidMarkdown } from "solid-markdown"

export function routeData({ params }: RouteDataFuncArgs) {
	const query = params.name.replaceAll("%20", " ")

	return createRouteData(
		async () => {
			return db
				.select({
					name: post.name,
					content: post.content,
				})
				.from(post)
				.where(eq(post.name, query))
		},
		{
			key: () => query,
		}
	)
}

export default function Post() {
	const Post = useRouteData<typeof routeData>()

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
