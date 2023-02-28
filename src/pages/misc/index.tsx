import { BlitzPage } from "@blitzjs/next"
import App from "src/core/layouts/App"
import Link from "next/link"
import styles from "src/styles/directory.module.sass"

const Other: BlitzPage = () => {
	return (
		<App title={"The Junkyard"} theme={"Moon"}>
			<div className={styles.app}>
				<div className={styles.main}>
					<h1>The Random Stuff</h1>
					<ul className={styles.feed}>

						<li className={styles.listItem}>
							<Link href="misc/apps">
								Apps
							</Link>
						</li>

					</ul>
				</div>
			</div>
		</App>
	)
}

export default Other
