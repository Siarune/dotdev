import {z} from "zod"

export const CreateComment = z.object({
	author: z.string(),
	userId: z.number(),
	postId: z.number(),
	content: z.string().max(500, "Too Long")
})

export const UpdateComment = z.object({
		id: z.number(),
		content: z.string()
})

export const DeleteComment = z.object({
	id: z.number(),
});
