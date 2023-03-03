import { resolver } from "@blitzjs/rpc"
import db from "db"
import { UpdatePost } from "../validations"

export default resolver.pipe(
	resolver.zod(UpdatePost),
	resolver.authorize(),
	async ( { id, ...data } ) => {
		//in multi-tenant app, you must add validation to ensure correct tenant
		return await db.post.update({ where: { id }, data })
	}
)
