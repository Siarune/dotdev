import styles from "styles/sys/loading.module.sass"

type Props = {
	style?: string
}

export default function Loading({ style }: Props) {
if (style == "ripple") return(
	<div className={styles.ldsRipple}>
		<div></div>
		<div></div>
	</div>
)
else return (
	<span className={styles.loader}></span>
)
}
