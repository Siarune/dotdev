import { resolver } from "@blitzjs/rpc"
import db from "db"
import { DeletePost } from "../validations"


export default resolver.pipe(
	resolver.zod(DeletePost),
	resolver.authorize(),
	async ({ id }) => {
	return await db.post.deleteMany({ where: { id } })
})
