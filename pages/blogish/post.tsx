import { BlitzPage } from "@blitzjs/next"
import { useMutation, useQuery } from "@blitzjs/rpc"
import { AuthenticationError } from "blitz"
import { useRouter } from "next/router"

import React, { Suspense } from "react"
import { Field } from "react-final-form"
import ReactMarkdown from "react-markdown"
import createComment from "src/comments/mutations/createComment"
import getComments from "src/comments/queries/getComments"
import { CreateComment } from "src/comments/validations"
import Form, { FORM_ERROR } from "src/core/components/Form"
import Loading from "src/core/components/Loading"
import App from "src/core/layouts/App"
import getPosts from "src/posts/queries/getPosts"
import { useCurrentUser } from "src/users/hooks/useCurrentUser"
import styles from "styles/blog.module.sass"
// const getAuthorQuery = useQuery(getAuthor)

const BlogPost: BlitzPage = () => {

	const router = useRouter()
	const {
		query: { p }
	} = router

	const Post = useQuery(
		getPosts, {
			where: { name: p as string }
		})[0].posts

	const user = useCurrentUser()

	const [createCommentMutation] = useMutation(createComment)
	const Comments = useQuery(getComments,
		{
			where: {
				// @ts-ignore
				postId: Post[0].id
			}
		})[0].comments


	return (
		<App>
			<div className={styles.app}>
				<Suspense fallback={<Loading />}>
					<>
						{Post.map((post, id) => (
							<div className={styles.main} key={id}>
								<h1>{post.name}</h1>
								<div className={`${styles.content} ${styles[post.format || "left"]}`}>
									<ReactMarkdown>{post.content}</ReactMarkdown>
									<p className={styles.littleInfo}>
										Posted {post.createdAt.toLocaleString()}
										{/*<p>{post.likes} likes</p>*/}
									</p>
								</div>
							</div>
						))}
					</>
				</Suspense>

				<Suspense fallback={<></>}>
					<Form
						// key={router.asPath}
						initialValues={{
							//@ts-ignore
							author: user.name,
							//@ts-ignore
							userId: user.id,
							//@ts-ignore
							postId: Post[0].id,
							content: ""
						}}
						submitText="→"
						schema={CreateComment}
						className={styles.form}
						onSubmit={async (values, initialValues) => {
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
						{Comments.map((comment, id) => (
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
