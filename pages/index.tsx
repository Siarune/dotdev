import { BlitzPage } from "@blitzjs/next"
import CluckHUD from "app/core/components/CluckHUD"
import MetaBundle from "app/core/components/MetaBundle"
import Link from "next/link"

import styles from "styles/index.module.sass"
import theme from "styles/sys/chud.module.sass"

const Home: BlitzPage = () => {
	return (
		<div className={styles.app}>
			<MetaBundle title="siarune.dev" />
			<CluckHUD theme={theme.Moon} />
			<div className={styles.main}>
				<div className={styles.bio}>
					<h2>About Me</h2>
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
						, or where it all started on{" "}
						<a
							href="https://github.com/Siarune"
							target="_blank"
							rel="noopener noreferrer"
						>
							Github
						</a>
					</p>
				</div>

				<div className={styles.feed}>
					<div className={styles.card}>
						<h2>
							<Link href="/projects/">
								<a>Projects</a>
							</Link>
						</h2>
						<h4>What I do in my free time</h4>
					</div>

					<div className={styles.card}>
						<h2>
							<Link href="blogish">
								<a>Blog-ish</a>
							</Link>
						</h2>
						<h4>Ramblings from yours truly</h4>
					</div>

					<div className={styles.card}>
						<h2>
							<Link href="blogish">
								<a>Other Wacky Works</a>
							</Link>
						</h2>
						<h4>I didn&apos;t have anywhere else to put these</h4>
					</div>
				</div>
			</div>
		<div />
		</div>
	)
}

export default Home
