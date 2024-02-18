import { invariantResponse } from '@epic-web/invariant'
import {
	json,
	type LinksFunction,
	type LoaderFunctionArgs,
} from '@remix-run/node'
import { useLoaderData, type MetaFunction } from '@remix-run/react'
import Markdown from 'marked-react'
import { GeneralErrorBoundary } from '#app/components/error-boundary.tsx'
import { Spacer } from '#app/components/spacer.tsx'
import styles from '#app/styles/post.css'
import { prisma } from '#app/utils/db.server.ts'

export async function loader({ params }: LoaderFunctionArgs) {
	const post = await prisma.post.findFirst({
		where: {
			slug: params.post,
		},
	})

	invariantResponse(post, 'Post not found', { status: 404 })

	return json({ post, postJoinedDisplay: post.createdAt.toLocaleDateString() })
}

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export default function PostRoute() {
	const data = useLoaderData<typeof loader>()
	const post = data.post

	console.log(post)

	const md =
		'# Title\n\n## Title 2\n\nParagraph\n- list item\n\n```js\ntest()\n```\n\n[link](https://google.com)\n\n![image](https://google.com)\n\n> blockquote\n\n**bold**\n\n*italic*\n\n a lot of text comes here a lot of text comes here a lot of text comes here a lot of text comes here a lot of text comes here a lot of text comes here a lot of text comes here a lot of text comes here a lot of text comes here a lot of text comes here '

	return (
		<div className="container mb-48 mt-36">
			<Spacer size="4xs" />
			<div className="relative mx-[10vw]">
				<div className="markdown relative ">
					<Markdown>{md}</Markdown>
				</div>
			</div>
		</div>
	)
}

export const meta: MetaFunction<typeof loader> = ({ data, params }) => {
	const displayName = 'test'
	return [
		{ title: `${displayName} | Epic Notes` },
		{
			name: 'description',
			content: `Profile of ${displayName} on Epic Notes`,
		},
	]
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
