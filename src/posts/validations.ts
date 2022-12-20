import { z } from "zod"

export const Post = z.object({
	id: z.number(),
	type: z.string(),
	name: z.string(),
	content: z.string()
})
