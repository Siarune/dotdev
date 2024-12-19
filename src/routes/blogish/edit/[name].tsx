import { createAsync, useParams } from "@solidjs/router"
import { For } from "solid-js"
import { getSinglePost, updatePost } from "~/db/Post"

export default function Edit() {
	const Post = createAsync(() => getSinglePost(useParams()))

	return (
		<main class="main">
			<For each={Post()}>
				{(post) => (
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
				)}
			</For>
		</main>
	)
}
