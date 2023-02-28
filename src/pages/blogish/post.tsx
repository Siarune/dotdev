import { BlitzPage } from "@blitzjs/next"
import App from "src/core/layouts/App"
import Post from "src/posts/components/Post"

import { Suspense } from "react"
import styles from "src/styles/blog.module.sass"
// import Comments from "src/posts/components/Comments"

const BlogPost: BlitzPage = () => {
	return (
		<App>
			<div className={styles.app}>
				<Suspense fallback={<div>Loading...</div>}>
					<Post/>
					{/*<Comments/>*/}
				</Suspense>
			</div>
		</App>
	)
}

export default BlogPost
