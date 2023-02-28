import { Routes } from "@blitzjs/next"
import { useMutation } from "@blitzjs/rpc"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import logout from "src/auth/mutations/logout"
import styles from "src/styles/sys/nav.module.sass"

import { useCurrentUser } from "src/users/hooks/useCurrentUser"

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
				<Link href={Routes.LoginPage()}>
					<button className={styles.signInButton}>
							<strong>Sign In</strong>
					</button>
				</Link>
			</>
		)
	}
}

type Props = {
	theme: string;
}

export default function Nav( { theme }: Props ) {
	return (
		<nav className={styles[theme]}>
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
								Siarune<span className={styles.span}>.dev</span>
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
