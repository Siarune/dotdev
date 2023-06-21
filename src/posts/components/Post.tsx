import { useQuery } from "@blitzjs/rpc"
import getPosts from "src/posts/queries/getPosts"
import ReactMarkdown from "react-markdown"
import styles from "src/styles/post.module.sass"
import { useRouter } from "next/router"

export default function Post() {

	const router = useRouter()

	const {
		query: { p }
	} = router

	const [posts] = useQuery(
		getPosts, {
			where: { name: p as string }
	})

	return (
		<>
			{posts.posts.map((posts, id) => (
				<div className={styles.main} key={id}>
					<h1>{posts.name}</h1>
					<div className={`${styles.content} ${styles[posts.format || "left"]}`}>
						<ReactMarkdown>{posts.content}</ReactMarkdown>
					</div>
				</div>
			))}
		</>
	)
}
