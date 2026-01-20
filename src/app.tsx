import "virtual:uno.css"

import { Router } from "@solidjs/router"
import { FileRoutes } from "@solidjs/start/router"
import { Suspense } from "solid-js"

export default function App() {
	return (
		<Router
			root={(props) => (
				<div class={"flex flex-1 min-h-screen max-h-fit p0 m0 bg-bgd"}>
					<Suspense>{props.children}</Suspense>
				</div>
			)}
		>
			<FileRoutes />
		</Router>
	)
}
