import { BlitzPage } from "@blitzjs/next"
import { useQuery } from "@blitzjs/rpc"
import CluckHUD from "app/core/components/CluckHUD"
import getPosts from "app/posts/queries/getPosts"
import { Suspense } from "react"
import ReactMarkdown from "react-markdown"
import styles from "styles/poetry.module.sass"
import theme from "styles/sys/chud.module.sass"

const Poetry: BlitzPage = () => {
	return (
		<div className={styles.app}>
			<CluckHUD theme={theme.Book}/>
			<div className={styles.main}>
				<div className={styles.bannerWrapper}>
					<h1 className={styles.banner}>Some Very (very) Bad Poetry</h1>
				</div>

				<div className={styles.poems}>
					<Suspense>
						<Poems/>
					</Suspense>
				</div>
			</div>
		</div>
	)
}

const Poems = () => {
	const [poems] = useQuery(getPosts, {where: {type: "poem"}})
	return (
		<div className={styles.poems}>
			{poems.posts.map(({id, name, content}) => (
				<div className={styles.collapsibleWrapper} key={id}>
					<details>
						<summary className={styles.collapsibleTitle}>{name}</summary>

						<p className={styles.collapsibleText}>
							<ReactMarkdown>{content}</ReactMarkdown>
						</p>
					</details>
				</div>
			))}
		</div>
	)
}

export default Poetry

/*
					<div className={styles.collapsibleWrapper}>
						<details>
							<summary className={styles.collapsibleTitle}>Harvest Heart</summary>
							<div className={styles.content}>
								<p className={styles.collapsibleText}>
I love you bushels <br />
I love you bunches <br />
Through all of the mushes <br />
And all of the crunches <br />
<br />
I love you a pound <br />
I love you a ton <br />
I love you so much <br />
My little cinnamon bun <br />
								</p>

								<div className={styles.littleInfo}>
									<p>May 16th, 2022 -- 12:03 A.M.</p>
								</div>
							</div>
						</details>
					</div>

					<div className={styles.collapsibleWrapper}>
						<details>
							<summary className={styles.collapsibleTitle}>Sad Doot</summary>
							<div className={styles.content}>
								<p className={styles.collapsibleText}>
Spooky season has ended
not nearly as intended.
For Christmas creeps ever closer.
The candy and pumpkins
replaced with toy munchkins-
Someone get me a bulldozer.

What can I do?
What can I say?
Nothing can really
express my dismay.

Because spooky scary skeletons
that sent shivers down my spine
they&apos;re shrieking skulls
won&apos;t shock my skull
or seal my doom tonight.

But the spook lives on
every day of the year.
In all of my shrieks,
and all of my tears.
So I give my salute
with a sad little doot
and wait for the days
of spooky scary skeletons.
								</p>

								<div className={styles.littleInfo}>
									<p>November 9th, 2021 -- 3:16 P.M.</p>
								</div>
							</div>
						</details>
					</div>

					<div className={styles.collapsibleWrapper}>
						<details>
							<summary className={styles.collapsibleTitle}>Bugs</summary>
							<p className={styles.collapsibleText}>
100 bugs in the code I just wrote
100 bugs in the code
Take one down
Patch in around
300 bugs in the code I just wrote
800 bugs in the code I just wrote
2,000 bugs in the code I just wrote
Your PC ran into a problem and needs to restart
							</p>
							<div className={styles.littleInfo}>
								<p>April 2nd, 2021 -- 6:44 A.M.</p>
							</div>
						</details>
					</div>

					<div className={styles.collapsibleWrapper}>
						<details>
							<summary className={styles.collapsibleTitle}>
								Law Abiding Citizen
							</summary>
							<p className={styles.collapsibleText}>
If you are what you eat,
then I’ll be just fine.
My logic can’t be beat.
I’m a law abiding citizen.
							</p>
							<div className={styles.littleInfo}>
								<p>March 10th, 2021 -- 6:43 P.M.</p>
							</div>
						</details>
					</div>

					<div className={styles.collapsibleWrapper}>
						<details>
							<summary className={styles.collapsibleTitle}>O.D.</summary>
							<p className={styles.collapsibleText}>
Jack and Jill
went up the hill
To smoke some
crack cocaine.

Jack tried to boast
and upped the dose,
And Jill took all the blame.
							</p>
							<div className={styles.littleInfo}>
								<p>January 14th, 2021 12:51 A.M.</p>
							</div>
						</details>
					</div>

					<div className={styles.collapsibleWrapper}>
						<details>
							<summary className={styles.collapsibleTitle}>To, Sleep</summary>
							<p className={styles.collapsibleText}>
Why have you forsaken me?

I lay here tired
In worry mired
Trying to fall asleep

But my family&apos;s loud as fuck
And cringy memories are stuck
So I guess I&apos;ll count some sheep
							</p>
							<div className={styles.littleInfo}>
								<p>February 9th, 2021 -- 11:18 A.M.</p>
							</div>
						</details>
					</div>
				</div> */
