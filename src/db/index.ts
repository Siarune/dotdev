import { drizzle } from "drizzle-orm/node-postgres"
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

const db = drizzle(process.env.DB_URL!)
export default db

export const posts = pgTable("posts", {
	id: serial().primaryKey(),
	createdAt: timestamp({ mode: "date", withTimezone: true }).defaultNow(),
	updatedAt: timestamp({ mode: "date", withTimezone: true }).defaultNow(),
	name: text().notNull(),
	content: text().notNull(),
})
