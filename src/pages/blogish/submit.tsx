import { BlitzPage } from "@blitzjs/next"
import App from "src/core/layouts/App"

import Create from "src/posts/components/Create"
import Edit from "src/posts/components/Edit"
import Link from "next/link"
import { withRouter } from "next/router"

import React from "react"
import { Suspense } from "react"

import styles from "src/styles/post.module.sass"

const Submit: BlitzPage = ({ router }: { router: any } ) => {
	const {
		query: { t },
	} = router

	const isTabOne = t === "create" || t == null
	const isTabTwo = t === "edit"

	return (
		<App title={"Submit Submission"}>
			<div className={styles.app}>
				<div className={styles.main}>
					<div className={styles.tabrow}>
						<div className={styles.tab}>
							<Link
                href={{ pathname: "./submit", query: { t: "create" } }}
                style={{ background: isTabOne ? "#444a73" : "#2f334d" }}
              >
									<p>Create</p>
							</Link>
						</div>

						<div className={styles.tab}>
							<Link
                href={{ pathname: "./submit", query: { t: "edit" } }}
                style={{ background: isTabTwo ? "#444a73" : "#2f334d" }}
              >
									<p>Edit</p>
							</Link>
						</div>

					</div>
					<div className={styles.container}>
						<Suspense>
							{isTabOne && <Create/>}
						</Suspense>
						<Suspense>
							{isTabTwo && <Edit/>}
						</Suspense>
					</div>
				</div>
				<div/>
			</div>
		</App>
	)
}

Submit.authenticate = { role: "ADMIN", redirectTo: "/auth/login" }
export default withRouter(Submit)
