import { type LinksFunction } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import { GeneralErrorBoundary } from '#app/components/error-boundary.tsx'
import { Spacer } from '#app/components/spacer.tsx'
import styles from '#app/styles/post.css'
import 'highlight.js/styles/tokyo-night-dark.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export default function PostRoute() {
	return (
		<div className="container mb-48 mt-36">
			<Spacer size="4xs" />
			<div className="relative mx-[10vw]">
				<div className="markdown relative mx-auto max-w-screen-md">
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export function ErrorBoundary() {
	return (
		<GeneralErrorBoundary
			statusHandlers={{
				404: ({ params }) => <p>exists</p>,
			}}
		/>
	)
}
