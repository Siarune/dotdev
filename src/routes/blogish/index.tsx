import { For, Suspense } from "solid-js"
import { A, useRouteData } from "solid-start"
import { createServerData$ } from "solid-start/server/server"
import db from "~/db"
import { post } from "~/db/schema"
import { desc } from "drizzle-orm"

// Yes, the export is necessary
export function routeData() {
	return createServerData$(() =>
		db.select({
				id: post.id,
				name: post.name
			})
			.from(post)
			.orderBy(desc(post.id))
			.limit(500)
	)
}

export default function Blogish() {

	const Posts = useRouteData<typeof routeData>()

	return (
		<main class={"main"}>
			<Suspense>
				<>
					<For each={Posts()}>
						{(post) =>
							<A href={`./post/${post.name}`}>
								{post.name}
							</A>
						}
					</For>
				</>
			</Suspense>
		</main>
	)
}
