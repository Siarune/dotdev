import postmetadata from "./posts.json"

export type Post = {
	slug: string
	filename: string
	title: string
	tags: string
	published: string
}

export const posts: Post[] = postmetadata
