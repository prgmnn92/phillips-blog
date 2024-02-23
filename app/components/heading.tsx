import React from 'react'

interface HeadingProps {
	title: string
	text: string
}

const Heading: React.FC<HeadingProps> = ({ title, text }) => {
	return (
		<div className="mx-auto max-w-2xl text-center">
			<h1 className="animate-slide-top text-3xl font-bold tracking-tight text-primary sm:text-4xl">
				{title}
			</h1>
			<p className="mt-2 animate-slide-top text-lg leading-8 text-primary/80 [animation-fill-mode:backwards] [animation-delay:0.2s]">
				{text}
			</p>
		</div>
	)
}

export default Heading
