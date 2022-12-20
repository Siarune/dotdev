import styles from "styles/sys/error.module.sass"

type Props = {
	statusCode: number
	errorMessage: string
}

export default function Error( { statusCode, errorMessage }: Props ) {
	return (
		<div className={styles.wrap}>
			<div className={styles.code}>
				<h2>Error</h2>
				<h1>{statusCode}</h1>
			</div>
			<div className={styles.message}>
				<h3>{errorMessage}</h3>
			</div>
		</div>
	)
}
