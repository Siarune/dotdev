import { useMutation } from "@blitzjs/rpc"
import { AuthenticationError } from "blitz"
import { Field } from "react-final-form"
import { Form, FORM_ERROR } from "src/core/components/Form"
import createPost from "src/posts/mutations/createPost"
import { CreatePost } from "src/posts/validations"

import styles from "styles/post.module.sass"

type FormProps = {
	onSuccess?: () => void
}

export const Create = (props: FormProps) => {
	const [createPostMutation] = useMutation(createPost)
	return (
		<Form
			submitText="+"
			schema={CreatePost}
			initialValues={{ type: "", format: "", name: "", content: "" }}
			className={styles.form}
			onSubmit={async (values) => {
				try {
					// console.log(values)
					await createPostMutation(values)
					props.onSuccess?.()
				} catch (error: any) {
					if (error instanceof AuthenticationError) {
						return { [FORM_ERROR]: "Sorry, you need to be logged in for that" }
					} else {
						return {
							[FORM_ERROR]:
								`Sorry, we had an unexpected error. Please try again. - ${error.toString()}`
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
					<option value="poem">Right</option>
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
