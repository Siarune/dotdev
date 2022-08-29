import styles from "styles/app.module.sass"
import MetaBundle from "app/core/components/MetaBundle"
import CluckHUD from "app/core/components/CluckHUD"
import chud from "styles/chud.module.sass"

type Props = {
	// preview?: boolean
	children: React.ReactNode
	theme?: string
	navTheme?: string
	title: string
}

export default function App({ children, theme, navTheme, title }: Props) {
	return (
		<div className={theme}>
			<MetaBundle title={title} />
			<CluckHUD theme={navTheme} />
			{children}
		</div>
	)
}
