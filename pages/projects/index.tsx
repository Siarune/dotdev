import { BlitzPage } from "@blitzjs/next"
import styles from "styles/directory.module.sass"
import MetaBundle from "app/core/components/MetaBundle"
import CluckHUD from "app/core/components/CluckHUD"

import theme from "styles/sys/chud.module.sass"

import { useQuery } from "@blitzjs/rpc"
import { Suspense } from "react"
import getPosts from "app/posts/queries/getPosts"
import Link from "next/link"

const Projects: BlitzPage = () => {
	return (
		<div className={styles.app}>
			<MetaBundle title="Projects" />
			<CluckHUD theme={theme.Moon} />
			<h1>Projects</h1>
			<Suspense fallback={<div>Loading...</div>}>
				<Feed />
			</Suspense>
		</div>
	)
}

function Feed() {
	const [posts] = useQuery(getPosts, { where: { type: "project" } })

	return (
		<ul className={styles.feed}>
			{posts.posts.map(({ id, name }) => (
				<Link key={id} href={{ pathname: "projects/project", query: { p: name } }}>
					<li className={styles.listItem}>
						<a>{name}</a>
					</li>
				</Link>
			))}
		</ul>
	)
}

export default Projects
