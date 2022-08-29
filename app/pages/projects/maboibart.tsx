import { BlitzPage } from "blitz"
import App from "app/core/components/App"
import Image from "next/image"

import styles from "styles/bartyboy.module.sass"
import theme from "styles/app.module.sass"
import navTheme from "styles/chud.module.sass"

import ReactMarkdown from "react-markdown"
import { promises as fs } from "fs"
import path from "path"

const Bart: BlitzPage = ({ rawMarkdown }: { rawMarkdown: any }) => {
	return (
		<App theme={theme.Volcano} navTheme={navTheme.Volcano} title="Bartyboy">
			<div className={styles.cont}>
				<div className={styles.bartWrap}>
					<Image
						src="/bart.png"
						alt="bart"
						height="128"
						width="128"
						layout="fixed"
						className={styles.portrait}
					/>
					<h1 className={styles.title}>Bartholomew</h1>
				</div>

				<div className={styles.content}>
					<ReactMarkdown>{rawMarkdown}</ReactMarkdown>
				</div>
			</div>
		</App>
	)
}

export default Bart

export async function getStaticProps() {
	const mdPath = path.join(process.cwd(), "public/markdown/bart.md")
	const rawMarkdown = await fs.readFile(mdPath, "utf8")

	return { props: { rawMarkdown } }
}
