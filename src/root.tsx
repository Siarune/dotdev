// @refresh reload
import { Suspense } from "solid-js"
import { Body, ErrorBoundary, FileRoutes, Head, Html, Meta, Routes, Scripts, Title } from "solid-start"
import "virtual:uno.css"

export default function Root() {
	return (
		<Html lang="en" class={"flex font-sans w-screen h-screen p0 m0"}>
			<Head>
				<Title>siarune.dev</Title>
				<Meta charset="utf-8" />
				<Meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Body class={"flex flex-1 h-screen p0 m0 bg-bgd"}>
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
	)
}
