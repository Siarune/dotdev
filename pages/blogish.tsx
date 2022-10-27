import Head from "next/head"
import Layout, { siteTitle } from "app/core/components/layout"
import styles from "styles/blog.module.sass"
import { getSortedPostsData } from "lib/posts"
import Link from "next/link"
import Date from "app/core/components/date"
import { GetStaticProps } from "next"
import MetaBundle from "app/core/components/MetaBundle"

export default function Blogish({
	allPostsData,
}: {
	allPostsData: {
		date: string
		title: string
		description: string
		id: string
	}[]
}) {
	return (
		<div className={styles.app}>
			<MetaBundle title="Blog-ish" />
			<div className={styles.heading}>
				<h1>Blog-ish</h1>
				<h2>Ramblings from yours truly</h2>
			</div>
			<div className={styles.content}>
				<ul className={styles.feed}>
					{allPostsData.map(({ id, date, title, description }) => (
						<li className={styles.listItem} key={id}>
							<Link href={`/blogish/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<hr />
							<div className={styles.info}>
								<p className={styles.description}>{description}</p>
								<p className={styles.date}>
									<Date dateString={date} />
								</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData,
		},
	}
}
