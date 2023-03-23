import { z } from "zod"

export const CreatePost = z.object({
	type: z.string(),
	format: z.string(),
	name: z.string(),
	content: z.string(),
	isPublic: z.boolean()
})

export const UpdatePost = z.object({
	id: z.number(),
	type: z.string(),
	format: z.string(),
	name: z.string(),
	content: z.string(),
	isPublic: z.boolean()
})

export const DeletePost = z.object({
	id: z.number()
})

export const GetPost = z.object({
	id: z.number()
})
