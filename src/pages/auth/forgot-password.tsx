import Link from "next/link"
import App from "src/core/layouts/App"
import { LabeledTextField } from "src/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "src/core/components/Form"
import { ForgotPassword } from "src/auth/schemas"
import forgotPassword from "src/auth/mutations/forgotPassword"
import { useMutation } from "@blitzjs/rpc"
import { BlitzPage, Routes } from "@blitzjs/next"
import styles from "src/styles/sys/authform.module.sass"

const ForgotPasswordPage: BlitzPage = () => {
	const [forgotPasswordMutation, { isSuccess }] = useMutation(forgotPassword)

	return (
		<App title="Forgot Your Password?">
			<div className={styles.app}>
				<div className={styles.main}>

					{isSuccess ? (
						<div className={styles.statusBox}>
						<h1>Request Submitted</h1>
						<p>
							If your email is in our system, you will receive instructions to reset your password
							shortly.
						</p>
					</div>) : (
						<>
							<h1>Forgot your password?</h1>

							<Form
								submitText="Send Reset Instructions"
								schema={ForgotPassword}
								initialValues={{ email: "" }}
								onSubmit={async ( values ) => {
									try {
										await forgotPasswordMutation(values)
									} catch (error: any) {
										return {
											[FORM_ERROR]: "Sorry, we had an unexpected error. Please try again."
										}
									}
								}}
							>
								<LabeledTextField name="email" label="Email" placeholder="my_email@email.com" />
							</Form>

							<div style={{ marginTop: "1rem" }}>

								<Link href={Routes.LoginPage()}>Go back?</Link>
							</div>
						</>
					)}
				</div>
			</div>
		</App>
	)
}

export default ForgotPasswordPage
