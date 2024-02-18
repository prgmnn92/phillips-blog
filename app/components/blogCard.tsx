import { type Post } from '@prisma/client' 
import { Link } from '@remix-run/react'
import React from 'react'
// import { Badge } from './ui/badge'

interface PostProps {
	post: Post
}

const BlogCard: React.FC<PostProps> = ({ post }) => {
	return (
		<article
			key={post.id}
			className="flex flex-col items-start justify-between"
		>
			<div className="relative w-full">
				{/* <img
					src={post.imageUrl}
					alt=""
					className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
				/> */}
				<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/10" />
			</div>
			<div className="max-w-xl">
				{/* <div className="mt-8 flex items-center gap-x-4 text-xs">
					<time dateTime={post.datetime} className="text-primary/60">
						{post.date}
					</time>
					<Link to={post.category.href}>
						<Badge>{post.category.title}</Badge>
					</Link>
				</div> */}
				<div className="group relative">
					<h3 className="mt-3 text-lg font-semibold leading-6 text-primary group-hover:text-primary/80">
						<Link to={post.slug}>
							<span className="absolute inset-0" />
							{post.title}
						</Link>
					</h3>
					<p className="mt-5 line-clamp-3 text-sm leading-6 text-primary/80">
						{post.content}
					</p>
				</div>
			</div>
		</article>
	)
}

export default BlogCard
