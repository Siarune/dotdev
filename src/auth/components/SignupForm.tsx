import { Routes } from "@blitzjs/next"
import { useMutation } from "@blitzjs/rpc"
import signup from "src/auth/mutations/signup"
import { Signup } from "src/auth/validations"
import { Form, FORM_ERROR } from "src/core/components/Form"
import { LabeledTextField } from "src/core/components/LabeledTextField"
import Link from "next/link"
// import { useRouter } from "next/router"
import styles from "src/styles/sys/authform.module.sass"

type SignupFormProps = {
	onSuccess?: () => void;
};

export const SignupForm = ( props: SignupFormProps ) => {
	const [signupMutation] = useMutation(signup)
	// const router = useRouter()
	return (
		<div className={styles.app}>
			<div className={styles.main}>
				<h1>Create an Account</h1>

				<Form
					submitText="Create Account"
					schema={Signup}
					initialValues={{ email: "", password: "" }}
					onSubmit={async ( values ) => {
						try {
							await signupMutation(values)
							props.onSuccess?.()
						} catch (error: any) {
							if (error.code === "P2002" && error.meta?.target?.includes("email")) {
								// This error comes from Prisma
								return { email: "This email is already being used" }
							} else {
								return { [FORM_ERROR]: error.toString() }
							}
						}
					}}
				>
					<LabeledTextField name="email" label="Email" placeholder="JohnDoe@mail.com"/>
					<LabeledTextField
						name="password"
						label="Password"
						placeholder="Super-Secret-Password"
						type="password"
					/>
				</Form>
				<p>
					Already have an account? <Link href={Routes.LoginPage()}>Sign in!</Link>
				</p>

			</div>
		</div>
	)
}

export default SignupForm
