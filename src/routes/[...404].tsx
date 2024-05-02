import { A } from "@solidjs/router";

export default function NotFound() {
	return (
		<main class="main justify-center">
			<h1 class="text-5xl m1">Page Not Found</h1>
			<A href="/" class="text-3xl decoration-underline decoration-dashed">[Home]</A>
		</main>
	)
}
