import { useMutation, useQuery } from "@blitzjs/rpc"
import { AuthenticationError } from "blitz"
import Link from "next/link"
import { withRouter } from "next/router"
import React, { Suspense } from "react"
import { Field } from "react-final-form"
import { Form, FORM_ERROR } from "src/core/components/Form"
import updatePost from "src/posts/mutations/updatePost"
import getPosts from "src/posts/queries/getPosts"
import { updatePostVal } from "src/posts/validations"

import styles from "src/styles/post.module.sass"

const Edit = ({ router }: { router: any }) => {
	const {
		query: { p },
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
				{posts.posts.map(({ id, name }) => (
					<Link
						href={{ pathname: "/blogish/submit/", query: { t: "edit", p: name } }}
						key={id}
						className={styles.card}
					>
						<li>{name}</li>
					</Link>
				))}
			</ul>
		</>
	)
}

const Editor = ({ router }: { router: any }) => {
	const {
		query: { p },
	} = router

	const [posts] = useQuery(getPosts, { where: { name: p } })
	const [updatepost] = useMutation(updatePost)

	return (
		<>
			{posts.posts.map(({ id, name, type, format, content }) => (
				<Form
					submitText="+"
					schema={updatePostVal}
					initialValues={{
						id: id,
						type: type,
						format: format,
						name: name,
						content: content,
					}}
					className={styles.form}
					key={id}
					onSubmit={async (values) => {
						try {
							await updatepost(values)
						} catch (error: any) {
							if (error instanceof AuthenticationError) {
								return { [FORM_ERROR]: "Sorry, you need to be logged in for that" }
							} else {
								return {
									[FORM_ERROR]: `Sorry, we had an unexpected error. Please try again.`,
									//${error.toString()}
								}
							}
						}
					}}
				>
					<div className={styles.top}>
						<Field name="type" component="select" className={styles.select}>
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

						<Field component="input" name="name" />
					</div>

					<Field className={styles.textbox} component="textarea" name="content" />
				</Form>
			))}
		</>
	)
}

withRouter(Editor)
