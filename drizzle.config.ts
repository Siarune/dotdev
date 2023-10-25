import type { Config } from "drizzle-kit"
// import * as dotenv from "dotenv";
// dotenv.config({ path: __dirname + "/.env.local" });

export default {
	schema: "./src/db/index.ts",
	out: "./drizzle",
	driver: "pg",
	dbCredentials: {
		// connectionString: process.env.DB_URL as string,
		connectionString: "postgres://default:Pn4oGCYxFsN9@ep-hidden-wood-833861-pooler.us-east-1.postgres.vercel-storage.com/verceldb?sslmode=require",
		ssl: true
	}
} satisfies Config
