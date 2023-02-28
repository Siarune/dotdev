import { useRouter } from "next/router"
import App from "src/core/layouts/App"
import { SignupForm } from "src/auth/components/SignupForm"
import { BlitzPage, Routes } from "@blitzjs/next"

const SignupPage: BlitzPage = () => {
	const router = useRouter()

	return (
		<App title="Sign Up">
			<SignupForm onSuccess={() => router.push(Routes.Home())} />
		</App>
	)
}

export default SignupPage
