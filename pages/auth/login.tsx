import { BlitzPage } from "@blitzjs/next"
import { LoginForm } from "app/auth/components/LoginForm"
import App from "app/core/layouts/App"
import { useRouter } from "next/router"

const LoginPage: BlitzPage = () => {
	const router = useRouter()

	return (
		<App title="Log In">
			<LoginForm
				onSuccess={( _user ) => {
					const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/"
					return router.push(next)
				}}
			/>
		</App>
	)
}

export default LoginPage
