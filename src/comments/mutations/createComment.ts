import { resolver } from "@blitzjs/rpc"
import db from "db"
import { CreateComment } from "../validations"


export default resolver.pipe(
  resolver.zod(CreateComment),
  resolver.authorize(),
  async (input) => {
	  // @ts-ignore
	  return await db.comment.create({ data: input })
  },
)
