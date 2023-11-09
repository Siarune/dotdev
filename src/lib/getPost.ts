import { post } from "~/db/schema"
import db from "~/db"
import { eq } from "drizzle-orm"
import { createServerData$ } from "solid-start/server"

export default async function getPost(query: string) {
	// return db.query.post.findMany() //.findMany({ where: eq(post.name, query)})
//.findMany({ where: eq(post.name, query)})
// 	const q = query

	return db
		.select({
			id: post.id,
			name: post.name,
			content: post.content,
		})
		.from(post)
		.where(eq(post.name, query.replaceAll("%20", " ")))
	// return createServerData$(() =>
	// // db.select().from(post)
	//
	// 	db.query.post.findMany({
	// 		where: eq(post.name, query)
	// 	})
	// )
}
