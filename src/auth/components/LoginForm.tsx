import { Routes } from "@blitzjs/next"
import { useMutation } from "@blitzjs/rpc"
import login from "src/auth/mutations/login"
import { Login } from "src/auth/schemas"
import { Form, FORM_ERROR } from "src/core/components/Form"
import { LabeledTextField } from "src/core/components/LabeledTextField"
import { AuthenticationError, PromiseReturnType } from "blitz"
import Link from "next/link"

import styles from "src/styles/sys/authform.module.sass"

type LoginFormProps = {
	onSuccess?: ( user: PromiseReturnType<typeof login> ) => void;
};

export const LoginForm = ( props: LoginFormProps ) => {
	const [loginMutation] = useMutation(login)
	return (
		<div className={styles.app}>
			<div className={styles.main}>
				<h1>Login</h1>

				<Form
					submitText="Login"
					schema={Login}
					initialValues={{ email: "", password: "" }}
					onSubmit={async ( values ) => {
						try {
							const user = await loginMutation(values)
							props.onSuccess?.(user)
						} catch (error: any) {
							if (error instanceof AuthenticationError) {
								return { [FORM_ERROR]: "Sorry, those credentials are invalid" }
							} else {
								return {
									[FORM_ERROR]: `Sorry, we had an unexpected error. Please try again. - ${error.toString()}`
								}
							}
						}
					}}
				>
					<LabeledTextField name="email" label="Email" placeholder="JohnDoe@mail.com" />
					<LabeledTextField
						name="password"
						label="Password"
						placeholder="Super-Secret-Password"
						type="password"
					/>
					<div>
						<Link href={Routes.ForgotPasswordPage()}>
							Forgot your password?
						</Link>
					</div>
				</Form>

				<div style={{ marginTop: "1rem" }}>
					<p>
						Don&apos;t have an account? <Link href={Routes.SignupPage()}>Sign Up!</Link>
					</p>
				</div>
			</div>
		</div>)
}

export default LoginForm
