import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const DeletePost = z.object({
  id: z.number(),
});

export default resolver.pipe(
  resolver.zod(DeletePost),
  resolver.authorize(),
  async ({ id }) => {
    //in multi-tenant app, you must add validation to ensure correct tenant
	  return await db.post.deleteMany({ where: { id } });
  }
);
