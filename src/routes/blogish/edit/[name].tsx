import { action, cache, createAsync, useParams } from "@solidjs/router";
import db, { post } from "~/db";
import { eq } from "drizzle-orm";

const getPost = cache(async (params) => {
	"use server";
	const query = params.name?.replaceAll("_", " ")
	return db
		.select({
			id: post.id,
			name: post.name,
			content: post.content,
			isPublic: post.isPublic,
			creationDate: post.createdAt
		})
		.from(post)
		.where(eq(post.name, query))
}, "post")

const updatePost = action(async (formData: FormData) => {
	"use server";

	const postId = Number(formData.get("id"))
	const postData = {
		name: formData.get("name")?.toString(),
		content: formData.get("content")?.toString(),
		isPublic: formData.get("isPublic") == "on"
	}

	console.log("Updating post with data:")
	console.log(postData)

	await new Promise((resolve, reject) => {
		if (!postData) reject("No input data")
		db.update(post)
			.set(postData)
			.where(eq(post.id, postId))
			.then(resolve)
		reject("Unknown db error")
	})
})

export const route = {
	load: () => getPost(useParams())
}

export default function Edit() {
	const Post = createAsync(() => getPost(useParams()))

	return (
		<main class="main">
			{Post() && Post()!.map(post =>
				<form action={updatePost} method="post"
					  class="w50vw mt5vh flex flex-col">
					<div class="flex flex-row justify-between w-full mb">
						<input type="text" name="name" required value={post.name}
							   class="bg-fgd text-2xl w50% p1 rounded"
						/>
						<input required hidden type="text" name="id" value={post.id} />
						<div class="h-full">
							{/*@ts-ignore*/}
							<input type="checkbox" name="publicity" checked={post?.isPublic} class="mr "/>
							<input type="submit" value="➔" class="pb1 rounded-10 text-4xl cursor-pointer"/>
						</div>
					</div>

					<textarea name="content" required
							  class="bg-fgd text-xl p1 h30vh rounded">
					{post.content}
				</textarea>

					<title>{"Edit: " + post.name}</title>
				</form>
			)}
		</main>
	)
}
