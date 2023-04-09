import { resolver } from "@blitzjs/rpc"
import db from "db"
import { CreatePost } from "../validations"

export default resolver.pipe(
	resolver.zod(CreatePost),
	resolver.authorize(),
	async ( input ) => {
		// @ts-ignore
		return db.post.create({ data: input })
	})
