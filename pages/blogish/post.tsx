import { BlitzPage } from "@blitzjs/next";
import styles from "styles/blog.module.sass";
import CluckHUD from "app/core/components/CluckHUD";
import theme from "styles/sys/chud.module.sass";

import { Suspense } from "react";
import Post from "app/core/components/Post";

const BlogPost: BlitzPage = () => {
	return (
		<div className={styles.app}>
			<CluckHUD theme={theme.Moon} />
			<Suspense fallback={<div>Loading...</div>}>
				<Post />
			</Suspense>
		</div>
	);
};

export default BlogPost;
