import { useQuery } from "@blitzjs/rpc"
import getPosts from "src/posts/queries/getPosts"
import ReactMarkdown from "react-markdown"
import styles from "styles/blog.module.sass"
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
			{posts.posts.map(( { id, type, format, name, content } ) => (
				<div className={styles.main} key={id}>
					<h1>{name}</h1>
					<div className={`${styles.content} ${styles[format || "left"]}`}>
						<ReactMarkdown>{content}</ReactMarkdown>
					</div>
				</div>
			))}
		</>
	)
}
