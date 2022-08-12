import Image from "next/image"
import styles from "styles/sauce.module.sass"
import chud from "styles/chud.module.sass"
import CluckHUD from "app/core/components/CluckHUD"
import { BlitzPage } from "blitz"

const Sauce: BlitzPage = () => {
	return (
		<main className={styles.main}>
			<CluckHUD theme={chud.Forest} />
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
					I got into web development specifically because frankly my school-issued
					chromebook couldn&apos;t handle anything else. <br />
					My websites have come a long way since that Apache server running on a Raspberry
					Pi. <br />
					Not that my design skills have improved, but I like to think this is better.
					<br />
					This particular version is built Next.js, my React framework of choice. <br />
					It&apos;s hosted on Vercel, which is part of my GitHub deployment pipeline.{" "}
					<br />
					There&apos;s also a few libraries sprinkled around, like Clerk.js for
					authentication and at some point Firebase for all those bells and whistles.
				</div>
			</div>
		</main>
	)
}

export default Sauce
