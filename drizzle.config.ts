import { defineConfig } from "drizzle-kit"

export default defineConfig({
	dialect: "postgresql",
	schema: "src/db/index.ts",
	out: "./drizzle",
	dbCredentials: { url: process.env.DB_URL as string },
})
