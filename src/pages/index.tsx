import { BlitzPage } from "@blitzjs/next"
import Link from "next/link"
import App from "src/core/layouts/App"

import styles from "src/styles/index.module.sass"

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
							It&apos;s taken quite a few redesigns, and this certainly won&apos;t be
							the last :D
							<br />
							I&apos;m just a computer science student with a little too much free
							time.
							<br />
							Why don&apos;t you check out the place while you&apos;re here?
							<br />
							You can also take a look at my{" "}
							<Link
								href="https://siarune.me/"
								target="_blank"
								rel="noopener noreferrer"
							>
								old website
							</Link>
							, or behind the scenes at{" "}
							<Link
								href="https://sr.ht/~siarune/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Sourcehut
							</Link>
						</p>
					</div>

					<div className={styles.feed}>

						<Link href={"blogish"}>
							<div className={styles.card}>
								<h2>Blog-ish</h2>
								<h4>Ramblings from yours truly</h4>
							</div>
						</Link>

						<Link href={"misc"}>
							<div className={styles.card}>
								<div className={styles.cardContent}>
									<h2>Other Wacky Works</h2>
									<h4>¯\_(ツ)_/¯</h4>
								</div>
							</div>
						</Link>
					</div>
				</div>

				<div />
			</div>
		</App>
	)
}

export default Home
