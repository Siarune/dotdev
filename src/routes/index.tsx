import { A } from "@solidjs/router"

export default function Home() {
	return (
		<main class="main justify-center">
			<title>Siarune's place</title>
			<div class="color-txt text-xl md:max-w-50vw p4">
				<p class="mb">
					Hello, and welcome to my website!
					<br />
					My name's Aidan Sharp, but I usually go by <em>
						siarune
					</em>{" "}
					online.
					<br /> <br />
					There's not much to look at for now, but I'm working on it.
				</p>
				<div class="flex-row decoration-underline decoration-dashed">
					<A
						href="https://github.com/Siarune"
						class="m-1"
					>
						[github]
					</A>
					<A
						href="https://resume.rune.nz"
						target="_blank"
						class="m-1"
					>
						[resume]
					</A>
				</div>
			</div>
		</main>
	)
}
