import "styles/global.sass"
import MetaBundle from "app/core/components/MetaBundle"
import { ClerkProvider } from "@clerk/nextjs"

import {
	AppProps,
	ErrorBoundary,
	ErrorComponent,
	AuthenticationError,
	AuthorizationError,
	ErrorFallbackProps,
	useQueryErrorResetBoundary,
} from "blitz"

export default function App({ Component, pageProps }: AppProps) {
	const getLayout = Component.getLayout || ((page) => page)

	return (
		<ErrorBoundary
			FallbackComponent={RootErrorFallback}
			onReset={useQueryErrorResetBoundary().reset}
		>
			{getLayout(
				<ClerkProvider>
					<Component {...pageProps} />
				</ClerkProvider>
			)}
		</ErrorBoundary>
	)
}

function RootErrorFallback({ error }: ErrorFallbackProps) {
	return (
		<ErrorComponent
			statusCode={(error as any)?.statusCode || 400}
			title={error.message || error.name}
		/>
	)
}
