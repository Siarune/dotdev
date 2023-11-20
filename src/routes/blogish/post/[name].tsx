import { RouteDataFuncArgs, useRouteData } from "solid-start"
import { For, Suspense } from "solid-js"
import db, { post } from "~/db"
import { eq } from "drizzle-orm"
import { SolidMarkdown } from "solid-markdown"
import { createServerData$ } from "solid-start/server/server";

export const routeData = ({ params }: RouteDataFuncArgs) => {
	// const query = params.name.replaceAll("%20", " ")

	return createServerData$(
		async (name: string) =>
			db
				.select({
					name: post.name,
					content: post.content,
				})
				.from(post)
				.where(eq(post.isPublic, true))
				.where(eq(post.name, name))

		// {
		// 	key: () => query,
		// }
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

							<SolidMarkdown children={posts.content}/>
						</div>
					)}
				</For>
			</Suspense>
		</main>
	)
}
