import db, { post } from "~/db"
import { action } from "@solidjs/router";

export default function New() {

	const createPost = action(async (formData: FormData) => {
		"use server";

		const postData = {
			name: formData.get("name")?.toString(),
			content: formData.get("content")?.toString(),
			isPublic: formData.get("isPublic") == "on"
		}

		console.log("Creating new post with data:")
		console.log(postData)

		await new Promise((resolve, reject) => {
			if (!postData) reject("No input data")
			//@ts-ignore
			db.insert(post).values(postData)
				.then(resolve)
			reject("Unknown db error")
		})
	})

	return (<main class="main">
			<title>New Post</title>
			<form action={createPost} method="post" class="w90vw sm:w50vw mt5vh flex flex-col">
				<div class="flex flex-row justify-between w-full mb">
					<input required type="text" name="name" placeholder="Name" class="bg-fgd text-2xl w70% sm:w50% p1 rounded"/>
					<div class="h-full">
						<input checked type="checkbox" name="isPublic" class="mr "/>
						<input type="submit" value="➔" class="pb1 rounded-10 text-4xl cursor-pointer"/>
					</div>
				</div>

				<textarea required name="content" placeholder="Lorem ipsum dolor sit amet..."
						  class="bg-fgd text-xl p1 h85vh sm:h70vh rounded"/>

			</form>
		</main>)
}
