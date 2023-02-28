import { useMutation } from "@blitzjs/rpc"
import { Form, FORM_ERROR } from "src/core/components/Form"
import createPost from "src/posts/mutations/createPost"
import { newPostVal } from "src/posts/validations"
import { AuthenticationError } from "blitz"
import { Field } from "react-final-form"

import styles from "src/styles/post.module.sass"

type FormProps = {
	onSuccess?: () => void
}

export const Create = (props: FormProps) => {
	const [createPostMutation] = useMutation(createPost)
	return (
		<Form
			submitText="+"
			schema={newPostVal}
			initialValues={{ type: "", name: "", content: "" }}
			className={styles.form}
			onSubmit={async (values) => {
				try {
					await createPostMutation(values)
					props.onSuccess?.()
				} catch (error: any) {
					if (error instanceof AuthenticationError) {
						return { [FORM_ERROR]: "Sorry, you need to be logged in for that" }
					} else {
						return {
							[FORM_ERROR]: `Sorry, we had an unexpected error. Please try again. - ${error.toString()}`,
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

				<Field name="format" component="select" className={styles.select}>
					<option value="">Format</option>
					<option value="project">Left</option>
					<option value="blogpost">Center</option>
					<option value="poem">Justified</option>
				</Field>

				<Field name="name" component="input" placeholder="Name" />
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

export default Create
