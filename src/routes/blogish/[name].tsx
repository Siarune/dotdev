import { For, Suspense } from "solid-js"
import { SolidMarkdown } from "solid-markdown"
import { createAsync, useParams } from "@solidjs/router"
import { getSinglePost } from "~/db/Post"

// export const route = {
// 	load: () => getPost(useParams()),
// }

export default function Post() {
	const Post = createAsync(() => getSinglePost(useParams()))
	return (
		<main class="main justify-center">
			<Suspense fallback={<></>}>
				<For each={Post()}>
					{(post) => (
						<>
							<title>{post.name}</title>
							<h2 class="text-2xl">{post.name}</h2>

							<SolidMarkdown class="m4 text-xl">
								{post.content}
							</SolidMarkdown>

							<p class="opacity-60 text-lg">
								Posted: {post.creationDate!.toLocaleString()}
							</p>
						</>
					)}
				</For>
			</Suspense>
		</main>
	)
}
