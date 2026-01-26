import { A } from "@solidjs/router"

export default function Posts() {
	return (
		<main class="main">
			<title>Blog-ish</title>
			<h1 class="mt5rem mb text-5xl">Blog-ish</h1>
			<h2 class="text-4xl text-center">A blog, but for everything!</h2>

			<ul class="md:max-w-33vw max-h-fit mt5vh p0 list-none text-center">

				<A href="./a" class="decoration-none m0 color-txt">
					<li class="p8 text-3xl text-center hover:bg-fgd transition-1000">
						A
					</li>
				</A>
				<A href="./b" class="decoration-none m0 color-txt">
					<li class="p8 text-3xl text-center hover:bg-fgd transition-1000">
						B
					</li>
				</A>
				<A href="./c" class="decoration-none m0 color-txt">
					<li class="p8 text-3xl text-center hover:bg-fgd transition-1000">
						C
					</li>
				</A>
			</ul>
		</main>
	)
}
