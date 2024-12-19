import { action, query } from "@solidjs/router"
import { desc } from "drizzle-orm"
import db, { posts } from "."
import { eq } from "drizzle-orm"

export const getSinglePost = query(async (params) => {
	"use server"
	const query = params.name?.replaceAll("_", " ")
	return db
		.select({
			id: posts.id,
			name: posts.name,
			content: posts.content,
			creationDate: posts.createdAt,
		})
		.from(posts)
		.where(eq(posts.name, query))
}, "post")

export const getManyPosts = query(async () => {
	"use server"
	return db
		.select({
			id: posts.id,
			name: posts.name,
		})
		.from(posts)
		.orderBy(desc(posts.id))
		.limit(50)
}, "posts")

export const createPost = action(async (formData: FormData) => {
	"use server"

	const postData = {
		name: formData.get("name")!.toString(),
		content: formData.get("content")!.toString(),
	}

	if (!postData) return Error
	return db.insert(posts).values(postData)
})

export const updatePost = action(async (formData: FormData) => {
	"use server"

	const postId = Number(formData.get("id"))
	const postData = {
		name: formData.get("name")?.toString(),
		content: formData.get("content")?.toString(),
	}

	console.log("Updating post with data:")
	console.log(postData)

	await new Promise((resolve, reject) => {
		if (!postData) reject("No input data")
		db.update(posts).set(postData).where(eq(posts.id, postId)).then(resolve)
		reject("Unknown db error")
	})
})
