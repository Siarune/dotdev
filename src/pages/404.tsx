import Error from "src/core/components/Error"
import App from "src/core/layouts/App"

export default function Page404() {
	const statusCode = 404
	const title = "Page not found"
	return (
		<App title={title} theme={"Moon"}>
			<Error statusCode={statusCode} errorMessage={title}/>
		</App>
	)
}
