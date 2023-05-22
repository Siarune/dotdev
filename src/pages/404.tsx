// import Head from "next/head"
import { ErrorComponent } from "@blitzjs/next"
//
// // ------------------------------------------------------
// // This page is rendered if a route match is not found
// // ------------------------------------------------------
// export default function Page404() {
//   const statusCode = 404
//   const title = "This page could not be found"
//   return (
//     <>
//       <Head>
//         <title>
//           {statusCode}: {title}
//         </title>
//       </Head>
//       <ErrorComponent statusCode={statusCode} title={title} />
//     </>
//   )
// }

// import Error from "src/core/components/Error"
import App from "src/core/layouts/App"

export default function Page404() {
	const statusCode = 404
	const title = "Page not found"
	return (
		<App title={title} theme={"Moon"}>
			<ErrorComponent statusCode={statusCode} errorMessage={title}/>
		</App>
	)
}
