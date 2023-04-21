import { resolver } from "@blitzjs/rpc"
import { NotFoundError } from "blitz"
import db from "db"
import { GetPost } from "src/posts/validations"

export default resolver.pipe(
	resolver.zod(GetPost),
	async ( { id } ) => {

		//Only returns object if the post is public
		//Avoids peeking into posts not explicitly released
		const post = await db.post.findFirst({ where: { id, isPublic: true } })

		if (!post) {
			throw new NotFoundError()
		}

		return post
	})
