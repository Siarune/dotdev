import { resolver } from "@blitzjs/rpc"
import { NotFoundError } from "blitz"
import db from "db"
import { GetPost } from "src/posts/validations"

export default resolver.pipe(
	resolver.zod(GetPost),
	async ( { id } ) => {

	const post = await db.post.findFirst({ where: { id } })

	if (!post) {
		throw new NotFoundError()
	}

	return post
})
