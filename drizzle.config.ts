// import type {Config} from "drizzle-kit"
import {defineConfig} from 'drizzle-kit'

export default  defineConfig({
	// tablesFilter: ["dotdev_*"],
	dialect: "postgresql",
	schema: "src/db/index.ts",
	out: "./drizzle",
	// driver: "pg",
	dbCredentials: {
		url: process.env.DB_URL_SECURE as string
	}
})

