import StudioLayout from "~/components/StudioLayout";
import {createRouteAction} from 'solid-start'
import db, {post} from "~/db";

export default function StudioNew() {

	const [create, {Form}] =
		createRouteAction(async (form: FormData) => {
			const name = form.get("name") as string
			const isPublic = form.get("isPublic") as unknown as boolean
			const content = form.get("content") as string

			db.insert(post).values({
				name: name,
				content: content,
				isPublic: isPublic
			})
		})

	return (
		<StudioLayout>
			<Form class="flex flex-col p4">
				<div class="flex flex-row justify-center">
					<input id="name" type="text" placeholder="Name"/>
					<input id="isPublic" type="checkbox" checked={true}/>
				</div>


				<textarea id="content" placeholder="Stuff..."/>

				<button type="submit" disabled={create.pending} class="w25px">
					+
				</button>
			</Form>
		</StudioLayout>
	)
}
