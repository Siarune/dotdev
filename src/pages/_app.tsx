import { AppProps, ErrorBoundary, ErrorComponent, ErrorFallbackProps } from "@blitzjs/next"
import { AuthenticationError, AuthorizationError } from "blitz"
import { inject } from "@vercel/analytics"
import React, { Suspense } from "react"
import { withBlitz } from "src/blitz-client"
import "src/styles/sys/global.sass"

inject()

function RootErrorFallback({ error }: ErrorFallbackProps) {
  if (error instanceof AuthenticationError) {
    return <div>Error: You are not authenticated</div>
  } else if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={error.statusCode}
        title="Sorry, you are not authorized to access this"
      />
    )
  } else {
    return (
      <ErrorComponent
        statusCode={(error as any)?.statusCode || 400}
        title={error.message || error.name}
      />
    )
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <ErrorBoundary FallbackComponent={RootErrorFallback}>
      {getLayout(
        <Suspense>
          <Component {...pageProps} />
        </Suspense>
      )}
    </ErrorBoundary>
  )
}

MyApp.suppressFirstRenderFlicker = true
export default withBlitz(MyApp)