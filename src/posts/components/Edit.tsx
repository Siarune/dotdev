import { useMutation, useQuery } from "@blitzjs/rpc"
import { AuthenticationError } from "blitz"
import Link from "next/link"
import { withRouter } from "next/router"
import React, { Suspense } from "react"
import { Field } from "react-final-form"
import { Form, FORM_ERROR } from "src/core/components/Form"
import deletePost from "src/posts/mutations/deletePost"
import updatePost from "src/posts/mutations/updatePost"
import getPost from "src/posts/queries/getPost"
import getPosts from "src/posts/queries/getPosts"
import { UpdatePost } from "src/posts/validations"
import styles from "styles/studio.module.sass"

const Edit = ({ router }: { router: any }) => {
	const {
		query: { p }
	} = router

	const isTabOne = p == null
	return (
		<>
			<Suspense fallback={<>Loading...</>}>
				{isTabOne && <Select />}
				{p && <Editor router={router} />}
			</Suspense>
		</>
	)
}

export default withRouter(Edit)

const Select = () => {
	const [posts] = useQuery(getPosts, { orderBy: { name: "asc" } })

	return (
		<>
			<ul className={styles.cards}>
				{posts.posts.map((posts, id) => (
					<Link
						href={{
							pathname: "/blogish/studio",
							query: { t: "Edit", p: posts.id }
						}}
						key={id}>
						<a className={styles.card}>
							<li>{posts.name}</li>
						</a>
					</Link>
				))}
			</ul>
		</>
	)
}

const Editor = ({ router }: { router: any }) => {
	const {
		query: { p }
	} = router

	const [post] = useQuery(getPost, { id: Number(p) })
	const [updatePostMutation] = useMutation(updatePost)
	const [deletePostMutation] = useMutation(deletePost)

	return (
		<>
			<Form
				submitText="+"
				schema={UpdatePost}
				initialValues={{
					id: post.id,
					type: post.type,
					format: post.format,
					name: post.name,
					content: post.content,
					isPublic: post.isPublic
				}}
				className={styles.form}
				onSubmit={async (values) => {
					try {
						await updatePostMutation(values)
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

					<div className={styles.safe}>
						<Field name="type" component="select" className={styles.select}>
							<option value="project">Project</option>
							<option value="blogpost">Blog</option>
							<option value="poem">Poem</option>
						</Field>

						<Field name="format" component="select" className={styles.select}>
							<option value="left">Left</option>
							<option value="center">Center</option>
							<option value="right">Right</option>
						</Field>

						<Field component="input" name="name" />
					</div>

					<div className={styles.risky}>

						<Field component="input" type="checkbox" id="isPublic" name="isPublic" />
						<label htmlFor="isPublic">Toggle</label>

						<button
							onClick={async () => {
								try {
									alert(`Are you sure you want to delete "${post.name}"?`)
									await deletePostMutation({ id: post.id })
									router.push("submit?t=edit")
								} catch (error: any) {
									if (error instanceof AuthenticationError) {
										return { [FORM_ERROR]: "Authentication Error" }
									} else {
										return {
											[FORM_ERROR]:
												`Error ${error.toString()}`
										}
									}
								}
							}}
						>
							Delete
						</button>
					</div>
				</div>

				<Field className={styles.textbox} component="textarea" name="content" />

			</Form>
		</>
	)
}

withRouter(Editor)
