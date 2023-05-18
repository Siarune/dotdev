import { useMutation } from "@blitzjs/rpc"
import { AuthenticationError } from "blitz"
import { Field } from "react-final-form"
import { Form, FORM_ERROR } from "src/core/components/Form"
import createPost from "src/posts/mutations/createPost"
import { CreatePost } from "src/posts/validations"
import { withRouter } from "next/router"

import styles from "styles/studio.module.sass"
import React from "react"
import { router } from "next/client"

// type FormProps = {
// 	onSuccess?: () => void
//
// }

export const Create = ({ router }: { router: any }) => {
	const [createPostMutation] = useMutation(createPost)
	return (
		<Form
			key={router.asPath}
			submitText="+"
			schema={CreatePost}
			initialValues={{
				type: "",
				format: "",
				name: "",
				content: "",
				isPublic: true
			}}
			className={styles.form}
			onSubmit={async (values, initialValues) => {
				try {
					await createPostMutation(values)
					router.reload()
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
			}
		}
		>


			<div className={styles.top}>

				<div className={styles.safe}>
					<Field name="type" component="select" className={styles.select}>
						<option value="">Type</option>
						<option value="project">Project</option>
						<option value="blogpost">Blog</option>
						<option value="poem">Poem</option>
						<option value="story">Story</option>
					</Field>

					<Field name="format" component="select" className={styles.select}>
						<option value="">Format</option>
						<option value="project">Left</option>
						<option value="blogpost">Center</option>
						<option value="poem">Right</option>
					</Field>

					<Field name="name" component="input" placeholder="Name" />

				</div>


				<div className={styles.risky}>

					<Field component="input" type="checkbox" id="isPublic" name="isPublic" />
					<label htmlFor="isPublic">Toggle</label>

				</div>
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

export default withRouter(Create)
