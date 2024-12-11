import { drizzle } from "drizzle-orm/node-postgres"
import { pgTable, serial, text } from "drizzle-orm/pg-core"

const db = drizzle(process.env.DB_URL!)
export default db

export const table = pgTable("table", {
	id: serial().primaryKey(),
	content: text().notNull(),
})
