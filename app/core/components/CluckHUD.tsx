import styles from "styles/sys/chud.module.sass"
import Image from "next/image"

import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import { useMutation } from "@blitzjs/rpc"
import { Routes } from "@blitzjs/next"
import Link from "next/link"
import { Suspense } from "react"

const UserInfo = () => {
	const currentUser = useCurrentUser()
	const [logoutMutation] = useMutation(logout)

	if (currentUser) {
		return (
			<>
				<button
					className={styles.signInButton}
					onClick={async () => {
						await logoutMutation()
					}}
				>
					Logout
				</button>
			</>
		)
	} else {
		return (
			<>
				<Link href={Routes.SignupPage()}>
					<button className={styles.signInButton}>
						<a>
							<strong>Sign In</strong>
						</a>
					</button>
				</Link>
			</>
		)
	}
}

type Props = {
	theme?: string
}

export default function CluckHUD({ theme }: Props) {
	return (
		<nav className={theme}>
			<ul className={styles.navbarNav}>
				<li className={styles.intro}>
					<div className={styles.tWrap}>
						<Image
							src="/hentieSolid.png"
							alt="chikin"
							className={styles.thumbnail}
							height="32"
							width="32"
							layout="fixed"
						/>
					</div>
					<h2 className={styles.me}>
					<Link href="/">
						<a>Siarune<span className={styles.span}>.dev</span></a>
					</Link>
					</h2>
				</li>
				<Suspense fallback="Loading...">
					<UserInfo />
				</Suspense>{" "}
			</ul>
		</nav>
	)
}
