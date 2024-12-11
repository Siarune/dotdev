import { action, createAsync, query, useParams } from "@solidjs/router"
import db, { posts } from "~/db"
import { eq } from "drizzle-orm"

const getPost = query(async (params) => {
	"use server"
	const query = params.name?.replaceAll("_", " ")
	return db
		.select({
			id: posts.id,
			name: posts.name,
			content: posts.content,
		})
		.from(posts)
		.where(eq(posts.name, query))
}, "post")

const updatePost = action(async (formData: FormData) => {
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

// export const route = {
// 	load: () => getPost(useParams()),
// }

export default function Edit() {
	const Post = createAsync(() => getPost(useParams()))

	return (
		<main class="main">
			{Post() &&
				Post()!.map((post) => (
					<form
						action={updatePost}
						method="post"
						class="w90vw sm:w50vw mt5vh flex flex-col"
					>
						<div class="flex flex-row justify-between w-full mb">
							<input
								type="text"
								name="name"
								required
								value={post.name}
								class="bg-fgd text-2xl w50% p1 rounded"
							/>
							<input
								required
								hidden
								type="text"
								name="id"
								value={post.id}
							/>
							<div class="h-full">
								<input
									type="submit"
									value="➔"
									class="pb1 rounded-10 text-4xl cursor-pointer"
								/>
							</div>
						</div>

						<textarea
							name="content"
							required
							class="bg-fgd text-xl p1 h85vh sm:h70vh rounded"
						>
							{post.content}
						</textarea>

						<title>{"Editing: " + post.name}</title>
					</form>
				))}
		</main>
	)
}
