import { BlitzPage } from "@blitzjs/next"
import App from "src/core/layouts/App"

import Create from "src/posts/components/Create"
import Edit from "src/posts/components/Edit"
import Link from "next/link"
import { useRouter } from "next/router"

import React from "react"

import styles from "styles/post.module.sass"

const Submit: BlitzPage = () => {

	const router = useRouter()

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
							<Link href={{ pathname: "./submit", query: { t: "create" } }}>
								<a style={{ background: isTabOne ? "#444a73" : "#2f334d" }}>
									<p>Create</p>
								</a>
							</Link>
						</div>

						<div className={styles.tab}>
							<Link href={{ pathname: "./submit", query: { t: "edit" } }}>
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
		</App>
	)
}

Submit.authenticate = { role: "ADMIN", redirectTo: "/auth/login" }
export default 	Submit
