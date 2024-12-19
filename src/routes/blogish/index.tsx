import { Suspense } from "solid-js"
import { createAsync } from "@solidjs/router"
import { getManyPosts } from "~/db/Post"
import PostList from "~/components/PostList"

// export const route = {
// 	load: () => getManyPosts()
// }

export default function Blogish() {
	const Posts = createAsync(() => getManyPosts())
	return (
		<main class="main">
			<title>Blog-ish</title>
			<h1 class="mt5rem mb text-5xl">Blog-ish</h1>
			<h2 class="text-4xl text-center">A blog, but for everything!</h2>

			<Suspense>
				<PostList from={Posts()!} />
			</Suspense>
		</main>
	)
}
