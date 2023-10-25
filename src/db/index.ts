import { sql } from "@vercel/postgres"
import { drizzle } from "drizzle-orm/vercel-postgres"
import { boolean, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"
import { integer } from "drizzle-orm/pg-core/index"

const db = drizzle(sql)
export default db

// export const Post = pgTable("posts", {
// 	id: serial("id").primaryKey(),
// 	createdAt: timestamp("createdAt").defaultNow(),
// 	updatedAt: timestamp("updatedAt").defaultNow(),
// 	type: text("type"),
// 	meta: json("metadata"),
// 	name: text("name").notNull(),
// 	content: text("content").notNull(),
// 	isPublic: boolean("isPublic"),
// 	// comments:
// })
//
// export const Comment = pgTable("comments", {
// 	id: serial("id").primaryKey(),
// 	postId: numeric("postId").$type<Post>().notNull(),
// 	createdAt: timestamp("createdAt").defaultNow(),
// 	updatedAt: timestamp("updatedAt").defaultNow(),
// 	content: text("content").notNull()
// })

export const post = pgTable("Post", {
	id: serial("id").primaryKey().notNull(),
	createdAt: timestamp("createdAt", { precision: 3, mode: "string" }).defaultNow().notNull(),
	updatedAt: timestamp("updatedAt", { precision: 3, mode: "string" }).defaultNow().notNull(),
	type: text("type").notNull(),
	format: text("format").notNull(),
	name: text("name").notNull(),
	content: text("content").notNull(),
	isPublic: boolean("isPublic").default(true).notNull(),
	likes: integer("likes").default(0).notNull()
})

export const comment = pgTable("Comment", {
	id: serial("id").primaryKey().notNull(),
	createdAt: timestamp("createdAt", { precision: 3, mode: "string" }).defaultNow().notNull(),
	updatedAt: timestamp("updatedAt", { precision: 3, mode: "string" }).defaultNow().notNull(),
	postId: integer("postId").notNull().references(() => post.id, { onDelete: "restrict", onUpdate: "cascade" }),
	content: text("content").notNull(),
	testing: boolean("testing").default(false).notNull(),
	author: text("author").default("").notNull()
})
