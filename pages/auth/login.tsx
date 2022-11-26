import { BlitzPage } from "@blitzjs/next"
import { LoginForm } from "app/auth/components/LoginForm"
import CluckHUD from "app/core/components/CluckHUD"
import Layout from "app/core/layouts/Layout"
import { useRouter } from "next/router"
import theme from "styles/sys/chud.module.sass"

const LoginPage: BlitzPage = () => {
	const router = useRouter()

	return (
		<Layout title="Log In">
			<CluckHUD theme={theme.Moon}/>
			<LoginForm
				onSuccess={( _user ) => {
					const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/"
					return router.push(next)
				}}
			/>
		</Layout>
	)
}

export default LoginPage
