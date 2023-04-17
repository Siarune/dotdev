import { BlitzPage } from "@blitzjs/next"
import Link from "next/link"
import App from "src/core/layouts/App"
import { useSession } from "@blitzjs/auth"
import styles from "styles/index.module.sass"

const Home: BlitzPage = () => {
	return (
		<App theme={"Moon"}>
			<div className={styles.container}>
				<div />
				<div className={styles.main}>
					<div className={styles.bio}>
						<h1>About Me</h1>
						<p>
							Hey, Sia here. Nice place, huh?
							<br />
							It&apos;s taken quite a few redesigns, and this certainly won&apos;t be the
							last :D
							<br />
							I&apos;m just a computer science student with a little too much free time.
							<br />
							Why don&apos;t you check out the place while you&apos;re here?
							<br />
							You can also take a look at my{" "}
							<a href="https://siarune.me/" target="_blank" rel="noopener noreferrer">
								old website
							</a>
							, or behind the scenes at{" "}
							<a href="https://github.com/Siarune" target="_blank"
							   rel="noopener noreferrer">
								Github
							</a>
						</p>
					</div>

					<div className={styles.feed}>

						<Link href={"blogish"}>
							<div className={styles.card}>
								<h2>
									Blog-ish
								</h2>
								<h4>Ramblings from yours truly</h4>
							</div>
						</Link>

						<AdminCard />


					</div>
				</div>

				<div />

			</div>
		</App>
	)
}

const AdminCard = () => {
	const session = useSession()
	if (session.role === "ADMIN") {
		return (
			<Link href={"blogish/studio"}>
				<div className={styles.card}>
					<h2>
						Studio
					</h2>
					<h4>Create and manage posts</h4>
					<h4>Admin Only</h4>
				</div>
			</Link>
		)
	} else {
		return <></>
	}
}

export default Home
