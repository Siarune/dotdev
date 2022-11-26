import { resolver } from "@blitzjs/rpc"
import db from "app/db"
import { z } from "zod"

const CreatePost = z.object({
	type: z.string(),
	name: z.string(),
	content: z.string(),
})

export default resolver.pipe(resolver.zod(CreatePost), resolver.authorize(), async ( input ) => {
	// TODO: in multi-tenant app, you must add validation to ensure correct tenant
	const post = await db.post.create({ data: input })

	return post
})
