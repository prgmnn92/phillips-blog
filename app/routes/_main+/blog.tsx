import { type LoaderFunctionArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import BlogCard from '#app/components/blogCard'
import Container from '#app/components/container'
import Heading from '#app/components/heading'
import { prisma } from '#app/utils/db.server'

export async function loader({ request }: LoaderFunctionArgs) {
	const posts = await prisma.post.findMany({
		orderBy: {
			createdAt: 'desc',
		},
	})

	return json({
		posts,
	})
}

function BlogList() {
	const data = useLoaderData<typeof loader>()
	const posts = data.posts.map(post => ({
		...post,
		createdAt: new Date(post.createdAt),
		updatedAt: new Date(post.updatedAt),
	}))

	return (
		<div className="mx-auto mt-16 grid max-w-2xl animate-slide-top grid-cols-1 gap-x-8 gap-y-20 [animation-delay:0.4s] [animation-fill-mode:backwards] lg:mx-0 lg:max-w-none lg:grid-cols-3">
			{posts.length === 0 && <div>Something is coming soon.</div>}
			{data && posts.length > 0
				? posts.map(post => <BlogCard key={post.id} post={post} />)
				: null}
		</div>
	)
}

export default function BlogRoute() {
	const data = useLoaderData<typeof loader>()
	console.log(data)
	return (
		<section className="py-12 sm:py-32">
			<Container>
				<Heading
					title="From the blog"
					text="Learn how to grow your business with our expert advice."
				/>
				<BlogList />
			</Container>
		</section>
	)
}
