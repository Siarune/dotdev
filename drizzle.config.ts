import type { Config } from "drizzle-kit"

export default {
	schema: "src/db/index.ts",
	tablesFilter: ["dotdev_*"],
	out: "./drizzle",
	driver: "pg",
	dbCredentials: {
		connectionString: process.env.POSTGRES_URL as string
	}
} satisfies Config
