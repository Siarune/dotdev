import { For, Suspense } from "solid-js"
import { posts } from "~/data/posts"
import { A } from "@solidjs/router"

export default function Blog() {
	return (
		<main class="main">
			<title>Blog-ish</title>
			<h1 class="mt5rem mb text-5xl">Blog-ish</h1>
			<h2 class="text-4xl text-center">A blog, but for everything!</h2>

			<Suspense>
				<ul class="md:max-w-33vw max-h-fit mt5vh p0 list-none text-center">
					<For each={posts}>
						{(post) => (
							<A
								class="decoration-none m0 color-txt"
								href={post.slug}
							>
								<li class="p8 text-3xl text-center hover:bg-fgd transition-1000">
									{post.title}
								</li>
							</A>
						)}
					</For>
				</ul>
			</Suspense>
		</main>
	)
}
