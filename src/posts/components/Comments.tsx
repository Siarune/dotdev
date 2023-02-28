import { useQuery, useMutation } from "@blitzjs/rpc"
import { AuthenticationError } from "blitz"
import { Form, FORM_ERROR } from "src/core/components/Form"
import { Field } from "react-final-form"
import getPost from "src/posts/queries/getPost"
// import getComments from "src/posts/queries/getComments"
import { withRouter } from "next/router"
import ReactMarkdown from "react-markdown"
import { Post } from "src/posts/validations"
import styles from "styles/blog.module.sass"
import getPosts from "../queries/getPosts"
// import createComment from "src/posts/mutations/createComment"
import React from 'react'

type FormProps = {
	onSuccess?: () => void
}

const Comments = ( { router }: { router: any }, props: FormProps ) => {

	// const [createCommentMutation] = useMutation(createComment)

	const {
		query: { p }
	} = router

	const [post] = useQuery(getPosts, { where: { name: p } })
	// const [comments] = useQuery(getComments, where: { postId: post.posts.id })

	const [value, setValue] = React.useState('')
	const [textarea, setTextarea] = React.useState('')

	return(
		<>
			<Form
				submitText="→"
				schema={Post}
				initialValues={{ content: "" }}
				className={styles.form}
				onSubmit={async ( values ) => {
					try {
						console.log(values)
						// await createCommentMutation(values)
						// props.onSuccess?.()
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
				<Field
					name="name"
					className={styles.comment}
					component="textarea"
					resizable="false"
					placeholder="Comment..."
				/>

				<AutoGrowTextArea
					value={textarea}
					onChange={setTextarea}
				/>


			</Form>
		</>
	)
}

function AutoGrowTextArea({ value, onChange }) {
	return (
		<div
			// className="auto-grow-input"
			// style={{
			// 	display: 'inline-grid',
			// 	alignItems: 'stretch',
			// 	padding: 8,
			// 	// border: '1px solid #ccc',
			// 	borderRadius: 4,
			// }}
			className={styles.growWrap}
		>
      <textarea
		  name={"content"}
		  placeholder={"Comment..."}
		  rows={1}
		  value={value}
		  onChange={(event) => onChange(event.target.value)}
		  // style={{
			//   gridArea: '1 / 1 / 2 / 2',
			//   width: '100%',
			//   maxWidth: '50vw',
			//   padding: 0,
			//   border: 'none',
		  // }}
		  // className={styles.text}
	  />
			<span
				style={{
					gridArea: '1 / 1 / 2 / 2',
					visibility: 'hidden',
					whiteSpace: 'pre-wrap',
				}}
			>
        {value}{' '}
      </span>
		</div>
	)
}

export default withRouter(Comments)
