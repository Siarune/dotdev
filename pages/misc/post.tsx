import { BlitzPage } from "@blitzjs/next"
import CluckHUD from "app/core/components/CluckHUD"

import Create from "app/core/components/Create"
import Edit from "app/core/components/Edit"
import MetaBundle from "app/core/components/MetaBundle"
import Link from "next/link"
import { withRouter } from "next/router"

import React from "react"

import styles from "styles/post.module.sass"
import theme from "styles/sys/chud.module.sass"

const Post: BlitzPage = ( { router }: { router: any } ) => {
	const {
		query: { t },
	} = router

	const isTabOne = t === "1" || t == null
	const isTabTwo = t === "2"
	const isTabThree = t === "3"

	return (
		<div className={styles.app}>
			<MetaBundle title="Post Submission"/>
			<CluckHUD theme={theme.Moon}/>
			<div className={styles.main}>
				<div className={styles.tabrow}>
					<div className={styles.tab}>
						<Link href={{ pathname: "/misc/post", query: { t: "1" } }}>
							<a style={{ background: isTabOne ? "#444a73" : "#2f334d" }}>
								<p>Create</p>
							</a>
						</Link>
					</div>

					<div className={styles.tab}>
						<Link href={{ pathname: "/misc/post", query: { t: "2" } }}>
							<a style={{ background: isTabTwo ? "#444a73" : "#2f334d" }}>
								<p>Edit</p>
							</a>
						</Link>
					</div>

				</div>
				<div className={styles.container}>
					{isTabOne && <Create/>}
					{isTabTwo && <Edit/>}
				</div>
			</div>
			<div/>
		</div>
	)
}

Post.authenticate = true
export default withRouter(Post)
