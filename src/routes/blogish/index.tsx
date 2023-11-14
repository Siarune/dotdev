import {For, Suspense} from "solid-js"
import {A, useRouteData} from "solid-start"
import {createServerData$} from "solid-start/server/server"
import db, {post} from "~/db"
import {desc, eq} from "drizzle-orm"

// Yes, the export is necessary
export function routeData() {
	return createServerData$(() =>
		db
			.select({
				id: post.id,
				name: post.name,
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
			<Suspense>
				<ul class="w50vw h-full mt20vh p0 list-none text-center">
					<For each={Post()}>
						{(post) => (
							<A class="decoration-none m0" href={`./post/${post.name}`}>
								<li class="p8 text-xl text-center hover:bg-stone animate-duration-100 transition-500">
									{ post.name }
								</li>
							</A>
						)}
					</For>
				</ul>
			</Suspense>
		</main>
	)
}
