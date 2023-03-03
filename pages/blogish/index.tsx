import { BlitzPage } from "@blitzjs/next"

import { useQuery } from "@blitzjs/rpc"
import is from "@sindresorhus/is"
import Link from "next/link"
import { Suspense } from "react"
import App from "src/core/layouts/App"
import getPosts from "src/posts/queries/getPosts"
import styles from "styles/directory.module.sass"
import integer = is.integer

const Blogish: BlitzPage = () => {
	return (
		<App title={"Blog-ish"} theme={"Moon"}>
			<div className={styles.app}>
				<h1>Blog-ish</h1>
				<h2>It&apos;s like a blog, but for everything!</h2>
				<Suspense fallback={<div>Loading...</div>}>
					<Feed />
				</Suspense>
			</div>
		</App>
	)
}

function Feed() {
	const Posts = useQuery(getPosts, {
		orderBy: { createdAt: "desc" },
		where: { isPublic: true }
	})

	const posts = Posts[0].posts

	return (
		<ul className={styles.feed}>
			{
				posts.map(({ id, name }) => (
					<Link
						key={id}
						href={{
							pathname: "blogish/post",
							query: { p: name }
						}}>
						<li className={styles.listItem}>
							<a>{name}</a>
						</li>
					</Link>
				))
			}
		</ul>
	)
}

export default Blogish
