import Layout from "app/core/components/layout"
import { getAllPostIds, getPostData } from "lib/posts"
import Head from "next/head"
import Date from "app/core/components/date"
import styles from "styles/blog.module.sass"
import { GetStaticProps, GetStaticPaths } from "next"
import MetaBundle from "app/core/components/MetaBundle"

export default function Post({
	postData,
}: {
	postData: {
		title: string
		description: string
		date: string
		contentHtml: string
	}
}) {
	return (
		<div className={styles.app}>
			<MetaBundle title={postData.title} />

			<div className={styles.content}>
				{/* <div className={styles.heading}> */}
				<h1>{postData.title}</h1>
				<h2>{postData.description}</h2>
				{/* </div> */}
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</div>
		</div>
		// <Layout>
		// 	<Head>
		// 		<title>{postData.title}</title>
		// 	</Head>
		// 	<article>
		// 		<h1 className={utilStyles.headingXl}>{postData.title}</h1>
		// 		<div className={utilStyles.lightText}>
		// 			<Date dateString={postData.date} />
		// 		</div>
		// 		<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
		// 	</article>
		// </Layout>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getAllPostIds()
	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async ({ params }: { params: any }) => {
	const postData = await getPostData(params.id as string)
	return {
		props: {
			postData,
		},
	}
}
