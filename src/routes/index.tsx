import { A } from "solid-start"

export default function Home() {
	return (
		<main class="main">

			{/*Centered content wrapper*/}
			<div class="flex flex-col sm:flex-row
			min-h-40vh sm:w-75vw w-95vw
			items-center justify-center">

				<div class={"banner m1em text-lg"}>
					<h1>About</h1>
					<p>
						Hey, Sia here. Nice place, huh?
						<br/>
						It&apos;s taken quite a few redesigns, and this certainly won&apos;t be the
						last :D
						<br/>
						I&apos;m just a computer science student with a little too much free time.
						<br/>
						Why don&apos;t you check out the place while you&apos;re here?
						<br/>
						You can also take a look at my{" "}
						<A href="https://siarune.me/">
							old website
						</A>
						, or behind the scenes at{" "}
						<A href="https://github.com/Siarune">
							Github
						</A>
					</p>
				</div>

				<div class="flex flex-col gap-lg items-center items-start h-full justify-start pt2em">

					<A class={"decoration-none m0"} href={"/blogish"}>
						<div class={"card"}>
							<h2 class={"m0"}>Blogish</h2>
							<h4 class={"m0 opacity-60"}>Ramblings from yours truly</h4>
						</div>
					</A>
					{/*<A class={"decoration-none m0"} href={""}>*/}
					{/*	<div class={"card"}>*/}
					{/*		<h2 class={"m0"}>Blogish</h2>*/}
					{/*		<h4 class={"m0 opacity-60"}>Ramblings from yours truly</h4>*/}
					{/*	</div>*/}
					{/*</A>*/}
					{/*<A class={"decoration-none m0"} href={""}>*/}
					{/*	<div class={"card"}>*/}
					{/*		<h2 class={"m0"}>Blogish</h2>*/}
					{/*		<h4 class={"m0 opacity-60"}>Ramblings from yours truly</h4>*/}
					{/*	</div>*/}
					{/*</A>*/}


				</div>
			</div>
		</main>
	)
}
