import { BlitzPage } from "@blitzjs/next"
import App from "app/core/layouts/App"
import Post from "app/posts/components/Post"
import { Suspense } from "react"
import styles from "styles/blog.module.sass"

const Project: BlitzPage = () => {
	return (
		<App>
			<div className={styles.app}>
				<Suspense fallback={<div>Loading...</div>}>
					<Post/>
				</Suspense>
			</div>
		</App>
	)
}

export default Project
