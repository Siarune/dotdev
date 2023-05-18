import { BlitzPage } from "@blitzjs/next"
import { useMutation, useQuery } from "@blitzjs/rpc"
import { AuthenticationError } from "blitz"
import { useRouter } from "next/router"

import React, { Suspense } from "react"
import { Field } from "react-final-form"
import createComment from "src/comments/mutations/createComment"
import getComments from "src/comments/queries/getComments"
import { CreateComment } from "src/comments/validations"
import Form, { FORM_ERROR } from "src/core/components/Form"
import Loading from "src/core/components/Loading"

import Markdown from "src/posts/components/Markdown"
import App from "src/core/layouts/App"
import getPublicPost from "src/posts/queries/getPublicPost"
import { useCurrentUser } from "src/users/hooks/useCurrentUser"
import styles from "styles/blog.module.sass"

const BlogPost: BlitzPage = () => {

	const router = useRouter()

	//Gets query parameter "p"
	const {
		query: { p }
	} = router

	//Fetches post from db based on p
	const [Post] = useQuery(
		getPublicPost, {
			id: Number(p)
		}
	)

	//Checks for user info
	const user = useCurrentUser()

	//Throw if null, return otherwise
	function User() {
		if (user) {
			return user
		} else {
			return {
				id: 9999,
				name: "Anonymous User",
				email: "Anon"
			}
		}
	}

	//Fetch comments based on Post info
	const [createCommentMutation] = useMutation(createComment)
	const Comments = useQuery(getComments,
		{
			where: {
				postId: Post.id,
				testing: false
				// testing: true
			}
		})[0].comments

	return (
		<App title={Post.name}>
			<div className={styles.app}>
				<Suspense fallback={<Loading />}>
					<>
						<div className={styles.main}>
							<h1>{Post.name}</h1>
							<div className={`${styles.content} ${styles[Post.format || "left"]}`}>
								<Markdown source={Post.content} />
								<p className={styles.littleInfo}>
									Posted {Post.createdAt.toLocaleString()}
									{/*<p>{post.likes} likes</p>*/}
								</p>
							</div>
						</div>
					</>
				</Suspense>

				<Suspense fallback={<></>}>
					<Form
						initialValues={{
							author: User().name as string,
							userId: User().id,
							postId: Post.id,
							content: ""
						}}
						submitText="→"
						schema={CreateComment}
						className={styles.form}
						onSubmit={async ( values, initialValues ) => {
							try {
								console.log(values)
								await createCommentMutation(values)
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
						<Field
							className={styles.textbox}
							component="textarea"
							name="content"
							label=""
							placeholder="Thoughts?"
						/>
					</Form>
				</Suspense>

				<Suspense fallback={<Loading />}>
					<div className={styles.comments}>
						{Comments.map(( comment, id ) => (
							<div className={styles.comment} key={id}>
								<p className={styles.author}>
									{comment.author}
								</p>
								<p className={styles.commentContent}>
									{comment.content}
								</p>
								<p className={styles.timestamp}>
									{comment.createdAt.toLocaleString()}
								</p>
							</div>
						))}
					</div>
				</Suspense>

			</div>
		</App>
	)
}

export default BlogPost
