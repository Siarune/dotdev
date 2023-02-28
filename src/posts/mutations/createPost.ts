import { resolver } from "@blitzjs/rpc"
import db from "db"
import { newPostVal } from "src/posts/validations"

export default resolver.pipe(
  resolver.zod(newPostVal),
  resolver.authorize(),
  async (input) => {
    //in multi-tenant app, you must add validation to ensure correct tenant
    return await db.post.create({ data: input });
  }
);
