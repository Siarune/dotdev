import { BlitzPage } from "@blitzjs/next"
import CluckHUD from "app/core/components/CluckHUD"
import MetaBundle from "app/core/components/MetaBundle"
import Link from "next/link"

import styles from "styles/projects.module.sass"
import theme from "styles/sys/chud.module.sass"
import { GetStaticProps } from "next"
import { getSortedProjectsData } from "lib/projects"

export default function Projects({
	allPostsData,
}: {
	allPostsData: {
		date: string
		title: string
		description: string
		id: string
	}[]
}) {
	return (
		<div className={styles.app}>
			<CluckHUD theme={theme.Moon} />
			<MetaBundle title="Projects" />
			<div className={styles.heading}>
				<h1>My Projects</h1>
				{/* <h2>Ramblings from yours truly</h2> */}
			</div>
			<div className={styles.main}>
				<ul className={styles.wrap}>
					{allPostsData.map(({ id, title }) => (
						<li className={styles.listItem} key={id}>
								<Link href={`/projects/${id}`}>
									<a className={styles.link}>{title}</a>
								</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getSortedProjectsData()
	return {
		props: {
			allPostsData,
		},
	}
}
