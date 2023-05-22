import { BlitzPage } from "@blitzjs/next"
import App from "src/core/layouts/App"

import Create from "src/posts/components/Create"
import Edit from "src/posts/components/Edit"
import Link from "next/link"
import { useRouter } from "next/router"

import React from "react"

import styles from "src/styles/studio.module.sass"

const Studio: BlitzPage = () => {

	const router = useRouter()

	const {
		query: { t }
	} = router

	const isTabOne = t === "New"
	const isTabTwo = t === "Edit"
	const tab = t || ""

	return (<App title={"Studio: " + tab}>
			<div className={styles.app}>
				<div className={styles.main}>
					<div className={styles.tabrow}>
							<Link
								href={{ pathname: "./studio", query: { t: "New" } }}
								className={styles.tab}
								style={{ background: isTabOne ? "#444a73" : "#2f334d" }}
							>
								Create
							</Link>

							<Link
								href={{ pathname: "./studio", query: { t: "Edit" } }}
								className={styles.tab}
								style={{ background: isTabTwo ? "#444a73" : "#2f334d" }}
							>
								Edit
							</Link>

					</div>
					<div className={styles.container}>
						{isTabOne && <Create />}
						{isTabTwo && <Edit />}
					</div>
				</div>
				<div />
			</div>
		</App>)
}

Studio.authenticate = { role: "ADMIN", redirectTo: "/auth/login" }
export default Studio
