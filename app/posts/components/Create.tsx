import { useMutation } from "@blitzjs/rpc"
import { Post } from "app/auth/validations"
import { Form, FORM_ERROR } from "app/core/components/Form"
import createPost from "app/posts/mutations/createPost"
import { AuthenticationError } from "blitz"
import { Field } from "react-final-form"

import styles from "styles/post.module.sass"

export default function Create() {
	const [createpost] = useMutation(createPost)
	return (
		<Form
			submitText="+"
			schema={Post}
			initialValues={{ type: "", name: "", content: "" }}
			className={styles.form}
			onSubmit={async ( values ) => {
				try {
					await createpost(values)
				} catch (error: any) {
					if (error instanceof AuthenticationError) {
						return { [FORM_ERROR]: "Sorry, you need to be logged in for that" }
					} else {
						return {
							[FORM_ERROR]:
								`Sorry, we had an unexpected error. Please try again. - ${error.toString()}`,
						}
					}
				}
			}}
		>
			<div className={styles.top}>
				<Field name="type" component="select" className={styles.select}>
					<option value="">Type</option>
					<option value="project">Project</option>
					<option value="blogpost">Blog</option>
					<option value="poem">Poem</option>
				</Field>

				<Field name="name" component="input" placeholder="Name"/>
			</div>

			<Field
				className={styles.textbox}
				component="textarea"
				name="content"
				label=""
				placeholder=""
			/>
		</Form>
	)
}
