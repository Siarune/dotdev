import Image from "next/image"
import styles from "styles/sauce.module.sass"
import theme from "styles/app.module.sass"
import { BlitzPage } from "blitz"
import App from "app/core/components/App"
import navTheme from "styles/chud.module.sass"

import ReactMarkdown from "react-markdown"
import { promises as fs } from "fs"
import path from "path"

const Sauce: BlitzPage = ({ rawMarkdown }: { rawMarkdown: any }) => {
	return (
		<App theme={theme.Forest} navTheme={navTheme.Forest} title="The Sauce">
			<div className={styles.cont}>
				<div className={styles.hentWrap}>
					<Image
						src="/hentieSolid.png"
						alt="bart"
						height="100"
						width="100"
						layout="fixed"
						className={styles.portrait}
					/>
					<h1 className={styles.title}>Whatever This Place Is</h1>
				</div>

				<div className={styles.content}>
					<ReactMarkdown>{rawMarkdown}</ReactMarkdown>
				</div>
			</div>
		</App>
	)
}

export default Sauce

export async function getStaticProps() {
	const mdPath = path.join(process.cwd(), "public/markdown/sauce.md")
	const rawMarkdown = await fs.readFile(mdPath, "utf8")

	return { props: { rawMarkdown } }
}
