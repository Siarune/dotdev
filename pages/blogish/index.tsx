import { BlitzPage } from "@blitzjs/next"

import { useQuery } from "@blitzjs/rpc"
import App from "app/core/layouts/App"
import getPosts from "app/posts/queries/getPosts"
import Link from "next/link"
import { Suspense } from "react"
import styles from "styles/directory.module.sass"

const Blogish: BlitzPage = () => {
	return (
		<App title={"Blog-ish"} theme={"Moon"}>
			<div className={styles.app}>
				<h1>Blog Posts</h1>
				<Suspense fallback={<div>Loading...</div>}>
					<Feed/>
				</Suspense>
			</div>
		</App>
	)
}

function Feed() {
	const [posts] = useQuery(getPosts, { where: { type: "blogpost" } })

	// @ts-ignore
	return (
		<ul className={styles.feed}>
			{posts.posts.map(( { id, name } ) => (
				<Link key={id} href={{ pathname: "blogish/post", query: { p: name } }}>
					<li className={styles.listItem}>
						<a>{name}</a>
					</li>
				</Link>
			))}
		</ul>
	)
}

export default Blogish
