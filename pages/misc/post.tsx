import { BlitzPage } from "@blitzjs/next"
import CluckHUD from "app/core/components/CluckHUD"
import MetaBundle from "app/core/components/MetaBundle"

import React from "react"
import { withRouter } from "next/router"

import styles from "styles/post.module.sass"
import theme from "styles/sys/chud.module.sass"
import Link from "next/link"

import Create from "app/core/components/Create"

const Post: BlitzPage = ({ router }: { router: any }) => {
	const {
		query: { t },
	} = router

	const isTabOne = t === "1" || t == null
	const isTabTwo = t === "2"
	const isTabThree = t === "3"

	return (
		<div className={styles.app}>
			<MetaBundle title="Post Submission" />
			<CluckHUD theme={theme.Moon} />
			<div className={styles.main}>
				<div className={styles.tabrow}>

					<div className={styles.tab}>
						<Link href={{ pathname: "/misc/post", query: { t: "1" } }}>
							<a style={{background: isTabOne ? "#444a73" : "#2f334d"}}><p>Create</p></a>
						</Link>
					</div>

					<div className={styles.tab}>
					<Link href={{ pathname: "/misc/post", query: { t: "2" } }}>
						<a style={{background: isTabTwo ? "#444a73" : "#2f334d"}}><p>Edit</p></a>
					</Link>
					</div>

					<div className={styles.tab}>
					<Link href={{ pathname: "/misc/post", query: { t: "3" } }}>
						<a style={{background: isTabThree ? "#444a73" : "#2f334d"}}><p>Preview</p></a>
					</Link>
					</div>

				</div>
				<div className={styles.container}>
					{isTabOne && <Create />}
					{isTabTwo && <h1>Coming Soon</h1>}
					{isTabThree && <h1>Coming Soon</h1>}
				</div>
			</div>
			<div />
		</div>
	)
}

export default withRouter(Post)
