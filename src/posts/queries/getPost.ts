import { resolver } from "@blitzjs/rpc"
import { NotFoundError } from "blitz"
import db from "db"
import { GetPost } from "../validations"


export default resolver.pipe(
	resolver.zod(GetPost),
	// resolver.authorize(),
	async ( { id } ) => {

	const post = await db.post.findFirst({ where: { id } })

	if (!post) {
		throw new NotFoundError()
	}

	return post
})
