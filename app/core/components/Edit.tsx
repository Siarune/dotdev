import { AuthenticationError } from "blitz";
import { Form, FORM_ERROR } from "app/core/components/Form";
import { Post } from "app/auth/validations";
import { useMutation, useQuery } from "@blitzjs/rpc";
import { Field } from "react-final-form";
import { Suspense } from "react";

import styles from "styles/post.module.sass";
import getPosts from "app/posts/queries/getPosts";
import Link from "next/link";
import { withRouter } from "next/router";
import React from "react";
import updatePost from "app/posts/mutations/updatePost";

const Edit = ({ router }: { router: any }) => {
	const {
		query: { p },
	} = router;

	const isTabOne = p == null;
	const isTabTwo = p;

	return (
		<>
			<Suspense fallback={<>Loading...</>}>
				{isTabOne && <Select />}
				{isTabTwo && <Editor router={router} />}
			</Suspense>
		</>
	);
};

export default withRouter(Edit);

const Select = () => {
	const [posts] = useQuery(getPosts, { where: { public: true } });

	return (
		<>
			<ul className={styles.cards}>
				{posts.posts.map(({ id, name }) => (
					<Link href={{ pathname: "/misc/post", query: { t: "2", p: name } }} key={id}>
						<a className={styles.card}>
							<li>{name}</li>
						</a>
					</Link>
				))}
			</ul>
		</>
	);
};

const Editor = ({ router }: { router: any }) => {
	const {
		query: { p },
	} = router;

	const [posts] = useQuery(getPosts, { where: { name: p } });
	const [updatepost] = useMutation(updatePost);

	return (
		<>
			{posts.posts.map(({ id, name, type, content }) => (
				<Form
					submitText="+"
					schema={Post}
					initialValues={{ id: id, type: type, name: name, content: content }}
					className={styles.form}
					key={id}
					onSubmit={async (values) => {
						try {
							await updatepost(values);
						} catch (error: any) {
							if (error instanceof AuthenticationError) {
								return { [FORM_ERROR]: "Sorry, you need to be logged in for that" };
							} else {
								return {
									[FORM_ERROR]:
										`Sorry, we had an unexpected error. Please try again. - ${error.toString()}`,
								};
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

						<Field component="input" name="name" label="" placeholder={name} />
					</div>

					<Field className={styles.textbox} component="textarea" name="content" label="" />
				</Form>
			))}
		</>
	);
};

withRouter(Editor);
