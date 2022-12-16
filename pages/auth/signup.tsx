import { BlitzPage, Routes } from "@blitzjs/next"
import { SignupForm } from "app/auth/components/SignupForm"
import App from "app/core/layouts/App"
import { useRouter } from "next/router"

const SignupPage: BlitzPage = () => {
	const router = useRouter()

	return (
		<App title="Sign Up">
			<SignupForm onSuccess={() => router.push(Routes.Home())}/>
		</App>
	)
}

export default SignupPage
