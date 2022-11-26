import { BlitzPage } from "@blitzjs/next"
import CluckHUD from "app/core/components/CluckHUD"
import Post from "app/core/components/Post"

import { Suspense } from "react"
import styles from "styles/blog.module.sass"
import theme from "styles/sys/chud.module.sass"

const BlogPost: BlitzPage = () => {
	return (
		<div className={styles.app}>
			<CluckHUD theme={theme.Moon}/>
			<Suspense fallback={<div>Loading...</div>}>
				<Post/>
			</Suspense>
		</div>
	)
}

export default BlogPost
