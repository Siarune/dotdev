import { sql } from "@vercel/postgres"
import {
	boolean,
	integer,
	pgTable,
	pgTableCreator,
	serial,
	text,
	timestamp,
} from "drizzle-orm/pg-core"
import { drizzle } from "drizzle-orm/vercel-postgres"

// const pgTable = pgTableCreator((name) => `dotdev_${name}`)

export const post = pgTable("Post", {
	id: serial("id").primaryKey(),
	createdAt: timestamp("createdAt", {
		precision: 3,
		mode: "string",
	}).defaultNow(),
	updatedAt: timestamp("updatedAt", {
		precision: 3,
		mode: "string",
	}).defaultNow(),
	type: text("type").default("post"),
	format: text("format").default("left"),
	name: text("name").notNull(),
	content: text("content").notNull(),
	isPublic: boolean("isPublic").default(true),
	likes: integer("likes").default(0),
})

export const comment = pgTable("Comment", {
	id: serial("id").primaryKey(),
	createdAt: timestamp("createdAt", {
		precision: 3,
		mode: "string",
	}).defaultNow(),
	updatedAt: timestamp("updatedAt", {
		precision: 3,
		mode: "string",
	}).defaultNow(),
	postId: integer("postId")
		.notNull()
		.references(() => post.id, {
			onDelete: "restrict",
			onUpdate: "cascade",
		}),
	content: text("content").notNull(),
	testing: boolean("testing").default(false),
	author: text("author").default("").notNull(),
})

// const db = drizzle(sql, { schema })
const db = drizzle(sql)
export default db
