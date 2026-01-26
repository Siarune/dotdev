import "virtual:uno.css"

import { Router } from "@solidjs/router"
import { FileRoutes } from "@solidjs/start/router"
import { Suspense } from "solid-js"
import { SolidBaseRoot } from "@kobalte/solidbase/client"

export default function App() {
	return (
		<Router
			root={(props) => (
				<SolidBaseRoot>
					<div class={"flex flex-1 min-h-screen max-h-fit p0 m0 bg-bgd"}>
						<Suspense>{props.children}</Suspense>
					</div>
				</SolidBaseRoot>
			)}
		>
			<FileRoutes />
		</Router>
	)
}
