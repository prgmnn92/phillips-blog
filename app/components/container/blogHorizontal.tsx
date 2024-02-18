import React from 'react'
import BlogCard from '#app/components/blogCard'
import { type Post } from '#types/posts'

interface PostProps {
    posts: Post[]
}

const BlogHorizontal: React.FC<PostProps> = ({ posts }) => {
    return (
        <div className="py-12 sm:py-16">
            <div className="container mx-auto px-6 lg:px-8">
                    <div className="sm:mt-16 sm:pt-16 flex gap-16 flex-col sm:flex-row">
                        {posts.slice(0, 3).map(post => (
                            <div className='sm:w-1/3' key={post.id} >
                                <BlogCard post={post} />
                            </div>
                        ))}
                    </div>
                    {/* <div className="mt-10 w-1/2 space-y-16 pt-10 sm:mt-16 sm:pt-16"></div> */}
                </div>
        </div>
    )
}

export default BlogHorizontal
