import {
	type LoaderFunctionArgs,
	json,
	type MetaFunction,
} from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import BlogCard from '#app/components/blogCard'
import Container from '#app/components/container'
import Heading from '#app/components/heading'

import * as thirdPost from '../_mdx+/resources.my-toolbox.mdx'
import * as secondPost from '../_mdx+/resources.react-optimize-with-memo.mdx'
import * as firstPost from '../_mdx+/resources.remix-vs-nextjs.mdx'
import * as fourthPost from '../_mdx+/resources.webflow-pros-cons.mdx'

function postFromModule(mod: any) {
	return {
		slug: mod.filename.replace(/\.mdx?$/, '').replace(/resources\./, ''),
		...mod.attributes.meta[0],
		...mod.attributes.meta[1],
		...mod.attributes.handle,
	}
}

export async function loader({ request }: LoaderFunctionArgs) {
	return json([
		postFromModule(firstPost),
		postFromModule(secondPost),
		postFromModule(thirdPost),
		postFromModule(fourthPost),
	])
}
export const meta: MetaFunction = () => [
	{
		title: 'Phillip Pargmann | Resources',
	},
	{
		name: 'Phillip Pargmann',
		content:
			'Resources, Information, Posts, Thougths. Everything what comes to my mind.',
	},
]

function BlogList() {
	const data = useLoaderData<typeof loader>()
	const posts = data

	return (
		<div className="mx-auto mt-16 grid max-w-2xl animate-slide-top grid-cols-1 gap-x-8 gap-y-20 [animation-delay:0.4s] [animation-fill-mode:backwards] lg:mx-0 lg:max-w-none lg:grid-cols-3">
			{posts.length === 0 && <div>Something is coming soon.</div>}
			{data && posts.length > 0
				? posts
						.sort((a, b) => (a.date > b.date ? -1 : 1))
						.map(post => <BlogCard key={post.id} post={post} />)
				: null}
		</div>
	)
}

export default function BlogRoute() {
	return (
		<section className="py-12 sm:py-32">
			<Container>
				<Heading
					title="Resource, Posts and Other Stuff"
					text="I will use this space to share some good resources, posts and other stuff that I find interesting. I hope you find them useful too."
				/>
				<BlogList />
			</Container>
		</section>
	)
}
