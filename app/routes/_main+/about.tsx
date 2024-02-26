import { type MetaFunction } from '@remix-run/node'
import Container from '#app/components/container'
import Heading from '#app/components/heading'

export const meta: MetaFunction = () => [
	{ title: 'Phillip Pargmann | About Me' },
	{
		name: 'About Phillip Pargmann',
		content: 'This page contains information about Phillip Pargmann.',
	},
]

const AboutRoute = () => {
	return (
		<section className="py-12 sm:py-32">
			<Container>
				<Heading
					title="About me"
					text="Some details about me and my life."
				/>
			</Container>
			<div className="relative isolate mt-16 animate-slide-top overflow-hidden px-6 pb-12 [animation-fill-mode:backwards] [animation-delay:0.4s] sm:pb-32 lg:overflow-visible lg:px-0">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
					<div className="-ml-12 -mt-6 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
						<img
							className="w-[48rem] max-w-none rounded-xl bg-primary shadow-xl ring-1 ring-primary/10 sm:w-[36rem]"
							src="img/me.webp"
							alt=""
						/>
					</div>
					<div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
						<div className="lg:pr-4">
							<div className="max-w-xl text-base leading-7 text-primary/80 lg:max-w-lg">
								<p>
									Greetings! I'm a tech-loving individual from Northern Germany
									who has always enjoyed building and creating things. Whether
									it's programming, electronics, or tinkering with gadgets, I'm
									always up for a challenge and love learning new things.
								</p>
								<p className="mt-8">
									I'm an adventurer at heart and enjoy exploring new places,
									hiking in the great outdoors, and participating in sports and
									other physical activities. In fact, staying active and healthy
									is an important part of my life, and I always make time for
									exercise and staying fit.
								</p>
								<p className="mt-6">
									After earning my bachelor's degree in electrical engineering
									in 2019, I discovered my passion for programming and web
									development. Currently, I am engaged as a freelance web
									developer, collaborating with multiple agencies where I
									primarily contribute to Webflow and React development
									projects. I'm also a huge fan of Tailwind CSS, Remix and
									Next.js.
								</p>
								<p className="mt-6">
									I'm a natural problem solver and have a positive, can-do
									attitude. If there's a challenge to be tackled, I'm eager to
									jump in and find a solution. My advice to my younger self
									would be to always stay curious and never be afraid to take
									risks. Life is full of opportunities and adventures, and it's
									up to us to make the most of them!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutRoute
