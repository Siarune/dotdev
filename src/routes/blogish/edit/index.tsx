import { createAsync } from "@solidjs/router"
import { Suspense } from "solid-js"
import PostList from "~/components/PostList"
import { getManyPosts } from "~/db/Post"

// export const route = {
// 	load: () => getPosts(),
// }

export default function EditIndex() {
	const Posts = createAsync(() => getManyPosts())
	return (
		<main class="main">
			<title>Edit a Post</title>
			<Suspense>
				<PostList from={Posts()!} />
			</Suspense>
		</main>
	)
}
