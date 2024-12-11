import { A } from "@solidjs/router"

export default function Home() {
	return (
		<main class="main justify-center">
			<title>Siarune.dev</title>
			<div class="color-txt text-xl md:max-w-40vw p4">
				<p>
					Hello, and welcome to my website!
					<br />
					My name's Aidan Sharp, but I usually go by <em>siarune</em>.
					<br /> <br />
					There's not much to look at for now, but you can explore at
					your leisure.
				</p>
				<A
					class="decoration-underline decoration-dashed color-txt"
					href="/blogish"
				>
					[Blog-ish]
				</A>
			</div>
		</main>
	)
}
