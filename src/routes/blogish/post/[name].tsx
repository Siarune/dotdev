import { useParams, useSearchParams } from "solid-start"
import { Resource, Suspense } from "solid-js"
import { createServerData$ } from "solid-start/server/server"
import db from "~/db"
import { post } from "~/db/schema"
import { eq } from "drizzle-orm"
import { useRouteData } from "@solidjs/router"

// export function routeData({ params }: RouteDataFuncArgs) {
// 	return createServerData$(() =>
// 		// db.select().from(post)
// 		db.query.post.findMany({
// 			where: eq(post.name, params.name)
// 		})
// 	)
// }

export function routeData() {
	// const [searchParams] = useSearchParams()
	const searchParams = useParams()

	return createServerData$(async (name) => {
		return await db.query.post.findMany()
			// @ts-ignore
			// .where(eq(post.name, name.replaceAll("%20", " ")))
	}, {
		key: () => searchParams.name
	})
}

export default function Post() {

	const Posts = useRouteData<() => Resource<any>>()
	const post = Posts()
	console.log(post)

	return (
		<main>
			<Suspense fallback={<></>}>
				<h2>{}</h2>

				{/*<p>*/}
				{/*	{post.content}*/}
				{/*</p>*/}
			</Suspense>
		</main>
	)
}
