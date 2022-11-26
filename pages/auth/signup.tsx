import { BlitzPage, Routes } from "@blitzjs/next"
import { SignupForm } from "app/auth/components/SignupForm"
import CluckHUD from "app/core/components/CluckHUD"
import Layout from "app/core/layouts/Layout"
import { useRouter } from "next/router"
import theme from "styles/sys/chud.module.sass"

const SignupPage: BlitzPage = () => {
	const router = useRouter()

	return (
		<Layout title="Sign Up">
			<CluckHUD theme={theme.Moon}/>
			<SignupForm onSuccess={() => router.push(Routes.Home())}/>
		</Layout>
	)
}

export default SignupPage
