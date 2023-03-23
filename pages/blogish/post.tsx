import { BlitzPage } from "@blitzjs/next"
import App from "src/core/layouts/App"
import Post from "src/posts/components/Post"
import Loading from "src/core/components/Loading";

import { Suspense } from "react"
import styles from "styles/blog.module.sass"

const BlogPost: BlitzPage = () => {
	return (
		<App>
			<div className={styles.app}>
				<Suspense fallback={<Loading />}>
					<Post/>
				</Suspense>
			</div>
		</App>
	)
}

export default BlogPost
