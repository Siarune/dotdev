import {BlitzPage} from "@blitzjs/next"

import {useQuery} from "@blitzjs/rpc"
import CluckHUD from "app/core/components/CluckHUD"
import MetaBundle from "app/core/components/MetaBundle"
import getPosts from "app/posts/queries/getPosts"
import Link from "next/link"
import {Suspense} from "react"
import styles from "styles/directory.module.sass"

import theme from "styles/sys/chud.module.sass"

const Blogish: BlitzPage = () => {
	return (<div className={styles.app}>
		<MetaBundle title="Projects"/>
		<CluckHUD theme={theme.Moon}/>
		<h1>Blog Posts</h1>
		<Suspense fallback={<div>Loading...</div>}>
			<Feed/>
		</Suspense>
	</div>)
}

function Feed() {
	const [posts] = useQuery(getPosts, {where: {type: "blogpost"}})

	// @ts-ignore
	return (
		<ul className={styles.feed}>
			{posts.posts.map(({ id, name }) => (
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
