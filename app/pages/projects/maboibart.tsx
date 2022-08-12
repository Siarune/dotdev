import Image from "next/image"
import styles from "styles/bartyboy.module.sass"
import chud from "styles/chud.module.sass"
import CluckHUD from "app/core/components/CluckHUD"
import { BlitzPage } from "blitz"

const Bart: BlitzPage = () => {
	return (
		<main className={styles.main}>
			<CluckHUD theme={chud.Volcano} />
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
					<p>
						A Discord bot I made with Node.js and Discord.js over the summer. <br />
						It&apos;s currently deployed on Heroku through a GitHub pipeline, though I
						haven&apos;t updated it in a while. <br />
						There&apos;s not much of a purpose to be honest, but it was fun. <br />I
						never did get it on the marketplace though, since I would need a developer
						license for that. Maybe one day.
					</p>
				</div>
			</div>
		</main>
	)
}

export default Bart
