import { A } from "@solidjs/router"
import { For } from "solid-js"

export default function PostList(props: {
	from: { id: number; name: string }[]
}) {
	return (
		<ul class="md:max-w-33vw max-h-fit mt5vh p0 list-none text-center">
			<For each={props.from}>
				{(posts) => (
					<A
						class="decoration-none m0 color-txt"
						href={`./${posts.name.replaceAll(" ", "_")}`}
					>
						<li class="p8 text-3xl text-center hover:bg-fgd transition-1000">
							{posts.name}
						</li>
					</A>
				)}
			</For>
		</ul>
	)
}
