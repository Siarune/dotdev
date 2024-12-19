import { A } from "@solidjs/router"

export default function NotFound() {
	return (
		<main class="text-center mx-auto text-light-100 p-4">
			<h1 class="max-6-xs text-6xl font-thin uppercase my-16">
				Not Found
			</h1>
			<p class="mt-8">
				<A href="/">Go to home?</A>
			</p>
		</main>
	)
}
