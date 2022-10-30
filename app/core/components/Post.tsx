import { useQuery } from "@blitzjs/rpc"
import getPosts from "app/posts/queries/getPosts"
import { withRouter } from "next/router"
import MetaBundle from "./MetaBundle"
import styles from "styles/blog.module.sass"
import ReactMarkdown from "react-markdown"

const Post = ({ router }: { router: any }) => {

	const {
		query: { p },
	} = router

	const [posts] = useQuery(getPosts, { where: { name: p } })

	return (
		<>
			{posts.posts.map(({ id, name, content }) => (
				<div className={styles.main} key={id}>
					<MetaBundle title={name} />
					<h1>{name}</h1>
					<div className={styles.content}>
						<ReactMarkdown>
						{content}
						</ReactMarkdown>
					</div>
				</div>
			))}
		</>
	)
}

export default withRouter(Post)
