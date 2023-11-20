import { JSXElement } from "solid-js";
import { A } from "solid-start";

export default function StudioLayout(props: { children: JSXElement }) {
	return (
		<main class="main">
			<div class="w80vw h75vh rounded-3 bg-stone flex flex-col">

				<div class="inline-flex h4rem text-lg">
					<A href="../new" class="flex flex-1 text-center justify-center items-center">New</A>
					<A href="../edit" class="flex flex-1 text-center justify-center items-center">Edit</A>
				</div>

				{props.children}

			</div>
		</main>
	)
}
