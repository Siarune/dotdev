import { BlitzPage } from "blitz"
// import CluckHUD from "app/core/components/CluckHUD"
// import styles from "styles/projects.module.sass"
import theme from "styles/app.module.sass"
import navTheme from "styles/chud.module.sass"
// import ReactMarkdown from "react-markdown"
// import { promises as fs } from "fs"
// import path from "path"
import App from "app/core/components/App"

const Projects: BlitzPage = (
	{
		/*{ rawMarkdown }: { rawMarkdown: any }*/
	}
) => {
	return (
		<App theme={theme.OffWhite} navTheme={navTheme.OffWhite} title="Projects">
			{/*<ReactMarkdown>{rawMarkdown}</ReactMarkdown>*/}
		</App>
	)
}

export default Projects

// export async function getStaticProps() {
// 	const mdPath = path.join(process.cwd(), "public/markdown/bart.md")
// 	const rawMarkdown = await fs.readFile(mdPath, "utf8")
//
// 	return { props: { rawMarkdown } }
// }
