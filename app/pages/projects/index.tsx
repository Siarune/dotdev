import { BlitzPage, Link } from "blitz"
import styles from "styles/projects.module.sass"
import theme from "styles/app.module.sass"
import navTheme from "styles/chud.module.sass"
import App from "app/core/components/App"

const Projects: BlitzPage = () => {
	return (
		<App theme={theme.OffWhite} navTheme={navTheme.OffWhite} title="Projects">
			<main className={styles.main}>
				<h1>Projects</h1>
				<div className={styles.projects}>
					<Link href={"projects/legacy"}>
						<div className={styles.project}>
							<h2>siarune.me</h2>
							<p>Where it all started</p>
						</div>
					</Link>

					<Link href={"/projects/maboibart"}>
						<div className={styles.project}>
							<h2>Bartholomew</h2>
							<p>A little Discord bot</p>
						</div>
					</Link>

					<Link href={"projects/ssp"}>
						<div className={styles.project}>
							<h2>siastartpage</h2>
							<p>Custom start page I use</p>
						</div>
					</Link>

					<Link href={"projects/urmom"}>
						<div className={styles.project}>
							<h2>urmom</h2>
							<p>Click and find out</p>
						</div>
					</Link>

					<Link href={"projects/sauce"}>
						<div className={styles.project}>
							<h2>siarune.dev</h2>
							<p>You are here!</p>
						</div>
					</Link>
				</div>
			</main>
		</App>
	)
}

export default Projects
