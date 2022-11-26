import { BlitzPage } from "@blitzjs/next"
import CluckHUD from "app/core/components/CluckHUD"
import MetaBundle from "app/core/components/MetaBundle"
import Link from "next/link"

import styles from "styles/directory.module.sass"
import theme from "styles/sys/chud.module.sass"

const Other: BlitzPage = () => {
	return (
		<div className={styles.app}>
			<CluckHUD theme={theme.Moon}/>
			<MetaBundle title="Random Stuff"/>
			<div className={styles.main}>
				<h1>The Random Stuff</h1>
				<ul className={styles.feed}>
					<li className={styles.listItem}>
						<Link href="misc/poetry">
							<a>Poetry(?)</a>
						</Link>
					</li>

					<li className={styles.listItem}>
						<Link href="misc/apps">
							<a>Apps</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Other
