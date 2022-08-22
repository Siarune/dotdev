import { BlitzPage } from "blitz"
import CluckHUD from "app/core/components/CluckHUD"
import styles from "styles/apps.module.sass"
import chud from "styles/chud.module.sass"

const Page: BlitzPage = () => {
	return (
		<main className={styles.main}>
			<CluckHUD theme={chud.OffWhite} />
			<div className={styles.container}>
				<h1>FOSS Android Mods</h1>
				<p>
					The following is a list of free, safe, and open-source Android mods for your
					convenience
				</p>
				<div className={styles.box}>
					{/* xManager */}
					<details className={styles.app}>
						<summary>
							<div className={styles.info}>
								<h4>xManager for Spotify</h4>
								<p>Spotify as it should be</p>
							</div>

							<div>
								<a href="https://github.com/xManager-v2/xManager-Spotify">
									<VisitIcon />
								</a>
								<a href="https://github.com/xManager-v2/xManager-Spotify/releases/latest">
									<DownloadIcon />
								</a>
							</div>
						</summary>
						<hr />
						<div className={styles.content}>
							<ul>
								<li>Full suite of management tools</li>
								<li>Amoled black theme (optional)</li>
								<li>Sleek and easy to use</li>
							</ul>
						</div>
					</details>

					{/* Aliucord */}
					<details className={styles.app}>
						<summary>
							<div className={styles.info}>
								<h4>Aliucord</h4>
								<p>Discord with superpowers</p>
							</div>
							<div>
								<a href="https://github.com/Aliucord/Aliucord/">
									<VisitIcon />
								</a>
								<a href="https://github.com/Aliucord/Aliucord/releases/latest">
									<DownloadIcon />
								</a>
							</div>
						</summary>
						<hr />
						<div className={styles.content}>
							<ul>
								<li>Plugins for everything</li>
								<li>Themes on themes on themes</li>
								<li>Blocks most tracking/analytics, if that matters to you</li>
							</ul>
						</div>
					</details>

					{/* Saikou */}
					<details className={styles.app}>
						<summary>
							<div className={styles.info}>
								<h4>Saikou</h4>
								<p>Stream and download anime & manga</p>
							</div>

							<div>
								<a href="https://github.com/saikou-app/saikou">
									<VisitIcon />
								</a>
								<a href="https://github.com/saikou-app/saikou/releases/latest">
									<DownloadIcon />
								</a>
							</div>
						</summary>
						<hr />
						<div className={styles.content}>
							<ul>
								<li>Anilist tracking</li>
								<li>Plenty of sources</li>
								<li>Ad-free, of course</li>
							</ul>
						</div>
					</details>

					{/* Tachiyomi */}
					<details className={styles.app}>
						<summary>
							<div className={styles.info}>
								<h4>Tachiyomi</h4>
								<p>Manga and Webtoon reader</p>
							</div>

							<div>
								<a href="https://tachiyomi.org/">
									<VisitIcon />
								</a>
								<a href="https://tachiyomi.org/download/">
									<DownloadIcon />
								</a>
							</div>
						</summary>
						<hr />
						<div className={styles.content}>
							<ul>
								<li>Downloading content</li>
								<li>Themes and settings up the wazoo</li>
								<li>List tracking (MAL, Anilist)</li>
								<li>Automatic library updates and backups</li>
							</ul>
							<p>
								Also consider{" "}
								<a href="https://tachiyomi.org/forks/TachiyomiSY/">TachiyomiSY</a>{" "}
								<a href="https://tachiyomi.org/forks/TachiyomiSY/">
									{/* <DownloadIcon /> */}
								</a>
							</p>
							<p>
								Source code for{" "}
								<a href="https://github.com/tachiyomiorg/tachiyomi">original</a> and{" "}
								<a href="https://github.com/jobobby04/TachiyomiSY">SY</a>
							</p>
						</div>
					</details>

					{/* ReVanced */}
					<details className={styles.app}>
						<summary>
							<div className={styles.info}>
								<h4>ReVanced Youtube Manager</h4>
								<p>In development (stay tuned)</p>
							</div>
							<a href="https://github.com/revanced/revanced-manager">
								<VisitIcon />
							</a>
						</summary>
					</details>
				</div>
			</div>

			<footer className={styles.footer}>
				<p>
					Contact: <a href="mailto:sia@siarune.dev">sia@siarune.dev</a> | Liscenced under
					GPLv3
				</p>
			</footer>
		</main>
	)
}

const DownloadIcon = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			<path d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z" />
		</svg>
	)
}

const VisitIcon = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
			<path d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z" />
		</svg>
	)
}

export default Page
