// @refresh reload
import { Suspense } from "solid-js"
import { Body, ErrorBoundary, FileRoutes, Head, Html, Meta, Routes, Scripts, Title } from "solid-start"
import "./root.css"
import "virtual:uno.css"
import { Router } from "@solidjs/router"

export default function Root() {
	return (
		// <Router>
			<Html lang="en" class={"flex flex-1 h-full"}>
				<Head>
					<Title>siarune.dev</Title>
					<Meta charset="utf-8" />
					<Meta name="viewport" content="width=device-width, initial-scale=1" />
				</Head>
				<Body class={"flex h-a p0 m0"}>
					<Suspense>
						<ErrorBoundary>
							<Routes>
								<FileRoutes />
							</Routes>
						</ErrorBoundary>
					</Suspense>
					<Scripts />
				</Body>
			</Html>
		// </Router>
	)
}