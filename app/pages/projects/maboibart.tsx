import { BlitzPage } from "blitz"
import App from "app/core/components/App"
import Image from "next/image"

import styles from "styles/bartyboy.module.sass"
import theme from "styles/app.module.sass"
import navTheme from "styles/chud.module.sass"

// import ReactMarkdown from "react-markdown"
// import { promises as fs } from "fs"
// import path from "path"

const Bart: BlitzPage = (
	{
		/*{ rawMarkdown }: { rawMarkdown: any }*/
	}
) => {
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
					{/*<ReactMarkdown>{rawMarkdown}</ReactMarkdown>*/}
					A Discord bot I made with Node.js and Discord.js over the summer. <br />
					It&apos;s currently deployed on Heroku through a GitHub pipeline, though I
					haven&apos;t updated it in a while. <br />
					There&apos;s not much of a purpose to be honest, but it was fun. <br />I never
					did get it on the marketplace though, since I would need a developer license for
					that. Maybe one day.
				</div>
			</div>
		</App>
	)
}

export default Bart

// export async function getStaticProps() {
// 	const mdPath = path.join(process.cwd(), "public/markdown/bart.md")
// 	const rawMarkdown = await fs.readFile(mdPath, "utf8")
//
// 	return { props: { rawMarkdown } }
// }
