import { z } from "zod"

export const Post = z.object({
	id: z.number(),
	name: z.string(),
	type: z.string(),
	format: z.string(),
	content: z.string()
})
export const newPostVal = z.object({
	name: z.string(),
	type: z.string(),
	format: z.string(),
	content: z.string()
})

export const updatePostVal = z.object({
	id: z.number(),
	name: z.string(),
	type: z.string(),
	format: z.string(),
	content: z.string()
})
