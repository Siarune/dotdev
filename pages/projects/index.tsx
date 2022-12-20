import { BlitzPage } from "@blitzjs/next"
import { useQuery } from "@blitzjs/rpc"
import App from "src/core/layouts/App"
import getPosts from "src/posts/queries/getPosts"
import Link from "next/link"
import { Suspense } from "react"
import styles from "styles/directory.module.sass"

const Projects: BlitzPage = () => {
	return (
		<App title={"Projects"} theme={"Moon"}>
			<div className={styles.app}>
				<h1>Projects</h1>
				<Suspense fallback={<div>Loading...</div>}>
					<Feed/>
				</Suspense>
			</div>
		</App>
	)
}

function Feed() {
	const [posts] = useQuery(getPosts, { where: { type: "project" } })

	// @ts-ignore
	return (
		<ul className={styles.feed}>
			{posts.posts.map(( { id, name } ) => (
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
