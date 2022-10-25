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
					className="button small"
					onClick={async () => {
						await logoutMutation()
					}}
				>
					Logout
				</button>
				{/* <div>
					User id: <code>{currentUser.id}</code>
					<br />
					User role: <code>{currentUser.role}</code>
				</div> */}
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
				{/* <Link href={Routes.LoginPage()}>
					<a className="button small">
						<strong>Login</strong>
					</a>
				</Link> */}
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
					{/* <Link href="/"> */}
					<h2 className={styles.me}>
						Siarune<span className={styles.span}>.dev</span>
					</h2>
					{/* </Link> */}
				</li>
				<Suspense fallback="Loading...">
					<UserInfo />
				</Suspense>{" "}
			</ul>
		</nav>
	)
}
