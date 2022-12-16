import Error from "app/core/components/Error"
import App from "app/core/layouts/App"

export default function Page404() {
	const statusCode = 404
	const title = "Page not found"
	return (
		<App title={title} theme={"Moon"}>
			<Error statusCode={statusCode} errorMessage={title}/>
		</App>
	)
}
